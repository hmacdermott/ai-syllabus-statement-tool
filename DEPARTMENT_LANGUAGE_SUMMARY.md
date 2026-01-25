# Department-Specific AI Syllabus Language

## Overview

This document provides customized AI policy language for **40 Washington and Lee University departments**. Each department has unique language that reflects its disciplinary methods, essential skills, and pedagogical priorities.

## File Location

`/Users/hmacdermott/projects/ai-syllabus-statement-tool/department-specific-language.js`

## Structure

Each department has 6 components:

1. **intro** (2-3 sentences): Explains what AI tools are and their specific relevance to the field
2. **context** (1 sentence): The core disciplinary importance statement
3. **noAI** (1-2 sentences): Why students can't use AI—focuses on essential skills AI can't develop
4. **limited** (1-2 sentences): How AI can help selectively—what's allowed vs. student's own work
5. **ok** (1-2 sentences): Student responsibility with free AI use—what they remain accountable for
6. **required** (1-2 sentences): Why learning to work with AI matters for this field

## Departments Included (40 total)

### STEM (4)
- Computer Science
- Mathematics
- Physics & Engineering
- Data Science

### Natural Sciences (4)
- Biology
- Chemistry & Biochemistry
- Earth & Environmental Geoscience
- Neuroscience

### Humanities (12)
- English
- History
- Philosophy
- Religion
- Classics
- Medieval & Renaissance Studies
- Comparative Literature
- Romance Languages
- East Asian Languages & Literatures
- German
- Russian
- Arabic

### Social Sciences (6)
- Accounting & Finance
- Business Administration
- Cognitive & Behavioral Science
- Economics
- Politics
- Sociology & Anthropology

### Creative Arts & Communications (4)
- Art & Art History
- Music
- Theater, Dance & Film Studies
- Journalism & Mass Communications

### Interdisciplinary Programs (10)
- Africana Studies
- East Asian Studies
- Environmental Studies
- Latin American & Caribbean Studies
- Middle East & South Asia Studies
- Women's, Gender & Sexuality Studies
- Law, Justice & Society
- Poverty Studies
- Digital Culture & Information
- Education Studies

## Key Characteristics

### Pedagogical Tone
- Warm and supportive, not punitive
- Explains the "why" behind policies
- Focuses on learning and skill development

### Disciplinary Specificity
Each department's language reflects:
- **Core methods**: Field-specific research practices (e.g., fieldwork, close reading, lab technique)
- **Essential skills**: What must be practiced to develop competence
- **Professional context**: How AI is used in the discipline's professional practice

### Examples of Disciplinary Customization

**Computer Science** emphasizes algorithmic thinking and debugging instincts that require hands-on coding practice.

**English** focuses on close reading skills and developing an analytical voice through writing practice.

**Biology** highlights observational skills and the ability to design controlled experiments with living systems.

**Philosophy** emphasizes logical reasoning and the ability to construct valid arguments through conceptual struggle.

**Classics** protects language acquisition in Greek and Latin while acknowledging digital tools in scholarship.

**Economics** distinguishes between AI performing calculations and students developing economic reasoning about mechanisms.

**Art & Art History** separates embodied studio practice from research/communication tasks where AI may assist.

**Journalism** emphasizes news judgment and source verification that AI cannot replace.

**Environmental Studies** stresses integrative thinking across natural science, social science, and humanities.

**Women's, Gender & Sexuality Studies** includes critical analysis of how AI encodes gender and sexuality biases.

## Integration Instructions

### Current Code Structure
The existing code uses broad categories (stem, humanities, sciences, social-sciences, creative, general) with a mapping from departments to categories.

### Recommended Update
Replace category-based lookup with direct department lookup:

**Before:**
```javascript
const lang = disciplineLanguage[statementParts.departmentCategory];
```

**After:**
```javascript
const lang = departmentSpecificLanguage[statementParts.department];
```

### Benefits of Department-Specific Language
1. **More relevant**: Faculty see language that speaks directly to their discipline
2. **More authentic**: Reflects actual disciplinary practices and concerns
3. **More persuasive**: Specificity demonstrates understanding of the field
4. **Better student experience**: Students understand how AI relates to their major

## Design Principles

### 1. No Generic Language
Each department has custom language—no copy-paste between fields. For example:
- **Math** talks about proof construction and pattern recognition
- **History** discusses source evaluation and historical complexity
- **Music** emphasizes ear training and performance technique

### 2. Acknowledges Professional Context
The **required** rationale acknowledges where AI is actually used in each profession:
- Biologists use AI for protein folding prediction
- Journalists must understand AI's role in media and misinformation
- Lawyers need to know about algorithmic decision systems
- Artists should understand AI as creative medium and subject of critique

### 3. Respects Disciplinary Methods
Language respects what makes each field distinctive:
- **Lab sciences**: Emphasize hands-on technique and observation
- **Languages**: Protect the practice required for proficiency
- **Creative fields**: Distinguish between conceptual work and technical execution
- **Area studies**: Include critical engagement with representation and power

### 4. Balances Restriction with Empowerment
- **noAI**: Explains what skills require protection (not punishment)
- **limited**: Shows how AI can enhance without replacing core work
- **ok**: Clarifies student responsibility, not just permission
- **required**: Frames AI literacy as professional development

## Notable Features

### Language Learning Departments
All 5 language departments (Romance Languages, East Asian Languages & Literatures, German, Russian, Arabic) have customized language that:
- Acknowledges translation technology
- Protects the practice required for language acquisition
- Addresses specific challenges (character systems, case grammar, script, root-patterns)
- Prepares students for professional contexts requiring both language skills and technology literacy

### Interdisciplinary Programs
The 10 interdisciplinary programs include critical frameworks specific to their focus:
- **Africana Studies**: Addresses power, representation, and AI biases about race
- **WGSS**: Analyzes how AI encodes gender and sexuality
- **Poverty Studies**: Examines algorithmic systems affecting poor communities
- **Digital Culture**: Makes AI itself an object of critical study

### Professional Fields
Business, Accounting, Journalism, and Education all emphasize:
- Professional judgment that AI can't replace
- Ethical responsibilities in the field
- Industry-standard tools students should learn
- Critical awareness of AI's limitations

## Usage in Statement Builder

When a faculty member selects their department, the system will:

1. **Intro phase**: Show department-specific 2-3 sentence introduction
2. **Policy selection**: Display department-specific **context** statement
3. **Rationale phase**: Generate rationale based on selected policy level (noAI, limited, ok, or required)

The resulting syllabus statement will feel specifically tailored to the faculty member's discipline, making it more likely they'll use and adapt it rather than writing from scratch.

## Maintenance Notes

### Adding New Departments
To add a department, include an entry with all 6 fields (intro, context, noAI, limited, ok, required).

### Updating Language
Language can be updated department-by-department without affecting others. Consider updating when:
- New AI tools emerge specific to a discipline
- Departmental practices change
- Faculty provide feedback on language effectiveness

### Testing
Before deploying, test that:
1. All 40 departments have complete objects
2. Department names match exactly between departments array and language object
3. No undefined references when selecting each department
4. Text renders properly without encoding issues

---

## Credits

**Designed for**: Washington and Lee University Teaching and Learning Center
**Created**: January 2026
**Purpose**: Help faculty create disciplinary-specific AI syllabus policies that protect essential learning while acknowledging AI's role in their fields
