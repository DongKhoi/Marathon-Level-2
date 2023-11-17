function Header(props) {
  console.log(props.color);
  return (
    <div
      id="header"
      style={{
        backgroundColor: props.color,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        height: "10vh",
        lineHeight: "10vh",
      }}
    >
      Header works
    </div>
  );
}

export default Header;
