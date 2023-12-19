import Animation from "../../components/clientComponents/animation";
import RegisterForm from "@/app/components/clientComponents/registerForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex justify-center items-center bg-slate-400 w-full ">
        <Animation />
      </div>
      <div className="flex justify-center items-center w-full mt-6 md:mt-0">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
