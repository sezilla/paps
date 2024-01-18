/**
            **Basic template for input to pdf**   (use as a reference only)

    <html>
    <head>
      <!--jspdf cdn -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
    <!--Jquery cdn-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
    </head>
    <body>   
       <div>
           <!--create input field to get data in given format-->    
         <input type="text" id="name" value="" placeholder="Input Name here..."><br>
         <input type="text" id="email" value="" placeholder="Input email here..." />
            <!--print button-->
          <buton type="button" id="button">Print</button>
       </div>

   <script>
   //function to add input from html form to image and print as document start here
   //function is called when generate button is clicked
   $('#button').click(function() {
	
   //creating a js pdf  
   var doc = new jsPDF();
 
   // Design form in JPEG format in any dimension here A4 size is used
   // Convert this image to base64 format using the site "https://www.base64-image.de/" 
   // copy the base64 image to below variable
   var imgData = '(paste base64 code here)';

    //Adding image to pdf here 0,0 represent the cordinate of image and 210,297 represent size(here it is A4 size)
    doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);

    //Accessing values from form and assigning to variables
    var name = $('#name').val();
    var email = $('#email').val();

    //setting font size and color for input text 
    doc.setFontSize(26);
    doc.setTextColor(92, 76, 76);

    //putting the input values in specific positions of image/pdf by specifying co-ordinate
    doc.text(23, 81, name);
    doc.text(23, 122, email);

    //Saving pdf in required name
    doc.save('Contact Card.pdf');
    
        // (comment above line and use code below if you want to preview instead of directly printing)
	// var string = doc.output("datauristring");
	//     var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
	//     var x = window.open();
	//     x.document.open();
	//     x.document.write(embed);
	//     x.document.close();

});
//function to add input from html form to image and print as document end here 

   </script>
   </body>
   </html>
 */





//function to hide home section on clicking about start here
function hideHome() {
    //accesing required div by thier id
    let a = document.getElementById("home-sec");
    let b = document.getElementById("about-sec");
    let x = document.getElementById("home");
    let y = document.getElementById("about");

    //adding classes to hide home and show about
    a.classList.add("d-none");
    b.classList.add("d-block");
    a.classList.remove("d-block");
    b.classList.remove("d-none");

    //adding classes to set about active and remove active from home
    x.classList.remove("active");
    y.classList.add("active");
}
//function to hide home section on clicking about end here



//function to hide about sction on clicking home start here
function hideAbout() {
    //accesing required div by thier id
    let a = document.getElementById("home-sec");
    let b = document.getElementById("about-sec");
    let x = document.getElementById("home");
    let y = document.getElementById("about");

    //adding classes to show home and hide about
    a.classList.add("d-block");
    b.classList.add("d-none");
    a.classList.remove("d-none");
    b.classList.remove("d-block");

    //adding classes to set home active and remove active from about
    y.classList.remove("active");
    x.classList.add("active");
}
//function to hide about sction on clicking home end here






//function to add input from html form to image and print as document start here
//function is called when generate button is clicked
$('#button').click(function () {

    //creating a js pdf  
    var doc = new jsPDF();

    // Design form in JPEG format in any dimension here A4 size is used
    // Convert this image to base64 format using the site "https://www.base64-image.de/" 
    // copy the base64 image to below variable
    
//fetch image from assets folder and convert to base64 format
    var imgData = new Image();
    imgData.src = 'image/logo-transparent.png';


    var imgData = 

    //Adding image to pdf here 0,0 represent the cordinate of image and 210,297 represent size(here it is A4 size)
    doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);

    //Accessing values from form and assigning to variables
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var address = $('#address').val();

    //setting font size and color for input text 
    doc.setFontSize(26);
    doc.setTextColor(92, 76, 76);

    //putting the input values in specific positions of image/pdf by specifying co-ordinate
    doc.text(23, 81, name);
    doc.text(23, 122, email);
    doc.text(23, 162, phone);
    doc.text(23, 202, address);

    //Saving pdf in required name
    doc.save('Contact Card.pdf');

    clearForm()

});
//function to add input from html form to image and print as document end here 



//function to clear input fields after generating pdf start here
function clearForm() {
    let n = document.getElementById("name");
    let e = document.getElementById("email");
    let p = document.getElementById("phone");
    let a = document.getElementById("address");

    n.value = "";
    e.value = "";
    p.value = "";
    a.value = "";
}
     //function to clear input fields after generating pdf end here