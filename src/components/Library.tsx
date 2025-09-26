import { Search, Filter, BookOpen, Clock, Star, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Library = () => {
  const categories = [
    { name: "All Topics", count: 2847, active: true },
    { name: "Mathematics", count: 892, active: false },
    { name: "Physics", count: 743, active: false },
    { name: "Chemistry", count: 656, active: false },
    { name: "Biology", count: 556, active: false },
  ];

  const qaModules = [
    {
      id: 1,
      title: "Differential Equations Solutions",
      subject: "Mathematics",
      difficulty: "Advanced",
      timeToRead: "8 min read",
      views: 1243,
      rating: 4.8,
      description: "Comprehensive guide to solving first and second-order differential equations with real-world applications",
      topics: ["Calculus", "Equations", "Advanced Math"],
      solved: true,
      dateAdded: "2 days ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Organic Reaction Mechanisms",
      subject: "Chemistry", 
      difficulty: "Intermediate",
      timeToRead: "12 min read",
      views: 987,
      rating: 4.9,
      description: "Step-by-step breakdown of major organic chemistry reactions including SN1, SN2, and elimination mechanisms",
      topics: ["Organic Chemistry", "Reactions", "Mechanisms"],
      solved: true,
      dateAdded: "3 days ago",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Quantum Mechanics Fundamentals",
      subject: "Physics",
      difficulty: "Advanced", 
      timeToRead: "15 min read",
      views: 756,
      rating: 4.7,
      description: "Introduction to wave functions, probability densities, and the Schrödinger equation with practical examples",
      topics: ["Quantum Physics", "Wave Functions", "Modern Physics"],
      solved: true,
      dateAdded: "5 days ago",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Cell Division and Mitosis",
      subject: "Biology",
      difficulty: "Beginner",
      timeToRead: "6 min read", 
      views: 1456,
      rating: 4.6,
      description: "Complete overview of cellular reproduction, chromosome behavior, and the stages of mitosis",
      topics: ["Cell Biology", "Genetics", "Life Sciences"],
      solved: true,
      dateAdded: "1 week ago",
      color: "bg-pink-500",
    },
    {
      id: 5,
      title: "Thermodynamics Laws and Applications",
      subject: "Physics",
      difficulty: "Intermediate",
      timeToRead: "10 min read",
      views: 834,
      rating: 4.5,
      description: "Understanding the four laws of thermodynamics with engineering and real-world applications",
      topics: ["Thermodynamics", "Energy", "Classical Physics"],
      solved: true,
      dateAdded: "1 week ago", 
      color: "bg-orange-500",
    },
    {
      id: 6,
      title: "Linear Algebra Matrix Operations",
      subject: "Mathematics",
      difficulty: "Intermediate",
      timeToRead: "9 min read",
      views: 672,
      rating: 4.4,
      description: "Matrix multiplication, determinants, eigenvalues, and eigenvectors with computational examples",
      topics: ["Linear Algebra", "Matrices", "Advanced Math"],
      solved: true,
      dateAdded: "2 weeks ago",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header and Search */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Q&A Library</h1>
          <p className="text-lg text-muted-foreground">Browse solved problems and learn from detailed explanations</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search topics, subjects, or keywords..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={category.active ? "default" : "outline"}
            size="sm"
            className={category.active ? "bg-primary text-primary-foreground" : ""}
          >
            {category.name}
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Q&A Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qaModules.map((module, index) => (
          <Card key={module.id} className="animate-slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg ${module.color} flex items-center justify-center text-white font-bold`}>
                    {module.subject[0]}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{module.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{module.subject}</p>
                  </div>
                </div>
                <Badge 
                  variant={module.difficulty === "Advanced" ? "destructive" : module.difficulty === "Intermediate" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {module.difficulty}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">{module.description}</p>
              
              {/* Topics */}
              <div className="flex flex-wrap gap-1">
                {module.topics.slice(0, 3).map((topic, topicIndex) => (
                  <Badge key={topicIndex} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.timeToRead}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{module.views}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{module.rating}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Preview
                </Button>
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Study
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="min-w-[200px]">
          Load More Solutions
        </Button>
      </div>
    </div>
  );
};

export default Library;