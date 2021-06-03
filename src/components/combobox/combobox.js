import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Listbox from '../listbox/listbox.js';
import styles from './combobox.css';
import {
  useMountedEffect,
  useRef,
} from '../../hooks';

const Combobox = forwardRef(function ComboBox(props, forwardedRef) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(props.value);
  const classNames = {
    container: styles.container,
    input: styles.input,
    label: styles.label,
    listbox: styles.listbox,
  };
  const ids = {
    input: `${props.id}-input`,
    label: `${props.id}-label`,
    listbox: `${props.id}-listbox`,
  };
  const refs = {
    container: useRef(),
    input: useRef(),
    listbox: useRef(),
  };
  const ref = useRef(forwardedRef);

  function onBlur(event) {
    if (refs.container.current.contains(event.relatedTarget)) return;
    if (value !== refs.input.current.value) {
      // This is a consequence of using defaultValue. Perhaps it's not a good idea?
      refs.input.current.value = Combobox.defaultProps.value;
      props.onInput(event);
    }
    setExpanded(false);
  }

  function onFocus(event) {
    if (refs.container.current.contains(event.relatedTarget)) return;
    setExpanded(true);
  }

  function onInput(event) {
    props.onInput(event);
  }

  function onKeyDown(event) {
    if (event.defaultPrevented) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setExpanded(false);
        refs.input.current.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        refs.listbox.current.focus({ option: 'next' });
        break;
      case 'ArrowUp':
        event.preventDefault();
        refs.listbox.current.focus({ option: 'previous' });
        break;
      default:
    }
  }

  function onListboxChange(event) {
    setValue(event.target.value);
    setExpanded(false);
    refs.input.current.focus();
  }

  useMountedEffect(() => {
    props.onChange({ target: ref.current });
  }, [value]);

  useLayoutEffect(() => {
    refs.input.current.value = value || '';
  }, [value]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    focus: () => refs.input.current.focus(),
    value,
  }));

  return (
    <div
      aria-controls={ids.listbox}
      aria-labelledby={ids.label}
      aria-expanded={expanded}
      aria-haspopup="listbox"
      aria-owns={[ids.input, ids.listbox].join(' ')}
      className={classNames.container}
      onBlur={onBlur}
      onFocus={onFocus}
      onInput={onInput}
      onKeyDown={onKeyDown}
      ref={refs.container}
      role="combobox"
      tabIndex={-1}
    >
      <label
        className={classNames.label}
        htmlFor={ids.input}
        id={ids.label}
      >
        {props.label}
      </label>
      <input
        className={classNames.input}
        defaultValue={value}
        id={ids.input}
        ref={refs.input}
        tabIndex="0"
        type="text"
      />
      {expanded && (
        <Listbox
          active
          className={classNames.listbox}
          labelledBy={ids.label}
          id={ids.listbox}
          onChange={onListboxChange}
          ref={refs.listbox}
          refs={props.refs}
        >
          {props.children}
        </Listbox>
      )}
    </div>
  );
});

Combobox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  refs: PropTypes.arrayOf(PropTypes.shape({
    current: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  })).isRequired,
  value: PropTypes.string,
};

Combobox.defaultProps = {
  children: undefined,
  onChange: () => {},
  onInput: () => {},
  value: '',
};

export default Combobox;
