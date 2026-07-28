# Portfolio Website - Project Structure

## 📁 Folder Organization

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Footer.jsx       # Footer with social links
│   ├── Hero.jsx         # Hero/banner section
│   ├── About.jsx        # About/manifesto section
│   ├── Skills.jsx       # Technology stack section
│   ├── Projects.jsx     # Projects grid component
│   └── Contact.jsx      # Contact form section
│
├── pages/               # Page components (full pages)
│   ├── Home.jsx         # Home page (combines Hero, About, Skills, Projects, Contact)
│   ├── Experience.jsx   # Experience & work history page
│   └── ProjectsPage.jsx # Detailed projects page
│
├── App.jsx              # Main app with React Router setup
├── main.jsx             # React entry point
├── App.css              # App styles
└── index.css            # Global styles

index.html              # HTML template with Tailwind config
vite.config.js          # Vite configuration
tailwind.config.js      # (optional) Tailwind configuration file
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm build
```

## 📱 Responsive Design

All components are mobile-first responsive using Tailwind CSS breakpoints:
- **Mobile**: Base styles (0px and up)
- **Tablet**: `md:` prefix (768px and up)
- **Desktop**: `lg:` prefix (1024px and up)

### Mobile Features
- **Hamburger Menu**: Mobile navigation toggle in Header
- **Responsive Layouts**: Grid columns adapt from 1 to 2/3/4 on larger screens
- **Touch-Friendly**: Larger padding and buttons for mobile interaction

## 🛣️ Routes

| Route | Page | Component |
|-------|------|-----------|
| `/` | Home | Home.jsx |
| `/experience` | Experience & History | Experience.jsx |
| `/projects` | Detailed Projects | ProjectsPage.jsx |

## 🎨 Design System

### Colors
- **Primary**: `#000000` (Black)
- **Secondary**: `#FF5C00` (Orange)
- **Background**: `#f9f9f9` (Light Gray)
- **Surface**: Various shades defined in Tailwind config

### Typography
- **Headlines**: Space Grotesk (bold, uppercase)
- **Body**: Inter (regular, readable)
- **Labels**: Space Grotesk (bold, small)

### Neo-Brutalist Style
- 3px solid borders
- Hard shadows: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
- High contrast
- Angular, geometric layouts

## 📦 Dependencies

```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "react-router-dom": "^6.x.x"
}
```

## 🔧 Components Overview

### Header
- Sticky navigation bar
- Active link highlighting
- Mobile hamburger menu
- "Hire Me" call-to-action button

### Home Page
Combines multiple sections:
- **Hero**: Main introduction with image
- **About**: Manifesto section
- **Skills**: Technology stack grid
- **Projects**: Project showcases
- **Contact**: Contact form

### Experience Page
- Work history timeline
- Job descriptions with skills
- Core competencies boxes

### Projects Page
- Detailed project cards
- Alternating layout (image/content)
- Tech stack badges
- Feature highlights

### Contact Form
- Name input
- Email input
- Message textarea
- Form validation (basic)

## 🎯 Next Steps

1. **Update Content**: Replace placeholder text with your actual content
2. **Add Images**: Replace image URLs with your own portfolio images
3. **Update Links**: Update social media links in Footer
4. **Add Form Backend**: Connect Contact form to email service (Nodemailer, SendGrid, etc.)
5. **Deploy**: Build and deploy to Vercel, Netlify, or your hosting platform

## 📝 Customization

### Adding a New Page
1. Create new file in `src/pages/NewPage.jsx`
2. Add route to `App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Update navigation links in `Header.jsx`

### Modifying Colors
Update the color values in `index.html` Tailwind config or create `tailwind.config.js`

### Adding New Components
Create component in `src/components/` and import in pages as needed
