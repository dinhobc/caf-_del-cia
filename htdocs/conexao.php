<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "cafeteria";

// Criar a conexão
$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

// Verificar conexão
if (!$conexao) {
    die("Falha na conexão: " . mysqli_connect_error());
}
?>