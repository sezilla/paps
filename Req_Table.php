<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table of Requests</title>
</head>
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Student No.</th>
            <th>Control No.</th>
            <th>Date of Birth</th>
            <th>Program</th>
            <th>Form Type</th>
        </tr>
        <?php 
            include("db_conn.php");
            $sql = "SELECT fullname, student_num, ctrl_num, dob, program, reqtype from request";
            $result = $conn-> query($sql);

            if ($result-> num_rows > 0) {
                while ($row =  $result-> fetch_assoc()){
                    echo "<tr>
                    <td>". $row["fullname"]."</td>
                    <td>". $row["student_num"]."</td>
                    <td>". $row["ctrl_num"]."</td>
                    <td>". $row["dob"]."</td>
                    <td>". $row["program"]."</td>
                    <td>". $row["reqtype"]."</td>
                    </tr>";
                }
                echo "</table>";
            }
            else{
                echo "0 results";
            }

            $conn-> close();
            ?>
    </table>

         
    
</body>
</html>