import { useState } from "react";
import { 
  BarChart3, 
  BookOpen, 
  Brain, 
  Users, 
  Library, 
  Settings,
  Upload,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const mainNavItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "roadmap", label: "Roadmap", icon: BookOpen },
    { id: "doubtsolver", label: "Doubt Solver", icon: Brain, badge: "AI" },
    { id: "groups", label: "Group Rooms", icon: Users, badge: "2" },
    { id: "library", label: "Q&A Library", icon: Library },
  ];

  const toolsItems = [
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "upload", label: "Upload/Ingest", icon: Upload },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const NavItem = ({ item, isActive }: { item: any; isActive: boolean }) => (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`w-full justify-start h-11 ${
        isActive 
          ? "bg-primary text-primary-foreground shadow-sm" 
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      }`}
      onClick={() => onTabChange(item.id)}
    >
      <item.icon className="mr-3 h-4 w-4" />
      <span className="flex-1 text-left">{item.label}</span>
      {item.badge && (
        <Badge 
          variant={item.badge === "AI" ? "default" : "secondary"} 
          className={`ml-2 ${item.badge === "AI" ? "bg-accent text-accent-foreground" : ""}`}
        >
          {item.badge}
        </Badge>
      )}
    </Button>
  );

  return (
    <nav className="w-64 border-r bg-card min-h-screen p-4">
      <div className="space-y-6">
        {/* Main Navigation */}
        <div>
          <h3 className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Main Navigation
          </h3>
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
              />
            ))}
          </div>
        </div>

        {/* Tools & Insights */}
        <div>
          <h3 className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Tools & Insights
          </h3>
          <div className="space-y-1">
            {toolsItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;