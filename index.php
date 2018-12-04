<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Steve Whitmore | Web Developer | Kansas City, MO</title>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale = 1.0'>
    <meta name='description' content="Hi, I'm Steve Whitmore, a freelance web developer based out of Kansas City.">
    <meta name='keywords' content='web,developer,code,programmer,website,computer,student'>
    <meta name='author' content='Steve Whitmore'>
    <link rel='icon' type='image/png' href='favicon.png'>
    <link href="https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css"
      rel="stylesheet">
    <link type='text/css' rel='stylesheet' href='./css/style.css'>
    <link rel="stylesheet" type="text/css" href="./slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="./slick/slick-theme.css"/> 

    <!-- <script type="text/javascript">
    	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    	ga('create', 'UA-39951532-1', 'auto');
    	ga('require', 'displayfeatures');
    	ga('send', 'pageview');
    </script> -->
</head>
<body>
<div class="container">
<header id="home">
    <canvas id="home-backdrop"></canvas>
    <div id="intro" class="flex">
        <div id="intro-text" class="flex center">
            <h1>Hello, I'm <span class="highlight">Steve Whitmore</span>.</h1>
            <p>I'm a code enthusiast, web magician, <br>and full-stack developer.</p>            
        </div>
        <a id="view-work" href="#about">View my work <i class="mdi mdi-arrow-right"></i></a>    
    </div>
</header>

<nav class="flex">
    <div id="nav-inner">
        <ul>
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>

<section id="about">
    <div class="inner">
        <div class="heading center">
            <h2>ABOUT</h2>
            <div class="line"></div>
        </div>
        <div class="hex-outer">
            <div class="hex-wrap center">
                <div class="hexagon">
                    <i class="mdi mdi-speedometer"></i>
                </div>
                <span class="hex-title"><strong>Fast</strong></span>
                <span>Every website and application optimized for the fastest load times.</span>
            </div>
            <div class="hex-wrap center">
                <div class="hexagon">
                    <i class="mdi mdi-responsive"></i>
                </div>
                <span class="hex-title"><strong>Responsive</strong></span>
                <span>Styled to fit all devices as a modern standard.</span>
            </div>
            <div class="hex-wrap center">
                <div class="hexagon">
                    <i class="mdi mdi-security-lock"></i>
                </div>
                <span class="hex-title"><strong>Secure</strong></span>
                <span>Security is a top priority and always comes first.</span>
            </div>
            <div class="hex-wrap center">
                <div class="hexagon">
                    <i class="mdi mdi-account-group"></i>
                </div>
                <span class="hex-title"><strong>Accessible</strong></span>
                <span>Everybody has a right to experience the web.</span>
            </div>
        </div>
        <div id="about-main">
            <div id="short-bio" class="center">
                <img src="images/me-hex.png" alt="My cartoonized profile picture"/>
                <span><strong>Who is this guy?</strong></span>
                <span><p>I'm a full-stack developer at the <a href="https://naic.org" target="_blank">NAIC</a> in Kansas City, MO.</p>
                <p>I'm passionate about providing the best possible product<br>through clear communication, adhering to best practices,<br>and a strong dedication to clean, concise code.</p></span>
                <span><p><a a href="#" data-scroll="contact">Let's make something special.</a></p></span>
            </div>
            <div id="my-skillset">
                <div class="skill-wrapper">
                    <button>Front-end Development <i class="mdi mdi-arrow-right"></i></button>
                    <ul>
                        <li>Angular</li>
                        <li>JavaScript</li>
                        <li>RxJS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
                        <li>Photoshop/GIMP</li>
                    </ul>
                </div>
                <div class="skill-wrapper">
                    <button>Back-end Development <i class="mdi mdi-arrow-right"></i></button>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PHP</li>
                        <li>JPA</li>         
                        <li>Hibernate</li>
                        <li>Spring Boot</li>
                        <li>MongoDB</li>
                        <li>DynamoDB</li>
                        <li>SQL</li>
                        <li>JPQL</li>
                    </ul>
                </div>
                <div class="skill-wrapper">
                    <button>Content Management Systems <i class="mdi mdi-arrow-right"></i></button>
                    <ul>
                        <li>WordPress</li>
                        <li>Magento</li>
                        <li>NetSuite</li>
                        <li>CS Cart</li>
                        <li>Drupal</li>
                        <li>ExpressionEngine</li>
                        <li>Joomla</li>
                    </ul>
                </div>
                <div class="skill-wrapper">
                    <button>Web/System Administration <i class="mdi mdi-arrow-right"></i></button>
                    <ul>                        
                        <li>Security Best Practices (OWASP)</li>
                        <li>WCAG Compliant</li>
                        <li>Scripting (BASH/Python)</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>AWS E2E Networks</li>
                        <li>GNU/Linux</li>
                        <li>macOS</li>
                        <li>Windows</li>
                    </ul>
                </div>
                <div class="skill-wrapper">
                    <button>Current Toolset <i class="mdi mdi-arrow-right"></i></button>
                    <ul>
                        <li>Ubuntu MATE</li>
                        <li>VS Code</li>
                        <li>Postman</li>
                        <li>LAMP</li>
                        <li>MongoDB</li>
                        <li>GitLab Auto-DevOps</li>
                        <li>Slack</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="portfolio">
    <div class="heading center">
        <h2>PORTFOLIO</h2>
        <div class="line"></div>
        <div id="components-demo">
            <button-counter></button-counter>
          </div>
    </div>
    <div id="portfolio-inner" class="flex inner">
        <div id="portfolio-thumbs">
            <?php require_once('./includes/template-project-thumbs.php'); ?>   
        </div>
        <div id="portfolio-single">
            <?php require_once('./includes/template-project-modal.php'); ?>
        </div>
    </div>
