import mongoose from "mongoose";

const { Schema } = mongoose;

const OrdonanceSchema = new Schema({
  from_departement_id: String,
  prestation_id: String,
  produit_id: String,
  categorie_id: String,
  nom: String,
  type_produit: String,
  prix: Number,
  posologie: String,
  quantite: Number,
});

export default OrdonanceSchema;
