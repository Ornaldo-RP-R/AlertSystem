import React, { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { connect } from "redux-zero/react";
import { removeAlert } from "../redux/actions/alert";

const Alert = (props) => {
  const { message, type, removeAlert, id, icon, closeIcon, duration } = props;
  let timerCleaner = useRef();
  const key = id + message;
  const [className, setClassName] = useState({ [key]: "" });

  const startTransition = useCallback(() => setClassName({ [key]: "start-hide" }), [key]);

  const close = useCallback(() => {
    startTransition();
    timerCleaner.current = setTimeout(removeAlert, 300);
  }, [startTransition, removeAlert]);

  useEffect(() => {
    return () => {
      if (timerCleaner?.current) clearTimeout(timerCleaner?.current);
    };
  }, []);

  const borderStyle = useMemo(() => ({ animationDuration: `${duration / 1000}s` }), [duration]);

  return (
    <div className={`alert-fade ${className[key] || ""}`}>
      <div className="alert-wrapper">
        <div className={`alert ${type || "success"}`}>
          <div className="alert__border" style={borderStyle} onAnimationEnd={close} />
          <div className="alert__content">
            <div className="content__icon">{icon || <i className="alert__icon" />}</div>

            <button className="content__close" onClick={close}>
              {closeIcon || <i className="close__icon" />}
            </button>

            <p className="content__text">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  duration: 5000,
};

const mapDispatchToProps = (d, props) => ({ removeAlert: (store) => removeAlert(store, props?.id) });

export default connect(null, mapDispatchToProps)(Alert);
