import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String firstname = req.getParameter("firstname");
        String dob = req.getParameter("dob");

        if(username.equals("admin") && password.equals("1234")) {

            String key = firstname.substring(0,2) + dob;

            out.println("<h2>Login Successful</h2>");
            out.println("Name: " + firstname + "<br>");
            out.println("Key: " + key);

        } else {
            out.println("<h2>Invalid Login</h2>");
        }

        out.close();
    }
}