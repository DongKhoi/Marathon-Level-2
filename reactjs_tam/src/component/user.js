function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.phone}</p>
    </div>
  );
}
export default User;
