const express = require('express');
const path    = require('path');
const app     = express();

// Serve all files in the repo root
app.use(express.static(path.join(__dirname)));

// Render injects this for you
const PORT = parseInt(process.env.PORT, 10) || 3000;

// Bind to 0.0.0.0 so it’s reachable externally
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Listening on port ${PORT}`);
});
