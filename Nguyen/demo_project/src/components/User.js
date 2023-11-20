import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/fetchData";
function User(props) {
  const [array, setArray] = useState([]);
  var fetchUsers = async () => {
    const Users = await userService.getUser();
    console.log("This is result:", Users);
    setArray(Users);
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  useEffect(() => {
    if (!data) {
      dispatch(fetchData());
    }
  });
  var { chooseColor } = props;
  var handleClickBtn = () => {
    dispatch(fetchData());
  };
  var changeColorChild = () => {
    var r = document.getElementById("rInp");
    var g = document.getElementById("gInp");
    var b = document.getElementById("bInp");
    // console.log(r.value);
    chooseColor("rgb(" + r.value + "," + g.value + "," + b.value + ")");
  };
  useEffect(() => {
    console.log(array);
  }, [array]);
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Link to="/customer">
        <button>Đến trang Customer</button>
      </Link>
      <h2>
        Xin chao:{" "}
        <span style={{ fontWeight: "normal" }}>{props.person.name}</span>
      </h2>
      <h2>
        So tuoi:{" "}
        <span style={{ fontWeight: "normal" }}>{props.person.age}</span>
      </h2>
      <h2>
        SDT: <span style={{ fontWeight: "normal" }}>{props.person.phone}</span>
      </h2>

      <div>
        <input id="rInp" type="number" placeholder="Red"></input>
        <input id="gInp" type="number" placeholder="Green"></input>
        <input id="bInp" type="number" placeholder="Blue"></input>
        <button onClick={changeColorChild}>Change Color</button>
      </div>
      <h2>Đây là nơi in ra mảng</h2>
      <div>
        day la noi in ra users
        <button onClick={handleClickBtn}>click</button>
        <ul
          style={{
            padding: "30px",
            border: "solid 1px rgba(0,0,0,0.1)",
            boxShadow: "3px 3px 3px rgba(0,0,0,0.4)",
            width: "70%",
          }}
        >
          {data.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
      <button onClick={fetchUsers}>Call api</button>
      <ul
        style={{
          padding: "30px",
          border: "solid 1px rgba(0,0,0,0.1)",
          boxShadow: "3px 3px 3px rgba(0,0,0,0.4)",
          width: "70%",
        }}
      >
        {array.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default User;
