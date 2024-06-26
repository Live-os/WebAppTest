// bun.build.js

import html from 'bun-plugin-html';

await Bun.build({
  entrypoints: ['./public/index.html'],
  publicPath: "public",
  sourcemap: "inline",
  outdir: './build',  // Specify the output directory
  plugins: [
    html()
  ],
});