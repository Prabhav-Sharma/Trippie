import { Link } from "react-router-dom";
import { TextInput } from "../components";
import { useDocumentTitle, useAuthForm, useToggle } from "../hooks";
import { signup } from "../services";
import { useDispatch } from "react-redux";
import {
  EMAIL_REGEX,
  EMAIL_ACTION,
  USERNAME_ACTION,
  PASSWORD_ACTION,
  CONFIRM_PASSWORD_ACTION,
  FULL_NAME_ACTION,
} from "../Utils/constants";
import { RiLoaderFill } from "../Utils/icons";

function Signup() {
  useDocumentTitle("Signup");
  const {
    authFormState: { fullName, username, email, password, confirmPassword },
    authFormDispatch,
  } = useAuthForm();

  const dispatch = useDispatch();

  const { toggle: isLoading, setToggle: setIsLoading } = useToggle(false);

  const signupHandler = async (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      alert("Invalid email address");
      return;
    }

    if (
      password.trim().length === 0 ||
      fullName.trim().length === 0 ||
      username.trim().length === 0
    ) {
      alert("Fields can't be empty");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    setIsLoading(true);
    const status = await signup(
      { fullName, username, email, password },
      dispatch
    );
    setIsLoading(false);
    // status === "SUCCESS" && navigate("/home");
    //Commented for future, when home page is added
  };
  return (
    <main className="flex flex-col-reverse gap-1 bg-gray-800 sm:flex-row max-w-full md:pt-6 sm:gap-6 md:gap-8 h-full">
      <section className="basis-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-robotoFlex text-blue-500 self-center p-1 rounded bg-white -translate-x-5 translate-y-5">
          Meet your trippies!
        </h1>
        <div>
          <img
            className="p-16 opacity-90 w-11/12"
            src="https://res.cloudinary.com/carsmart/image/upload/v1652185978/Trippie/signup_img_urvma1.svg"
            alt="A couple about to go on a trip, the girl is sitting on the top of the car, while the guy stands and talks to her with their bags loaded."
          />
        </div>
      </section>
      <section className="basis-1/2 w-full flex justify-center self-center ">
        <form className="flex flex-col gap-2 p-1.5 text-sm bg-gray-100 basis-80 md:basis-96 m-2 rounded-md border-2 border-solid border-blue-500 ">
          <h1 className="self-center font-robotoFlex text-xl mt-2 md:text-2xl text-blue-500 font-medium gap-2">
            Sign Up
          </h1>
          <TextInput
            value={fullName}
            legend="Full Name:"
            placeholder={"John Doe"}
            onChange={(e) =>
              authFormDispatch({
                type: FULL_NAME_ACTION,
                payload: { fullName: e.target.value },
              })
            }
          />
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
            value={email}
            legend="Email:"
            placeholder={"John.Doe@gmail.com"}
            onChange={(e) =>
              authFormDispatch({
                type: EMAIL_ACTION,
                payload: { email: e.target.value },
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
          <TextInput
            value={confirmPassword}
            legend="Confirm Password:"
            type="password"
            placeholder="••••••••••••••"
            onChange={(e) =>
              authFormDispatch({
                type: CONFIRM_PASSWORD_ACTION,
                payload: { confirmPassword: e.target.value },
              })
            }
          />
          <button
            className="p-1.5 flex font-robotoFlex font-normal md:text-lg self-center justify-center w-11/12 rounded-md mx-1 bg-blue-500 text-white hover:bg-blue-600"
            onClick={(e) => signupHandler(e)}
          >
            {isLoading ? (
              <RiLoaderFill className="w-max animate-spin text-xl" />
            ) : (
              "Sign Up"
            )}
          </button>
          <Link
            to="/login"
            className="font-robotoFlex md:text-lg font-normal text-slate-700 self-center"
          >
            Already have an account ❯
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Signup;
