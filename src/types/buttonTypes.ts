export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title: string
    buttonStyle?: 'elevated' | 'outlined' | 'text' | 'filled' 
    size?: "small" | "medium" | "large";
    disabled?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
} 