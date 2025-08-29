<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BFHL Input Form</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 30px; }
    textarea { width: 300px; height: 100px; }
    button { padding: 8px 14px; margin-top: 10px; }
    pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
  </style>
</head>
<body>
  <h2>BFHL Input Form</h2>
  
  <form id="dataForm">
    <label for="data">Enter values (comma separated):</label><br><br>
    <textarea id="data" required></textarea><br><br>
    <button type="submit">Submit</button>
  </form>

  <h3>Response:</h3>
  <pre id="response"></pre>

  <script>
    const form = document.getElementById("dataForm");
    const responseBox = document.getElementById("response");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Convert comma separated values into an array
      const values = document.getElementById("data").value
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

      try {
        const res = await fetch("/bfhl", {   // notice: relative URL since same server
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: values }),
        });

        const result = await res.json();
        responseBox.textContent = JSON.stringify(result, null, 2);
      } catch (err) {
        responseBox.textContent = "Error: " + err.message;
      }
    });
  </script>
</body>
</html>
