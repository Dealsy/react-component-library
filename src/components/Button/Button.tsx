import clsx from "clsx";
import { ButtonProps } from "@/types/buttonTypes";

export function Button({ children }: ButtonProps) {
  return (
    <button
      className={clsx(
        "p-2 transition duration-300 ease-in-out transform bg-red-500 rounded-lg",
        "active:bg-red-600 active:scale-95",
        "hover:bg-red-400 hover:scale-110"
      )}
    >
      {children}
    </button>
  );
}
