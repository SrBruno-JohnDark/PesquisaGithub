<?php
if (isset($_POST['usuariou']) && $_POST['usuariou'] != "") {

    $obj = json_decode(shell_exec("./teste.sh {$_POST['usuariou']}"));

    echo "<img src='$obj->avatar_url' width='100'><br>";
    echo "<h2>Usuário: $obj->login</h2><br>";
    echo "<h3>Página do github: <a href='$obj->html_url'>$obj->html_url</a></h3><br>";
    echo "Conta criada em: $obj->created_at<br>";
}
?>