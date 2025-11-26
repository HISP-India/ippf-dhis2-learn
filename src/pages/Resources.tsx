import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, CheckSquare, BookOpen, Database } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Module Scripts",
      icon: FileText,
      items: [
        { name: "Module 1 - Tracker Data Entry Script", size: "2.3 MB" },
        { name: "Module 2 - Tracker to Aggregate Script", size: "1.8 MB" },
        { name: "Module 3 - Aggregate Data Entry Script", size: "2.1 MB" },
        { name: "Module 4 - Data Visualizer Script", size: "2.5 MB" },
        { name: "Module 5 - Dashboard Creation Script", size: "2.2 MB" },
        { name: "Module 6 - Data Use Cycle Script", size: "2.7 MB" },
      ],
    },
    {
      category: "Job Aids & Checklists",
      icon: CheckSquare,
      items: [
        { name: "Tracker Data Entry Quick Reference", size: "850 KB" },
        { name: "Aggregation Process Checklist", size: "620 KB" },
        { name: "Data Quality Checklist", size: "740 KB" },
        { name: "Dashboard Design Checklist", size: "690 KB" },
        { name: "Data Use Decision Framework", size: "1.1 MB" },
      ],
    },
    {
      category: "Reference Guides",
      icon: BookOpen,
      items: [
        { name: "DHIS2 Tracker Module User Guide", size: "4.5 MB" },
        { name: "Data Visualizer Complete Guide", size: "3.8 MB" },
        { name: "Dashboard Best Practices", size: "2.9 MB" },
        { name: "CSV Export & Import Guide", size: "2.2 MB" },
      ],
    },
    {
      category: "Data Dictionaries & SOPs",
      icon: Database,
      items: [
        { name: "IPPF DHIS2 Data Dictionary", size: "5.2 MB" },
        { name: "Data Entry SOP", size: "1.6 MB" },
        { name: "Data Validation SOP", size: "1.4 MB" },
        { name: "Reporting Guidelines", size: "2.0 MB" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Training Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download scripts, job aids, checklists, and reference materials to support your DHIS2 work
          </p>
        </div>

        <div className="grid gap-8">
          {resources.map((section, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{section.category}</CardTitle>
                </div>
                <CardDescription>
                  Click any resource below to download
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.items.map((item, itemIndex) => (
                    <Button
                      key={itemIndex}
                      variant="outline"
                      className="justify-between h-auto py-4 px-4 text-left"
                    >
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <span className="font-medium text-sm truncate">{item.name}</span>
                        <span className="text-xs text-muted-foreground">PDF • {item.size}</span>
                      </div>
                      <Download className="h-4 w-4 ml-3 flex-shrink-0" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="mt-8 border-2 border-info/50 bg-gradient-to-br from-info/5 to-background">
          <CardHeader>
            <CardTitle className="font-heading">Need More Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              For additional resources, DHIS2 documentation, or technical support, visit the following:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-between">
                <span>DHIS2 Official Documentation</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-between">
                <span>IPPF Data Use Guidelines</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-between">
                <span>Video Tutorial Playlist</span>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-between">
                <span>HISP India Support Resources</span>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Resources;
