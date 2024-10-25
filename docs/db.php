<?php
class Database {
    public $conn;

    public function __construct() {
        // Ajustar aqui conforme o seu banco de dados
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "platech";

        $this->conn = new mysqli($servername, $username, $password, $dbname);

        if ($this->conn->connect_error) {
            die("Falha na conexão: " . $this->conn->connect_error);
        }
    }

    public function close() {
        $this->conn->close();
    }
}
?>
