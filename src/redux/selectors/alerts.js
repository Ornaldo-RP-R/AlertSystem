import { createSelector } from "reselect";

export const getAlerts = (state) => state.alerts || [];

export const getAlertIds = createSelector([getAlerts], (alerts) => alerts.map(({ id }) => id));
export const getAlertIndex = createSelector(
  (state, props) => getAlertIds(state).indexOf(props?.id),
  id => id
);
export const getAlert = createSelector([getAlerts, getAlertIndex], (alerts, index) => alerts[index]);
