import "./App.css";

import { InfoTag } from "./components/infotag.jsx";
import { Inputtext, Button } from "./components/inputs.jsx";

function App() {
  return (
    <>
      <h1>Contact book</h1>
      <p>Keep track of where your friends live.</p>
      <div>
        <Inputtext placeholder="Name:" />
        <Inputtext placeholder="Address:" />
        <Button style={{ marginTop: "10px" }} content="Add contact" />
        <div
          style={{
            marginTop: "10%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <InfoTag name="Nguyễn Văn A" address="123 Lý Thường Kiệt" />
          <InfoTag name="Nguyễn Văn A" address="123 Lý Thường Kiệt" />
          <InfoTag name="Nguyễn Văn A" address="123 Lý Thường Kiệt" />
          <InfoTag name="Nguyễn Văn A" address="123 Lý Thường Kiệt" />
          <InfoTag name="Nguyễn Văn A" address="123 Lý Thường Kiệt" />
        </div>
      </div>
    </>
  );
}

export default App;
