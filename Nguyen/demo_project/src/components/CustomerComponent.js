import { Link } from "react-router-dom";
function CustomerComponent() {
  return (
    <div>
      <p>This is customer component</p>
      <Link to="/">
        <button>Đến trang User</button>
      </Link>
    </div>
  );
}

export default CustomerComponent;
