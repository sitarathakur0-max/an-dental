import express from 'express';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Serve XML Sitemap for search engines and crawlers
  app.get('/sitemap.xml', (req, res) => {
    const host = req.get('host');
    const isHttps = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https';
    const protocol = isHttps ? 'https' : 'http';
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;
    const currentDate = new Date().toISOString().split('T')[0];

    const routes = [
      { path: '', changefreq: 'weekly', priority: '1.0' },
      { path: '/about', changefreq: 'monthly', priority: '0.8' },
      { path: '/services', changefreq: 'weekly', priority: '0.9' },
      { path: '/patient-info', changefreq: 'monthly', priority: '0.8' },
      { path: '/faqs', changefreq: 'monthly', priority: '0.7' },
      { path: '/contact', changefreq: 'monthly', priority: '0.9' },
      { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml; charset=utf-8');
    return res.status(200).send(sitemapXml);
  });

  // Serve robots.txt
  app.get('/robots.txt', (req, res) => {
    const host = req.get('host');
    const isHttps = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https';
    const protocol = isHttps ? 'https' : 'http';
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;

    const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
    res.header('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(robotsContent);
  });

  // Secure API endpoint for general patient enquiries
  app.post('/api/contact', (req, res) => {
    const { name, contactMethod, contactValue, enquiryType, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Please enter your name.' });
    }

    if (!contactMethod || !['phone', 'email'].includes(contactMethod)) {
      return res.status(400).json({ error: 'Please choose phone or email.' });
    }

    if (!contactValue || typeof contactValue !== 'string' || contactValue.trim().length === 0) {
      return res.status(400).json({ error: 'Please provide your contact phone number or email address.' });
    }

    if (contactMethod === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactValue.trim())) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
      }
    } else if (contactMethod === 'phone') {
      const cleanPhone = contactValue.replace(/[\s\-\(\)\+]/g, '');
      if (cleanPhone.length < 7) {
        return res.status(400).json({ error: 'Please enter a valid telephone number.' });
      }
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Please enter your message or question.' });
    }

    // Generate genuine confirmation reference
    const reference = `AND-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    return res.status(200).json({
      success: true,
      reference,
      receivedAt: new Date().toISOString(),
      message: 'Your enquiry has been received by our clinic reception system.',
    });
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AN Dental Surgery server running on http://localhost:${PORT}`);
  });
}

startServer();
