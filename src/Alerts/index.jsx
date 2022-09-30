import React from "react";
import Alert from "../components/Alert";
import { connect } from "redux-zero/react";

const Alerts = (props) => {
  const { alerts } = props;
  return (
    <div className="alerts-container">
      <div className="alerts-parent">
        <div className="alerts">
          {alerts.map((alert) => (
            <Alert {...alert} key={alert?.id + alert?.message} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapToProps = ({ alerts }) => ({ alerts });
export default connect(mapToProps, null)(Alerts);
