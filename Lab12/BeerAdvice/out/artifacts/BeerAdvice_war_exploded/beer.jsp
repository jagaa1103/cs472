<%--
  Created by IntelliJ IDEA.
  User: enkhjargalgansukh
  Date: 1/10/21
  Time: 4:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@page contentType="text/html" pageEncoding="UTF-8"%>



<html>
<head>
    <title>Beer Advise</title>
</head>
<body>
    <h1>Beer Selection</h1>
    <c:forEach var="b" items="${brands}">
        ${b}<br>
    </c:forEach>
</body>
</html>
