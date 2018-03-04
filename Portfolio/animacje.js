 
   	$(document).ready(function(){
    	
// After load animations---------------
  	   $("#nazwisko").animate({
	    
		opacity: '1',
		top: '0'
	  },1000);		
	  
	   $(".option").animate({
	  
	    opacity: '1',
		top: '60px'
	  
	  },1000);
	  
	   $("#container").fadeIn(1000);
	   $("#nazwisko").css("color","#f44f20");
	   $("#nazwisko").css("borderColor","#f44f20");
	   pobierzDane("Dane/Ja","#nazwisko");
	   
//-------------------------------------	
//-------------------------------------   
	  

//Inserting data from external file to mainContent 	 
//------------------------------------------------
   

     //------------Menu----------------------------------------------	   
	  $("#Oferta").click( function(){ pobierzDane("Dane/Oferta","#Oferta");}); 	  
	   $("#CV").click(function(){pobierzDane("Dane/Cv","#CV");}); 
	    $("#Omnie").click(function(){pobierzDane("Dane/Omnie","#Omnie");}); 
		 $("#Kontakt").click(function(){pobierzDane("Dane/Kontakt","#Kontakt");}); 
		  $("#nazwisko").click(function(){pobierzDane("Dane/Ja","#nazwisko");});
	  
  
      function pobierzDane(nazwaPliku,ktoryElement)
	  {
		$(ktoryElement).css("color","#f44f20"); 
		if(ktoryElement == "#nazwisko") {$(ktoryElement).css("borderColor","#f44f20");}
		if("#Oferta" != ktoryElement) { $("#Oferta").css("color","white");}
		if("#CV" != ktoryElement) { $("#CV").css("color","white");}
		if("#Omnie" != ktoryElement) { $("#Omnie").css("color","white");}
		if("#Kontakt" != ktoryElement) { $("#Kontakt").css("color","white");}
		if("#nazwisko" != ktoryElement) { $("#nazwisko").css("color","white"); $("#nazwisko").css("borderColor","white");}
		
		var http2 = new XMLHttpRequest();
		
		http2.onreadystatechange = function(){
			
			if( this.readyState==4 && this.status==200 )
			{
				$("#container").fadeOut(300);
				setTimeout(wpisz , 300);
				$("#container").fadeIn(300);
			}
		
		
		};
		
		http2.open("GET" ,  nazwaPliku + ".html" ,true);
		http2.send();
		
		function wpisz()
		{
			
			$("#mainContent").html(http2.responseText);
		}
	  }
	   
	 //---------------------------------------------------
	 

    });