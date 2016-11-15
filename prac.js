function bst(input_array)
{
	var input_array =[];
	var value;
	if (root_node==null)
	{
		root_node = input_array[0];
	}
	
	for(i=0;i<=input_array.length();i++)
	{
		if(input_array.length(i+1)<input_array.length(i))
		{
			var left_child=(2*i+1);
			console.log(left_child)
		}
		else
		{
			var right_child = (2*i+2);
			console.log(right_child)
		}
	}

}
bst(3,4,7,1,2,9)