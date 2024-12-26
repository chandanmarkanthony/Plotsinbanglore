import fs from 'fs';
import fetch from 'node-fetch';

const generateSitemap = async () => {
  const baseURL = "http://localhost:3000";  // Use localhost for development
  const apiURL = "https://leadapi.homebble.in/propertyRoute/getAllproperties";

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const properties = data.Allproperties;

    // Filter properties of type "Plots"
    const plots = properties.filter((property) => property.property_type === "Plots");

    const urls = plots.map((property) => {
      const { id, project_Name, createdAt } = property;

      // Encode the project name to handle special characters
      const formattedProjectName = encodeURIComponent(project_Name.replace(/\s+/g, '-').toLowerCase());
      const propertyUrl = `${baseURL}/property-details/${formattedProjectName}/${id}`;
      const lastmod = new Date(createdAt).toISOString().split("T")[0];

      return `
        <url>
          <loc>${propertyUrl}</loc>  
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseURL}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${urls.join("")}
      </urlset>
    `;

    // Write to public/sitemap.xml
    fs.writeFileSync('./public/sitemap.xml', sitemap.trim());
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
