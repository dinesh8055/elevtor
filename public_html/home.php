<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Elevtor, Going Up!</title>

    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <link href="css/home.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

    <?php  include 'signup.php';  ?>

    <div id="dark_background" class="">
        <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
            <div class="client_form">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h3 style="text-align: center;">Please complete your form</h3>
                    </div>
                </div>

            <form method="POST" action="home.php">
                <input type="hidden" value="form" />

                <div class="row" style="padding-top: 1em;">
                    <div class="col-xs-6 col-sm-6 col-md-offset-1 col-md-5 col-lg-offset-1 col-lg-5">
                        <span class="text_placeholder">Your name:</span>
                        <input type="text" class="form_fields" id="client_name" name="client_name" placeholder="Enter your name">
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-5 col-lg-5">
                        <span class="text_placeholder">Your company's name:</span>
                        <input type="text" class="form_fields" id="company_name" name="company_name" placeholder="Enter your company's name">
                    </div>
                </div>

                <div class="row" style="padding-top: 1em;">
                    <div class="col-xs-6 col-sm-6 col-md-offset-1 col-md-5 col-lg-offset-1 col-lg-5">
                        <span class="text_placeholder">E-mail address:</span>
                        <input type="email" class="form_fields" id="email_2" name="email_2" placeholder="Enter your e-mail address">
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <span class="text_placeholder">Team's size:</span>
                        <select class="form_fields" id="team_size" name="team_size" placeholder="Enter your team size">
                            <option value="" disabled selected>Enter your team's size</option>
                            <option value="1-5">1 - 5</option>
                            <option value="6-10">6 - 10</option>
                            <option value="11-50">11 - 50</option>
                            <option value="51-100">51 - 100</option>
                            <option value="100+">100+</option>
                        </select>
                    </div>
                </div>

                <div class="row" style="padding-top: 1em;">
                    <div class="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
                        <span class="text_placeholder">Please, feel free to add any other information:</span>
                        <textarea class="form_fields" id="message" name="message" placeholder="Enter your message"></textarea>
                    </div>
                </div>

                <div class="row center_align" style="padding-top: 2em;">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input class="complete_button" id="submit_client" type="submit" name="submit_client" value="Start your free trial!">
                    </div>
                </div>

            </form>
            </div>
        </div>
    </div>

    <div class="background">
        <div class="navbar-fixed-top menu_bar">
            <a class="navbar-left float_left page-scroll" href="#home">
                <img src="images/logo.png" alt="Elevtor Logo" id="logo_image">
            </a>
            <div class="navbar-right float_right">
                <ul>
                    <li class="right_menu">
                        <a href="#about" class="page-scroll">About</a>
                    </li>
                    <li class="right_menu">
                        <a href="mailto:admin@elevtor.co?Subject=Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-fluid first" id="home">

        <?php  if($status):  ?>
          <div class="row center_align" id="repeated">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="row">
                      <span class="repeated_text" style="margin-top: 10em"> <?= htmlspecialchars($status) ?></span>
                  </div>
              </div>
          </div>
        <?php endif ?>

            <div class="row center_align">
                <div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
                    <div class="row">
                        <h1>Disrupting the way you search for a job</h1>
                    </div>
                </div>
            </div>
            <div class="row center_align splash_forms">
                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row" style="padding-top: 10%;">
                        <form method="POST" action="home.php">
                            <input type="hidden" value="form"/>
                            <input type="email" id="email" name="email" placeholder="Job Seekers: Enter your e-mail address">
                            <input class="join_button" id="button" type="submit" name="submit_user" value="Join the beta!">
                        </form>
                    </div>
                </div>
            </div>

            <div class="responsive_adjust_1"></div>

            <div class="row center_align">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="#description" class="page-scroll">
                        <h5>Find out more</h5>
                        <h5><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></h5>
                    </a>
                </div>
            </div>
        </div>

        <div class="container-fluid second" id="description">
            <div class="row center_align">
                <div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
                    <div class="row header_second">
                        <span class="">CONNECTING <span class="bold">JOB SEEKERS</span> AND <span class="bold">EMPLOYERS</span> LIKE NEVER BEFORE</span>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="row center_align">
                        <img src="images/mockup.png" class="mockup" />
                    </div>
                </div>
                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row">
                        <h4>Elevtor <span class="italic">is the only job market in the world that ditches traditional resumes in favor of video resumes.</span></h4>

                        <h4><span class="italic">We strive to connect <span class="bold">job seekers</span> and <span class="bold">employers</span> in a way that is transparent.</span></h4>
                    </div>
                </div>
            </div>

            <div class="responsive_adjust_2"></div>

            <div class="row center_align">
                <div class="col-xs-offset-5 col-xs-2 col-sm-offset-5 col-sm-2 col-md-offset-5 col-md-2 col-lg-offset-5 col-lg-2">
                    <a href="#about" class="page-scroll">
                        <h5 style="color: #00aeef">About</h5>
                        <h5 style="color: #00aeef"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></h5>
                    </a>
                </div>
            </div>
        </div>

        <div class="container-fluid third" id="about">
            <div class="row center_align">
                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row">
                        <h2>To the employers</h2>
                    </div>
                </div>
            </div>

            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-2 col-sm-offset-1 col-sm-2 col-md-offset-2 col-md-1 col-lg-offset-2 col-lg-1">
                    <img src="images/config.png" class="divulgation"/>
                </div>
                <div class="col-xs-10 col-sm-8 col-md-7 col-lg-7">
                    <h3>Powerful CRM</h3>
                    <h5>Build a pool of candidates that meet your hiring needs, collaborate in real time with other team members, take control of the hiring process never missing a beat. </h5>
                </div>
            </div>

            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-2 col-sm-offset-1 col-sm-2 col-md-offset-2 col-md-1 col-lg-offset-2 col-lg-1">
                    <img src="images/network.png" class="divulgation" />
                </div>
                <div class="col-xs-10 col-sm-8 col-md-7 col-lg-7">
                    <h3>Large network</h3>
                    <h5>Tap our huge marketplace of video resumes to find the best talent.</h5>
                </div>
            </div>

            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-2 col-sm-offset-1 col-sm-2 col-md-offset-2 col-md-1 col-lg-offset-2 col-lg-1">
                    <img src="images/dollar.png" class="divulgation" />
                </div>
                <div class="col-xs-10 col-sm-8 col-md-7 col-lg-7">
                    <h3>Save money and time</h3>
                    <h5>Spend less time searching and more time interview high quality candidates.</h5>
                </div>
            </div>

            <div class="responsive_adjust_3"></div>

            <div class="row center_align" style="padding-top: 5%;">
                <div class="col-xs-offset-5 col-xs-2 col-sm-offset-5 col-sm-2 col-md-offset-5 col-md-2 col-lg-offset-5 col-lg-2">
                    <a href="#jobseekers" class="page-scroll">
                        <h5>For job seekers</h5>
                        <h5><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></h5>
                    </a>
                </div>
            </div>
        </div>

        <div class="container-fluid fourth" id="jobseekers">
            <div class="row center_align">
                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row">
                        <h2>To the job seekers</h2>
                    </div>
                </div>
            </div>


            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-10 col-sm-offset-1 col-sm-9 col-md-offset-2 col-md-7 col-lg-offset-2 col-lg-7">
                    <h3 class="right_align">Visual resumes</h3>
                    <h5 class="right_align">The days of paper resumes and long awaited responses have passed.  The new forum is video resumes. Highlight your talent and skills with our video resume marketplace. </h5>
                </div>

                <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                    <img src="images/video.png" class="divulgation" />
                </div>
            </div>

            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-10 col-sm-offset-1 col-sm-9 col-md-offset-2 col-md-7 col-lg-offset-2 col-lg-7">
                    <h3 class="right_align">Built for the people by the people</h3>
                    <h5 class="right_align">ELEVTOR is built by individuals who care about the process. We strive to connect job seekers and employers like never before. No more guessing, no more waiting, live instant interviews!</h5>
                </div>
                <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                    <img src="images/user.png" class="divulgation" />
                </div>
            </div>

            <div class="row" style="padding-top: 3%;">
                <div class="col-xs-10 col-sm-offset-1 col-sm-9 col-md-offset-2 col-md-7 col-lg-offset-2 col-lg-7">
                    <h3 class="right_align">Grow at your own pace</h3>
                    <h5 class="right_align">We offer unique tailored solutions to businesses of all sizes. We help you find the best talent with less money spent!</h5>
                </div>
                <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                    <img src="images/chart.png" class="divulgation" />
                </div>
            </div>

            <div class="responsive_adjust_3"></div>

            <div class="row center_align" style="padding-top: 3%;">
                <div class="col-xs-offset-5 col-xs-2 col-sm-offset-5 col-sm-2 col-md-offset-5 col-md-2 col-lg-offset-5 col-lg-2">
                    <a href="#prices" class="page-scroll">
                        <h5>See the pricing options</h5>
                        <h5><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></h5>
                    </a>
                </div>
            </div>
        </div>

        <div class="container-fluid fifth" id="prices">
            <div class="row center_align">
                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row">
                        <h2 class="header_fifth">Choose your plan</h2>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                    <div class="row" style="padding-top: 5%;">
                        <table>
                            <tr class="">
                                <th class="table_header center_align small">SMALL</th>
                                <th class="table_header center_align medium">MEDIUM</th>
                                <th class="table_header center_align enterprise">ENTERPRISE</th>
                            </tr>
                            <tr class="table_second_row">
                                <td class="second_row_text" style="padding-left: 3%;">$50<sup class="monthly">monthly</sup></td>
                                <td class="second_row_text" style="padding-left: 3%;">$100<sup class="monthly">monthly</sup></td>
                                <td class="second_row_text call_price">Call for price!</td>
                            </tr>
                            <tr class="table_grey_row">
                                <td class="table_row_text"><span class="small_text">5</span> Team Member</td>
                                <td class="table_row_text"><span class="medium_text">10</span> Team Member</td>
                                <td class="table_row_text"><span class="enterprise_text">Unlimited</span> Team Member</td>
                            </tr>
                            <tr class="table_white_row">
                                <td class="table_row_text"><span class="small_text">10</span> Listings</td>
                                <td class="table_row_text"><span class="medium_text">50</span> Listings</td>
                                <td class="table_row_text"><span class="enterprise_text">Unlimited</span> Listings</td>
                            </tr>
                            <tr class="table_grey_row">
                                <td class="table_row_text"><span class="small_text">100</span> Live Interviews</td>
                                <td class="table_row_text"><span class="medium_text">250</span> Live Interviews</td>
                                <td class="table_row_text"><span class="enterprise_text">Unlimited</span> Live Interviews</td>
                            </tr>
                            <tr class="table_white_row">
                                <td class="table_row_text">No Downloads</td>
                                <td class="table_row_text"><span class="medium_text">Download Video Resumes</span></td>
                                <td class="table_row_text"><span class="enterprise_text">Download Video Resumes</span></td>
                            </tr>
                            <tr class="table_grey_row">
                                <td class="table_row_text">No Recordings</td>
                                <td class="table_row_text"><span class="medium_text">Record Live Interviews</span></td>
                                <td class="table_row_text"><span class="enterprise_text">Record Live Interviews</span></td>
                            </tr>
                            <tr class="table_white_row">
                                <td class="table_row_text"></td>
                                <td class="table_row_text"></td>
                                <td class="table_row_text"><span class="enterprise_text">One on One Support</span></td>
                            </tr>
                            <tr class="table_second_row last">
                                <td class="">
                                    <button id="small_button" class="join_button small trial_buttons">
                                        <span class="join_button_text">Free Trial</span>
                                    </button>
                                </td>
                                <td class="">
                                    <button id="medium_button" class="join_button medium trial_buttons">
                                        <span class="join_button_text">Free Trial</span>
                                    </button>
                                </td>
                                <td class="">
                                    <button id="enterprise_button" class="join_button enterprise trial_buttons">
                                        <span class="join_button_text">Free Trial</span>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>

        <div class="container-fluid footer">
            <div class="row visible-md visible-lg">
                <div class="col-md-2 col-lg-2">
                    <a class="navbar-left float_left" href="home.html">
                        <img src="images/logo.png" alt="Elevtor Logo" id="logo_image_footer">
                    </a>
                </div>

                <div class="col-md-3 col-lg-3 center_align">
                    <a href="#" class="link_footer">admin@elevtor.co</a>
                </div>

                <div class="col-md-3 col-lg-3 center_align">
                    <a href="https://www.facebook.com/Elevtorjobs/"><img src="images/facebook.png" alt="Facebook Link" id="logo_social_footer"></a>
                    <a href="https://angel.co/elevtor"><img src="images/angel.png" alt="Angel List Link" id="logo_social_footer"></a>
                    <a href="https://twitter.com/elevtorCompany"><img src="images/twitter.png" alt="Twitter Link" id="logo_social_footer"></a>
                    <a href="https://www.linkedin.com/company/10849804"><img src="images/linkedin.png" alt="LinkedIn Link" id="logo_social_footer"></a>
                </div>

                <div class="col-md-3 col-lg-3 right_align" style="margin-top: 3em; padding-right: 5em;">
                    <a href="#home" class="join_button_bottom page-scroll" >
                        <span class="join_button_text">Join the beta!</span>
                    </a>
                </div>
            </div>

            <div class="row visible-xs visible-sm" style="margin-top: 1em;">
                <div class="col-xs-1 col-sm-1">
                    <a class="navbar-left float_left" href="#home">
                        <img src="images/logo.png" alt="Elevtor Logo" id="logo_image_footer_small">
                    </a>
                </div>

                <div class="col-xs-5 col-sm-5 center_align">
                    <a href="#" class="link_footer_small">admin@elevtor.co</a>
                    <br />
                    <a href="#"><img src="images/facebook.png" alt="Facebook Link" id="logo_social_footer_small"></a>
                    <a href="#"><img src="images/instagram.png" alt="Instagram Link" id="logo_social_footer_small"></a>
                    <a href="#"><img src="images/twitter.png" alt="Twitter Link" id="logo_social_footer_small"></a>
                    <a href="#"><img src="images/linkedin.png" alt="LinkedIn Link" id="logo_social_footer_small"></a>
                </div>

                <div class="col-xs-3 col-sm-3 right_align" style="margin-top: 1.5em;">
                    <button class="join_button_bottom page-scroll" href="#home">
                        <span class="join_button_text">Join the beta!</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Scrolling Nav JavaScript -->
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/scrolling-nav.js"></script>
    <!-- Clicking form -->
    <script src="js/client-form.js"></script>

</body>
</html>
