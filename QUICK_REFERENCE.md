# Quick Reference: Department-Specific Language

## ✅ Validation Complete

- **40 departments** with complete language ✓
- **All required fields** present for each department ✓
- **JavaScript syntax** valid ✓
- **Ready to integrate** ✓

---

## 📁 Files Created

| File | Size | Purpose |
|------|------|---------|
| `department-specific-language.js` | 70KB | **Main deliverable** - JavaScript object to integrate |
| `DELIVERY_SUMMARY.md` | 12KB | Complete project overview and outcomes |
| `INTEGRATION_GUIDE.md` | 12KB | Step-by-step implementation instructions |
| `SAMPLE_COMPLETE_ENTRIES.md` | 16KB | 8 full department examples |
| `EXAMPLE_COMPARISONS.md` | 11KB | Side-by-side comparisons across fields |
| `DEPARTMENT_LANGUAGE_SUMMARY.md` | 8KB | Design principles and structure |
| `QUICK_REFERENCE.md` | This file | Fast lookup and cheatsheet |

**Total**: 7 files, ~140KB

---

## 🎯 3-Step Integration

### Step 1: Copy the language object (5 min)
Open `department-specific-language.js` and copy the entire `departmentSpecificLanguage` object into your code.

### Step 2: Update 3 code patterns (15 min)
Replace these patterns everywhere in your code:

| Find | Replace |
|------|---------|
| `disciplineLanguage` | `departmentSpecificLanguage` |
| `[statementParts.departmentCategory]` | `[statementParts.department]` |
| `getIntroText(category)` | `lang.intro` |

### Step 3: Test (30 min)
Use testing checklist in `INTEGRATION_GUIDE.md`

---

## 📊 Department Structure

Each of the 40 departments has:

```javascript
'Department Name': {
    intro: '2-3 sentence introduction (400-500 chars)',
    context: '1 sentence core statement (150-200 chars)',
    noAI: 'Why AI prohibited (200-300 chars)',
    limited: 'How AI helps selectively (250-350 chars)',
    ok: 'Student responsibility (200-300 chars)',
    required: 'Why AI literacy matters (250-350 chars)'
}
```

---

## 🔍 Quick Lookup: Find Your Department

### STEM & Natural Sciences (8)
```javascript
'Computer Science'
'Mathematics'
'Physics & Engineering'
'Data Science'
'Biology'
'Chemistry & Biochemistry'
'Earth & Environmental Geoscience'
'Neuroscience'
```

### Humanities (12)
```javascript
'English'
'History'
'Philosophy'
'Religion'
'Classics'
'Medieval & Renaissance Studies'
'Comparative Literature'
'Romance Languages'
'East Asian Languages & Literatures'
'German'
'Russian'
'Arabic'
```

### Social Sciences (6)
```javascript
'Accounting & Finance'
'Business Administration'
'Cognitive & Behavioral Science'
'Economics'
'Politics'
'Sociology & Anthropology'
```

### Creative Arts (4)
```javascript
'Art & Art History'
'Music'
'Theater, Dance & Film Studies'
'Journalism & Mass Communications'
```

### Interdisciplinary (10)
```javascript
'Africana Studies'
'East Asian Studies'
'Environmental Studies'
'Latin American & Caribbean Studies'
'Middle East & South Asia Studies'
"Women's, Gender & Sexuality Studies"
'Law, Justice & Society'
'Poverty Studies'
'Digital Culture & Information'
'Education Studies'
```

---

## 💡 Code Snippets

### Get department language
```javascript
const lang = departmentSpecificLanguage[statementParts.department];
```

### Display intro
```javascript
const intro = lang.intro;
```

### Get rationale for selected policy
```javascript
// policyLevelKey is one of: 'noAI', 'limited', 'ok', 'required'
const rationale = lang[statementParts.policyLevelKey];
```

### Display context
```javascript
const context = lang.context;
```

---

## 🚨 Common Errors

### Error: "Cannot read property 'intro' of undefined"
**Cause**: Department name doesn't match
**Fix**: Verify exact string match (check spaces, apostrophes, ampersands)

### Error: Getting wrong content
**Cause**: Still using old category lookup
**Fix**: Search code for `departmentCategory` and replace with `department`

### Error: Some fields blank
**Cause**: Typo in property name
**Fix**: Use exact property names: `intro`, `context`, `noAI`, `limited`, `ok`, `required`

---

## 📖 Documentation Hierarchy

