# AI Syllabus Statement Builder

A modern, comprehensive tool to help educators create clear, discipline-specific policies for generative AI use in their courses.

## ✨ Features

### Core Functionality
- **7-Step Guided Wizard**: Progressive disclosure helps you make decisions without feeling overwhelmed
- **Auto-Save Drafts**: Your progress is automatically saved to localStorage as you work
- **Light & Dark Mode**: Respects user preferences with manual toggle
- **Mobile Responsive**: Works beautifully on all devices

### Discipline-Specific Intelligence
- **40 Department-Specific Templates**: Customized language for all Washington & Lee University departments
- **Discipline-Tailored Language**: Each department has context explaining AI use within that field's methods and values
- **Policy-Level Variations**: Different suggested language for No AI, Limited AI, AI OK, and AI Required policies
- **Pedagogical Considerations**: 5 field-specific questions per department to guide policy thinking

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

## 🎨 Department-Specific Features

The tool provides customized language for 40 departments across 7 categories:

### STEM (4 departments)
Computer Science, Mathematics, Physics & Engineering, Data Science
- Focus on algorithmic thinking, verification, problem-solving from first principles

### Natural Sciences (4 departments)
Biology, Chemistry & Biochemistry, Earth & Environmental Geoscience, Neuroscience
- Priority on experimental design, observation, field work, laboratory technique

### Humanities (12 departments)
English, History, Philosophy, Religion, Classics, Medieval & Renaissance Studies, Comparative Literature, Romance Languages, East Asian Languages & Literatures, German, Russian, Arabic
- Emphasis on close reading, language acquisition, interpretation, cultural analysis

### Social Sciences (6 departments)
Accounting & Finance, Business Administration, Cognitive & Behavioral Science, Economics, Politics, Sociology & Anthropology
- Attention to research methodology, professional judgment, ethical reasoning

### Creative Arts & Communications (4 departments)
Art & Art History, Music, Theater/Dance/Film Studies, Journalism & Mass Communications
- Focus on embodied practice, creative vision, technical skill, editorial judgment

### Interdisciplinary Programs (10 departments)
Africana Studies, East Asian Studies, Environmental Studies, Latin American & Caribbean Studies, Middle East & South Asia Studies, Women's/Gender/Sexuality Studies, Law/Justice/Society, Poverty Studies, Digital Culture & Information, Education Studies
- Integration across fields, critical frameworks, language proficiency, justice-oriented analysis

## 🔧 Technology Stack

- **Frontend**: React (via CDN) with hooks
- **Styling**: Custom CSS with CSS Variables for theming
- **PDF Generation**: jsPDF library
- **Storage**: localStorage for auto-save and theme preference
- **No Build Step**: Pure HTML/CSS/JavaScript - edit and refresh

## 💡 Design Philosophy

1. **Progressive Disclosure**: Show information when it's relevant
2. **Discipline-Centered**: Language tailored to each field's methods, values, and professional practices
3. **Flexibility**: Support diverse teaching contexts without prescribing one approach
4. **Transparency**: Clear about methodology and limitations (see below)
5. **Educator Agency**: Faculty remain in control of final language - this tool provides starting points for review and adaptation

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

## ⚙️ Methodology & Transparency

### How Department-Specific Language Was Created

The 40 department-specific templates in this tool were generated through **AI synthesis of disciplinary discourse patterns**, not empirical research with faculty or validated pedagogical studies. Here's the process:

#### 1. **Pattern Identification**
For each discipline, we identified:
- Core skills that require sustained practice (e.g., algorithmic thinking in CS, close reading in English)
- Epistemological norms (how the field produces knowledge)
- Professional practices where AI is relevant
- Common pedagogical concerns about AI in that field

#### 2. **Consistent Framework**
Each department received:
- **5 pedagogical considerations**: Questions faculty might ask about AI's impact on learning
- **Intro text**: 2-3 sentences acknowledging AI tools and field-specific learning concerns
- **Context statement**: 1 sentence about core disciplinary practices
- **4 policy rationales**: Customized language for noAI, limited, ok, and required policies

#### 3. **Disciplinary Vocabulary**
Language uses field-appropriate terminology (e.g., "intersectionality" in WGSS, "parsing" in Classics, "algorithmic thinking" in CS) drawn from how academics typically describe their fields.

#### 4. **Critical Frameworks**
For identity-based and area studies fields (Africana Studies, WGSS, MESAS, etc.), language emphasizes:
- Representation and power in knowledge production
- Biases in AI training data
- Relevant critical frameworks (Orientalism, decolonial thought, intersectionality)

### Important Limitations

**What this is:**
- ✅ A starting point for faculty to review, adapt, and validate
- ✅ AI synthesis of disciplinary patterns and academic discourse
- ✅ Consistent structure with field-specific customization
- ✅ Grounded in how disciplines typically describe their pedagogical priorities

**What this is NOT:**
- ❌ Empirical research or validated best practices
- ❌ Created by interviewing faculty in these fields
- ❌ Based on learning science research specific to AI pedagogy
- ❌ Endorsed by professional associations (ACM, MLA, AHA, etc.)
- ❌ Tested with students or shown to improve learning outcomes

### Recommended Next Steps for Faculty

1. **Consult your professional association** for research-backed guidance (ACM, MLA, AHA, ACS, ASA, etc.)
2. **Review existing policies** via [Lance Eaton's AI Policy Database](https://docs.google.com/spreadsheets/d/1-R8wxAB6V11cDh_u6t-WgCBdxYKV8FoXDFGxPVxbs6k/)
3. **Discuss with colleagues** in your department who teach similar courses
4. **Adapt the generated language** to your specific course goals, student population, and institutional context
5. **Consider your institution's** academic integrity policies and support resources

### About the Tool Itself

- The **tool interface** (HTML/CSS/React) was hand-crafted, not AI-generated
- The **department-specific content** (considerations, intro, context, rationales) was AI-generated as described above
- All generated language should be **reviewed and validated by faculty** with expertise in their field

---

## 📄 License

Built for educational use. Free to use, modify, and share.
