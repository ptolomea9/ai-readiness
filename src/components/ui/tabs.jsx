import * as TabsPrimitive from "@radix-ui/react-tabs";

export function Tabs({ children, ...props }) {
  return <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>;
}
export function TabsList({ children, ...props }) {
  return <TabsPrimitive.List className="flex gap-2" {...props}>{children}</TabsPrimitive.List>;
}
export function TabsTrigger({ children, ...props }) {
  return <TabsPrimitive.Trigger className="px-4 py-2 border-b-2" {...props}>{children}</TabsPrimitive.Trigger>;
}
export function TabsContent({ children, ...props }) {
  return <TabsPrimitive.Content className="mt-4" {...props}>{children}</TabsPrimitive.Content>;
}
