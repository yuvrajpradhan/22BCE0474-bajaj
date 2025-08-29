import express from "express";

const app = express();
app.use(express.json());

// Change with your own details
const FULL_NAME = "john_doe";
const DOB = "17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

// Helper: alternating caps from reversed alphabets
function alternatingCaps(str) {
  let result = "";
  let toggle = true;
  for (let ch of str) {
    result += toggle ? ch.toUpperCase() : ch.toLowerCase();
    toggle = !toggle;
  }
  return result;
}

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
        // it's a number
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

    // concat_string (reverse alphabets joined, alternating caps)
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
