import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module5 = () => {
  const objectives = [
    "Create new dashboards from scratch",
    "Add various visualization types to dashboards",
    "Organize dashboard layout effectively",
    "Apply dashboard filters",
    "Share dashboards with stakeholders",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 5</Badge>
            <Badge variant="secondary">45 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Dashboard Creation
          </h1>
          <p className="text-lg text-muted-foreground">
            Build interactive dashboards, organize visualizations effectively, and share insights with stakeholders
          </p>
        </div>

        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Target className="h-5 w-5 text-primary" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Introduction Video</h2>
          <VideoEmbed title="Dashboard Creation Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. What Makes a Good Dashboard?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  A dashboard presents multiple related visualizations in one view, telling a complete data story at a glance.
                </p>
                <p className="font-semibold text-foreground">Best Practices:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Focus on key metrics relevant to your audience</li>
                  <li>Use consistent colors and formatting</li>
                  <li>Arrange items logically (most important first)</li>
                  <li>Include context (titles, descriptions)</li>
                  <li>Keep it simple - don't overcrowd</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Creating a Dashboard
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Step-by-Step:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open Dashboard app</li>
                  <li>Click "+" to create new dashboard</li>
                  <li>Give it a clear, descriptive name</li>
                  <li>Click "Add item" to insert visualizations</li>
                  <li>Choose from:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Charts created in Data Visualizer</li>
                      <li>Pivot tables</li>
                      <li>Maps</li>
                      <li>Text boxes for context</li>
                    </ul>
                  </li>
                  <li>Arrange items by dragging</li>
                  <li>Resize items to fit layout</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Organizing Dashboard Layout
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Effective layout guides viewers through your data story:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Top row:</strong> Key summary metrics and highlights</li>
                  <li><strong>Middle sections:</strong> Detailed trend charts</li>
                  <li><strong>Bottom:</strong> Disaggregated data and comparisons</li>
                </ul>
                <p className="mt-3">
                  <strong className="text-foreground">Ananya's Dashboard:</strong> She creates a Family Planning Services 
                  dashboard with new clients trend at top, method mix chart in middle, and facility comparison at bottom.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                4. Sharing Dashboards
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Share dashboards with colleagues and decision-makers:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open your dashboard</li>
                  <li>Click "Share" icon</li>
                  <li>Set access levels:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>View only: Users can see the dashboard</li>
                      <li>Edit: Users can modify it</li>
                    </ul>
                  </li>
                  <li>Add users or user groups</li>
                  <li>Save sharing settings</li>
                </ol>
                <p className="mt-3">You can also set a dashboard as a favorite for quick access.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Card className="mb-12 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Download className="h-5 w-5 text-primary" />
              Downloadable Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-between">
                <span>Module 5 Script - Dashboard Creation</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Dashboard Design Checklist</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="Where should you place the most important metrics on a dashboard?"
              options={[
                "At the bottom for dramatic effect",
                "In the middle section",
                "At the top for immediate visibility",
                "Hidden in a filter",
              ]}
              correctAnswer={2}
              explanation="Place the most important metrics at the top of the dashboard for immediate visibility and impact."
            />
          </div>
        </section>

        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 5</h3>
                <p className="text-sm text-muted-foreground">Continue to Module 6</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules/4">Previous Module</Link>
                </Button>
                <Button asChild>
                  <Link to="/modules/6">Next: Module 6</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module5;
