import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module4 = () => {
  const objectives = [
    "Create various chart types (bar, line, pie)",
    "Build pivot tables for data analysis",
    "Apply filters and disaggregations",
    "Work with indicators and data elements",
    "Save and share visualizations",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 4</Badge>
            <Badge variant="secondary">50 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Data Visualizer
          </h1>
          <p className="text-lg text-muted-foreground">
            Create powerful charts, pivot tables, and apply filters for comprehensive data analysis
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
          <VideoEmbed title="Data Visualizer Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. Introduction to Data Visualizer
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Data Visualizer transforms numbers into meaningful charts and tables. Visual representations help identify 
                  trends, compare performance, and communicate insights effectively.
                </p>
                <p className="font-semibold text-foreground">Ananya's Challenge:</p>
                <p>
                  The program manager asks Ananya to show family planning trends for the past 6 months. She uses Data Visualizer 
                  to create a clear, compelling chart.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Creating Charts
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Basic Steps:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open Data Visualizer app</li>
                  <li>Select visualization type (bar, line, pie, etc.)</li>
                  <li>Choose data dimension (indicators or data elements)</li>
                  <li>Select period (months, quarters, years)</li>
                  <li>Choose organization units (facilities or regions)</li>
                  <li>Click "Update" to generate chart</li>
                  <li>Customize colors, labels, and layout</li>
                </ol>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Chart Selection Guide:</strong>
                    <br />• Bar charts: Compare values across categories
                    <br />• Line charts: Show trends over time
                    <br />• Pie charts: Display proportions
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Building Pivot Tables
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Pivot tables organize data in rows and columns, perfect for detailed analysis and comparisons.
                </p>
                <p>To create a pivot table:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Select "Pivot table" visualization type</li>
                  <li>Drag dimensions to rows and columns</li>
                  <li>Add data elements or indicators as values</li>
                  <li>Apply filters as needed</li>
                  <li>Download as Excel if needed for further analysis</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                4. Applying Filters
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Filters help focus on specific data subsets:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Age groups:</strong> Filter by client age ranges</li>
                  <li><strong>Gender:</strong> Disaggregate by male/female</li>
                  <li><strong>Service type:</strong> Show specific services only</li>
                  <li><strong>Organization:</strong> Compare specific facilities</li>
                </ul>
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
                <span>Module 4 Script - Data Visualizer</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Chart Type Selection Guide</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="Which chart type is best for showing trends over time?"
              options={[
                "Pie chart",
                "Line chart",
                "Bar chart",
                "Pivot table",
              ]}
              correctAnswer={1}
              explanation="Line charts are ideal for showing trends over time as they clearly display how values change across periods."
            />
          </div>
        </section>

        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 4</h3>
                <p className="text-sm text-muted-foreground">Continue to Module 5</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules/3">Previous Module</Link>
                </Button>
                <Button asChild>
                  <Link to="/modules/5">Next: Module 5</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module4;
