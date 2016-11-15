function bst()
{
	var input_array=[1,3,5,89,4,45,23,6];
	var length=input_array.length;
	var bst_arr=[];
	for(i=0;i<=length;i++)
	{
		bst_arr[0]=input_array[0];
	
		if(input_array[i+1]<input_array[i])
		{
			bst_arr[i]=2*input_array+1;
			console.log(bst_arr[i]);
		}
		else
		{
			bst_arr[i]=2*input_array;
			console.log(bst_arr[i]);
		}
	}
}
bst();
