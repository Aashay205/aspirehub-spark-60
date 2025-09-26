import { TrendingUp, Clock, Target, Users, BookOpen, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    {
      title: "Doubts Solved",
      value: "847",
      change: "+12% this week",
      description: "Total questions resolved",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Study Time",
      value: "4.2h",
      change: "+8% today",
      description: "Daily average",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Accuracy",
      value: "94%",
      change: "+3% this month",
      description: "Problem solving rate",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Study Groups",
      value: "12",
      change: "3 active now",
      description: "Collaborative sessions",
      icon: Users,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  const roadmapItems = [
    {
      subject: "Calculus Fundamentals",
      description: "Master derivatives and integrals with AI-guided practice",
      progress: 65,
      status: "In Progress",
      topics: "4 topics left",
      color: "bg-blue-500",
    },
    {
      subject: "Organic Chemistry",
      description: "Molecular structures and reaction mechanisms",
      progress: 100,
      status: "Completed",
      topics: "✓ Complete",
      color: "bg-green-500",
    },
    {
      subject: "Quantum Physics",
      description: "Wave-particle duality and quantum mechanics",
      progress: 30,
      status: "Starting",
      topics: "Starting soon",
      color: "bg-orange-500",
    },
  ];

  const recentAchievements = [
    { title: "7-Day Streak", description: "Earned today", color: "bg-yellow-500" },
    { title: "AI Master", description: "100 AI solutions", color: "bg-purple-500" },
    { title: "Math Wizard", description: "50 math problems", color: "bg-blue-500" },
    { title: "Team Player", description: "10 group sessions", color: "bg-green-500" },
    { title: "Top Performer", description: "95% accuracy", color: "bg-red-500" },
    { title: "Speed Learner", description: "Fast completion", color: "bg-indigo-500" },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Welcome Section */}
      <div className="gradient-hero rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Good Morning, Student! 🌟
            </h1>
            <p className="text-lg opacity-90">
              You've solved 23 doubts this week. Keep up the excellent progress!
            </p>
            <div className="flex items-center mt-4 space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>AI Assistant Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>7-day streak</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">Level 15</div>
            <div className="text-lg opacity-90">Expert Learner</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-success mt-1">{stat.change}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Roadmap */}
        <div className="lg:col-span-2">
          <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold">Weekly Roadmap Snapshot</CardTitle>
              <Button variant="outline" size="sm" className="text-primary">
                View Full Roadmap →
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {roadmapItems.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <h4 className="font-medium">{item.subject}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={item.status === "Completed" ? "default" : item.status === "In Progress" ? "secondary" : "outline"}
                        className={item.status === "Completed" ? "bg-success text-success-foreground" : ""}
                      >
                        {item.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.topics}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: {item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <div>
          <Card className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold">Recent Achievements</CardTitle>
              <Button variant="outline" size="sm" className="text-primary">
                View All Badges 🏆
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className={`w-10 h-10 rounded-full ${achievement.color} flex items-center justify-center`}>
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;