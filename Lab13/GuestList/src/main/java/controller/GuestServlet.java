package controller;

import com.google.gson.Gson;
import model.Guest;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "guestServlet", urlPatterns = {"*.ajax"})
public class GuestServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("=========== GET ==========");
        RequestDispatcher view = request.getRequestDispatcher("guests.jsp");
        view.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        System.out.println("======== Post Method Happened =======");
        /* retrieve or create session here as needed */
        HttpSession sess = request.getSession();
        List<Guest> guestList = (List<Guest>) sess.getAttribute("guestList");
        if (guestList == null) {
            guestList = new ArrayList<Guest>();
            sess = request.getSession();
            sess.setAttribute("guestList", guestList);
        }
        /* get  input */
        String firstInput = request.getParameter("first");
        String lastInput = request.getParameter("last");
        if (firstInput != null && !firstInput.isEmpty() && lastInput != null && !lastInput.isEmpty()) guestList.add(new Guest(firstInput, lastInput));


        for (Guest guest : guestList) {
            System.out.println(guest.getFirst());
        }

        String guestJSON = "";
        if (guestList.size() > 0) guestJSON = new Gson().toJson(guestList);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        out.write(guestJSON);
    }



}
