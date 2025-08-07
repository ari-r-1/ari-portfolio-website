import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-primary shadow-elegant hover:shadow-elegant-lg",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 shadow-elegant hover:shadow-elegant-lg",
        outline: "border border-neutral-300 bg-transparent hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900 shadow-elegant hover:shadow-elegant-lg",
        ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant hover:shadow-elegant-lg",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        glass: "btn-glass glow-primary hover:glow-primary",
        hero: "bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold shadow-elegant-lg hover:shadow-glow-lg transition-all duration-500 hover:scale-105 active:scale-95",
        elegant: "bg-gradient-to-r from-neutral-50 to-neutral-100 text-neutral-900 border border-neutral-200 hover:from-neutral-100 hover:to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 dark:text-neutral-100 dark:border-neutral-700 dark:hover:from-neutral-800 dark:hover:to-neutral-700 shadow-elegant hover:shadow-elegant-lg",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
