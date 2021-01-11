package com;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
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

//    @Override
//    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        HttpSession session = req.getSession();
//        if (session.isNew()) {
//            session.setAttribute("quiz", new Quiz());
//        }
//        Quiz quiz = (Quiz) session.getAttribute("quiz");
//        String question = quiz.getCurrentQuestion();
//        System.out.println(question);
//        req.setAttribute("question", question);
//        req.setAttribute("score", "" + quiz.getNumCorrect());
//        RequestDispatcher reqDispatcher = req.getRequestDispatcher("quizes.jsp");
//        reqDispatcher.forward(req, resp);
//    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("::::::::::::: MainServlet :::::::::::::");
        PrintWriter out = resp.getWriter();
        Boolean error = false;
        HttpSession session = req.getSession();
        Quiz quiz = null;
        int currentCount = 0;
        if (session.isNew()) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        } else {
            quiz = (Quiz) session.getAttribute("quiz");
            if (quiz == null) {
                quiz = new Quiz();
                session.setAttribute("quiz", quiz);
            }
        }
        if (quiz == null) {
            session.setAttribute("quiz", new Quiz());
        }

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
        String question = quiz.getCurrentQuestion();
        System.out.println(question);
        req.setAttribute("question", question);
        req.setAttribute("score", "" + quiz.getNumCorrect());
        RequestDispatcher reqDispatcher = req.getRequestDispatcher("index.jsp");
        reqDispatcher.forward(req, resp);
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
}
