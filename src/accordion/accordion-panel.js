import PropTypes from 'prop-types';
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';

const AccordionPanel = forwardRef((props, ref) => {
  const [opened, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    close: () => {
      setOpen(false);
    },
    id: props.id,
    open: () => {
      setOpen(true);
    },
  }));

  return (
    <div>
      {opened ? props.children : undefined}
    </div>
  );
});

AccordionPanel.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

AccordionPanel.defaultProps = {
  children: undefined,
};

export default AccordionPanel;
