import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Help = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "I can't log in to DHIS2. What should I do?",
      answer: "First, verify you're using the correct URL and credentials. If you've forgotten your password, contact your system administrator. Make sure your internet connection is stable and try clearing your browser cache.",
    },
    {
      question: "How do I search for an existing client in tracker?",
      answer: "Open the Tracker Capture app, select your facility and program, then use the search function at the top. You can search by client ID, name, or other registered attributes. Always search before creating a new registration to avoid duplicates.",
    },
    {
      question: "My aggregation totals don't match my manual count. What's wrong?",
      answer: "Check that: 1) All tracker data is properly entered and events are complete, 2) You're running aggregation for the correct period and facility, 3) Program rules are configured correctly. Contact your system administrator if issues persist.",
    },
    {
      question: "Can I edit data after marking a dataset as complete?",
      answer: "By default, completing a dataset locks it from further editing. You'll need special permissions or need to ask a supervisor to reopen the dataset. Always validate thoroughly before marking complete.",
    },
    {
      question: "How do I save a visualization to my dashboard?",
      answer: "After creating a chart in Data Visualizer, click 'Save' and give it a name. Then open the Dashboard app, click '+ Add item', and select your saved visualization from the list.",
    },
    {
      question: "What's the difference between an indicator and a data element?",
      answer: "A data element is raw data you enter (e.g., number of new clients). An indicator is a calculated value using a formula (e.g., percentage coverage = new clients / target population × 100).",
    },
    {
      question: "My dashboard looks cluttered. How can I improve it?",
      answer: "Focus on 5-7 key visualizations maximum. Remove less important items. Use consistent colors and clear titles. Arrange items logically with the most important metrics at the top. Consider creating multiple focused dashboards rather than one overwhelming dashboard.",
    },
    {
      question: "How often should I check data quality?",
      answer: "Run validation checks weekly during data entry periods and before completing datasets. Conduct comprehensive data quality reviews monthly or quarterly. Address any issues immediately.",
    },
  ];

  const troubleshooting = [
    {
      issue: "Charts not displaying",
      solutions: [
        "Refresh your browser",
        "Check that you have data for the selected period",
        "Verify your internet connection",
        "Try a different browser",
      ],
    },
    {
      issue: "Data not saving",
      solutions: [
        "Check internet connectivity",
        "Verify you have edit permissions",
        "Ensure required fields are filled",
        "Try logging out and back in",
      ],
    },
    {
      issue: "Can't find my organization unit",
      solutions: [
        "Verify you're assigned to that facility in DHIS2",
        "Check with system administrator about your access",
        "Make sure you're looking in the correct level of the hierarchy",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Help & Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or contact us for technical support
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-heading font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-2 rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Common Issues & Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{item.issue}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold mb-3">Try these solutions:</p>
                  <ul className="space-y-2">
                    {item.solutions.map((solution, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-heading">Contact Support</CardTitle>
              </div>
              <CardDescription>
                Can't find what you're looking for? Send us a message and we'll help you out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue or question in detail..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Help;
