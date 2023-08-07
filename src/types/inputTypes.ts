import { ChangeEventHandler } from "react";
import { AllOrNothing } from "./helpers";


export type InputProps = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
    id?: string;
    label: string;
    name?: string;
    type?: string;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    labelStyle?: string;
    inputStyle?: string;
    errorStyle?: string;
    labelContainerStyle?: string;
   
  };