export function Inputtext(props) {
  return <input type="text" placeholder={props.placeholder} />;
}

export function Button(props) {
  return <button style={props.style}>{props.content}</button>;
}
