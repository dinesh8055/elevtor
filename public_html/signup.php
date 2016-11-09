<?php

    if($_POST){
      include 'environment.php';
      $con=mysql_connect($_ENV["DB_HOST"],$_ENV["DB_USER"],$_ENV["DB_PASSWORD"]) or die("Failed to connect to MySQL: " . mysql_error()); $db=mysql_select_db($_ENV["DB_NAME"],$con) or die("Failed to connect to MySQL: " . mysql_error());

        if($_POST['submit_user'])
        {
            function NewUser() {

                $email = $_POST['email'];
                $query = "INSERT INTO users (email) VALUES ('" . $email . "')";
                $data = mysql_query ($query)or die(mysql_error());

                if($data) {
                    $results = 'Registration complete! Thank you!';
                    return $results;
                }
            }

            function SignUp() {

                if(!empty($_POST['email'])) {

                    $query = mysql_query("SELECT email FROM users WHERE email = '" . $_POST['email'] . "'") or die(mysql_error());

                    if(mysql_num_rows($query)==0) {
                        $results = NewUser();
                    } else {
                        $results = 'Your email has already been registered! Thank you!';
                    }

                    return $results;
                }
            }

            $status = SignUp();
        }

        if($_POST['submit_client'])
        {
            function NewClient() {

                $client_name = $_POST['client_name'];
                $company_name = $_POST['company_name'];
                $email_2 = $_POST['email_2'];
                $team_size = $_POST['team_size'];
                $message = $_POST['message'];
                $query = "INSERT INTO clients (client_name, company_name, email, team_size, message) VALUES ('" . $client_name . "', '" . $company_name . "', '" . $email_2 . "', '" . $team_size . "', '" . $message . "')";
                $data = mysql_query ($query)or die(mysql_error());

                if($data) {
                    $results = 'Registration complete! Thank you!';

                    return $results;
                }
            }

            function SignUp() {

                if(!empty($_POST['email_2'])) {

                    $query = mysql_query("SELECT email FROM clients WHERE email = '" . $_POST['email_2'] . "'") or die(mysql_error());

                    if(mysql_num_rows($query)==0) {
                        $results = NewClient();
                    } else {
                        $results = 'Your email has already been registered! Thank you!';
                    }

                    return $results;
                }
            }

            $status = SignUp();
        }
    }

?>
