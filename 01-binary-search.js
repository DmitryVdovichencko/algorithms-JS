const binarySearch = (list, item) => {
	// define limit values for search
	// begin search in range 0 .. list.length
	let high = list.length, low = 0;
	// while we have more than one element 
	while (low <= high) {
		// check middle element. If low + high is odd, Math.floor() method round to lowest integer value 
		let mid = Math.floor((low + high)/2) - 1, guess = list[mid];
		if (guess == item){
			return mid;
		}

		// too much
		if (guess > item){
			// update high value less then mid
			high = mid - 1;
		}
		// too little
		else {
			// update low value bigger then mid
			low = mid + 1;
		}
		

  	}
  	return "Item not exist";
}
export default binarySearch;