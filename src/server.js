const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://prajapatiabhay2003:JBc72kHaiBiLopH6@cluster0.lwx5ukc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the URL model
const Url = mongoose.model('Url', {
  originalUrl: String,
  shortUrl: String,
});

app.use(express.json());

// Endpoint to create short URL
app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  try {
    // Check if the URL already exists
    let url = await Url.findOne({ originalUrl });

    if (url) {
      res.json({ shortUrl: url.shortUrl });
    } else {
      // Create a new short URL
      const shortUrl = shortid.generate();
      const fullShortUrl = `${req.protocol}://${req.get('host')}/${shortUrl}`;

      url = new Url({
        originalUrl,
        shortUrl: fullShortUrl,
      });

      await url.save();
      res.json({ shortUrl: fullShortUrl });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Redirect to the original URL
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
