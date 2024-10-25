<?php
require_once '../../db.php';

class PlacaController {
    private $db;

    public function __construct() {
        $database = new Database();
        $this->db = $database->conn;
    }

    public function listarPlacas() {
        $query = "SELECT cliente.nome AS solicitante, placas.tipo, placas.numero_placa, placas.categoria 
                  FROM placas 
                  INNER JOIN cliente ON placas.id_cliente = cliente.id_cliente";
        $result = $this->db->query($query);

        if ($result && $result->num_rows > 0) {
            $placas = [];
            while ($row = $result->fetch_assoc()) {
                $placas[] = $row;
            }
            return $placas;
        } else {
            return [];
        }
    }
}
?>
