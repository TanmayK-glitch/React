const app = express();
const PORT = 8000;

// Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/users, ")


app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));

