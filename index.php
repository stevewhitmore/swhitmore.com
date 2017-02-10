<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Steve Whitmore | Web Developer | CS Student</title>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale = 1.0'>
    <meta name='description' content='Steve Whitmore. Web Development'>
    <meta name='keywords' content='web,developer,code,programmer,website,computer,student'>
    <meta name='author' content='Steve Whitmore'>
    <link rel='icon' type='image/png' href='favicon.png'>
    <link type='text/css' rel='stylesheet' href='./inc/font-awesome.css'>
    <link type='text/css' rel='stylesheet' href='./inc/unslider.css'>
    <link type='text/css' rel='stylesheet' href='./inc/style.css'>

    <script type="text/javascript">
    	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    	ga('create', 'UA-39951532-1', 'auto');
    	ga('require', 'displayfeatures');
    	ga('send', 'pageview');
    </script>
    <!--[if lt IE 9]>
    <script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script>
    <![endif]-->
</head>
<body>

<header>
    <div class='main-content'>
        <div class='me-image'>
            <img src='./images/me.png' alt='steve whitmore cartoonized headshot'>
        </div>
        <h1><a href="./inc/SteveWhitmoreResume.pdf">Steve Whitmore</a></h1>
        <p>Code Enthusiast + Computer Science Student + Full Stack Web Developer</p>
    </div>
    <span id="down">see portfolio</span>
    <div id="header-lower">
        <div id="social-wrap">
            <a class="social" href='https://github.com/stevewhitmore' target='_blank'>
                <i class='fa fa-github-square' aria-hidden='true'></i>
            </a>
            <a class="social" href='https://www.linkedin.com/in/steve-whitmore' target='_blank'>
                <i class='fa fa-linkedin-square' aria-hidden='true'></i>
            </a>
            <a class="social" href='mailto:steve@swhitmore.com'>
                <i class='fa fa-envelope-square' aria-hidden='true'></i>
            </a>
        </div>
    </div>
</header>

<section id="portfolio">
        <div class="folio-inner">
            <h2>Personal Projects</h2>
            <p class="intro">I've really enjoyed working on these projects. The collection below is a bit eclectic since it ranges from WordPress projects to an image processing program written in C++.</p>
    <?php
        require_once('./inc/Thumb.php');
        foreach($thumbs as $thumb) {
            $vf = $thumb->name == 'APFED';
            if($vf) { ?>
                </div>
                    <div class="folio-inner" id="visfire">
                        <h2>Projects with <a href="http://visfire.com" target="_blank">VisFire</a></h2>
                        <p class="intro">I've had the pleasure of working with dozens of clients as a member of the VisFire team. Below are some of the projects I'm most proud to have been a part of.</p>
            <?php } ?>
            <div class="project" id="<?php echo $thumb->id; ?>">
                <div class="proj-thumb">
                    <span class="proj-title">
                        <p><?php echo $thumb->name; ?></p>
                    </span>
                    <img src="<?php echo $thumb->imgUrl; ?>" />
                </div>
            </div>
    <?php } ?>
    </div>
</section>
<section id="testimonials">
    <ul>
        <li class="testi-single">
            <p><q cite="http://www.suburban-bees.com/">My blogging partner Erin and I started working with Steve right after starting our blog. Technology is not a natural fit for either of us and Steve was instrumental in taking over the more technically involved aspects of the site & Wordpress. Best of all he created easy to understand videos that allowed us to figure out how to take over many of the tasks ourselves. We always found Steve extremely easy and pleasant to work with, very responsive to our needs, always willing to explain any aspect of his work and absolutely scrupulous in his work. Steve is a highly motivated, hard working individual and I don't hesitate to give him my highest recommendation.</q></p>
            <span><a href="http://www.suburban-bees.com/" target="_blank" class="testi-source">- Tricia, co-founder of Suburban B's</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://visfire.com/">Steve has assisted our team on numerous complex projects where a straightforward answer wasn’t always clear. He always seems able to find an outside perspective and a creative solution. He excels in front end development, responsive websites, content management systems, and customer service.  Many developers lack the communication skills to convey technical tasks to the client or management, but Steve has always excelled in this area. He also takes direction well and is self motivated.</q></p>
            <span><a href="http://visfire.com/" target="_blank" class="testi-source">- Cory, co-owner of VisFire</a></span>
        </li>
        <li class="testi-single">
            <p><q cite="http://www.cs.colostate.edu/~wilcox/">Steve was in my sophomore computer science course during Spring 2016, and did very well, receiving an A- letter grade. This course combines computer architecture, combinational and sequential logic, state machines, assembly programming, numerical representation, and C programming. The course is traditionally very challenging for sophomore students, and many do not pass the first time through. Steve completed all assignments with an average of over 98.5%, thus showing a high degree of diligence. He also had perfect attendance on all labs, quizzes, and exams. In my opinion Steve is easily is in the top 20% of the students I see, and I’m delighted to give him a recommendation.</q></p>
            <span><a href="http://www.cs.colostate.edu/~wilcox/" target="_blank" class="testi-source">- Dr. Wilcox, professor at Colorado State University</a></span>
        </li>
    </ul>
</section>

<footer>
    <span>Made with &hearts; in Fort Collins, CO</span>
</footer>

<div id="proj-pop">
    <div class="pop-inner" id="">
        <h2></h2>
        <div id="pop-content">
            <p></p>
            <span id="my-resp"></span>
            <ul></ul>
        </div>
        <a href="" target="_blank"></a>
        <span id="prev"><img src="./images/arrow-prev.png" /></span>
        <span id="next"><img src="./images/arrow-next.png" /></span>
        <span id="close"></span>
    </div>
</div>

<script src="./inc/jquery-3.1.1.min.js"></script>
<script src="./inc/unslider.min.js"></script>
<script src="./inc/popups.js"></script>
<script src="./inc/main.js"></script>


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
