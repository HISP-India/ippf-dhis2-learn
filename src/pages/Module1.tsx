import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Module1 = () => {
  const objectives = [
    "Register new clients in the DHIS2 tracker module",
    "Enter service data and record events accurately",
    "Navigate between different stages of client tracking",
    "Edit and update existing client records",
    "Search for and retrieve client information",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Module Header */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 1</Badge>
            <Badge variant="secondary">45 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Tracker Data Entry
          </h1>
          <p className="text-lg text-muted-foreground">
            Master client registration, service entry, and event tracking in DHIS2 tracker module for individualized data management
          </p>
        </div>

        {/* Learning Objectives */}
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

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-4">Introduction Video</h2>
          <VideoEmbed title="Tracker Data Entry" videoId="9nNWU5PKRzE" />
        </section>

        {/* Lesson Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. Understanding the Tracker Module
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  The tracker module in DHIS2 allows you to follow individual clients over time across multiple services and visits. 
                  Unlike aggregate data (which shows totals), tracker captures individual-level information.
                </p>
                <p className="font-semibold text-foreground">Meet Ananya's First Task:</p>
                <p>
                  Ananya has just started her role as a data officer. Today, a new client named Maya visits the clinic for 
                  family planning services. Ananya needs to register Maya in DHIS2 tracker so all future visits and services 
                  can be tracked.
                </p>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Key Concept:</strong> Tracker data follows individuals through their journey, enabling personalized 
                    care and accurate longitudinal reporting.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. Registering a New Client
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <div className="mb-4">
                  <VideoEmbed title="Register a New Client" videoId="tQNzn9ksVk8" />
                </div>
                <p className="font-semibold text-foreground">Step-by-Step Process:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Navigate to the Tracker Capture app from the DHIS2 main menu</li>
                  <li>Select your organization unit (facility/clinic)</li>
                  <li>Choose the appropriate program (e.g., "Family Planning Services")</li>
                  <li>Click "Register" to create a new tracked entity (client)</li>
                  <li>Fill in required client information:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Unique identifier or client ID</li>
                      <li>Name and demographics</li>
                      <li>Contact information</li>
                      <li>Enrollment date</li>
                    </ul>
                  </li>
                  <li>Save the registration</li>
                </ol>
                <p className="mt-4">
                  <strong className="text-foreground">Ananya's Experience:</strong> She carefully enters Maya's information, 
                  ensuring all required fields are complete. She double-checks the client ID to avoid duplicates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. Recording Service Events
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  After registration, you record specific events (visits, services provided) for the client. 
                  Each event represents a stage in the program.
                </p>
                <p className="font-semibold text-foreground">Recording Maya's First Visit:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Open Maya's client record</li>
                  <li>Select "Add new event" or click on the relevant program stage</li>
                  <li>Enter event date (visit date)</li>
                  <li>Complete data elements such as:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Service type provided</li>
                      <li>Method chosen (e.g., contraceptive type)</li>
                      <li>Clinical observations</li>
                      <li>Follow-up date</li>
                    </ul>
                  </li>
                  <li>Complete and save the event</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                4. Editing and Updating Records
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Sometimes you need to update client information or correct data entry errors. DHIS2 allows you to edit 
                  both client attributes and event data.
                </p>
                <p className="font-semibold text-foreground">How to Edit:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Search for the client using their ID or name</li>
                  <li>Open their record</li>
                  <li>Click the edit icon on the client profile or specific event</li>
                  <li>Make necessary changes</li>
                  <li>Save updates</li>
                </ul>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> Always verify information before saving. Changes to tracker data should be 
                    documented according to your organization's data quality protocols.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                5. Searching for Clients
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <div className="mb-4">
                  <VideoEmbed title="Logging and Searching for an Existing Client" videoId="_T3WKaRYhyg" />
                </div>
                <p>
                  When a client returns for follow-up, you need to quickly find their record. DHIS2 provides multiple search options.
                </p>
                <p className="font-semibold text-foreground">Search Methods:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Unique ID search:</strong> Enter the client's ID number (fastest method)</li>
                  <li><strong>Attribute search:</strong> Search by name, phone number, or other attributes</li>
                  <li><strong>List view:</strong> Browse recent registrations</li>
                  <li><strong>Advanced filters:</strong> Combine multiple search criteria</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Pro Tip:</strong> Always verify client identity before entering new data 
                  to prevent duplicate records.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Download Resources */}
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
                <span>Module 1 Script - Tracker Data Entry</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Quick Reference Guide - Tracker Module</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>Tracker Data Entry Checklist</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Check */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="What is the main purpose of the DHIS2 tracker module?"
              options={[
                "To enter monthly aggregate totals",
                "To follow individual clients over time across multiple services",
                "To create data visualizations",
                "To generate automated reports",
              ]}
              correctAnswer={1}
              explanation="The tracker module is specifically designed to follow individual clients over time, capturing their journey through various services and visits, unlike aggregate data which only shows totals."
            />
            
            <QuizQuestion
              question="What should you do before recording a service event for a returning client?"
              options={[
                "Create a new registration",
                "Search for and open their existing record",
                "Enter data in the aggregate module instead",
                "Wait for the supervisor to approve",
              ]}
              correctAnswer={1}
              explanation="Always search for and open the client's existing record to maintain data continuity and avoid duplicate registrations."
            />

            <QuizQuestion
              question="Why is it important to verify client information before saving?"
              options={[
                "To save time during data entry",
                "To prevent duplicate records and ensure data quality",
                "Because DHIS2 requires it",
                "To impress supervisors",
              ]}
              correctAnswer={1}
              explanation="Verifying information prevents duplicate records, maintains data quality, and ensures accurate tracking of individual clients over time."
            />
          </div>
        </section>

        {/* Module Completion */}
        <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Complete Module 1</h3>
                <p className="text-sm text-muted-foreground">Mark this module as complete and continue to Module 2</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link to="/modules">Back to Modules</Link>
                </Button>
                <Button asChild>
                  <Link to="/modules/2">Next: Module 2</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Module1;
