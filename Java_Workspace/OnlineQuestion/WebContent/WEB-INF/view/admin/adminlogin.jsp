<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1 align="center">Online Test Application</h1>
<hr width=600>
<form:form commandName="admin" action="adminlogin.html">
	<table align="center">
		<tr>
			<td><form:label path="adminEmail">Admin Email:</form:label></td>
			<td><form:input path="adminEmail" /></td>
		</tr>
		<tr>
			<td></td>
			<td><FONT color="red"><form:errors path="adminEmail"></form:errors></FONT>
			</td>
		</tr>
		<tr>
			<td><form:label path="password">Password:</form:label></td>
			<td><form:password path="password" /></td>
		</tr>
		<tr>
			<td></td>
			<td><FONT color="red"><form:errors path="password"></form:errors></FONT>
			</td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="Login" /></td>
		</tr>
	</table>
</form:form>

</body>
</html>