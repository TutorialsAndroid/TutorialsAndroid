  //--------- This Method Is For Image Enlarge ----------//
    // Get the modal
	var modal = document.getElementById("myModal");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}


  	 // Get the modal
	var modal = document.getElementById("myModal2");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg2");
	var modalImg = document.getElementById("img02");
	var captionText = document.getElementById("caption2");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close2")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}

  	// Get the modal
	var modal = document.getElementById("myModal3");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg3");
	var modalImg = document.getElementById("img03");
	var captionText = document.getElementById("caption3");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close3")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}

  	// Get the modal
	var modal = document.getElementById("myModal4");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg4");
	var modalImg = document.getElementById("img04");
	var captionText = document.getElementById("caption4");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close4")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}

  	// Get the modal
	var modal = document.getElementById("myModal5");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg5");
	var modalImg = document.getElementById("img05");
	var captionText = document.getElementById("caption5");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close5")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}

  	// Get the modal
	var modal = document.getElementById("myModal6");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg6");
	var modalImg = document.getElementById("img06");
	var captionText = document.getElementById("caption6");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close6")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}

  	// Get the modal
	var modal = document.getElementById("myModal7");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg7");
	var modalImg = document.getElementById("img07");
	var captionText = document.getElementById("caption7");
	img.onclick = function(){
  		modal.style.display = "block";
  		modalImg.src = this.src;
  		captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close7")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  		modal.style.display = "none";
  	}
  	//--------- End Of Method Image Enlarge ----------//

  		//--------- OnScreenOrientationChange On Phones Page Will Reload ----------//
	window.onorientationchange = function() { 
        var orientation = window.orientation; 
            switch(orientation) { 
                case 0:
                case 90:
                case -90: window.location.reload(); 
                break; } 
    };