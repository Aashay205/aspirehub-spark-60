import { Brain, User, Bell, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">EduLearn AI</h1>
            <p className="text-xs text-muted-foreground">AI Learning Platform</p>
          </div>
        </div>

        {/* User Welcome Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">English</span>
          </div>
          
          <Button variant="outline" size="sm" className="text-primary border-primary/20">
            <span className="mr-2">🗺️</span>
            Generate Roadmap
          </Button>

          <div className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-4 w-4 p-0 text-xs">
              3
            </Badge>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium">Welcome back, <span className="text-primary">Student</span></p>
              <p className="text-xs text-muted-foreground">Ready to solve some doubts today?</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;