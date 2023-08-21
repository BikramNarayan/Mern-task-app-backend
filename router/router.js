const express = require("express");
const cont = require("../controller/controller");
const router = express.Router();

router.get("/", cont.home);
router.post("/api/post", cont.CreateProduct);
router.get("/api/post", cont.getAllProduct);
router.get("/api/post/:id", cont.getOneProduct);
router.delete("/api/post/:id", cont.deleteTask);
router.patch("/api/post/:id", cont.updateTask);
router.put("/api/post/:id", cont.replaceTask);

module.exports = router;

// -----------------------------------------------------------------------------
//  home()    galat hai     home hoga sirf
// -------------------------------------------------------------------------------
