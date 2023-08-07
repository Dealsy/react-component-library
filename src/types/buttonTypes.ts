import { buttonType, classNamesMap, sizes } from "@/components/Button/Button";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title: string
    buttonStyle?: keyof typeof classNamesMap;
    buttonType?: keyof typeof buttonType;
    size?: keyof typeof sizes;
    disabled?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
} 
