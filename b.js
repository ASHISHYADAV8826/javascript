function add()
		{
			var a=4
			var b=7
			console.log(a+b)
		}
	add();

function subtract()
		{
			var a=7
			var b=3
			console.log(a-b)
		}
	subtract();

function divide()
		{
			var a=77
			var b=43
			console.log(a/b)
		}
	divide();

function mul()
		{
			var a=54
			var b=33
			console.log(a*b)
		}
	mul();

function fib()
		{
			var a=0;
			var b=1;
			var c;
			console.log(b);
			for(var i=0;i<10;i++)
			{
				c=a+b;
				a=b;
				b=c;;
				console.log(c);
			}
		}
		fib();

	var n=121,sum=0,r,temp;
	temp=n
	while(n>0)
	{
		r=n%10;
		sum=(sum*10)+r;
		n=Number.parseInt(n/10);
	}
	// console.log(sum)
if(temp==sum)
{
	console.log("pallindrome")
}
else
{
	console.log("not pallindrome")
}