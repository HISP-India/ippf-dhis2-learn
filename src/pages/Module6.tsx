import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Download, Upload, CheckCircle2, Target, BookOpen, FileSpreadsheet, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Module6 = () => {
  const objectives = [
    "Export service data from DHIS2 as a CSV file",
    "Navigate the Reports and Standard Reports sections",
    "Import CSV files into the Global DHIS2 system",
    "Configure correct format and ID schemes (Code / UID)",
    "Understand when and why CSV export is needed for reporting",
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
            CSV Export & Import to Global DHIS2
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to export service data from DHIS2 into CSV format and import it into the Global DHIS2 system for national-level reporting and global consolidation
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
          <VideoEmbed title="CSV Export & Import Overview" placeholder />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lesson Content
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                1. How to Export Data as CSV
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Exporting data from DHIS2 to CSV format is essential when you need to share large datasets 
                  for national-level reporting, global consolidation, or external analysis.
                </p>
                <p className="font-semibold text-foreground">Step-by-Step Process:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Go to Reports:</strong> Navigate to the Reports module in the main menu</li>
                  <li><strong>Open Standard Reports:</strong> Select "Standard Reports" from the submenu</li>
                  <li><strong>Select CSV Export to Global IPPF:</strong> Choose the CSV export option designed for global reporting</li>
                  <li><strong>Choose the year:</strong> Select the reporting period (year) for which you want to export data</li>
                  <li><strong>Select organisation unit group:</strong> Choose the facilities or regions to include in the export</li>
                  <li><strong>Download the CSV file:</strong> Click the download button and save the file to your computer</li>
                </ol>
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Important:</strong> CSV files contain raw data in a standardized format that can be opened in Excel, imported into databases, or uploaded to other DHIS2 instances.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                2. How to Import CSV into Global DHIS2
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Once you have your CSV file, you need to import it into the Global DHIS2 system to contribute 
                  your country data to the global database.
                </p>
                <p className="font-semibold text-foreground">Import Process:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><strong>Open the Export/Import module:</strong> Navigate to Import/Export in the main menu</li>
                  <li><strong>Select Data Import:</strong> Choose the "Data Import" option from the submenu</li>
                  <li><strong>Upload the CSV file:</strong> Click "Choose file" and select your downloaded CSV</li>
                  <li><strong>Choose the correct format:</strong> Select "CSV" as the file format</li>
                  <li><strong>Set ID schemes:</strong> Choose "Code" or "UID" depending on your system configuration (typically "Code" for IPPF)</li>
                  <li><strong>Run the import:</strong> Click "Import" and wait for the process to complete</li>
                  <li><strong>Verify import success:</strong> Check the import summary to ensure all records were processed correctly</li>
                </ol>
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Pro Tip:</strong> Always review the import summary report. It will show you how many records were imported successfully and flag any errors that need attention.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                3. When and Why CSV Export is Needed
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>Understanding when to use CSV export and import helps you choose the right data sharing method for each situation.</p>
                <p className="font-semibold text-foreground">Common Use Cases:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>National-level reporting:</strong> Consolidate data from multiple facilities or regions for government reporting requirements</li>
                  <li><strong>Global data consolidation:</strong> Share country-level data with IPPF's Global DHIS2 system for international reporting and analysis</li>
                  <li><strong>Sharing with external teams:</strong> Provide data to partners, donors, or research teams who need access to raw data</li>
                  <li><strong>Advanced analysis in Excel:</strong> Export data for custom analysis, calculations, or visualizations not available in DHIS2</li>
                  <li><strong>Data backup and archiving:</strong> Create offline copies of important datasets for record-keeping</li>
                  <li><strong>System migration:</strong> Transfer data between different DHIS2 instances during system upgrades or consolidations</li>
                </ul>
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg mt-4">
                  <p className="text-sm text-foreground">
                    <strong>Data Privacy Note:</strong> CSV files contain raw data. Always ensure you have proper authorization before exporting and sharing sensitive health information.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <AlertCircle className="h-5 w-5 text-primary" />
              Key Takeaway
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground font-medium">
              Module 6 helps you move data from the country system to the global system in a clean, standardised CSV format — 
              ensuring that local insights become part of global reporting.
            </p>
          </CardContent>
        </Card>

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
                <span>Module 6 Script - CSV Export & Import Guide</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>CSV Format Template</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                <span>ID Scheme Reference Guide</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="What is the first step to export data from DHIS2 as CSV?"
              options={[
                "Open the dashboard",
                "Go to Reports and select Standard Reports",
                "Upload a file",
                "Run data validation",
              ]}
              correctAnswer={1}
              explanation="To export data as CSV, you must first navigate to Reports, then open Standard Reports, and select the CSV Export option."
            />
            
            <QuizQuestion
              question="Which ID scheme is typically used for IPPF CSV imports?"
              options={[
                "Name",
                "Code",
                "Random ID",
                "Email address",
              ]}
              correctAnswer={1}
              explanation="IPPF typically uses 'Code' as the ID scheme for CSV imports to ensure consistent data mapping across systems."
            />

            <QuizQuestion
              question="Why would you export data to CSV format?"
              options={[
                "To make dashboards colorful",
                "For national reporting and global data consolidation",
                "To delete old records",
                "To change user permissions",
              ]}
              correctAnswer={1}
              explanation="CSV export is used for national-level reporting, global consolidation, sharing data with external teams, and advanced analysis."
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
