import { useState } from "react";
import { Link } from "react-router-dom";
function User(props) {
  const [array, setArray] = useState([]);
  var buttonClick = () => {
    setArray((previousArray) => {
      return previousArray.concat(Math.random() * 10);
    });
  };
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
      <button onClick={buttonClick}>Thêm phần tử vào mảng</button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default User;
