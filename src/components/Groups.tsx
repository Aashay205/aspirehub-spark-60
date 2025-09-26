import { Users, MessageSquare, Clock, Star, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Groups = () => {
  const studyGroups = [
    {
      id: 1,
      name: "Advanced Calculus Masters",
      subject: "Mathematics",
      members: 8,
      onlineNow: 3,
      lastActivity: "2 mins ago",
      description: "Deep dive into multivariable calculus and differential equations",
      level: "Advanced",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Organic Chemistry Lab",
      subject: "Chemistry", 
      members: 12,
      onlineNow: 5,
      lastActivity: "5 mins ago",
      description: "Reaction mechanisms and synthesis pathways discussion",
      level: "Intermediate",
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Quantum Physics Discussion",
      subject: "Physics",
      members: 6,
      onlineNow: 2,
      lastActivity: "1 hour ago", 
      description: "Exploring quantum mechanics and wave-particle duality",
      level: "Advanced",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Biology Research Group",
      subject: "Biology",
      members: 15,
      onlineNow: 7,
      lastActivity: "30 mins ago",
      description: "Molecular biology and genetics research collaboration",
      level: "Beginner",
      color: "bg-pink-500",
    },
  ];

  const pendingInvites = [
    {
      groupName: "Statistics Study Circle",
      invitedBy: "Sarah Chen",
      subject: "Mathematics",
      timeAgo: "2 hours ago",
    },
    {
      groupName: "Physics Problem Solvers",
      invitedBy: "Michael Park", 
      subject: "Physics",
      timeAgo: "1 day ago",
    },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Study Groups</h1>
          <p className="text-lg text-muted-foreground">Collaborate with peers and learn together</p>
        </div>
        <Button className="gradient-primary text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Group
        </Button>
      </div>

      {/* Pending Invites */}
      {pendingInvites.length > 0 && (
        <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Pending Invitations</span>
              <Badge variant="secondary">{pendingInvites.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingInvites.map((invite, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-secondary/20">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>{invite.invitedBy.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{invite.groupName}</p>
                    <p className="text-sm text-muted-foreground">
                      Invited by {invite.invitedBy} • {invite.subject} • {invite.timeAgo}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Decline
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Accept
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Active Study Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studyGroups.map((group, index) => (
          <Card key={group.id} className="animate-slide-up hover:shadow-lg transition-shadow" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg ${group.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {group.subject[0]}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{group.subject}</p>
                  </div>
                </div>
                <Badge 
                  variant={group.level === "Advanced" ? "destructive" : group.level === "Intermediate" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {group.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{group.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{group.onlineNow} online</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{group.lastActivity}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground">
                  Join Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Your Own Group CTA */}
      <Card className="animate-slide-up bg-gradient-primary text-white" style={{ animationDelay: "0.6s" }}>
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
              <Plus className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Start Your Own Study Group</h3>
            <p className="text-white/90 max-w-md mx-auto">
              Create a collaborative learning environment and invite your classmates to join your study sessions
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Create New Group
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Groups;