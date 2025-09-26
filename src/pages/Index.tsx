import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import Roadmap from "@/components/Roadmap";
import Doubtsolver from "@/components/Doubtsolver";
import Groups from "@/components/Groups";
import Library from "@/components/Library";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "roadmap":
        return <Roadmap />;
      case "doubtsolver":
        return <Doubtsolver />;
      case "groups":
        return <Groups />;
      case "library":
        return <Library />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex w-full">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
