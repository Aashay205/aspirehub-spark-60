import { ChevronRight, Clock, BookOpen, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Roadmap = () => {
  const subjects = [
    {
      name: "Mathematics",
      progress: 92,
      topics: ["Calculus", "Linear Algebra", "Statistics", "Differential Equations"],
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Physics",
      progress: 87,
      topics: ["Quantum Mechanics", "Thermodynamics", "Electromagnetism"],
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      name: "Chemistry",
      progress: 95,
      topics: ["Organic Chemistry", "Physical Chemistry", "Analytical Chemistry"],
      color: "bg-green-500",
      lightColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Biology",
      progress: 89,
      topics: ["Molecular Biology", "Genetics", "Biochemistry", "Cell Biology"],
      color: "bg-pink-500",
      lightColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
  ];

  const weeklyActivity = [
    { day: "Mon", active: true, completed: 3 },
    { day: "Tue", active: true, completed: 2 },
    { day: "Wed", active: true, completed: 4 },
    { day: "Thu", active: true, completed: 1 },
    { day: "Fri", active: false, completed: 0 },
    { day: "Sat", active: false, completed: 0 },
    { day: "Sun", active: false, completed: 0 },
  ];

  const aiRecommendations = [
    {
      title: "Trigonometry Basics",
      description: "Based on your calculus progress, master trig functions next",
      priority: "Recommended",
      estimatedTime: "2-3 hours",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "Chemical Bonding",
      description: "Strengthen your chemistry foundation with bonding concepts",
      priority: "Priority",
      estimatedTime: "1-2 hours",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      title: "Genetics Review",
      description: "Quick revision of heredity patterns and genetic crosses",
      priority: "Review",
      estimatedTime: "30-45 mins",
      icon: BookOpen,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Your Learning Roadmap</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Track your progress across subjects and get AI-powered recommendations for optimal learning
        </p>
      </div>

      {/* Subject Performance */}
      <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Subject-wise Performance</span>
            <Button variant="outline" size="sm">
              Customize Roadmap
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {subjects.map((subject, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${subject.color}`}></div>
                  <h3 className="font-semibold text-lg">{subject.name}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">{subject.progress}%</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <Progress value={subject.progress} className="h-3" />
              <div className="flex flex-wrap gap-2">
                {subject.topics.map((topic, topicIndex) => (
                  <Badge key={topicIndex} variant="secondary" className={`${subject.lightColor} ${subject.textColor} border-0`}>
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Weekly Activity & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Activity */}
        <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">{day.day}</div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    day.active 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {day.completed || ""}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Consistent improvement in problem solving
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>AI-Powered Recommendations</CardTitle>
            <Button variant="outline" size="sm" className="text-primary">
              View All →
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiRecommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${rec.color} bg-opacity-10`}>
                      <rec.icon className={`h-4 w-4 text-white`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={rec.priority === "Priority" ? "destructive" : rec.priority === "Recommended" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {rec.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{rec.estimatedTime}</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-primary">
                    Start Learning
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;