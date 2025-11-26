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
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-dream/20 hover:-translate-y-2 border-4 border-dream hover:border-primary bg-card">
        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-sm bg-primary shadow-strong border-4 border-dream">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            {completed && (
              <Badge variant="default" className="bg-success font-bold uppercase text-xs border-2 border-success">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="outline" className="font-bold uppercase text-xs border-2 border-primary text-primary">Module {number}</Badge>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{duration}</span>
          </div>
          <CardTitle className="text-2xl font-heading font-bold group-hover:text-primary transition-colors leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all uppercase tracking-wide">
            Start Learning
            <ArrowRight className="h-5 w-5 ml-1 group-hover:ml-0 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ModuleCard;
