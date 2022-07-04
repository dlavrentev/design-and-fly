//---------------------------- Download Button Function -------------------------
function createPDFfromHTML() {
  var HTML_Width = $(".container-main-desktop").width();
  var HTML_Height = $(".container-main-desktop").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + (top_left_margin * 2);
  var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".container-main-desktop")[0]).then(function (canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (var i = 1; i <= totalPDFPages; i++) { 
          pdf.addPage(PDF_Width, PDF_Height);
          pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
      }
      pdf.save("ticket.pdf");
    
  });
}


// ---------------------------- Design Btn ------------------------------

function btnSlide(){
  let btnlr = document.querySelectorAll(".design-btn-lr");

  for (let i=0;i<btnlr.length;i++) {
    btnlr[i].classList.toggle("visible");
   }
  }   
// -----------------------Quote Button (Api)---------------------------------

function changeQuote() {
    const page = Math.ceil(Math.random() * 7268)
    const randomNumber = Math.ceil(Math.random() * 10)
  
    const quoteText = document.querySelector(".quote-text");
    const quoteAuthor = document.querySelector(".quote-author");
  
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
      .then(response => response.json())
      .then(data => {
  
        let quote = data.data[randomNumber].quoteText;
        let author = data.data[randomNumber].quoteAuthor;
  
        quoteText.innerHTML = quote;
        quoteAuthor.innerHTML = author;
  
        // change font size based on text length
        let length = quoteText.innerHTML.length;
  
        if (length > 100) {
          quoteText.style.fontSize = "14px";
        } else if (length > 60) {
          quoteText.style.fontSize = "16px";
        } else {
          quoteText.style.fontSize = "20px";
        }
      });
  };


// ----------------------Font Button Function (Array)--------------------------

const allFonts = ["Lucida Console, Courier New, monospace", "Arial, Helvetica, sans-serif", "Times New Roman, Times, serif", "Trebuchet MS, sans-serif", "Brush Script MT, cursive"]

let fontIndexNumber = 1

function changeFont() {
  let fontText = document.querySelector(".quote-text");
  let fontAuthor = document.querySelector(".quote-author");

  fontText.style.fontFamily = allFonts[fontIndexNumber];
  fontAuthor.style.fontFamily = allFonts[fontIndexNumber];
  
  if(fontIndexNumber===allFonts.length-1){
      fontIndexNumber =0;
    }else{
       fontIndexNumber++; 
    }
    
}

// ----------------------------------------------------------------------------------

//---------------------------------Layout Button----------------------------------------

let layoutIndexNumber = 1;

function changeLayout() {
  
  const allLayouts = ["right", "center", "left"]
  
  let layoutText = document.querySelector(".quote-text");
  
  layoutText.style.textAlign = allLayouts[layoutIndexNumber];

  if(layoutIndexNumber===allLayouts.length-1){
      layoutIndexNumber =0;
    }else{
       layoutIndexNumber++; 
    }


  
} 

// --------------------Color Top and Color Bottom Button--------------------------------
const allColors=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
]

let colorIndexNumber = 1;

function changeColorTop() {

  let colorTop = document.querySelectorAll(".ticket-top");
  for (let i=0;i<colorTop.length;i++) {
    colorTop[i].style.backgroundColor = allColors[colorIndexNumber];
  }
  if(colorIndexNumber===allColors.length-1){
      colorIndexNumber =0;
    }else{
       colorIndexNumber++; 
    }
}

let color2IndexNumber = 1;

function changeColorBot(){
  let colorBot = document.querySelectorAll(".ticket-bot");
  for (let i=0;i<colorBot.length;i++) {
    colorBot[i].style.backgroundColor = allColors[color2IndexNumber];
  }
  if(color2IndexNumber===allColors.length-1){
      color2IndexNumber =0;
    }else{
       color2IndexNumber++; 
    }
}


// ------------------------------------------------------------------------------------


//-------------------------------Image Button------------------------------------------

let imageIndexNumber = 1;

function changeImage () {
   
  allImages = ["url(/images/travel/1.jpg)","url(images/travel/2.jpg)","url(images/travel/3.jpg)", "url(images/travel/4.jpg)", "url(/images/travel/5.jpg)", "url(/images/travel/6.jpg)", "url(/images/travel/7.jpg)", "url(/images/flights/8.jpg)", "url(/images/flights/9.jpg)","url(/images/flights/10.jpg)", "url(/images/flights/11.jpg)","url(/images/flights/12.jpg)", "url(/images/flights/13.jpg)", "url(https://picsum.photos/1100/301)", "url(https://picsum.photos/1100/303)","url(https://picsum.photos/1100/304)","url(https://picsum.photos/1100/305)","url(https://picsum.photos/1100/306)","url(https://picsum.photos/1100/307)","url(https://picsum.photos/1100/308)","url(https://picsum.photos/1100/306)","url(https://picsum.photos/1100/309)","url(https://picsum.photos/1100/310)","url(https://picsum.photos/1100/311)","url(https://picsum.photos/1100/312)","url(https://picsum.photos/1100/313)"]
  
   
  
   const imageBackground = document.querySelector(".ticket-mid-back")
   imageBackground.style.backgroundImage= allImages[imageIndexNumber];
  
   if(imageIndexNumber===allImages.length-1){
      imageIndexNumber =0;
    }else{
       imageIndexNumber++; 
    }
}

