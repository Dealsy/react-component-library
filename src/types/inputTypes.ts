import { ChangeEventHandler } from "react";

export type InputProps = (
    | {
        value: string;
        onChange: ChangeEventHandler;
      }
    | {
        value?: undefined;
        onChange?: undefined;
      }
  ) & {
    label: string;
    disabled?: boolean;
    error?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    id?: string;
  };