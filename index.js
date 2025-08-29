import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Change with your own details
const FULL_NAME = "john_doe";
const DOB = "17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

// Helper: alternating caps
function alternatingCaps(str) {
  let result = "";
  let toggle = true;
  for (let ch of str) {
    result += toggle ? ch.toUpperCase() : ch.toLowerCase();
    toggle = !toggle;
  }
  return result;
}

// POST route
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    for (let item of data) {
      if (/^-?\d+$/.test(item)) {
        let num = parseInt(item);
        sum += num;
        if (num % 2 === 0) even_numbers.push(item.toString());
        else odd_numbers.push(item.toString());
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    }

    const concat_string = alternatingCaps(alphabets.join("").split("").reverse().join(""));

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
