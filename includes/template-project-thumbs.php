<?php 

require_once('project.php');

foreach ($projects as $project) :
?>

<div class="portfolio-single-wrapper">
    <div class="overlay">
        <div class="description"><strong><?php echo $project->name; ?></strong><br><span><?php echo $project->tools; ?></span></div>
        <div class="learn-more-link"><button id="<?php echo $project->id; ?>">Learn More</button></div>
    </div>
    <img src="<?php echo $project->thumb ?>" alt="<?php echo $project->name; ?> thumbnail" />
</div>

<?php endforeach; ?>