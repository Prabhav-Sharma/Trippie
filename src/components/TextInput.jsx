import { AiOutlineEye, AiOutlineEyeInvisible } from "../Utils/icons";
import { useToggle } from "../hooks";

function TextInput({
  legend,
  placeholder,
  value,
  onChange,
  styles = "",
  type = "text",
  maxLength = "100",
  reference,
}) {
  const { toggle: visible, setToggle: setVisible } = useToggle(false);

  const visibilityIcon = visible ? (
    <AiOutlineEye
      className="text-2xl absolute top-2 cursor-pointer right-1"
      onClick={() => setVisible(false)}
    />
  ) : (
    <AiOutlineEyeInvisible
      className="text-2xl absolute top-2 cursor-pointer right-1"
      onClick={() => setVisible(true)}
    />
  );

  const classNames = `rounded-md pl-2 p-1.5 bg-gray-100 border-slate-400 border-solid border-2 font-robotoFlex ${styles}`;
  const input =
    type === "password" ? (
      <span className="w-11/12 relative">
        <input
          className={`w-full ${classNames}`}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="on"
          maxLength={maxLength}
          ref={reference || null}
        />
        {visibilityIcon}
      </span>
    ) : (
      <input
        className={`w-11/12 ${classNames}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="on"
        maxLength={maxLength}
        ref={reference || null}
      />
    );

  return (
    <fieldset className="flex w-full flex-col items-center text-black">
      <legend className="pl-3 mb-1 font-robotoFlex">{legend}</legend>
      {input}
    </fieldset>
  );
}

export default TextInput;
