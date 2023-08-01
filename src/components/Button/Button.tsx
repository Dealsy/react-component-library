import clsx from "clsx";
import { ButtonProps } from "@/types/buttonTypes";

const elevated =
  "shadow-md shadow-inner border-b-2 border-gray-400 text-sm font-normal hover:bg-green-600 hover:text-white active:bg-[#8fd48c] ";
const outlined =
  "border border-green-600 hover:bg-inherit active:bg-[#bbe0a7] text-green-800";
const text =
  "hover:underline active:underline hover:bg-inherit active:text-lg active:bg-inherit active:scale-100";
const filled = "bg-green-600 text-white hover:bg-green-500 active:bg-gray-500";
const disabledStyle =
  "opacity-50 bg-gray-300 text-gray-500 cursor-default hover:bg-gray-300 hover:scale-100 active:bg-gray-300 active:scale-100";

export function Button({
  title,
  buttonStyle,
  className,
  disabled,
  leftIcon,
  onClick,
  rightIcon,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        className && className,
        "py-3 px-5 transition duration-300 ease-in-out transform rounded-full text-sm leading-none",
        "font-medium w-full",
        buttonStyle === "elevated" && elevated,
        buttonStyle === "outlined" && outlined,
        buttonStyle === "text" && text,
        buttonStyle === "filled" && filled,
        disabled && disabledStyle,
        "active:bg-red-600 active:scale-110",
        "hover:bg-red-400 hover:scale-110"
      )}
    >
      <div className="flex items-center justify-center gap-5">
        {leftIcon ? leftIcon : null}
        {title}
        {rightIcon ? rightIcon : null}
      </div>
    </button>
  );
}
