function Welcome(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  return <h1>Hello: {props.name}</h1>;
}
export default Welcome;
