<?php 

// $data = file_get_contents ('../_in-memory-db/projects.json');
// $json = json_decode($data, true);

// var_dump($json);

// $jsonIterator = new RecursiveIteratorIterator(
//     new RecursiveArrayIterator($json),
//     RecursiveIteratorIterator::SELF_FIRST);

// $project = array();

// foreach ($jsonIterator as $key => $val) {
//     if ($key['project']) {
//         array_push($project, $val);
//     }
// }

// foreach ($projects as $p) {
//     echo "$p\n";
// }

class Project {
    public $id;
    public $name;
    public $tools;
    public $thumb;
    public $slides;
    public $text;
    public $features;
    public $url;

    public function __construct($id) {
        $this->id = strtolower($id);
        $this->thumb = "images/" . strtolower($id) . ".jpg";
        $this->tools = "WordPress";
    }
}

$projects = array();

$archium = new Project("archium");
$archium->name = ucwords($archium->id);
$archium->tools = "Angular + Express.js";
$archium->slides = array("images/linux.png", "images/cpp.png");
$archium->text = "moo cows by the sea shore";
$archium->features = array();
$archium->url = "#";

$teton = new Project("teton");
$teton->name = "Teton West Colorado";
$teton->slides = array("/images/projects/slides/teton1.jpg", "/images/projects/slides/teton2.jpg");
$teton->text = "teton teton ooh lala";
$teton->features = array();
$teton->url = "https://tetonwest.com";

array_push($projects, $archium, $teton);

foreach ($projects as $project) :
?>

<div class="project-overlay">
    <div id="<?php echo $project->id; ?>" class="project-inner">        
        <div class="slider">
            <?php foreach ($project->slides as $slide) : ?>
                <img src="<?php echo $slide; ?>"/>
            <?php endforeach; ?>
        </div>
        <div class="carousel-nav">
            <button class="mdi mdi-chevron-left prev"></button>
            <button class="mdi mdi-chevron-right next"></button>
        </div>
        <div class="project-text">
            <h2><?php echo $project->name; ?></h2>
            <p><?php echo $project->text; ?></p>
        </div>
        <div class="project-nav">
            <a href="<?php echo $project->url ?>" target="_blank">Visit Project <i class="mdi mdi-open-in-new"></i></a>
            <button class="mdi mdi-close close"></button>    
        </div>
    </div>    
</div>

<?php endforeach; ?>



