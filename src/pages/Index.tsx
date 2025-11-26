import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ModuleCard from "@/components/ModuleCard";
import Header from "@/components/Header";
import { BookOpen, Users, TrendingUp, Target, Database, BarChart3, Layout, GitBranch, Repeat, FileSpreadsheet, ClipboardCheck } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const Index = () => {
  const modules = [
    {
      number: 1,
      title: "Tracker Data Entry",
      description: "Master client registration, service entry, and event tracking in DHIS2 tracker module",
      icon: Database,
      duration: "45 min",
      href: "/modules/1",
    },
    {
      number: 2,
      title: "Tracker to Aggregate",
      description: "Learn to run aggregation processes and verify totals for accurate reporting",
      icon: Repeat,
      duration: "30 min",
      href: "/modules/2",
    },
    {
      number: 3,
      title: "Aggregate Data Entry",
      description: "Enter monthly totals, complete datasets, and ensure data validation",
      icon: GitBranch,
      duration: "40 min",
      href: "/modules/3",
    },
    {
      number: 4,
      title: "Data Visualizer",
      description: "Create powerful charts, pivot tables, and apply filters for analysis",
      icon: BarChart3,
      duration: "50 min",
      href: "/modules/4",
    },
    {
      number: 5,
      title: "Dashboard Creation",
      description: "Build, organize, and share interactive dashboards for data storytelling",
      icon: Layout,
      duration: "45 min",
      href: "/modules/5",
    },
    {
      number: 6,
      title: "CSV Export & Import to Global DHIS2",
      description: "Export data to CSV and import to Global DHIS2 for reporting",
      icon: FileSpreadsheet,
      duration: "45 min",
      href: "/modules/6",
    },
    {
      number: 7,
      title: "RDQA: Routine Data Quality Assessment",
      description: "Verify data accuracy, assess systems, and develop improvement plans",
      icon: ClipboardCheck,
      duration: "60 min",
      href: "/modules/7",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Improved Data Quality",
      description: "Learn best practices for accurate and complete data entry",
    },
    {
      icon: TrendingUp,
      title: "Better Decision Making",
      description: "Transform data into actionable insights for program improvement",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Follow Ananya's journey through real-world scenarios",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                <BookOpen className="h-3 w-3 mr-1" />
                Online Training Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Strengthening SRH Data with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  DHIS2
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master DHIS2 data workflows through interactive modules designed for IPPF staff and partners. 
                Learn tracker entry, aggregation, visualization, and data-driven decision making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/modules">
                    <BookOpen className="h-5 w-5" />
                    Explore Modules
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative">
                <VideoEmbed 
                  title="DHIS2 Training Introduction" 
                  placeholder={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DHIS2 Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What is DHIS2?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DHIS2 (District Health Information Software 2) is the world's leading open-source health information system. 
              IPPF uses DHIS2 to collect, manage, visualize, and analyze sexual and reproductive health data across our 
              global network of Member Associations. This platform strengthens our ability to make evidence-based decisions 
              and improve health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Seven Comprehensive Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progress through structured learning paths designed for all skill levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard key={module.number} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why This Training Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building capacity for the complete health information cycle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Organizations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                About IPPF & HISP India
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">IPPF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The International Planned Parenthood Federation is a global service provider and leading advocate 
                    for sexual and reproductive health and rights. We work in over 146 countries to provide quality services 
                    and champion universal access to sexual and reproductive healthcare.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">HISP India</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Health Information Systems Programme (HISP) India is a leader in implementing and supporting DHIS2 
                    globally. Their expertise in health information systems strengthens data-driven decision making in 
                    public health programs worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Start with Module 1 or explore all training modules at your own pace
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/modules/1">Start Module 1</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/resources">Download Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
