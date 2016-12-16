function note(amount)
{
	var note500;
	var note100;
	var note50;
	var amount;
	if(amount>=500)
	{
		note500=parseInt(amount/500);
		amount = amount-note500*500;

		console.log("no of note500 is" + note500)
	}
	if(amount>=100)
	{  
		note100=parseInt(amount/100);
		 amount = amount-note100*100;
		
		console.log("no of note100 is" + note100)
	}
	if(amount>=50)
	{
		
		note50=parseInt(amount/50);
		 amount = amount-note50*50;
		console.log("no of note50 is" + note50)
	}
}
note(4150);