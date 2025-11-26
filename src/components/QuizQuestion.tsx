import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const QuizQuestion = ({ question, options, correctAnswer, explanation }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg font-heading flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-info mt-0.5 flex-shrink-0" />
          {question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          disabled={showResult}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-colors ${
                showResult
                  ? index === correctAnswer
                    ? "border-success bg-success/5"
                    : index === selectedAnswer
                    ? "border-destructive bg-destructive/5"
                    : "border-border"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer font-medium"
              >
                {option}
              </Label>
              {showResult && index === correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-success" />
              )}
              {showResult && index === selectedAnswer && index !== correctAnswer && (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
            </div>
          ))}
        </RadioGroup>

        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="w-full"
          >
            Check Answer
          </Button>
        ) : (
          <div className="space-y-3">
            <div
              className={`p-4 rounded-lg border-2 ${
                isCorrect
                  ? "border-success bg-success/5"
                  : "border-destructive bg-destructive/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
                <span className="font-semibold">
                  {isCorrect ? "Correct!" : "Incorrect"}
                </span>
              </div>
              {explanation && (
                <p className="text-sm text-foreground/80">{explanation}</p>
              )}
            </div>
            <Button onClick={handleReset} variant="outline" className="w-full">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
