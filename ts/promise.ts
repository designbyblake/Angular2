let error = true;
function doAsyncTask(){
	return new Promise((resolve, reject ) => {
		setTimeout(() => {
			if(error){
				reject('error');
			} else {
				resolve('done');
			}
		}, 3000);
	});
}

doAsyncTask().then(
	//Success
	(val) => console.log(val),

	//error
	(err) => console.log(err)
);

doAsyncTask().then(
	//Success
	() => {
		setTimeout(() =>{
		//	alert('HellYeah');
		},3000);
	},
	//Fail
	() => {
	//	alert('Error');
	}
);
