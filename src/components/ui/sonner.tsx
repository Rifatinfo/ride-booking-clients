import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
  theme={theme as ToasterProps["theme"]}
  className="toaster group"
  style={
    {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",

      "--success-bg": "hsl(142, 70%, 45%)",   // ✅ light theme green
      "--success-text": "white",
      "--success-border": "hsl(142, 70%, 35%)",

      "--error-bg": "hsl(0, 84%, 60%)",       // ✅ light theme red
      "--error-text": "white",
      "--error-border": "hsl(0, 84%, 50%)",
    } as React.CSSProperties
  }
  {...props}
/>

  );
};

export { Toaster };
