import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-6 w-11" />; // Placeholder with same dimensions as switch
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-4 w-4 transition-colors ${isDark ? 'text-muted-foreground' : 'text-primary'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-neon-cyan data-[state=unchecked]:bg-muted"
      />
      <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-primary' : 'text-muted-foreground'}`} />
    </div>
  );
};