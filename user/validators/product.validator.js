import yup from 'yup';

const ProductSchemaValidator = yup.object({
  body: yup.object({
    name: yup
      .string()
      .typeError("Le nom du produit doit être en string")
      .required("Le nom du produit est obligatoire"),

    form: yup
      .string()
      .typeError("La forme du produit doit être en string")
      .required("La forme du produit est obligatoire"),

    state: yup
      .boolean()
      .typeError("Le state du produit doit être boolean")
      .default(true),
  }),
});

export default ProductSchemaValidator;
