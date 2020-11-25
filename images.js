const Scraper = require('images-scraper');
const fs = require('fs');

const google = new Scraper({
  puppeteer: {
    headless: false,
  }
});
(async () => {
  const results = await google.scrape('nacktnasenwombat', 100);
  console.log('results', results); 
})();


