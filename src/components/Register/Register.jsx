import Header from "../Header/Header";
import Form from "../Form/Form";
import Input from "../Input/Input";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <Header className={"register__header"}>
        <p className="register__text">Добро пожаловать!</p>
      </Header>
      <Form
        name={"register"}
        id={"register"}
        buttonText={"Зарегистрироваться"}
        label={"Уже зарегистрированы?"}
        link={"/signin"}
        linkText="Войти"
      >
        <Input
          label="Имя"
          type="text"
          isRequired={true}
        ></Input>
        <Input
          label="E-mail"
          type="email"
          isRequired={true}
        ></Input>
        <Input
          label="Пароль"
          type="password"
          isRequired={true}
        ></Input>
      </Form>
    </div>
  );
}

export default Register;