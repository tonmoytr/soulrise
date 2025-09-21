import fs from "node:fs";

const file = "styles/webflow.css";
let css = fs.readFileSync(file, "utf8");

// images
css = css.replaceAll(/url\(["']?\.\.\/img\//g, 'url("/assets/img/');
// fonts
css = css.replaceAll(/url\(["']?\.\.\/fonts\//g, 'url("/assets/fonts/');
// optional: handle "./" style links too
css = css.replaceAll(/url\(["']?\.\.\/\.\.\/img\//g, 'url("/assets/img/');
css = css.replaceAll(/url\(["']?\.\.\/\.\.\/fonts\//g, 'url("/assets/fonts/');

fs.writeFileSync(file, css);
console.log("✅ Fixed url() paths in styles/webflow.css");
