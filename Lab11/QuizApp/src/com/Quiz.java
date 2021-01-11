package com;

public class Quiz {

    private static String[] questions = {
            "3, 1, 4, 1, 5", //pi
            "1, 1, 2, 3, 5", //fibonacci
            "1, 4, 9, 16, 25", //squares
            "2, 3, 5, 7, 11", //primes
            "1, 2, 4, 8, 16" //powers of 2
    };
    private static int[] answers = { 9, 8, 36, 13, 32 }; // answers

    private int score = 0;
    private int indexOfCurrentQuestion = 0;

    public int getNumCorrect() {
        return score;
    }

    public void scoreAnswer() {
        score += 1;
        goNextQuestion();
    }

    public void goNextQuestion() {
        if (indexOfCurrentQuestion < questions.length) indexOfCurrentQuestion += 1;
        else indexOfCurrentQuestion = 0;
    }

    public Boolean isCorrect(String val) {
        try {
            int ans = Integer.parseInt(val);
            return answers[indexOfCurrentQuestion] == ans;
        } catch (Exception exception) {
            return false;
        }
    }

    public int getNumQuestions() {
        return questions.length;
    }

    public String getCurrentQuestion() {
        return questions[indexOfCurrentQuestion];
    }

    public int getCurrentQuestionIndex() {
        return indexOfCurrentQuestion;
    }
}
