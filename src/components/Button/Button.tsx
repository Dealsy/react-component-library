import clsx from "clsx";
import { ButtonProps } from "@/types/buttonTypes";

const filled =
  "bg-green-600 text-white hover:scale-110 hover:bg-green-500 active:bg-green-600";
const disabledStyle =
  "opacity-50 bg-gray-300 text-gray-500 cursor-default hover:bg-gray-300";
const text =
  "hover:underline active:underline hover:bg-inherit active:text-lg active:bg-inherit active:scale-100";
const outlined =
  "border border-green-600 hover:bg-inherit hover:scale-110 active:bg-[#bbe0a7] text-green-800";
const elevated =
  "shadow-md shadow-inner border-b-2 border-gray-400 text-sm font-normal hover:bg-green-600 hover:scale-110 hover:text-white active:bg-[#8fd48c]";

const sizes = {
  small: "py-1 px-3 text-xs",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-5 text-lg",
};

export function Button({
  title,
  buttonStyle = "filled",
  size = "medium",
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
        "py-3 px-5 transition duration-300 ease-in-out transform rounded-full leading-none",
        "font-medium",
        sizes[size],
        buttonStyle === "elevated" && !disabled && elevated,
        buttonStyle === "outlined" && !disabled && outlined,
        buttonStyle === "text" && !disabled && text,
        buttonStyle === "filled" && !disabled && filled,
        disabled && disabledStyle,
        className && className
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
