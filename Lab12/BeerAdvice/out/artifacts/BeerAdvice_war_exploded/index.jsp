<%--
  Created by IntelliJ IDEA.
  User: enkhjargalgansukh
  Date: 1/10/21
  Time: 4:19 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="customTag.CustomTag"%>
<%@ taglib prefix="ct" uri='/WEB-INF/customTag.tld'%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Beer Adviser</title>
  </head>
  <body>
    <h1>Beer Selection Page</h1>
    <form action="goSelect" method="POST">
      <p>Select beer characteristics</p>
      Color:
      <select name="color" size = 1>
        <option value="light">light</option>
        <option value="amber">amber</option>
        <option value="brown">brown</option>
        <option value="dark">dark</option>
      </select>
      <br><br>
      <input type="submit" />
    </form>
    <ct:currentDateTime />
  </body>
</html>
