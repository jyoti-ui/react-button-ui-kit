import "./App.css";
import CustomButton from "./components";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";

function App() {
  return (
    <div className="App">
      <CustomButton
        startIcon={<AddIcon />}
        size="large"
        style={{ margin: "10px" }}
        onClick={() => alert("This is Jyoti")}
      >
        Hi I am Jyoti
      </CustomButton>

      <CustomButton
        startIcon={<SendIcon />}
        onClick={() => alert("Hey, your message has been sent.")}
      >
        Send
      </CustomButton>
    </div>
  );
}

export default App;
