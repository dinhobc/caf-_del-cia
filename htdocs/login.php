<?php
include('conexao.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $resultado = mysqli_query($conexao, $sql);
    $usuarioDB = mysqli_fetch_assoc($resultado);

    if ($usuarioDB && password_verify($senha, $usuarioDB['senha'])) {
        echo "Login realizado com sucesso!";
        header("Location: index.html");
    } else {
        echo "Usuário ou senha incorretos.";
    }

    mysqli_close($conexao);
}
?>