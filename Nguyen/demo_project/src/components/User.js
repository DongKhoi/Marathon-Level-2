import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../services/UserService";
function User(props) {
  const [array, setArray] = useState([]);
  var fetchUsers = async () => {
    const Users = await userService.getUser();
    console.log("This is result:", Users);
    setArray(Users);
  };
  useEffect(() => {
    console.log(array);
  }, [array]);
  return (
    <div>
      <h2>
        Xin chao: <span>{props.person.name}</span>
      </h2>
      <h2>
        So tuoi: <span>{props.person.age}</span>
      </h2>
      <h2>
        SDT: <span>{props.person.phone}</span>
      </h2>
      <Link to="/customer">
        <button>Đến trang Customer</button>
      </Link>
      <h2>Đây là nơi in ra mảng</h2>
      <button onClick={fetchUsers}>Call api</button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default User;
