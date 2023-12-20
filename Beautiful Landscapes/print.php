<?php
$values = ["a" => 5, "b" => 15, "c" => 8, "d" => 20];

foreach ($values as $key => $value) {
    if ($value > 10) {
        echo $key . "<br>";
    }
}
?>
