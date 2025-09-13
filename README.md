# Blessing Child - Tailwind CSS Project

A beautiful children's website built with Tailwind CSS.

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Development mode (watch for changes):**

   ```bash
   npm run dev
   ```

   This will watch for changes in your HTML files and automatically recompile the CSS.

3. **Build for production:**

   ```bash
   npm run build
   ```

   This creates a minified CSS file for production use.

4. **Start development server:**
   ```bash
   npm start
   ```
   This is an alias for `npm run dev`.

## Project Structure

```
blessing-child/
├── index.html          # Main HTML file
├── package.json        # Node.js dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── src/
│   └── input.css      # Source CSS with Tailwind directives
├── dist/
│   └── output.css     # Compiled CSS (generated)
└── README.md          # This file
```

## Available Scripts

- `npm run dev` - Start development mode with file watching
- `npm run build` - Build minified CSS for production
- `npm run build-css` - Build CSS with file watching (alias for dev)
- `npm start` - Start development mode

## Customization

The Tailwind configuration is set up to:

- Watch all HTML files in the project
- Include custom pink color palette
- Use Nunito font family
- Include custom component classes

You can modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

## Development Workflow

1. Run `npm run dev` to start watching for changes
2. Edit your HTML files or the `src/input.css` file
3. The CSS will automatically recompile when you save changes
4. Refresh your browser to see the changes

For production deployment, run `npm run build` to generate the minified CSS file.
