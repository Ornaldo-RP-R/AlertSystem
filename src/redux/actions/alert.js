const uniqueAlertId = () => "alert" + Math.random().toString(16).slice(2);

export const addAlert = ({alerts},payload = []) => {
	const alertIds = (alerts || []).map(({id}) => id)
	const newAlerts = Array.isArray(payload) ? payload : [payload];

    newAlerts.forEach(({id}, i) => {
		var alertId = uniqueAlertId();
    	while (alertIds.includes(alertId)) alertId = uniqueAlertId();
    	if (!id) newAlerts[i].id = alertId;
    });

  return { alerts: [...alerts, ...newAlerts] };
}

export const removeAlert = ({ alerts }, alertId) => {
  const clonnedAlerts = [...alerts];
  let index = alerts.findIndex(({ id }) => id === alertId);
  if (index !== -1) clonnedAlerts.splice(index, 1);
  return { alerts: clonnedAlerts };
};