</section>

<section id="testimonials">
    <ul class="slider inner">
        <li class="testi-single">
            <p><q cite="http://www.suburban-bees.com/">My blogging partner Erin and I started working with Steve right after starting our blog. 
                Technology is not a natural fit for either of us and Steve was instrumental in taking over the more technically involved aspects of the site & Wordpress. 
                Best of all he created easy to understand videos that allowed us to figure out how to take over many of the tasks ourselves. 
                We always found Steve extremely easy and pleasant to work with, very responsive to our needs, 
                always willing to explain any aspect of his work and absolutely scrupulous in his work. 
                Steve is a highly motivated, hard working individual and I don't hesitate to give him my highest recommendation.</q></p>
            <hr>
            <span>- Tricia, co-founder of <a href="http://www.suburban-bees.com/" target="_blank" class="testi-source">Suburban B's</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://visfire.com/">Steve has assisted our team on numerous complex projects where a straightforward answer wasn’t always clear. He always seems able to find an outside perspective and a creative solution. He excels in front end development, responsive websites, content management systems, and customer service.  Many developers lack the communication skills to convey technical tasks to the client or management, but Steve has always excelled in this area. He also takes direction well and is self motivated.</q></p>
            <hr>
            <span>- Cory, co-owner of <a href="http://visfire.com/" target="_blank" class="testi-source">VisFire</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://www.cs.colostate.edu/~wilcox/">Steve was in my sophomore computer science course during Spring 2016, and did very well, receiving an A- letter grade. This course combines computer architecture, combinational and sequential logic, state machines, assembly programming, numerical representation, and C programming. The course is traditionally very challenging for sophomore students, and many do not pass the first time through. Steve completed all assignments with an average of over 98.5%, thus showing a high degree of diligence. He also had perfect attendance on all labs, quizzes, and exams. In my opinion Steve is easily is in the top 20% of the students I see, and I’m delighted to give him a recommendation.</q></p>
            <hr>
            <span>- Dr. Wilcox, professor at <a href="http://www.cs.colostate.edu/~wilcox/" target="_blank" class="testi-source">Colorado State University</a></span>
        </li>
    </ul>
</section>

<footer id="contact">
    <div id="footer-inner">
        <a id="scroll-top" href="#home"><i class="mdi mdi-chevron-double-up"></i></a>
        <div id="social-wrap">
            <a href='https://github.com/stevewhitmore' target='_blank'><i class="mdi mdi-github-circle"></i></a>
            <a href='https://www.linkedin.com/in/steve-whitmore' target='_blank'><i class="mdi mdi-linkedin"></i></a>
            <a href='tel:19702379599' target='_blank'><i class="mdi mdi-phone-outgoing"></i></a>
            <a href='mailto:steve@swhitmore.com'><i class="mdi mdi-email-outline"></i></a>
        </div>
        <div id="mine" class="center">Steve Whitmore <span>&copy;<?php echo date('Y'); ?></span></div>
    </div>    
</footer>
</div>

<script src="./js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="./slick/slick.min.js"></script>
<script src="./js/main.js"></script>
<script src="./js/project.js"></script>
<script src="./js/canvas.js"></script>
<script src="./js/carousels.js"></script>

<!-- <script src="./js/canvasjs.min.js"></script>
<script src="./js/canvas.js"></script> -->


