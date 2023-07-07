import "./index.css";


// eslint-disable-next-line react/prop-types
export default function AlertComponent({ text } ) {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
}
