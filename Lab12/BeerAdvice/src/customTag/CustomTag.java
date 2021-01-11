package customTag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomTag extends SimpleTagSupport  {

    @Override
    public void doTag() throws JspException, IOException {
        JspWriter writer = getJspContext().getOut();
        String htmlTag = String.format("<span style=\"color: red; font-size: 12px;\">%s</span>", getTime());
        writer.write(htmlTag);
    }

    public String getTime() {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        String dateString = ft.format(dNow);
        System.out.println("Current Date: " + dateString);
        return dateString;
    }
}
