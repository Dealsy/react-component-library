export type ButtonProps = {
    onClick?: () => void
    title: string
    buttonStyle?: 'elevated' | 'outlined' | 'text' | 'filled'
    disabled?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
} 