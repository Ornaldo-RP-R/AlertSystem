import { bindActions } from "redux-zero/utils";
import store from "../redux/store";
import { addAlert } from "../redux/actions/alert";

const actions = () => ({ addAlert: (s, alert) => addAlert(s, alert) });
const boundActions = bindActions(actions, store);

const throwAlert = (payload) => { boundActions.addAlert(payload) };
export default throwAlert;
