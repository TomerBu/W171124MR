import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello from the api!!!!" });
});
router.get("/foo", (req, res) => {
    res.json({ message: "Hello from foo" });
});

export default router;