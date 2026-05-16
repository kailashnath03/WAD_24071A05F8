import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/wallet")
public class WalletServlet extends HttpServlet {

    int balance = 5000;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String name = request.getParameter("username");

        int amount = Integer.parseInt(
                request.getParameter("amount"));

        balance = balance - amount;

        out.println("<html>");

        out.println("<head>");

        out.println("<title>Wallet Result</title>");

        out.println("<style>");

        out.println("body{");
        out.println("font-family:Arial;");
        out.println("background:#f2f2f2;");
        out.println("}");

        out.println(".box{");
        out.println("width:400px;");
        out.println("margin:auto;");
        out.println("margin-top:80px;");
        out.println("background:white;");
        out.println("padding:20px;");
        out.println("text-align:center;");
        out.println("border-radius:10px;");
        out.println("box-shadow:0px 0px 10px gray;");
        out.println("}");

        out.println("</style>");

        out.println("</head>");

        out.println("<body>");

        out.println("<div class='box'>");

        out.println("<h2>Transaction Successful</h2>");

        out.println("<h3>Hello " + name + "</h3>");

        out.println("<p>Transferred Amount: Rs."
                + amount + "</p>");

        out.println("<h3>Updated Wallet Balance: Rs."
                + balance + "</h3>");

        out.println("<br>");

        out.println("Copyright © 24071A05F8. All rights reserved.");

        out.println("</div>");

        out.println("</body>");

        out.println("</html>");
    }
}