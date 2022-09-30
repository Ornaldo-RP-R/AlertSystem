import React from "react";
import Alert from "../components/Alert";
import { connect } from "redux-zero/react";
import { getAlertIds } from "../redux/selectors/alerts";
import { createStructuredSelector } from "reselect";

const Alerts = (props) => {
  const { alertIds } = props;
  return (
    <div className="alerts-container">
      <div className="alerts">
        {alertIds.map((id) => (
          <Alert key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ alertIds: getAlertIds });
export default connect(mapStateToProps, null)(Alerts);
