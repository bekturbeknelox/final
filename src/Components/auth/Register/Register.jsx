import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Reset password-pana.svg";
import "../Register/Register.scss";
import { useAuth } from "../../../Context/AuthContexProvider";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();

  function createUser() {
    if (!email || !password || !name || !username || !email || !age) {
      alert("You have empty inputs!");
      return;
    }

    let formData = new FormData();
    formData = {
      name: name,
      username: username,
      password: password,
      email: email,
      age: age,
    };
    register(formData);
  }
  return (
    <div className="regMain_block">
      {error ? <h3>{error}</h3> : ""}
      <div>
        <img src={loginimg} alt="" className="imgreg" />
      </div>
      <div className="regPanel">
        <h2>Регистрация</h2>
        <input
          type="text"
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Имя Пользователя"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Электронный адрес"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Повторите пароль"
        />

        <div className="checkBox_reg">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => setShowPass(!showPass)}
          />
          <label htmlFor="scales">Показать пароль</label>
        </div>
        <p
          className="regPanel_btn"
          onClick={() => {
            createUser();
          }}
        >
          Регистрация
        </p>
        <p className="regPanel_register">
          Уже есть аккаунт?{" "}
          <span onClick={() => navigate("/login")}>Войти</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
