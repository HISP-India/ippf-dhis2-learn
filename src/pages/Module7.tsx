import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Target, BookOpen, AlertCircle, FileCheck, BarChart3, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Module7 = () => {
  const objectives = [
    "Understand the key objectives of IPPF's RDQA tool",
    "Conduct data verification (Part 1) and systems assessments (Part 2)",
    "Interpret RDQA dashboards and summary outputs",
    "Develop site-level and consolidated action plans",
    "Apply RDQA methodology across service delivery points and aggregation levels",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Module Header */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-semibold">Module 7</Badge>
            <Badge variant="secondary">60 minutes</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            RDQA: Routine Data Quality Assessment
          </h1>
          <p className="text-lg text-muted-foreground">
            Master IPPF's RDQA tool to verify data accuracy, assess system functionality, and develop actionable improvement plans for data quality excellence
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
          <VideoEmbed title="RDQA Overview and Methodology" placeholder />
        </section>

        {/* What is RDQA */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-primary" />
            What is RDQA?
          </h2>
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                RDQA (Routine Data Quality Assessment) is IPPF's systematic approach to ensuring the accuracy, 
                completeness, and reliability of health information data. It combines data verification with 
                systems assessment to identify gaps and drive continuous improvement.
              </p>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
                <h3 className="font-heading font-bold text-lg mb-3 text-center">RDQA Approach</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <p className="font-semibold">Verify</p>
                    <p className="text-sm text-muted-foreground">Check data accuracy</p>
                  </div>
                  <div className="hidden md:block text-2xl text-muted-foreground">→</div>
                  <div className="flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <p className="font-semibold">Assess</p>
                    <p className="text-sm text-muted-foreground">Evaluate systems</p>
                  </div>
                  <div className="hidden md:block text-2xl text-muted-foreground">→</div>
                  <div className="flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <p className="font-semibold">Improve</p>
                    <p className="text-sm text-muted-foreground">Develop action plans</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="importance" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Why is Data Quality Critical?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Evidence-based decisions:</strong> Accurate data enables informed program planning and resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Accountability:</strong> Reliable reporting to donors, stakeholders, and national health systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Service improvement:</strong> Identifying gaps and strengthening health service delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Global standards:</strong> Meeting international data quality benchmarks</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-how" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                When and How RDQA is Used
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p><strong>Frequency:</strong> RDQA should be conducted at least annually, with follow-up assessments as needed based on findings.</p>
                <p><strong>Who conducts it:</strong> Trained M&E staff, program managers, or external assessors who are independent from data collection.</p>
                <p><strong>Where it's applied:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Service delivery points (clinics, health centers)</li>
                  <li>Intermediate aggregation levels (district offices)</li>
                  <li>National/headquarters level</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* RDQA Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-primary" />
            RDQA Methodology
          </h2>
          
          <Tabs defaultValue="part1" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="part1">Part 1: Data Verification</TabsTrigger>
              <TabsTrigger value="part2">Part 2: Systems Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="part1" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Part 1: Data Verification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Data verification compares reported data against source documents to calculate accuracy rates 
                    and identify discrepancies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">Step 1: Documentation Review</h4>
                      <p className="text-sm text-muted-foreground">
                        Gather all source documents: client registers, tally sheets, service records, 
                        and DHIS2 reports for the selected time period.
                      </p>
                    </div>
                    
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">Step 2: Recount Reported Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Manually recount key indicators from source documents. Compare recounted values 
                        with what was reported in DHIS2.
                      </p>
                    </div>
                    
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">Step 3: Calculate Data Verification Factor (DVF)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        DVF = (Recounted Value / Reported Value) × 100
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• DVF of 95-105% = Good accuracy</li>
                        <li>• DVF below 95% or above 105% = Investigation needed</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">Step 4: Cross-Check with Secondary Sources</h4>
                      <p className="text-sm text-muted-foreground">
                        Where possible, triangulate data with stock records, pharmacy logs, 
                        or partner organization reports.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-foreground">Figure 1 Reference:</strong> The RDQA Excel tool 
                      provides structured templates for documenting verification results and calculating DVF automatically.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="part2" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Part 2: Systems Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Systems assessment evaluates the functionality of data management processes across six key areas.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Six Functional Areas:</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">1. M&E Structure & Functions</h5>
                        <p className="text-xs text-muted-foreground">Staffing, roles, supervision</p>
                      </div>
                      
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">2. Indicator Definitions & Guidelines</h5>
                        <p className="text-xs text-muted-foreground">Clear documentation and training materials</p>
                      </div>
                      
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">3. Data Collection & Reporting</h5>
                        <p className="text-xs text-muted-foreground">Forms, tools, and timeliness</p>
                      </div>
                      
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">4. Data Management Processes</h5>
                        <p className="text-xs text-muted-foreground">Entry, storage, security, backup</p>
                      </div>
                      
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">5. Data Quality Assurance</h5>
                        <p className="text-xs text-muted-foreground">Validation rules, audits, feedback loops</p>
                      </div>
                      
                      <div className="p-4 border-2 rounded-lg">
                        <h5 className="font-semibold text-sm mb-1">6. Data Use & Dissemination</h5>
                        <p className="text-xs text-muted-foreground">Analysis, dashboards, decision-making</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-secondary/50 rounded-lg border-2">
                    <h4 className="font-semibold mb-2">Scoring Method (1-3 Scale):</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">1</Badge>
                        <span className="text-muted-foreground">Not functioning or non-existent</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">2</Badge>
                        <span className="text-muted-foreground">Partially functioning, needs improvement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success text-success-foreground">3</Badge>
                        <span className="text-muted-foreground">Fully functioning and effective</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-foreground">Site Applicability:</strong> Not all questions apply to every level. 
                      The tool indicates whether questions are for Service Sites, District offices, or HQ.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                    <p className="text-sm">
                      <strong className="text-foreground">Figure 2 Reference:</strong> The systems assessment 
                      section in the RDQA Excel tool guides you through scoring each functional area.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* RDQA Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">RDQA Levels of Assessment</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border-2 border-primary rounded-lg bg-gradient-to-br from-primary/5 to-background">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-heading font-bold mb-2">Service Delivery Point</h3>
                  <Badge className="mb-3 bg-error text-error-foreground">Mandatory</Badge>
                  <p className="text-sm text-muted-foreground">
                    Clinics and health centers where services are directly provided to clients. 
                    Data originates here in registers and forms.
                  </p>
                </div>
                
                <div className="p-6 border-2 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-3 font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-heading font-bold mb-2">Intermediate Aggregation Level</h3>
                  <Badge variant="secondary" className="mb-3">Optional</Badge>
                  <p className="text-sm text-muted-foreground">
                    District or regional offices where data from multiple service points is aggregated 
                    and reviewed before national reporting.
                  </p>
                </div>
                
                <div className="p-6 border-2 border-primary rounded-lg bg-gradient-to-br from-primary/5 to-background">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-heading font-bold mb-2">National/Headquarters</h3>
                  <Badge className="mb-3 bg-error text-error-foreground">Mandatory</Badge>
                  <p className="text-sm text-muted-foreground">
                    National Member Association headquarters responsible for final data consolidation, 
                    validation, and global reporting.
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border-2 border-primary/20">
                <h4 className="font-semibold mb-3 text-center">Data Flow Across Levels</h4>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-sm">
                  <div>Service Points<br/>collect data</div>
                  <div className="text-2xl text-primary">→</div>
                  <div>District<br/>aggregates</div>
                  <div className="text-2xl text-primary">→</div>
                  <div>National HQ<br/>validates & reports</div>
                  <div className="text-2xl text-primary">→</div>
                  <div>Global DHIS2<br/>consolidates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RDQA Excel Tool Walkthrough */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            RDQA Excel Tool Walkthrough
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="start-tab" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                START Tab
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  The START tab is your entry point. Here you'll enter basic information about the RDQA:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Country and Member Association name</li>
                  <li>Assessment period (month/year)</li>
                  <li>Names of assessors</li>
                  <li>Date of assessment</li>
                </ul>
                <p className="text-sm">
                  This information auto-populates into summary reports and ensures proper documentation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="instruction-tab" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Instruction Tab
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Contains detailed guidance on how to use the tool, including:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Step-by-step instructions for each section</li>
                  <li>How to interpret scoring and color codes</li>
                  <li>Tips for conducting effective assessments</li>
                  <li>Common mistakes to avoid</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="site-tabs" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Site-Level Assessment Tabs
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  Each service delivery site gets its own tab where you record:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Site name and location details</li>
                  <li>Data verification results (reported vs. recounted values)</li>
                  <li>DVF calculations for each indicator</li>
                  <li>Systems assessment scores (1-3) for all six functional areas</li>
                  <li>Notes and observations</li>
                </ul>
                <p className="text-sm">
                  The tool automatically calculates averages and flags data quality issues.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="district-summary" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                District & Regional Summaries
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  These tabs automatically aggregate results from all service sites in a district or region:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Average DVF by indicator across all sites</li>
                  <li>Average systems assessment scores by functional area</li>
                  <li>Identification of best and worst performing sites</li>
                  <li>Trend comparisons if previous RDQA data is available</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="global-dashboard" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Global Dashboard
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  A visual summary of RDQA findings at the national level, including:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Charts showing overall data verification performance</li>
                  <li>Heat maps of systems assessment scores</li>
                  <li>Comparison across sites and time periods</li>
                  <li>Key recommendations highlighted</li>
                </ul>
                <p className="text-sm">
                  This dashboard is ideal for presentations to senior management and stakeholders.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="action-plan-tab" className="border-2 rounded-lg px-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Final Action Plan Tab
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pt-4">
                <p>
                  The consolidated action plan brings together improvement recommendations from all sites:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Priority ranking of identified issues</li>
                  <li>Specific, measurable actions to address each issue</li>
                  <li>Responsible persons and timelines</li>
                  <li>Required resources and budget estimates</li>
                  <li>Follow-up RDQA dates</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Interpreting RDQA Outputs */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Interpreting RDQA Outputs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Figure 3: Service Delivery Site Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border-2 border-dashed">
                  [Visualization Placeholder]
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Insights:</strong> Shows DVF for each indicator at a single site, 
                  with color coding (green = good, yellow = caution, red = action needed).
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">How to Use:</strong> Identify which indicators have accuracy issues 
                  and investigate root causes with site staff.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Figure 4: Site Summary Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border-2 border-dashed">
                  [Visualization Placeholder]
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Insights:</strong> Combines data verification and systems 
                  assessment scores in a single view for one site.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">How to Use:</strong> Develop site-specific action plans addressing 
                  both data accuracy and system functionality gaps.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Figure 5: District Summary Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border-2 border-dashed">
                  [Visualization Placeholder]
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Insights:</strong> Aggregates performance across all sites 
                  in a district, highlighting trends and outliers.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">How to Use:</strong> District managers can identify which sites 
                  need the most support and allocate supervision resources accordingly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Figure 6: Global Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border-2 border-dashed">
                  [Visualization Placeholder]
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Insights:</strong> National-level overview with comparisons 
                  across regions, trends over time, and priority action areas.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">How to Use:</strong> Present to leadership and donors to demonstrate 
                  data quality improvement efforts and justify resource requests.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors md:col-span-2">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Figure 7: System Assessment Summary Table</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border-2 border-dashed">
                  [Visualization Placeholder]
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Insights:</strong> Detailed breakdown of scores for each of 
                  the six functional areas, showing strengths and weaknesses in systems.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">How to Use:</strong> Prioritize system strengthening activities 
                  based on lowest-scoring functional areas. Track improvement over multiple RDQA cycles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Developing RDQA Action Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Developing RDQA Action Plans</h2>
          
          <Tabs defaultValue="site-level" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="site-level">Site-Level Action Plans</TabsTrigger>
              <TabsTrigger value="consolidated">Consolidated Action Plan</TabsTrigger>
            </TabsList>
            
            <TabsContent value="site-level" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Site-Level Action Plans (Figure 8)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Each site should develop a specific action plan based on its RDQA findings. 
                    Effective action plans follow the SMART framework.
                  </p>
                  
                  <div className="p-4 bg-secondary/50 rounded-lg border-2">
                    <h4 className="font-semibold mb-3">Action Plan Template Components:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Issue identified:</strong> Clear description of the data quality problem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Root cause:</strong> Why is this happening?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Recommendation:</strong> Specific action to address the issue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Responsible person:</strong> Who will lead implementation?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Timeline:</strong> Deadline for completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <span><strong>Resources needed:</strong> Budget, materials, training</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-error rounded-lg bg-error/5">
                      <h5 className="font-semibold text-sm mb-2 text-error">❌ Vague Recommendation</h5>
                      <p className="text-xs text-muted-foreground italic">
                        "Improve data quality by training staff"
                      </p>
                    </div>
                    
                    <div className="p-4 border-2 border-success rounded-lg bg-success/5">
                      <h5 className="font-semibold text-sm mb-2 text-success">✅ Clear Recommendation</h5>
                      <p className="text-xs text-muted-foreground">
                        "Conduct a 2-day refresher training for 5 data clerks on proper tally sheet 
                        completion and data entry procedures by end of Q2, led by M&E Officer"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="consolidated" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Consolidated RDQA Final Action Plan (Figure 9)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The consolidated action plan brings together recommendations from all assessed sites 
                    and prioritizes interventions at the national level.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">How Recommendations Roll Up:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>1. Compile all site-level action plans</li>
                        <li>2. Identify common issues across multiple sites</li>
                        <li>3. Group similar recommendations together</li>
                        <li>4. Prioritize based on:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li>• Severity of data quality impact</li>
                            <li>• Number of sites affected</li>
                            <li>• Feasibility and cost</li>
                            <li>• Alignment with strategic priorities</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-primary/10 border-2 border-primary/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Importance of Follow-up RDQAs</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Schedule the next RDQA cycle (typically 12 months later) to:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Verify that recommended actions were implemented</li>
                        <li>• Measure improvement in data quality scores</li>
                        <li>• Identify new or emerging data quality issues</li>
                        <li>• Sustain momentum for continuous improvement</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-2 rounded-lg">
                      <h4 className="font-semibold mb-2">Resource Planning & Leadership Approval</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Before finalizing the action plan:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Estimate total budget needed for all recommendations</li>
                        <li>• Identify potential funding sources (internal budget, donor grants)</li>
                        <li>• Present to senior leadership for endorsement</li>
                        <li>• Secure commitment from all responsible departments</li>
                        <li>• Establish quarterly review meetings to track progress</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Key Takeaway */}
        <Card className="mb-12 border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Key Takeaway</h3>
                <p className="text-muted-foreground">
                  Module 7 equips you with IPPF's RDQA methodology to systematically verify data accuracy, 
                  assess system functionality, and develop actionable improvement plans. By conducting regular 
                  RDQAs, you ensure that your organization's health data is reliable, usable, and contributes 
                  to evidence-based decision-making at all levels — from service delivery sites to global reporting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloadable Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            Downloadable Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">RDQA Excel Tool</h4>
                    <p className="text-sm text-muted-foreground">Complete assessment template</p>
                  </div>
                  <Badge variant="outline">XLSX</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">RDQA User Guide</h4>
                    <p className="text-sm text-muted-foreground">Step-by-step instructions</p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Assessor Checklist</h4>
                    <p className="text-sm text-muted-foreground">Pre-assessment preparation guide</p>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Action Plan Templates</h4>
                    <p className="text-sm text-muted-foreground">Site and national level templates</p>
                  </div>
                  <Badge variant="outline">DOCX</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Knowledge Check */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">Knowledge Check</h2>
          <div className="space-y-6">
            <QuizQuestion
              question="What are the two main components of the RDQA methodology?"
              options={[
                "Data collection and data analysis",
                "Data verification and systems assessment",
                "Training and supervision",
                "Reporting and dissemination"
              ]}
              correctAnswer={1}
              explanation="RDQA consists of Part 1: Data Verification (checking accuracy of reported data) and Part 2: Systems Assessment (evaluating the functionality of data management systems)."
            />

            <QuizQuestion
              question="A Data Verification Factor (DVF) of 110% indicates:"
              options={[
                "Perfect data quality",
                "Good accuracy within acceptable range",
                "Potential over-reporting that needs investigation",
                "The calculation was done incorrectly"
              ]}
              correctAnswer={2}
              explanation="A DVF above 105% suggests potential over-reporting. The acceptable range is 95-105%. Values outside this range require investigation to identify and address the root cause."
            />

            <QuizQuestion
              question="Which RDQA assessment levels are MANDATORY?"
              options={[
                "Only service delivery points",
                "Only national/headquarters",
                "Service delivery points AND national/headquarters",
                "All three levels: service, intermediate, and national"
              ]}
              correctAnswer={2}
              explanation="IPPF requires RDQA at both service delivery points (where data originates) and national/headquarters (where data is consolidated and reported globally). Intermediate level assessment is optional."
            />

            <QuizQuestion
              question="In the systems assessment, a score of '2' means:"
              options={[
                "Fully functioning and effective",
                "Partially functioning, needs improvement",
                "Not functioning or non-existent",
                "Not applicable to this site"
              ]}
              correctAnswer={1}
              explanation="The 1-3 scale rates system functionality: 1 = Not functioning, 2 = Partially functioning (needs improvement), 3 = Fully functioning. A score of 2 indicates room for strengthening."
            />

            <QuizQuestion
              question="What is the primary purpose of a consolidated RDQA action plan?"
              options={[
                "To punish sites with poor data quality",
                "To prioritize and coordinate improvement efforts across all sites",
                "To report findings to donors only",
                "To replace regular supervision visits"
              ]}
              correctAnswer={1}
              explanation="The consolidated action plan aggregates findings from all sites, identifies common issues, prioritizes interventions, and coordinates national-level support to improve data quality systems organization-wide."
            />
          </div>
        </section>

        {/* Completion Section */}
        <Card className="mb-8 border-2 border-success bg-gradient-to-br from-success/5 to-background">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-success" />
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold">Ready to Complete Module 7?</h3>
            <p className="text-muted-foreground">
              Mark this module as complete to track your progress and unlock the final assessment
            </p>
            <Button size="lg" className="font-semibold">
              Mark Module Complete
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap justify-between gap-4">
          <Button variant="outline" asChild>
            <Link to="/modules/6">← Previous: CSV Export & Import</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/modules">All Modules</Link>
          </Button>
          <Button asChild>
            <Link to="/assessment">Final Assessment →</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Module7;
