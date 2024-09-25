const sizes = [
  0,
  "xs1",
  "xs2",
  "xs3",
  "sm1",
  "sm2",
  "sm3",
  "md1",
  "md2",
  "md3",
  "lg1",
  "lg2",
  "lg3",
  "xl1",
  "xl2",
  "xl3",
  "xxl1",
  "xxl2",
  "xxl3",
  "mega1",
  "mega2",
  "mega3",
  "giga1",
  "giga2",
  "giga3",
  "tera1",
  "tera2",
  "tera3",
];

const properties = [
  { w: "width" },
  { h: "height" },
  { m: "margin" },
  { mt: "margin-top" },
  { mb: "margin-bottom" },
  { ml: "margin-left" },
  { mr: "margin-right" },
  { p: "padding" },
  { pt: "padding-top" },
  { pb: "padding-bottom" },
  { pl: "padding-left" },
  { pr: "padding-right" },
];

const fs = require("fs");

// Function to generate CSS classes
function generateCSSClasses(sizes, properties) {
  let cssOutput = "";

  for (const size of sizes) {
    for (const prop of properties) {
      const [className, cssProperty] = Object.entries(prop)[0];
      if (typeof size === "number") {
        cssOutput += `.${className}-${size} {\n`;
        cssOutput += `  ${cssProperty}: ${size} !important;\n`;
        cssOutput += `}\n\n`;
      } else {
        cssOutput += `.${className}-${size} {\n`;
        cssOutput += `  ${cssProperty}: var(--${size}) !important;\n`;
        cssOutput += `}\n\n`;
      }
    }
  }

  return cssOutput.trim();
}

// Generate CSS classes
const cssClasses = generateCSSClasses(sizes, properties);

// Add comments to the top of the CSS output
const commentedCssOutput = `/* HELPER SPACING */
/* Generated by /scripts/tools.help.spacing.cjs */

${cssClasses}`;

// Write the result to a text file
fs.writeFile("../styles/help.spacing.css", commentedCssOutput, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("CSS classes have been written to help.spacing.css");
  }
});

// Also log to console for immediate feedback
console.log("Generated CSS Classes:");
console.log(commentedCssOutput);
