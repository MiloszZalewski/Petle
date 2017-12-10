function drawTree(levels) {
	for (var i = 1; i <= levels; i++) {
    var star =' ';  
	for (var j = 1; j <= i; j++) {
			 star += '*';
    }
		 console.log(star);
  } 
}
 
drawTree(5);