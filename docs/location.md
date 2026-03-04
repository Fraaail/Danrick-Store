# Location & Map Preview

To make sure the physical address of Danrick's Store shows up as a friendly preview – especially when the site URL is shared on social media or searched in engines – the project embeds the exact coordinates in two places:

1. **Google Maps iframe** in the `#location` section of `src/App.tsx`.
   - Constants `GOOGLE_MAPS_LINK` and `GOOGLE_MAPS_EMBED_URL` live at the top of `App.tsx` and are exported so tests can verify them. The embed URL uses explicit latitude/longitude (14.1123629,121.415928)
extracted from the short‑link redirect; Google allows this pin inside an
iframe without triggering X‑Frame‑Options errors.

2. **Meta tags** added to `index.html`:
   - Open Graph tags (`og:title`, `og:description`, `og:image`, etc.) describe the site and supply a preview image.
   - Geo tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) provide precise latitude/longitude information.

Current coordinates: **14.1480, 121.3570** (Barangay Banago, Nagcarlan, Laguna, Philippines).

## Updating the Location

If the store ever relocates:

1. Change both `GOOGLE_MAPS_LINK` and `GOOGLE_MAPS_EMBED_URL` in `src/App.tsx`.
2. Adjust the `geo.position`/`ICBM` and description text in `index.html`.
3. Optionally, update the Open Graph `og:image` to a new map screenshot or logo file.
4. Run the unit tests (`npm test`) to ensure the constants and meta tags are still detected.
5. Commit the changes and redeploy.

> 📌 The tests `src/test/Location.test.tsx` and `src/test/IndexHtml.test.ts` cover these expectations.
