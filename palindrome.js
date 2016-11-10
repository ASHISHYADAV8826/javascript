function pal()
{
	var n=353,temp,sum=0,r;
	temp=n;
	while(n>0)
	{
		r=n%10;
		sum=(sum*10)+r;
		n= Number.parseInt(n/10);
	}
	if(temp==sum)
	{
		console.log("pallindrome")
	}
	else
	{
		console.log("not pallindrome")
	}
}
pal();