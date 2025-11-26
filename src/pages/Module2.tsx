import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module2 = () => {
  const objectives = [
    "Understand the tracker-to-aggregate conversion process",
    "Run aggregation scripts accurately",
    "Verify aggregate totals against tracker data",
    "Troubleshoot common aggregation issues",
    "Ensure data consistency across systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 2</Badge>
            <Badge variant="secondary">30 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Tracker to Aggregate
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn to run aggregation processes and verify totals for accurate transition from individual to summary data
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
          <VideoEmbed title="Tracker to Aggregate Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. Why Convert Tracker to Aggregate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  While tracker data captures individual client information, aggregate data summarizes totals for reporting. 
                  Many health programs require both detailed tracking and summary statistics.
                </p>
                <p className="font-semibold text-foreground">Ananya's Monthly Task:</p>
                <p>
                  At month-end, Ananya needs to convert all individual client records into aggregate totals for her facility's 
                  monthly report. This includes counting total new clients, services provided, and outcomes.
                </p>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Key Concept:</strong> Aggregation transforms individual-level tracker data into summary statistics 
                    for reporting to management, donors, and government authorities.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Running the Aggregation Process
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Step-by-Step:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Navigate to Data Administration app</li>
                  <li>Select "Program Data Aggregation"</li>
                  <li>Choose your program (e.g., Family Planning)</li>
                  <li>Select organization unit (your facility)</li>
                  <li>Choose time period (e.g., current month)</li>
                  <li>Click "Run Aggregation"</li>
                  <li>Wait for confirmation message</li>
                </ol>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> Only run aggregation after all data entry for the period is complete. 
                    Re-running will update totals if tracker data changes.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Verifying Aggregate Totals
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>After aggregation, always verify that totals match expected counts:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Open Data Entry app</li>
                  <li>Select aggregate dataset</li>
                  <li>Review populated values</li>
                  <li>Compare with manual counts if available</li>
                  <li>Check for any blank or zero values that should have data</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Ananya's Verification:</strong> She notices the total new clients 
                  shows 45, which matches her manual log. She's confident the aggregation worked correctly.
                </p>
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
                <span>Module 2 Script - Aggregation Process</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Aggregation Checklist</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="When should you run the aggregation process?"
              options={[
                "Every day automatically",
                "After all data entry for the period is complete",
                "Before entering tracker data",
                "Only when the supervisor requests it",
              ]}
              correctAnswer={1}
              explanation="Aggregation should be run after all data entry for the period is complete to ensure accurate totals."
            />
          </div>
        </section>

        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 2</h3>
                <p className="text-sm text-muted-foreground">Continue to Module 3</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules/1">Previous Module</Link>
                </Button>
                <Button asChild>
                  <Link to="/modules/3">Next: Module 3</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module2;
