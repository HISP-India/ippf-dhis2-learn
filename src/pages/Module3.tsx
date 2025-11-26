import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module3 = () => {
  const objectives = [
    "Enter monthly aggregate data accurately",
    "Complete datasets and mark them as complete",
    "Apply validation rules to ensure data quality",
    "Understand data element categories and combinations",
    "Handle validation errors appropriately",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 3</Badge>
            <Badge variant="secondary">40 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Aggregate Data Entry
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter monthly totals, complete datasets, validate entries, and maintain data quality standards
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
          <VideoEmbed title="Aggregate Data Entry Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. Understanding Aggregate Data
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Aggregate data represents summary totals rather than individual records. In DHIS2, you enter these totals 
                  directly into predefined forms.
                </p>
                <p className="font-semibold text-foreground">Common Aggregate Indicators:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Total new clients registered</li>
                  <li>Services provided by type</li>
                  <li>Contraceptive methods distributed</li>
                  <li>Referrals made</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Entering Monthly Totals
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Step-by-Step:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open Data Entry app</li>
                  <li>Select your organization unit</li>
                  <li>Choose the dataset (reporting form)</li>
                  <li>Select the period (month/quarter)</li>
                  <li>Enter values in each field</li>
                  <li>Values save automatically as you type</li>
                </ol>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Pro Tip:</strong> Use Tab key to move between fields quickly. DHIS2 auto-saves as you go.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Completing and Validating Datasets
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>After entering all data:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Click "Run Validation" button</li>
                  <li>Review any validation errors or warnings</li>
                  <li>Correct errors if needed</li>
                  <li>Click "Complete" to mark dataset as finished</li>
                </ol>
                <p className="mt-4">
                  <strong className="text-foreground">Important:</strong> Only mark complete when all data is accurate and 
                  validated. Completing prevents further editing without special permissions.
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
                <span>Module 3 Script - Aggregate Entry</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Data Quality Checklist</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="What should you do before marking a dataset as complete?"
              options={[
                "Enter all data and run validation",
                "Wait for supervisor approval",
                "Print a copy",
                "Enter data for next month",
              ]}
              correctAnswer={0}
              explanation="Always enter all data and run validation to check for errors before marking the dataset complete."
            />
          </div>
        </section>

        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 3</h3>
                <p className="text-sm text-muted-foreground">Continue to Module 4</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules/2">Previous Module</Link>
                </Button>
                <Button asChild>
                  <Link to="/modules/4">Next: Module 4</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module3;
