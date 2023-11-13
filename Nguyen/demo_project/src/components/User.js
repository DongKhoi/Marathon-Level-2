function User(props) {
  return (
    <div>
      <h2>Xin chao: <span>{props.person.name}</span></h2>
      <h2>So tuoi: <span>{props.person.age}</span></h2>
      <h2>SDT: <span>{props.person.phone}</span></h2>
    </div>
  );
}

export default User;
