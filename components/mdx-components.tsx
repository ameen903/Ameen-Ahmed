import React from "react"

export const Space = ({ size = "4" }: { size?: string }) => (
  <div className={`h-${size}`} />
)

export const Tip = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 my-4">
    {title && <div className="font-semibold text-blue-800 dark:text-blue-200">{title}</div>}
    <div className="text-blue-700 dark:text-blue-300">{children}</div>
  </div>
)

export const Stack = ({
  direction = "vertical",
  wrap = false,
  fullWidth = false,
  children
}: {
  direction?: "horizontal" | "vertical"
  wrap?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}) => (
  <div
    className={`flex gap-4 ${
      direction === "horizontal" ? "flex-row" : "flex-col"
    } ${wrap ? "flex-wrap" : ""} ${fullWidth ? "w-full" : ""}`}
  >
    {children}
  </div>
)

export const Card = ({
  title,
  size = "md",
  className = "",
  children
}: {
  title?: string
  size?: "sm" | "md" | "lg"
  className?: string
  children: React.ReactNode
}) => (
  <div className={`border rounded-lg p-4 bg-card ${className}`}>
    {title && <h3 className="font-semibold mb-2">{title}</h3>}
    {children}
  </div>
)

export const Steps = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal list-inside space-y-2">
    {children}
  </ol>
)

export const Step = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <li className="mb-4">
    <div className="font-semibold">{title}</div>
    {children && <div className="ml-4 mt-1">{children}</div>}
  </li>
)

export const kbd = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <kbd {...props}>{children}</kbd>
)

export const details = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <details {...props}>{children}</details>
)

export const summary = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <summary {...props}>{children}</summary>
)

export const pre = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" {...props}>
    {children}
  </pre>
)

export const p = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <p {...props}>{children}</p>
)

export const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <details className="border rounded-lg p-4">
    <summary className="cursor-pointer font-semibold">{title}</summary>
    <div className="mt-2">{children}</div>
  </details>
)

export const Info = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 my-4">
    <div className="text-blue-700 dark:text-blue-300">{children}</div>
  </div>
)

export const Danger = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20 my-4">
    <div className="text-red-700 dark:text-red-300">{children}</div>
  </div>
)

export const Check = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-900/20 my-4">
    <div className="text-green-700 dark:text-green-300">{children}</div>
  </div>
)

export const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4">{children}</div>
)

export const Tab = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div>{children}</div>
  </div>
)

export const Expandable = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <details className="border rounded-lg p-4">
    <summary className="cursor-pointer font-semibold">{title}</summary>
    <div className="mt-2">{children}</div>
  </details>
)

export const Frame = ({ src, ratio, title, embed }: { src?: string; ratio?: string; title?: string; embed?: string }) => {
  if (embed) {
    return <div dangerouslySetInnerHTML={{ __html: embed }} />
  }
  return (
    <iframe
      src={src}
      title={title}
      className="w-full rounded-lg"
      style={{ aspectRatio: ratio?.replace(':', '/') }}
    />
  )
}

export const CodeBlockGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-4">{children}</div>
)

export const components = {
  Space,
  Tip,
  Stack,
  Card,
  Steps,
  Step,
  kbd,
  details,
  summary,
  pre,
  p,
  Accordion,
  Info,
  Danger,
  Check,
  Tabs,
  Tab,
  Expandable,
  Frame,
  CodeBlockGroup,
}