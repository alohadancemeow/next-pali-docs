import { Question } from "@/app/(home)/quiz/components/QuizContents";

export const getStats = (
  questions: Question[],
  answers: Record<string, string>
) => {
  const answeredQuestionsCount = Object.keys(answers).length;
  const progressPercentage = (answeredQuestionsCount / questions.length) * 100;
  const allQuestionsAnswered =
    questions.length > 0 && answeredQuestionsCount === questions.length;

  const score = getScore(questions, answers);

  return {
    answeredQuestionsCount,
    progressPercentage,
    allQuestionsAnswered,
    score,
  };
};

const getScore = (questions: Question[], answers: Record<string, string>) => {
  let correct = 0;
  questions.forEach((question) => {
    // Only count as correct if the answer matches the correct option
    // "time-expired" will be counted as incorrect
    if (answers[question.id] === question.answerId) {
      correct++;
    }
  });

  return {
    correct,
    total: questions.length,
    percentage: Math.round((correct / questions.length) * 100),
  };
};
