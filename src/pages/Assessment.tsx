import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      question: "What is the primary purpose of the DHIS2 tracker module?",
      options: [
        "To enter monthly aggregate totals",
        "To follow individual clients over time",
        "To create data visualizations",
        "To manage user permissions",
      ],
      correctAnswer: 1,
    },
    {
      question: "When should you run the tracker-to-aggregate process?",
      options: [
        "Before entering any tracker data",
        "Every hour automatically",
        "After all data entry for the period is complete",
        "Only at year-end",
      ],
      correctAnswer: 2,
    },
    {
      question: "What must you do before marking an aggregate dataset as complete?",
      options: [
        "Print a hard copy",
        "Enter all data and run validation",
        "Get supervisor signature",
        "Wait 24 hours",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which chart type is best for showing trends over time?",
      options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"],
      correctAnswer: 2,
    },
    {
      question: "Where should the most important metrics be placed on a dashboard?",
      options: [
        "At the bottom",
        "Hidden in filters",
        "At the top for immediate visibility",
        "In random positions",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the primary purpose of CSV export in DHIS2?",
      options: [
        "To delete old data",
        "To create colorful dashboards",
        "For national reporting and global data consolidation",
        "To change user passwords",
      ],
      correctAnswer: 2,
    },
    {
      question: "How do you avoid creating duplicate client records?",
      options: [
        "Always create new registrations",
        "Search for existing records before registering",
        "Use random ID numbers",
        "Don't register anyone",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a key dimension of data quality?",
      options: [
        "Dashboard color scheme",
        "Chart animation speed",
        "Completeness and accuracy",
        "Font size",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which is NOT a benefit of using dashboards?",
      options: [
        "Quick overview of key metrics",
        "Automatic data correction",
        "Easy comparison of indicators",
        "Visual communication of trends",
      ],
      correctAnswer: 1,
    },
    {
      question: "What should you do if aggregation totals don't match manual counts?",
      options: [
        "Ignore the difference",
        "Change the manual count",
        "Investigate tracker data and aggregation settings",
        "Delete all data and start over",
      ],
      correctAnswer: 2,
    },
    {
      question: "How can data be used to improve programs?",
      options: [
        "Store it and forget about it",
        "Only show it to donors",
        "Identify gaps and allocate resources accordingly",
        "Print it and file it away",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the difference between an indicator and a data element?",
      options: [
        "There is no difference",
        "Indicators are calculated, data elements are raw values",
        "Indicators are entered manually",
        "Data elements can't be used in charts",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(12).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 70;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <Card className={`border-2 ${passed ? 'border-success' : 'border-destructive'}`}>
            <CardHeader>
              <div className="text-center space-y-4">
                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                  passed ? 'bg-success/20' : 'bg-destructive/20'
                }`}>
                  {passed ? (
                    <Award className="h-12 w-12 text-success" />
                  ) : (
                    <XCircle className="h-12 w-12 text-destructive" />
                  )}
                </div>
                <CardTitle className="text-3xl font-heading">
                  {passed ? 'Congratulations!' : 'Keep Learning!'}
                </CardTitle>
                <p className="text-muted-foreground">
                  {passed 
                    ? 'You have successfully completed the IPPF DHIS2 Training!'
                    : 'You need 70% to pass. Review the modules and try again.'}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{percentage}%</div>
                <p className="text-muted-foreground">
                  {score} out of {questions.length} questions correct
                </p>
                <Progress value={percentage} className="mt-4" />
              </div>

              <div className="space-y-3">
                {questions.map((q, index) => {
                  const isCorrect = selectedAnswers[index] === q.correctAnswer;
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 flex items-start gap-3 ${
                        isCorrect ? 'border-success bg-success/5' : 'border-destructive bg-destructive/5'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm mb-1">Question {index + 1}</p>
                        <p className="text-sm text-muted-foreground">{q.question}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {passed && (
                  <Button size="lg" className="gap-2">
                    <Award className="h-5 w-5" />
                    Download Certificate
                  </Button>
                )}
                <Button onClick={handleReset} variant="outline" size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} />
          <h1 className="text-3xl md:text-4xl font-heading font-bold">
            Final Assessment
          </h1>
          <p className="text-muted-foreground">
            Test your knowledge and earn your completion certificate. You need 70% to pass.
          </p>
        </div>

        <Card className="border-2 mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-heading">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString() || ""}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Previous
          </Button>
          <div className="flex gap-3">
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswers.some((a) => a === null)}
              >
                Submit Assessment
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === null}>
                Next Question
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;
