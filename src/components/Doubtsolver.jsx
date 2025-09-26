import { MessageSquare, Mic, Send, Brain, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const Doubtsolver = () => {
  const recentSolutions = [
    {
      title: "Quadratic Equations",
      subject: "Mathematics",
      duration: "15 min session",
      description: "AI helped solve complex quadratic problems with step-by-step explanations",
      status: "Solved",
      timeAgo: "2 hours ago",
      icon: "√x",
      color: "bg-blue-500",
    },
    {
      title: "Atomic Structure", 
      subject: "Chemistry",
      duration: "22 min session",
      description: "Comprehensive analysis of electron configuration and orbital diagrams",
      status: "Solved",
      timeAgo: "4 hours ago", 
      icon: "⚛",
      color: "bg-green-500",
    },
    {
      title: "Wave Mechanics",
      subject: "Physics", 
      duration: "18 min session",
      description: "Detailed wave equation solutions with graphical representations",
      status: "Solved",
      timeAgo: "1 day ago",
      icon: "≈",
      color: "bg-orange-500",
    },
    {
      title: "Photosynthesis",
      subject: "Biology",
      duration: "25 min session", 
      description: "Complex biochemical pathways explained with molecular diagrams",
      status: "Solved",
      timeAgo: "1 day ago",
      icon: "🌿",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">AI Doubt Solver</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get instant, personalized solutions to your academic questions with AI-powered assistance
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Doubt Solver */}
        <div className="lg:col-span-2">
          <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Quick Doubt Solver</span>
                <Badge className="bg-accent text-accent-foreground">AI Powered</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Area */}
              <div className="space-y-4">
                <Textarea
                  placeholder="Type your question here or use voice input..."
                  className="min-h-[120px] resize-none"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Mic className="h-4 w-4 mr-2" />
                      Voice Input
                    </Button>
                    <span className="text-sm text-muted-foreground">Or upload an image</span>
                  </div>
                  <Button className="gradient-primary text-white">
                    <Brain className="h-4 w-4 mr-2" />
                    Solve with AI
                  </Button>
                </div>
              </div>

              {/* Example Questions */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground">Quick Examples:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Solve for x: 2x² + 5x - 3 = 0",
                    "Explain photosynthesis mechanism",
                    "Calculate pH of 0.1M HCl solution", 
                    "Derive kinetic energy formula"
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto py-3 px-4 whitespace-normal"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Group Study Invites */}
        <div>
          <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Group Study Invites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-medium">
                    P
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Physics Study Group</p>
                    <p className="text-xs text-muted-foreground">Priya & 3 others</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-primary">
                    Join
                  </Button>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Math Problem Solving</p>
                    <p className="text-xs text-muted-foreground">Arjun & 2 others</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-primary">
                    Join
                  </Button>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full text-primary">
                View All Groups
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent AI-Solved Q&A Modules */}
      <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent AI-Solved Q&A Modules</CardTitle>
          <Button variant="outline" size="sm" className="text-primary">
            <MessageSquare className="h-4 w-4 mr-2" />
            View Library
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentSolutions.map((solution, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center text-white text-lg font-bold`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{solution.title}</h4>
                      <p className="text-sm text-muted-foreground">{solution.subject} • {solution.timeAgo}</p>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-success text-success-foreground">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {solution.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">{solution.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{solution.duration}</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-primary">
                    Review Solutions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Doubtsolver;