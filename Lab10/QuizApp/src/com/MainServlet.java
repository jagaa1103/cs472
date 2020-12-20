package com;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "MainServlet")
public class MainServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        Boolean error = false;
        HttpSession session = req.getSession();
        if (session.isNew()) {
            session.setAttribute("quiz", new Quiz());
        }
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        if (req.getMethod().equals("POST")) {
            ServletContext context = req.getServletContext();
            String ans = req.getParameter("txtAnswer");
            if (quiz.isCorrect(ans)) quiz.scoreAnswer();
            else {
                error = true;
                quiz.goNextQuestion();
            }
        }
        if (quiz.getCurrentQuestionIndex() == quiz.getNumQuestions())
            getQuizResultPage(out, quiz);
        else
            genQuizPage(quiz, out, quiz.getCurrentQuestion(), error, "" + quiz.getNumCorrect());
    }

    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>	</body> ");
        out.print("</html> ");
    }

    private void getQuizResultPage(PrintWriter out, Quiz quiz) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>The Number Quiz</title> ");
        out.print("</head> ");
        out.print("<body> ");

        out.print("<h1>The Number Quiz</h1>");
        out.print("<p>");
        out.print("Your current score is " + quiz.getNumCorrect() + ".");
        out.print("</p>");
        out.print("<p>");
        out.print("You have completed the Number Quiz, with a score of " + quiz.getNumCorrect() + " out of " + quiz.getNumQuestions());
        out.print("</p>");
        out.print("</body> </html> ");
    }


    private void forwardResultPage(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = req.getRequestDispatcher("result.jsp");
        dispatcher.forward(req, resp);
    }
}
