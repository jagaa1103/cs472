import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String color = req.getParameter("color");
        Beers beers = new Beers();
        req.setAttribute("brands", beers.getBrands(color));
        RequestDispatcher dispatch = req.getRequestDispatcher("beer.jsp");
        dispatch.forward(req, resp);
    }

    @Override
    public String getServletInfo() {
        return "Beer Description";
    }
}
