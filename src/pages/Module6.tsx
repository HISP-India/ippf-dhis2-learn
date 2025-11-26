import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module6 = () => {
  const objectives = [
    "Understand the complete health information cycle",
    "Interpret dashboard data for decision making",
    "Identify data quality issues",
    "Apply data use principles in program management",
    "Communicate insights to stakeholders effectively",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 6</Badge>
            <Badge variant="secondary">55 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Health Information Cycle & Data Use
          </h1>
          <p className="text-lg text-muted-foreground">
            Interpret dashboards, ensure data quality, complete the health information cycle, and drive evidence-based decisions
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
          <VideoEmbed title="Health Information Cycle Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. The Health Information Cycle
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Data only has value when it leads to action. The health information cycle shows how data flows from collection 
                  to decision-making and back to improved services.
                </p>
                <p className="font-semibold text-foreground">The Six Stages:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Collection:</strong> Gather data from services and programs</li>
                  <li><strong>Entry:</strong> Input data into DHIS2 accurately</li>
                  <li><strong>Processing:</strong> Aggregate, validate, and clean data</li>
                  <li><strong>Analysis:</strong> Create visualizations and identify patterns</li>
                  <li><strong>Interpretation:</strong> Understand what data means</li>
                  <li><strong>Action:</strong> Make decisions and improve programs</li>
                </ol>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Key Principle:</strong> The cycle is only complete when data leads to action that improves health outcomes.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Interpreting Dashboard Data
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Ask Critical Questions:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>What trends do I see? Are numbers increasing or decreasing?</li>
                  <li>Are there unexpected spikes or drops?</li>
                  <li>How do we compare to targets or previous periods?</li>
                  <li>Which facilities perform well? Which need support?</li>
                  <li>Are there gaps in service coverage?</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Ananya's Analysis:</strong> She notices contraceptive uptake dropped 15% 
                  in one district. Investigation reveals a supply chain issue that needs immediate attention.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Ensuring Data Quality
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Poor quality data leads to poor decisions. Always check for:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Completeness:</strong> Are all facilities reporting?</li>
                  <li><strong>Timeliness:</strong> Is data submitted on schedule?</li>
                  <li><strong>Accuracy:</strong> Do numbers make sense? Any outliers?</li>
                  <li><strong>Consistency:</strong> Do related indicators align?</li>
                  <li><strong>Validity:</strong> Do values fall within expected ranges?</li>
                </ul>
                <p className="mt-4">Run regular data quality checks and address issues promptly.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                4. Data-Driven Decision Making
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p className="font-semibold text-foreground">Using Data for Action:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Identify underperforming areas needing support</li>
                  <li>Allocate resources based on service demand</li>
                  <li>Monitor program impact and effectiveness</li>
                  <li>Adjust strategies based on evidence</li>
                  <li>Report progress to donors and stakeholders</li>
                </ul>
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Success Story:</strong> Regular dashboard reviews led to redistributing staff from low-demand 
                    facilities to high-demand ones, improving overall service coverage by 23%.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                5. Communicating Insights
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Data insights must be communicated effectively to drive action:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Know your audience:</strong> Tailor message to decision-makers</li>
                  <li><strong>Tell a story:</strong> Use data to create a narrative</li>
                  <li><strong>Highlight key points:</strong> Focus on what matters most</li>
                  <li><strong>Recommend actions:</strong> Don't just present data, suggest solutions</li>
                  <li><strong>Use visuals:</strong> Charts speak louder than tables</li>
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
                <span>Module 6 Script - Data Use Cycle</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Data Quality Assessment Tool</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Decision-Making Framework</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="What completes the health information cycle?"
              options={[
                "Entering data into DHIS2",
                "Creating a beautiful dashboard",
                "Taking action based on data insights",
                "Printing monthly reports",
              ]}
              correctAnswer={2}
              explanation="The health information cycle is only complete when data leads to action that improves health programs and outcomes."
            />
            
            <QuizQuestion
              question="Which is NOT a key dimension of data quality?"
              options={[
                "Completeness",
                "Timeliness",
                "Dashboard color scheme",
                "Accuracy",
              ]}
              correctAnswer={2}
              explanation="Data quality focuses on completeness, timeliness, accuracy, consistency, and validity - not visual design elements."
            />
          </div>
        </section>

        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 6</h3>
                <p className="text-sm text-muted-foreground">You've completed all training modules! Take the final assessment.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules/5">Previous Module</Link>
                </Button>
                <Button asChild>
                  <Link to="/assessment">Final Assessment</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module6;
