import LoginForm from "../../components/clientComponents/loginForm";
import Animation from "../../components/clientComponents/animation";

const LoginPage = () => {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center bg-slate-400 ">
        <Animation />
      </div>
      <div className="flex justify-center items-center w-full ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
