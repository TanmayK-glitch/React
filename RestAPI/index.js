import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

// If you have a same route then use this method insted of writing different code for same route.
app.route("/api/users/:id")
    .get("/api/users/:id", (req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user with ID
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        // Delete user with ID
        return res.json({ status: "Pending" });
    })
    .post((req, res) => {
        // Create User
        return res.json({ status: "Pending" });
    });


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));

