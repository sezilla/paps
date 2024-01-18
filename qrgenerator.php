
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QR Code Generator</title>
    <link rel="icon" type="image/x-icon" href="bxs-calendar-check.svg">
    <link rel="stylesheet" href="sidebar.css" type="text/css" />
    <link rel="stylesheet" href="qrgenerator.css" />
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- Boxiocns CDN Link -->
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link href="css/attendance.css" rel="stylesheet" type="text/css" >
  </head>
  <body>
  <?php 
          include("db_conn.php");
          
          ?>
  <div class="sidebar close"> 
    <div class="container">
    <?echo "Enter Student ID".$_POST['student_num']?>
      

      <div id="imgBox"> 
        <img src="" id="qrImage" />
      </div>
      <button onclick="generateQR()">Generate QR Code</button>
    </div>

    </section>
    
    <script src="script.js"></script>

    <script>
      let imgBox = document.getElementById("imgBox");
      let qrImage = document.getElementById("qrImage");
      let qrText = document.getElementById("qrText");
      let input = document.querySelector("input");
      let generatebtn = document.querySelector("generate");
      let downloadbtn = document.querySelector("download");

      function generateQR() {
        if (qrText.value.length > 0) {
          qrImage.src =
            " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            qrText.value;
          imgBox.classList.add("show-img");
        } else {
          qrText.classList.add("error");
          setTimeout(() => {
            qrText.classList.remove("error");
          }, 1000);
        }
      }
      downloadbtn.addEventListener("click", async () => {
        let response = await fetch(qrImage.src.replace("150x150", "300x300"));
        let blob = await response.blob();
        let downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "qrImage.jpg";
        downloadLink.click();
      });
    </script>
    
  </body>
</html>
