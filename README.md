# AI Syllabus Statement Builder

A modern, comprehensive tool to help educators create clear, discipline-specific policies for generative AI use in their courses.

## ✨ Features

### Core Functionality
- **7-Step Guided Wizard**: Progressive disclosure helps you make decisions without feeling overwhelmed
- **Auto-Save Drafts**: Your progress is automatically saved to localStorage as you work
- **Light & Dark Mode**: Respects user preferences with manual toggle
- **Mobile Responsive**: Works beautifully on all devices

### Discipline-Specific Intelligence
- **6 Discipline Categories**: STEM, Humanities, Social Sciences, Natural Sciences, Creative Arts, General
- **Pedagogically-Grounded Language**: Each discipline has custom context explaining why AI policies matter for that field
- **Policy-Level Variations**: Different suggested language for No AI, Limited AI, AI OK, and AI Required policies

### Advanced Customization
- **Specify AI Tools**: Select from 8 common tools (ChatGPT, Claude, Gemini, Copilot, etc.) to name in your policy
- **Assignment-Level Policies**: Create different AI rules for different assignments in the same course
- **Documentation Options**: Choose whether to require, encourage, or skip AI use documentation
- **Custom Text Field**: Add your own course-specific details or exceptions

### Export & Sharing
- **📋 Copy to Clipboard**: One-click copy of your statement
- **🔗 Share**: Native web share API for mobile/desktop sharing
- **📄 PDF Export**: Download as publication-ready PDF
- **📝 Word Export**: Download as .doc file for further editing

### Example Library
- **Built-in Examples**: View 4 complete example statements covering different disciplines and policy levels
- **Modal Display**: Non-intrusive examples that don't interrupt your workflow

## 🚀 Getting Started

### Option 1: Open Locally
```bash
cd /Users/hmacdermott/projects/ai-syllabus-statement-tool
open index.html
```

### Option 2: Serve with Python
```bash
cd /Users/hmacdermott/projects/ai-syllabus-statement-tool
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

## 📖 How to Use

1. **Welcome**: Learn what the tool does and optionally view examples
2. **Choose Discipline**: Select your field to get relevant language
3. **Select Policy Level**: Pick No AI, Limited AI, AI OK, or AI Required
4. **Specify Tools**: Optionally name specific AI tools your policy covers
5. **Assignment Policies**: Add assignment-specific rules if needed
6. **Documentation**: Configure documentation requirements and integrity language
7. **Preview & Export**: Review, edit if needed, then copy/share/download

## 🎨 Discipline-Specific Features

The tool provides context-aware language for each discipline:

### STEM
- Focus on algorithmic thinking, code verification, mathematical reasoning
- Examples relevant to CS, engineering, math courses

### Humanities
- Emphasis on authentic voice, original analysis, close reading
- Examples for literature, history, philosophy

### Social Sciences
- Attention to research integrity, methodology, ethical data handling
- Examples for psychology, sociology, business

### Natural Sciences
- Priority on experimental design, direct observation, data interpretation
- Examples for biology, chemistry, physics, lab courses

### Creative Arts
- Focus on artistic vision, intentional choices, technical skill development
- Examples for studio art, music, design

### General
- Flexible language for interdisciplinary or other fields

## 🔧 Technology Stack

- **Frontend**: React (via CDN) with hooks
- **Styling**: Custom CSS with CSS Variables for theming
- **PDF Generation**: jsPDF library
- **Storage**: localStorage for auto-save and theme preference
- **No Build Step**: Pure HTML/CSS/JavaScript - edit and refresh

## 💡 Design Philosophy

1. **Progressive Disclosure**: Show information when it's relevant
2. **Pedagogical Grounding**: Language based on learning sciences, not just compliance
3. **Flexibility**: Support diverse teaching contexts without prescribing one approach
4. **Transparency**: No AI used in tool creation - it's a hand-crafted decision tree
5. **Educator Agency**: Faculty remain in control of final language

## 📝 Policy Levels Explained

### 🚫 No AI
Students may not use generative AI tools for any work.
- **When**: Authentic individual work is essential for learning outcomes
- **Examples**: Programming fundamentals, creative writing, math proofs

### ⚠️ Limited AI
Students may use AI with restrictions.
- **When**: AI can support some tasks but not others
- **Examples**: Essays (AI for brainstorming only), research (AI for lit review not analysis)

### ✅ AI OK
Students may use AI as they see fit.
- **When**: AI is a legitimate professional tool for the work
- **Examples**: Capstone projects, professional writing, industry simulations

### ⭐ AI Required
Students must use AI for certain assignments.
- **When**: Learning to work with AI is itself a course objective
- **Examples**: Data science, AI ethics courses, modern technical writing

## 🔄 Auto-Save Feature

The tool automatically saves your progress:
- **When you advance steps**: Progress saved to localStorage
- **When you change selections**: Form data continuously persisted
- **On page reload**: Prompts to continue from saved draft
- **Clear draft**: Use the 🗑️ button in header to start fresh

## 🎯 Future Enhancements

Potential additions based on feedback:
- Export to Canvas/Blackboard LMS formats
- Template library with more example statements
- Version history for draft revisions
- Collaborative editing / share draft links
- Institution-specific customization
- Multi-language support

## 📚 Credits

Inspired by the Generative AI Syllabus Statement Tool created by [Chris Heard](https://seaver.pepperdine.edu/academics/faculty/christopher-heard/), Director of the Center for Teaching Excellence at Pepperdine University.

This modernized version adds:
- Discipline-specific pedagogical language
- Assignment-level customization
- Modern UI/UX with auto-save
- Multiple export formats
- Mobile responsiveness
- Dark mode support

## 📄 License

Built for educational use. Free to use, modify, and share.

## 🤝 Contributing

Suggestions and improvements welcome! This tool is designed to evolve with educator needs.

---

**Note**: This tool is not powered by generative AI. It's a carefully designed interactive decision tree built to help educators think through the pedagogical implications of AI policies.
