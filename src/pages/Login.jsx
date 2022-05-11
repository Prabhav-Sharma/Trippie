import { Link } from "react-router-dom";
import { TextInput } from "../components";
import { useDocumentTitle, useAuthForm, useToggle } from "../hooks";
import { login } from "../services";
import { useDispatch } from "react-redux";
import { USERNAME_ACTION, PASSWORD_ACTION } from "../Utils/constants";
import { RiLoaderFill } from "../Utils/icons";

function Login() {
  useDocumentTitle("Login");
  const {
    authFormState: { username, password },
    authFormDispatch,
  } = useAuthForm();

  const dispatch = useDispatch();

  const { toggle: loginLoading, setToggle: setLoginLoading } = useToggle(false);
  const { toggle: testLoading, setToggle: setTestLoading } = useToggle(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (password.length === 0 || username.length === 0) {
      alert("Fields can't be empty");
      return;
    }

    setLoginLoading(true);
    const status = await login({ username, password }, dispatch);
    setLoginLoading(false);
    // status === "SUCCESS" && navigate("/home");
    //Commented for future, when home page is added
  };

  const loginWithTestCredentials = async (e) => {
    e.preventDefault();
    setTestLoading(true);
    const status = await login(
      { username: "guest", password: "guest@123" },
      dispatch
    );
    setTestLoading(false);
    // status === "SUCCESS" && navigate("/home");
    //Commented for future, when home page is added
  };

  return (
    <main className="flex flex-col-reverse gap-1 bg-gray-800 sm:flex-row max-w-full md:pt-6 sm:gap-6 md:gap-8 h-full">
      <section className="basis-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-robotoFlex text-blue-500 self-center p-1.5 rounded bg-white -translate-x-5 translate-y-5">
          Pitch. Plan. Party!
        </h1>
        <div>
          <img
            className="p-16 opacity-90 w-11/12"
            src="https://res.cloudinary.com/carsmart/image/upload/v1652185993/Trippie/login_img_spiofz.svg"
            alt="Girl cooking marshmellow outside her tent"
          />
        </div>
      </section>
      <section className="basis-1/2 w-full flex justify-center self-center ">
        <form className="flex flex-col gap-3 text-sm bg-gray-100 basis-80 md:basis-96 p-1 rounded-md border-2 border-solid border-blue-500 ">
          <h1 className="self-center font-robotoFlex text-xl md:text-2xl mt-2 text-blue-500 font-medium gap-2">
            Login
          </h1>
          <TextInput
            value={username}
            legend="Username:"
            placeholder={"JohnDoee"}
            onChange={(e) =>
              authFormDispatch({
                type: USERNAME_ACTION,
                payload: { username: e.target.value },
              })
            }
          />
          <TextInput
            value={password}
            legend="Password:"
            type="password"
            placeholder="••••••••••••••"
            onChange={(e) =>
              authFormDispatch({
                type: PASSWORD_ACTION,
                payload: { password: e.target.value },
              })
            }
          />
          <button
            className="p-1.5 flex font-robotoFlex justify-center self-center font-normal w-11/12 md:text-lg mt-1 rounded-md mx-1 bg-blue-500 text-white hover:bg-blue-600"
            onClick={(e) => loginHandler(e)}
          >
            {loginLoading ? (
              <RiLoaderFill className="w-max animate-spin text-xl" />
            ) : (
              "Login"
            )}
          </button>
          <button
            className="p-1.5 flex font-robotoFlex font-normal self-center justify-center w-11/12 md:text-lg rounded-md mx-1 bg-white text-blue-500 border border-solid border-blue-500 hover:bg-gray-100"
            onClick={(e) => loginWithTestCredentials(e)}
          >
            {testLoading ? (
              <RiLoaderFill className="w-max animate-spin text-xl" />
            ) : (
              "Login with test credentials"
            )}
          </button>
          <Link
            to="/"
            className="font-robotoFlex md:text-lg font-normal text-slate-700 self-center"
          >
            Create New Account ❯
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Login;
