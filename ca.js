var a;
	var b;
	var c;
	function cal(a,b,operator)
	{
	
	if(operator =='+')
	{
		c=a+b;
		console.log("sum of two no is:"+c)
	}
	else if(operator =='-')
	{
		c=a-b;
		console.log("subtraction of two no is:"+c)
	}
	else if(operator =='*')
	{
		c=a*b;
		console.log("multiplication of two no is:"+c)
	}
	else if(operator =='/')
	{
		c=a/b;
		console.log("division of two no is:"+c)
	}
		
}


cal(3,5,'+')
