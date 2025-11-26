import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  href: string;
  completed?: boolean;
}

const ModuleCard = ({ number, title, description, icon: Icon, duration, href, completed }: ModuleCardProps) => {
  return (
    <Link to={href} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-2 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            {completed && (
              <Badge variant="default" className="bg-success">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="font-semibold">Module {number}</Badge>
            <span className="text-xs text-muted-foreground">{duration}</span>
          </div>
          <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Start Learning
            <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-0 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ModuleCard;
