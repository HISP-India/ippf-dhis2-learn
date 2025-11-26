import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Video, Award, User } from "lucide-react";

const About = () => {
  const audience = [
    "Service Providers",
    "Data Entry Staff",
    "M&E Officers",
    "Program Managers",
    "Regional Coordinators",
    "Technical Advisors",
  ];

  const learningApproach = [
    {
      icon: Video,
      title: "Interactive Videos",
      description: "Engaging video content demonstrating real DHIS2 workflows",
    },
    {
      icon: Users,
      title: "Scenario-Based Learning",
      description: "Follow Ananya's journey through practical, real-world situations",
    },
    {
      icon: Award,
      title: "Knowledge Checks",
      description: "Test your understanding with quizzes after each module",
    },
  ];

  const outcomes = [
    "Navigate and export data between DHIS2 systems",
    "Conduct routine data quality assessments (RDQA)",
    "Develop data improvement action plans",
    "Apply data quality principles in daily work",
    "Use data for evidence-based decision making",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            About the Training
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive learning experience designed to empower IPPF staff with essential DHIS2 skills
          </p>
        </div>

        {/* Who This Training Is For */}
        <section className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Who This Training Is For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                This training is designed for IPPF staff and partners at all levels who work with data in DHIS2:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {audience.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learning Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            Our Learning Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningApproach.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Learning Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                By completing this training, you will be able to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meet Ananya */}
        <section>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Meet Ananya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <User className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Throughout this training, you'll follow <strong className="text-foreground">Ananya</strong>, 
                    a dedicated health data officer at an IPPF Member Association. Ananya's experiences mirror the 
                    real-world challenges and scenarios you might encounter in your own work.
                  </p>
                  <p className="text-muted-foreground">
                    As Ananya progresses through different data management tasks—from registering new clients to 
                    creating dashboards for program managers—you'll learn alongside her, gaining practical insights 
                    and building confidence in using DHIS2 effectively.
                  </p>
                  <div className="p-4 rounded-lg bg-info/10 border border-info/20">
                    <p className="text-sm text-foreground">
                      <strong>Pro Tip:</strong> Ananya's scenarios are based on actual IPPF workflows. 
                      Pay attention to her problem-solving approaches—they'll help you in your daily work!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
