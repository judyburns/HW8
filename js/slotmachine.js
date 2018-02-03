/*
 * Cleveland Codes - HW8
 *
 * This script will loop through three boxes, and within this loop, an inner loop will attempt 10 times to get a good 
 * random number for the current box. When the random number is good, set the box's class and color attributes to the
 * appropriate values: class 'one' is red; class 'two' is green; class 'three' is blue.
 *
 * After all three boxes have been given a random number, compare the random numbers of all three boxes. If all 
 * three boxes match in color, change the message text to say "Congratulations, you won!", otherwise, change 
 * the message text to say "Sorry, try again".
 */
 
/*
 *	i = box number (3 boxes)
 *	j = number of loops to get random number (10 times)
 *
 */
 	 
 function getBoxColors () {
	 var i;
	 var j;
	 var box1 = document.querySelector("#box1");
	 var box2 = document.querySelector("#box2");
	 var box3 = document.querySelector("#box3");
	 var msg  = document.querySelector(".msg");
	 var result = [];
	 
	 for (i=0; i <= 2; i++) {
		var randomNum;
		for (j=0; j < 10; j++) {
			 var randomNum = Math.floor(Math.random() * 10);	 
			 if (randomNum == 0 || randomNum > 3) {
				 continue;
			 }
			 else {
				 switch (i){
					 // box1
					 case 0:
						setBoxAttr(box1, randomNum);
						break;
					// box2
					 case 1:
						setBoxAttr(box2, randomNum);
						break;
					// box3
					 case 2:
						setBoxAttr(box3, randomNum);
						break;
					// other
					 default:
						alert("Error: box # is out of range: box # is " + i+1);
						break;
				 }
			 }
		}
		
	 }
	 
	 if ((box1.className == box2.className) &&  (box2.className == box3.className)) {
		 msg.innerHTML = "Congratulations, you won!";
	 }
	 else {
		 msg.innerHTML = "Sorry, try again";
	 } 
}

function setBoxAttr (box,randomNum){
	if (randomNum == 1) {
		box.className = "one";
		box.style.backgroundColor = "red";
	}
	else
	if (randomNum == 2) {
		box.className = "two";
		box.style.backgroundColor = "green";
	}
	else
	if (randomNum == 3) {
		box.className = "three";
		box.style.backgroundColor = "blue";
	}
	else {
		alert("Error: random # is out of range: random # is " + randomNum);
	}
}