**Start here** if you want to:
- **Understand the design** → `DEPARTMENT_LANGUAGE_SUMMARY.md`
- **See complete examples** → `SAMPLE_COMPLETE_ENTRIES.md`
- **Compare across fields** → `EXAMPLE_COMPARISONS.md`
- **Implement in code** → `INTEGRATION_GUIDE.md`
- **Get project overview** → `DELIVERY_SUMMARY.md`
- **Quick lookup** → This file

---

## ⚡ Fast Facts

- **40 departments** (not 32 as originally stated)
- **6 fields per department** (intro, context, 4 rationales)
- **240 unique text strings** (40 × 6)
- **~70KB total** (highly compressible)
- **<100ms lookup time** (O(1) object property access)
- **30-60 min integration time**
- **0 dependencies** (pure JavaScript object)

---

## 🎨 Distinctive Features by Field

| Department | What Makes It Unique |
|------------|---------------------|
| **Computer Science** | Algorithmic thinking, debugging instincts |
| **Mathematics** | Proof construction, pattern recognition |
| **Biology** | Observational skills, experimental design |
| **Chemistry** | Laboratory technique, mechanistic reasoning |
| **English** | Close reading, analytical voice |
| **History** | Source evaluation, contextual understanding |
| **Philosophy** | Logical reasoning, conceptual problem-solving |
| **Music** | Aural skills, performance technique |
| **Arabic** | Script mastery, root-pattern morphology |
| **Economics** | Economic reasoning, model assumptions |
| **Art** | Visual analysis, studio practice |
| **Journalism** | News judgment, source verification |
| **WGSS** | Intersectionality, power analysis |
| **Environmental Studies** | Integrative thinking, justice dimensions |

---

## ✏️ Customization Guide

### To modify a department:
1. Find it in `department-specific-language.js`
2. Edit the relevant field(s)
3. Save and reload

### To add a new department:
```javascript
'New Department': {
    intro: 'Your intro (2-3 sentences)',
    context: 'Your context (1 sentence)',
    noAI: 'Your noAI rationale (1-2 sentences)',
    limited: 'Your limited rationale (1-2 sentences)',
    ok: 'Your ok rationale (1-2 sentences)',
    required: 'Your required rationale (1-2 sentences)'
}
```

### To add optional fields:
```javascript
'Department': {
    // Required fields
    intro: '...',
    // ... other required fields

    // Optional additions
    exampleAssignments: ['Example 1', 'Example 2'],
    recommendedTools: ['Tool 1', 'Tool 2'],
    studentFAQs: [
        { question: 'Can I...?', answer: 'Yes, but...' }
    ]
}
```

---

## 📞 Support Checklist

Before asking for help:
- [ ] Verified department names match exactly
- [ ] Checked browser console for errors
- [ ] Tested with multiple departments
- [ ] Reviewed `INTEGRATION_GUIDE.md` troubleshooting section
- [ ] Confirmed using `statementParts.department` not `.departmentCategory`
- [ ] Checked that all 6 fields exist for problematic department

---

## 🎓 Pedagogical Principles

All language follows these principles:
1. **Explains why**, not just what
2. **Focuses on learning**, not punishment
3. **Acknowledges professional context**
4. **Respects disciplinary methods**
5. **Balances protection with empowerment**
6. **Uses warm, supportive tone**

---

## 📈 Expected Impact

### For Faculty
- ✅ See their discipline reflected
- ✅ Understand pedagogical reasoning
- ✅ More likely to adopt policies
- ✅ Feel supported, not policed

### For Students
- ✅ Understand skill development rationale
- ✅ See connection to their major
- ✅ Recognize professional relevance
- ✅ View constraints as learning support

### For Institution
- ✅ Consistent framework
- ✅ Disciplinary customization
- ✅ Faculty autonomy within structure
- ✅ Scalable as AI tools evolve

---

## 🚀 Deployment Readiness

**Status**: ✅ Ready to deploy

**Required actions**:
1. Integrate code (30-60 min)
2. Test sample departments (30 min)
3. Full QA testing (60 min)
4. Deploy to faculty

**Total time to production**: 2-3 hours

---

## 📝 Version Info

**Created**: January 2026
**Departments**: 40/40 complete
**Fields per department**: 6/6 complete
**Validation**: Passed
**Format**: JavaScript ES6 object
**Compatibility**: All modern browsers

---

**Need more detail?** See full documentation files listed above.

**Ready to integrate?** Start with `INTEGRATION_GUIDE.md`.

**Want to see examples?** Check `SAMPLE_COMPLETE_ENTRIES.md`.
