import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import { Database, Repeat, GitBranch, BarChart3, Layout, FileSpreadsheet, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Modules = () => {
  const modules = [
    {
      number: 1,
      title: "Tracker Data Entry",
      description: "Master client registration, service entry, events, and editing in DHIS2 tracker module for individualized data management",
      icon: Database,
      duration: "45 min",
      href: "/modules/1",
    },
    {
      number: 2,
      title: "Tracker to Aggregate",
      description: "Learn to run aggregation processes, verify totals, and ensure accurate transition from individual to summary data",
      icon: Repeat,
      duration: "30 min",
      href: "/modules/2",
    },
    {
      number: 3,
      title: "Aggregate Data Entry",
      description: "Enter monthly totals, complete datasets, validate entries, and maintain data quality standards",
      icon: GitBranch,
      duration: "40 min",
      href: "/modules/3",
    },
    {
      number: 4,
      title: "Data Visualizer",
      description: "Create powerful charts, pivot tables, apply filters, work with indicators, and tell stories with data",
      icon: BarChart3,
      duration: "50 min",
      href: "/modules/4",
    },
    {
      number: 5,
      title: "Dashboard Creation",
      description: "Build interactive dashboards, organize visualizations effectively, and share insights with stakeholders",
      icon: Layout,
      duration: "45 min",
      href: "/modules/5",
    },
    {
      number: 6,
      title: "CSV Export & Import to Global DHIS2",
      description: "Export service data as CSV and import into Global DHIS2 for national-level reporting and global data consolidation",
      icon: FileSpreadsheet,
      duration: "45 min",
      href: "/modules/6",
    },
    {
      number: 7,
      title: "RDQA: Routine Data Quality Assessment",
      description: "Master IPPF's RDQA methodology to verify data accuracy, assess systems, and develop improvement action plans",
      icon: ClipboardCheck,
      duration: "60 min",
      href: "/modules/7",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Training Modules
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six comprehensive modules covering the complete DHIS2 data workflow. 
            Complete them in order or jump to specific topics based on your needs.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-background border-2 border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">Your Progress</h3>
              <p className="text-sm text-muted-foreground">Complete all modules to unlock the final assessment</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0/7</div>
                <div className="text-xs text-muted-foreground">Modules</div>
              </div>
              <Button asChild variant="outline">
                <Link to="/assessment">View Assessment</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Module Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module) => (
            <ModuleCard key={module.number} {...module} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-bold">Ready to Start Learning?</h3>
          <p className="text-muted-foreground">
            Begin with Module 1 or explore the module that best fits your current learning needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/modules/1">Start Module 1</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/resources">Download Resources</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Modules;
