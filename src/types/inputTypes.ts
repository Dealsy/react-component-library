import { ChangeEventHandler } from "react";
import { AllOrNothing } from "./helpers";


export type InputProps = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
    label: string;
    disabled?: boolean;
    error?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    id?: string;
    labelContainerStyle?: string;
    labelStyle?: string;
    inputStyle?: string;
    errorStyle?: string;
  };