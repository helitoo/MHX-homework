import { Button } from "./inputs.jsx";

function NameLable(props) {
  return <h2 style={{ marginBottom: "0", marginTop: "2px" }}>{props.name}</h2>;
}

function AddressLable(props) {
  return <p style={{ marginTop: "0" }}>{props.address}.</p>;
}

const InfoTagStyle = {
  width: "350px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#edededff",
  borderRadius: "10px",
  margin: "5px",
  marginTop: "20px",
  padding: "10px",
};

export function InfoTag(props) {
  return (
    <div style={InfoTagStyle}>
      <NameLable name={props.name} />
      <AddressLable address={props.address} />
      <Button content="Edit" />
    </div>
  );
}
