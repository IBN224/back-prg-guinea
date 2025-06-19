const handleError = (err, req, res, next) => {
  if (err?.name === "UnauthorizedError") {
    if (err.inner.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Votre session a expirée!" });
    }
    return res.status(401).json({ msg: "Vous n'etes pas authorisée" });
  }
  if (err?.name === "ValidationError") {
    return res.status(401).json({ msg: err });
  }
  if (err?.name === "TokenExpiredError") {
    return res.status(401).json({ msg: "Votre session a expirée" });
  }

  return res?.status(500).json(err);
};
export default handleError;
