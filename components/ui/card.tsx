import React from 'react';
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("bg-white rounded-lg shadow-md border border-gray-200", className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
)
Card.displayName = "Card"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6", className)} {...props}>
        {children}
      </div>
    );
  }
)
CardContent.displayName = "CardContent"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pb-0", className)} {...props}>
        {children}
      </div>
    );
  }
)
CardHeader.displayName = "CardHeader"

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
        {children}
      </h3>
    );
  }
)
CardTitle.displayName = "CardTitle"

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props}>
        {children}
      </p>
    );
  }
)
CardDescription.displayName = "CardDescription"