import { db } from "../db.js";

export const getPontos = (_, res) => {
    const q = "SELECT * FROM pontuacao";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

  export const addPontos = (req, res) => {
    const pontosToAdd = req.body.pontos;
  
    if (pontosToAdd === undefined) {
      return res.status(400).json({ error: "Invalid request. 'pontos' not provided in the request body." });
    }
  
    const q = "UPDATE pontuacao SET pontos = pontos + ?";
  
    db.query(q, [pontosToAdd], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error", details: err });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No row found to update." });
      }
  
      return res.status(200).json({ message: "Pontos added successfully." });
    });
  };

  export const removePontos = (req, res) => {
    const pontosToRemove = req.body.pontos;
  
    if (pontosToRemove === undefined) {
      return res.status(400).json({ error: "Invalid request. 'pontos' not provided in the request body." });
    }
  
    const q = "UPDATE pontuacao SET pontos = pontos - ?";
  
    db.query(q, [pontosToRemove], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error", details: err });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No row found to update." });
      }
  
      return res.status(200).json({ message: "Pontos removed successfully." });
    });
  };
  