<!--                                           .x+!?T!!+:.
                                            x?!!!!!!!!!!!!!?x
                                          /!!!!!!!!!!!!!!XXX!Xh.
                                         !!!!!!!X!!""`            `
                                        !!X%"`                     \
                                     :-"
        +++x.                                            :.x:x+!+!i-~
       'X!!!!!!%.                                 :..!?!!!!!!!!!!!!
         "X!!!!!!!%.                .        xx!!!!!!!!!!!!!!!!!!!!!
          '!!!!!!!!!?.              '-+!!?!!!!!!!!!!!tU@?!!!!?!!!!!!
           X!!!!!!!!!!!               X!!!!!!!!!!!!!XM!!!!!!!!!!!!!!X
            "!!!!!!!!!!!             '!XM!!!!!!!!!!!!!!!!!!XUW~"!!!!!>
            '!!!!!!!!!!!!             ?!!!!!!!!!!!!!!!X*"      X!!!!!X
             %!!!!!!!!!!!!            !!!!!!!!!!!!!!X          !!!!!!!\
    !h        ?!!!!!!!!!!!>           !!XX*""#$``?!!!!.      /!!!!!!!!!L
    X!!       X!!!!!!!!!!!!           ^          X!!!!!!???!!!!!!!!!!!!!:
    !!!!\      "!!!!!!!!!!!              -.....+M!!!!!!!!!!!!!!!!!!!!!!!!:
    !!!!!!:     /!!!!!!!!!!                ~!!!X!!!!!!!!!!!!!!!9$$K!!!!!!!\
    4!!!!!!!%. 4!!!!!!!!!!>                 4!X!!!!!!!!!!!!!!!!$$$R!!!!!!!!!
    '!!!!!!!!!!M!!!!!!!!!X                   'X!!!!!!!X!!!!X!!!M$$R!!!!!!!!!!x
     !!!!!!!!!!!M!!!!!!!!f    ???+x.          X!!!!!!!!X!!!M!!!X$#!!!!!!!!!!!!!:
      !!!!!!!!!!!!!!!!!!"     'X!!!!!!.       !!!!!X!!!M!!!!X!!!X!!!!!!!!!!!!!!!!x
       `!!!!!!!!!!!!!!~  `      %!!!!!!!:     4!!!!M!!!M!!!!X!!!X!!!!!!!!!!!!!!!   '(
         4!!!!!!!!X"      ~     !!!!!!!!!!    '!!!!M!!!?!!!!M!!!X!!!!!!!!!!!!!      :(x
           ?""``                 %!!!!!!!!!:  '!!!!X!!!M!!!X?X!X!!!!!!!!!!!!f    x!!!!!!x
           .              h      !!!!!!!!!!!\ X!!!9M!!XMMX@!!!!!!!!!!!!!!!X"   :!!!!!!!!!!x
            (         ..!!!!:    '!!!!!!!!!!!M!'" '!!!!!!!!!!!!!!!!!!!!!!X~   :!!!!!!!!!!!!!:
             `!%xx:x!?!!!!!!!!x    X!!!!!!!!!!X   '!!!!!!!!!!!!!!!!!!!!!X    :!!!!!!!!!!!!!!!!:
              `!!!!!!!!!!!!!!!!!!x:!!!!!!!!!!!M    X!!!!!!!!!!!!!!!!!!!X    '!!!!!!!!!!!!!!!!!!X
               !!!!!!!!!!!!!!!!!!!!M!!!!!!!!!!!>   X!!!!!!!!!!!!!!!!!!X~    !!!!!!!!!!!!!!!!!!!!!
               '!!!!!!!!MX!!!!!!!!!!X!!!!!!!!!!!   '!!!!!!!!!!!!!!!!!!~    X!!!!!!!!!!!!!!!!!!!!!X
                4!!!!!X!!!!?@XX!!!!!X!!!!!!!!!!X    X!!!!!!!!!!!!!!!!"    X!!!!!!!!!!!!!!!!!!!!!!!L
                 !!!!!MX!!!!!!!!!!!!M!!!!!!!!!!!.    !!!!!!!!!!!!!!X~    :!!!!!!!!!!!!!!!!!!!!!!!!~
                  X!!!!?X!!!!!!!!!!!!!X!!!!!!!!!> "(  X!!!!!!!!!!!f      X!!!!!!!!!!!!!!!!!!!M!!!!
                   %!!!!!X!!!!!!!!!!!!!?X!!!!!!X~   "( ^4X!!!!!X"       '!!!!!!!!!!!!!!!!!!!X!!X!!
                    `X!!!!?X!!!!!!!!!!!!!!!!!!X!      '+:x....          X!!!!!!!!!!!!!!!!!!!MX!!!>
                      4!!!!!?X!!!!!!!!!!!!!!!X        d!!!!!!!!!!!!!?!+xX!!!!!!!!!!!!!!!!!!X?!!!!
                       `X!!!!!!?tX!!!!!!!!!!X         !!!!!!!!!!!!!!!!!!!!!M!!!!!!!!!!!!!!!X!!!!f
                         "X!!!!!!!!!?%@!*"            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!M!!!!!
                           ^4X!!!!!!!!!!.           '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X
                               '""~~~""" `>       (!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X~
                                           /-.. :!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!X
                                         ~      `X!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!X"
                                                   "X!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!X`""
                                      ~               "X!!!!!!!!!!!!!!!!!!!!!!!!!!!!f
                                   @Hxu                  "4X!!!!!!!!!!!!!!!!!!!!!!X
                                 :MRM8MMMRhL                 "%X!!!!!!!!!!!!!!!!X`
                                @MRM$MMMMMMMMRs                   ^"*!XXXXXXX*"             -->
</body>
</html>
