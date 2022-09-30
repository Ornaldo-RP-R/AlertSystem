import throwAlert from "./helpers/useAlert";
import "./theme/alert.scss"
import "./theme/app.scss";

function App() {
  return (
    <div className="App">
      {data.map(({ type, message, text }) => (
        <button className="fire-button" key={message + text + type} onClick={() => throwAlert({ type, message })}>
          {text}
        </button>
      ))}
    </div>
  );
}

const data = [
  { type: "success", message: "Your application is sent.", text: "Add success Alert" },
  { type: "danger", message: "Your danger text", text: "Add danger alert" },
  { type: "warning", message: "Your warning text", text: "Add warning alert" },
  {
    type: "info",
    message: "Long long aksjdkajdsksalfjalksjdkajfkaljsdklajskfljaklfjaksljdkaljfkaskjldjasklfja",
    text: "Add success alert",
  },
];

export default App;
