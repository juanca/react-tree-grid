import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import useActiveIndex from '../hooks/use-active-index.js';
import useRef from '../hooks/use-ref.js';

function getInitialValue(value, multiple) {
  if (value) {
    return multiple ? value : [value];
  }

  return [];
}

const Listbox = forwardRef(function Listbox(props, forwardedRef) {
  const ref = useRef(forwardedRef);
  const [active, setActive] = useState(false);
  const {
    activeIndex,
    setActiveIndex,
    setFirstActiveIndex,
    setLastActiveIndex,
    setNextActiveIndex,
    setPreviousActiveIndex,
  } = useActiveIndex(0, props.refs.length - 1);
  const [value, setValue] = useState(getInitialValue(
    props.value,
    props.multiple,
  ));

  function onBlur() {
    setActive(false);
  }

  function onFocus(event) {
    const nextActiveIndex = props.refs.findIndex(childRef => (
      childRef.current.contains(event.target)
    ));
    if (nextActiveIndex !== -1) setActiveIndex(nextActiveIndex);
    setActive(true);
  }

  function onKeyDown(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setNextActiveIndex();
        break;
      case 'ArrowUp':
        event.preventDefault();
        setPreviousActiveIndex();
        break;
      case 'End':
        event.preventDefault();
        setLastActiveIndex();
        break;
      case 'Home':
        event.preventDefault();
        setFirstActiveIndex();
        break;
      default:
    }
  }

  function onSelectChange(event) {
    if (event.target.selected) {
      if (props.multiple) {
        setValue([...value, event.target.value]);
      } else {
        const previouslySelected = props.refs.find(childRef => (
          childRef.current.selected && childRef.current !== event.target
        ));
        if (previouslySelected) {
          previouslySelected.current.setAttribute('selected', false);
        }
        setValue([event.target.value]);
      }
    } else {
      setValue(value.filter(val => val !== event.target.value));
    }
  }

  useEffect(() => {
    props.refs.forEach((childRef, index) => {
      childRef.current.setAttribute('tabindex', index === activeIndex ? 0 : -1);
    });

    if (active) props.refs[activeIndex].current.focus();
  }, [active, activeIndex, props.refs]);

  useEffect(() => {
    if (active) {
      props.onValueChange({ target: ref.current });
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    focus: () => props.refs[activeIndex].current.focus(),
    setValue: state => setValue(getInitialValue(state, props.multiple)),
    value: props.multiple ? value : value[0],
  }));

  return (
    <ul
      aria-labelledby={props.labelledBy}
      aria-multiselectable={props.multiple}
      className={props.className}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      role="listbox"
    >
      {props.children({ onSelectChange })}
    </ul>
  );
});

Listbox.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  labelledBy: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onValueChange: PropTypes.func,
  refs: PropTypes.arrayOf(PropTypes.shape({
    current: PropTypes.any,
  })),
  value: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(PropTypes.any),
  ]),
};

Listbox.defaultProps = {
  className: undefined,
  multiple: false,
  onValueChange: () => {},
  refs: [],
};

export default Listbox;