//--------------------------------------------------------------------------------------



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

/* Start Form Validation*/
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textMessage = document.getElementById('text-message');

form && form.addEventListener('submit', e => {
	e.preventDefault();
  checkInputs();
}); 

function checkInputs() {

	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const textMessageValue = textMessage.value.trim();

	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	} else {
		setSuccessFor(name);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else {
		setSuccessFor(email);
	}

	if(textMessageValue === '') {
		setErrorFor(textMessage, 'Message cannot be blank');
	} else {
		setSuccessFor(textMessage);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
  modal();
}

/* End Form Validation*/

/* Start Submit Button */
modal = () => {
if(document.getElementById("name").value !== '' && document.getElementById("email").value !== '' && document.getElementById("text-message").value !== ''){
  document.getElementById("submit-button").addEventListener("click", function(){
  //show the pop up modal
  document.getElementById("final-modal1").style.display = "block";
  });
}
document.getElementById('close-modal1').onclick = function(){
  window.location.replace("index.html");
  /*document.getElementById("final-modal1").style.display = "none";*/
}
}

/* End Submit Button */

/* Start Subscription Validation*/

const form2 = document.getElementById('form2');
const subscribeEmail = document.getElementById('subscribe-email');

form2 && form2.addEventListener('submit', e => {
	e.preventDefault();
	checkSubscriptionInputs();
});

function checkSubscriptionInputs() {
  const subscribeEmailValue = subscribeEmail.value.trim();

  if(subscribeEmailValue === '') {
		setErrorForSub(subscribeEmail, 'Enter your email to subscribe');
	} else {
		setSuccessForSub(subscribeEmail);
	}
}

function setErrorForSub(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control2 error';
	small.innerText = message;
}

function setSuccessForSub(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control2 success';
  modal2();
}

/* End Subscription Validation*/

/* Start Subscription Button */
modal2 = () => {
if(document.getElementById("subscribe-email").value !== ''){
  document.getElementById("subscribe-button").addEventListener("click", function(){
  //show the subscription popup modal
  document.getElementById("final-modal2").style.display = "block";
  });
}
document.getElementById('close-modal2').onclick = function(){
  window.location.replace("index.html");
  /*document.getElementById("final-modal1").style.display = "none";*/
}
}

/* End Subscription Button */ 

/* Start mobile dropdown form*/

function displayForm() {
  var form = document.querySelector(".mobile-form");
  if (form.style.display === "none") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
}

/* End mobile dropdown form*/

/* Start Download button Function */

function downloadDiv() {
  domtoimage.toBlob(document.querySelector('.ticket-back'))
    .then(function(blob) {
      window.saveAs(blob, 'ticket.png');
    });
} 


/* End Download button Function */

             /* Start ticket form Function */




function displayDetails() {
   var passengerName = document.querySelectorAll(".form-top");
   var destinationOption = document.getElementById("enter-destination");

   var ticketName = document.querySelectorAll(".form-output");
   var ticketDestination = document.querySelectorAll(".destination-output");
  
   /* inputs validation */
  
    if (passengerName[0].value === "" || passengerName[1].value === "" || passengerName[2].value === "Choose your destination...") {
        alert("All fields are mandatory!");
        return false;
      }
 
  ticketName[2].innerText = passengerName[0].value + " " + 
   passengerName[1].value;
  
  ticketDestination[2].innerText = passengerName[2].value;
  
   /* display welcome message and image depending on destination*/
 const imageForm = document.querySelector(".ticket-mid-back")
 const quoteTextForm = document.querySelector(".quote-text");
 const quoteAuthorForm = document.querySelector(".quote-author");
 
  var welcomePhrase = "";
    if (passengerName[2].value === "Tokyo") {
      welcomePhrase = "Tanoshinde!";
      imageForm.style.backgroundImage = "url(/images/tokyoimage.jpeg)";
      quoteTextForm.innerHTML = "I think it is one of the common themes for many Japanese people to choose where to live: Tokyo or their hometown."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Makoto Shinkai"
    } else if (passengerName[2].value === "Paris") {        
      welcomePhrase = "Jouir de!";
      imageForm.style.backgroundImage = "url(/images/parisimage.jpeg)";
      quoteTextForm.innerHTML = "We say that time is a great teacher. It’s too bad that it kills all its students."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Hector Berlioz"
    } else if (passengerName[2].value === "London") {
      welcomePhrase = "Enjoy!";
      imageForm.style.backgroundImage = "url(/images/londonimage.jpeg)";
      quoteTextForm.innerHTML = "Success is not final, failure is not fatal, it is the courage to continue that counts."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Winston Churchill"
    } else if (passengerName[2].value === "Berlin") {        
      welcomePhrase = "Viel Spaß!";
      imageForm.style.backgroundImage = "url(/images/berlinimage.jpeg)";
      quoteTextForm.innerHTML = "Two things are infinite, the universe and human stupidity. Although I'm not yet sure about the universe."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Albert Einstein"
    } else if (passengerName[2].value === "Bratislava") {
      welcomePhrase = "Príjemnú zábavu!";
      imageForm.style.backgroundImage = "url(/images/bratislavaimage.jpeg)";
      quoteTextForm.innerHTML = "Not he who begins but he who finishes is the master."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Unknown"
    } else if (passengerName[2].value === "Cairo") {        
      welcomePhrase = "استمتع!";
      imageForm.style.backgroundImage = "url(/images/kairoimage.jpeg)";
      quoteTextForm.innerHTML = "Seek to perform your duties to your highest ability, this way your actions will be blameless."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Unknown"
    } 

  
  var welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.innerText = passengerName[2].value + "! " +   
    welcomePhrase;
  
  
}
  /* desktop version*/ 

 function displayDetailsDesktop() { 

   document.querySelector(".k").innerHTML="11.8.2022"
   document.querySelector(".date-number").innerHTML="11.8.2022"
   document.querySelector(".seat-number").innerHTML="39F";
   document.querySelector(".boarding-number").innerHTML="11:30";
   document.querySelector(".gate-number").innerHTML="B42";
   document.querySelector(".flight-number").innerHTML="A 1034";
   document.querySelector(".time-number").innerHTML="10:40";
   document.querySelector(".country").innerHTML="Home";
   document.querySelector(".l").innerHTML="10:40";
   document.querySelector(".m").innerHTML="A 1034";
   document.querySelector(".p").innerHTML="39F";
   document.querySelector(".q").innerHTML="B42";
   document.querySelector(".d").innerHTML="Home";
   
   var passengerName = document.querySelectorAll(".form-top");
   var destinationOption = document.getElementById("enter-destination");
   var ticketName = document.querySelectorAll(".form-output");
   var ticketDestination = document.querySelectorAll(".destination-output");


  
  if (passengerName[3].value === "" || passengerName[4].value === "" || passengerName[5].value === "Choose your destination...") {
        alert("All fields are mandatory!");
        return false;
      }
  
  ticketName[0].innerText = passengerName[3].value + " " + passengerName[4].value;
  ticketName[1].innerText = passengerName[3].value + " " + passengerName[4].value;


 ticketDestination[1].innerText = passengerName[5].value;
  ticketDestination[0].innerText = passengerName[5].value;

  
  
const imageForm = document.querySelector(".ticket-mid-back")
const quoteTextForm = document.querySelector(".quote-text");
const quoteAuthorForm = document.querySelector(".quote-author");

  if (passengerName[5].value === "Tokyo") {
      welcomePhrase = "Tanoshinde!";
      imageForm.style.backgroundImage = "url(/images/tokyoimage.jpeg)";
      quoteTextForm.innerHTML = "I think it is one of the common themes for many Japanese people to choose where to live: Tokyo or their hometown."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Makoto Shinkai"
    } else if (passengerName[5].value === "Paris") {        
      welcomePhrase = "Jouir de!";
      quoteTextForm.innerHTML = "We say that time is a great teacher. It’s too bad that it kills all its students."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Hector Berlioz"
      imageForm.style.backgroundImage = "url(/images/parisimage.jpeg)";
    } else if (passengerName[5].value === "London") {
      welcomePhrase = "Enjoy!";
      imageForm.style.backgroundImage = "url(/images/londonimage.jpeg)";
      quoteTextForm.innerHTML = "Success is not final, failure is not fatal, it is the courage to continue that counts."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Winston Churchill"
    } else if (passengerName[5].value === "Berlin") {
      welcomePhrase = "Viel Spaß!"
      imageForm.style.backgroundImage = "url(/images/berlinimage.jpeg)";
      quoteTextForm.innerHTML = "Two things are infinite, the universe and human stupidity. Although I'm not yet sure about the universe."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Albert Einstein"
    } else if (passengerName[5].value === "Bratislava") {
      welcomePhrase = "Príjemnú zábavu!"
      imageForm.style.backgroundImage = "url(/images/bratislavaimage.jpeg)";
      quoteTextForm.innerHTML = "Not he who begins but he who finishes is the master."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Unknown"
    } else if (passengerName[5].value === "Cairo") {
      welcomePhrase = "استمتع!"
      imageForm.style.backgroundImage = "url(/images/kairoimage.jpeg)";
      quoteTextForm.innerHTML = "Seek to perform your duties to your highest ability, this way your actions will be blameless."
      quoteTextForm.style.fontSize = "14px"
      quoteAuthorForm.innerHTML = "Unknown"
    }  


   
var welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.innerText = passengerName[5].value + "! " + welcomePhrase;
}

               /* End ticket form Function */


