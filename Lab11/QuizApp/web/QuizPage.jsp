<%--
  Created by IntelliJ IDEA.
  User: enkhjargalgansukh
  Date: 12/20/20
  Time: 11:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%--<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>--%>

<html>
<head>
    <title>NumberQuiz</title>
</head>
<body>

<form method='post'>
    <h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is:
        ${score}
        </br></br>
    </p>
    <p>Guess the next number in the sequence!
        ${question}
    </p>

    <p>Your answer:
        <input type='text' name='txtAnswer' value='' />
    </p>
    <p><input type='submit' name='btnNext' value='Next' /></p>

</form>
</body>
</html>
