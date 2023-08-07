import { buttonType, classNamesMap, sizes } from "@/components/Button/Button";

export type ButtonProps = {
    /**
     * A callback function triggered when the button is clicked.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * The text or label displayed on the button.
     */
    title: string;

    /**
     * The style class of the button, determined by the classNamesMap.
     */
    buttonStyle?: keyof typeof classNamesMap;

    /**
     * The type or purpose of the button, such as 'submit' or 'reset'.
     */
    buttonType?: keyof typeof buttonType;

    /**
     * The size of the button, e.g., 'small', 'medium', 'large'.
     */
    size?: keyof typeof sizes;

    /**
     * If true, the button will be disabled and not interactable.
     */
    disabled?: boolean;

    /**
     * An optional icon to display on the left side of the button text.
     */
    leftIcon?: React.ReactNode;

    /**
     * An optional icon to display on the right side of the button text.
     */
    rightIcon?: React.ReactNode;

    /**
     * You may optionally pass in a custom class name to be applied to the button.
     */
    className?: string;
} 
