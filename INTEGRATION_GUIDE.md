# Integration Guide: Department-Specific Language

## Quick Start

Replace your existing category-based language system with department-specific language in 3 steps.

---

## Step 1: Add the Department Language File

### Option A: Inline Integration (Recommended)
Copy the contents of `department-specific-language.js` and paste directly into your `index.html` file in the script section, replacing the current `disciplineLanguage` object.

**Find this in your code:**
```javascript
const disciplineLanguage = {
    stem: { ... },
    humanities: { ... },
    // etc.
};
```

**Replace with:**
```javascript
const departmentSpecificLanguage = {
    'Computer Science': { ... },
    'Mathematics': { ... },
    // all 40 departments
};
```

### Option B: External Script
Keep the file separate and load it:
```html
<script src="department-specific-language.js"></script>
```

---

## Step 2: Update Language Lookup

### Current Code (Category-Based)
```javascript
// Phase: Intro
const lang = disciplineLanguage[statementParts.departmentCategory];
const suggestedIntro = getIntroText(statementParts.departmentCategory);
```

### New Code (Department-Specific)
```javascript
// Phase: Intro
const lang = departmentSpecificLanguage[statementParts.department];
const suggestedIntro = lang.intro;
```

---

## Step 3: Update All References

Search your code for these patterns and update:

### Pattern 1: Getting intro text
**Before:**
```javascript
const suggestedIntro = getIntroText(statementParts.departmentCategory);
```

**After:**
```javascript
const lang = departmentSpecificLanguage[statementParts.department];
const suggestedIntro = lang.intro;
```

### Pattern 2: Getting rationales
**Before:**
```javascript
const lang = disciplineLanguage[statementParts.departmentCategory];
const suggestedRationale = lang[statementParts.policyLevelKey]; // noAI, limited, ok, or required
```

**After:**
```javascript
const lang = departmentSpecificLanguage[statementParts.department];
const suggestedRationale = lang[statementParts.policyLevelKey]; // Same property names!
```

### Pattern 3: Getting context
**Before:**
```javascript
const lang = disciplineLanguage[statementParts.departmentCategory];
const contextStatement = lang.context;
```

**After:**
```javascript
const lang = departmentSpecificLanguage[statementParts.department];
const contextStatement = lang.context; // Same property name!
```

---

## Code Changes Required

### 1. Remove getIntroText() function
The department-specific object includes `intro` directly, so you no longer need this helper function.

**Delete this:**
```javascript
const getIntroText = (category) => {
    const intros = {
        'stem': 'Generative AI tools...',
        'sciences': 'Generative AI tools...',
        // etc.
    };
    return intros[category] || intros.general;
};
```

### 2. Update department selection phase
The department selection can stay the same, but ensure you're storing the department name in `statementParts.department`:

```javascript
// When user clicks a department
const handleDepartmentSelect = (dept) => {
    setStatementParts({
        ...statementParts,
        department: dept.id,  // "Computer Science", "English", etc.
        departmentCategory: dept.category  // Keep for backward compatibility if needed
    });
    setPhase('intro-policy');
};
```

### 3. Update intro-policy phase
**Before:**
```javascript
if (phase === 'intro-policy') {
    const suggestedIntro = getIntroText(statementParts.departmentCategory);
    const lang = disciplineLanguage[statementParts.departmentCategory];

    return (
        <SuggestionBox
            label="Suggested Introduction"
            suggestedText={suggestedIntro}
            // ...
        />
    );
}
```

**After:**
```javascript
if (phase === 'intro-policy') {
    const lang = departmentSpecificLanguage[statementParts.department];

    return (
        <SuggestionBox
            label="Suggested Introduction"
            suggestedText={lang.intro}
            // ...
        />
    );
}
```

### 4. Update rationale phase
**Before:**
```javascript
if (phase === 'rationale') {
    const lang = disciplineLanguage[statementParts.departmentCategory];
    const suggestedRationale = lang[statementParts.policyLevelKey];

    return (
        <SuggestionBox
            label="Suggested Rationale"
            suggestedText={suggestedRationale}
            // ...
        />
    );
}
```

**After:**
```javascript
if (phase === 'rationale') {
    const lang = departmentSpecificLanguage[statementParts.department];
    const suggestedRationale = lang[statementParts.policyLevelKey];

    return (
        <SuggestionBox
            label="Suggested Rationale"
            suggestedText={suggestedRationale}
            // ...
        />
    );
}
```

### 5. Optional: Display context statement
If you want to show the department's context statement (recommended for policy selection):

```javascript
if (phase === 'intro-policy' && showPolicyChoices) {
    const lang = departmentSpecificLanguage[statementParts.department];

    return (
        <div>
            <p className="context-statement">{lang.context}</p>
            <div className="policy-choices">
                {/* Policy cards */}
            </div>
        </div>
    );
}
```

---

## Testing Checklist

### Test Each Department Category

1. **STEM (4 departments)**
   - [ ] Computer Science
   - [ ] Mathematics
   - [ ] Physics & Engineering
   - [ ] Data Science

2. **Natural Sciences (4 departments)**
   - [ ] Biology
   - [ ] Chemistry & Biochemistry
   - [ ] Earth & Environmental Geoscience
   - [ ] Neuroscience

3. **Humanities (12 departments)**
   - [ ] English
   - [ ] History
   - [ ] Philosophy
   - [ ] Religion
   - [ ] Classics
   - [ ] Medieval & Renaissance Studies
   - [ ] Comparative Literature
   - [ ] Romance Languages
   - [ ] East Asian Languages & Literatures
   - [ ] German
   - [ ] Russian
   - [ ] Arabic

4. **Social Sciences (6 departments)**
   - [ ] Accounting & Finance
   - [ ] Business Administration
   - [ ] Cognitive & Behavioral Science
   - [ ] Economics
   - [ ] Politics
   - [ ] Sociology & Anthropology

5. **Creative Arts & Communications (4 departments)**
   - [ ] Art & Art History
   - [ ] Music
   - [ ] Theater, Dance & Film Studies
   - [ ] Journalism & Mass Communications

6. **Interdisciplinary Programs (10 departments)**
   - [ ] Africana Studies
   - [ ] East Asian Studies
   - [ ] Environmental Studies
   - [ ] Latin American & Caribbean Studies
   - [ ] Middle East & South Asia Studies
   - [ ] Women's, Gender & Sexuality Studies
   - [ ] Law, Justice & Society
   - [ ] Poverty Studies
   - [ ] Digital Culture & Information
   - [ ] Education Studies

### Test Each Policy Level for Sample Departments

Pick 3-4 departments and test all policy levels:

**Computer Science:**
- [ ] noAI rationale displays correctly
- [ ] limited rationale displays correctly
- [ ] ok rationale displays correctly
- [ ] required rationale displays correctly

**English:**
- [ ] noAI rationale displays correctly
- [ ] limited rationale displays correctly
- [ ] ok rationale displays correctly
- [ ] required rationale displays correctly

**Economics:**
- [ ] noAI rationale displays correctly
- [ ] limited rationale displays correctly
- [ ] ok rationale displays correctly
- [ ] required rationale displays correctly

### Test Full User Flow

1. [ ] Select department → correct intro appears
2. [ ] Edit intro → saves correctly
3. [ ] Select policy level → correct rationale appears
4. [ ] Edit rationale → saves correctly
5. [ ] Continue through remaining phases
6. [ ] Final statement includes department-specific language
7. [ ] Copy/export works correctly
8. [ ] Save/load draft preserves department selection

---

## Debugging Common Issues

### Issue: "Cannot read property 'intro' of undefined"

**Cause**: Department name doesn't match between `departments` array and `departmentSpecificLanguage` object.

**Fix**: Check that department names are identical:
```javascript
// In departments array
{ id: 'Computer Science', icon: '💻', category: 'stem' }

// In departmentSpecificLanguage object
'Computer Science': { intro: '...', context: '...', ... }
```

### Issue: Generic/wrong content appears

**Cause**: Code is still using category lookup instead of department lookup.

**Fix**: Search your code for:
- `statementParts.departmentCategory`
- `disciplineLanguage`

Replace with:
- `statementParts.department`
- `departmentSpecificLanguage`

### Issue: Some departments work, others don't

**Cause**: Department names have typos or special characters.

**Fix**: Ensure exact string matching:
- Check for trailing spaces
- Check apostrophes: `Women's, Gender & Sexuality Studies`
- Check ampersands: `Chemistry & Biochemistry`

---

## Performance Notes

### Object Size
The `departmentSpecificLanguage` object is larger than the category-based version:
- **Old**: ~6 categories × 4 rationales = 24 text strings
- **New**: 40 departments × 6 fields = 240 text strings

This is still small (~50-70KB) and will not impact performance.

### Lookup Speed
Direct object property lookup is O(1), so 40 departments vs. 6 categories makes no difference.

### Load Time
The additional JavaScript will add negligible load time (< 0.1 seconds on slow connections).

---

## Backward Compatibility

If you want to maintain backward compatibility with saved drafts using the old category system:

```javascript
// Add fallback in language lookup
const getDepartmentLanguage = (department, category) => {
    // Try department-specific first
    if (departmentSpecificLanguage[department]) {
        return departmentSpecificLanguage[department];
    }

    // Fallback to category (for old saved drafts)
    if (disciplineLanguage[category]) {
        return disciplineLanguage[category];
    }

    // Ultimate fallback to general
    return departmentSpecificLanguage.general || disciplineLanguage.general;
};

// Use in code:
const lang = getDepartmentLanguage(
    statementParts.department,
    statementParts.departmentCategory
);
```

---

## Migration Strategy

### Option 1: Big Switch (Recommended)
1. Deploy department-specific version
2. Old saved drafts will need to re-select departments
3. Clear localStorage on first load of new version

### Option 2: Gradual Migration
1. Keep both systems temporarily
2. Add fallback logic (see Backward Compatibility above)
3. Migrate users over time
4. Remove old system once adoption is complete

---

## Future Enhancements

### Easy additions:
1. **Faculty examples**: Add department-specific example assignments
2. **Discipline-specific tools**: Add recommended AI tools per department
3. **Assessment language**: Add grading criteria specific to each field
4. **Student FAQs**: Add discipline-specific student questions and answers

### Structure for enhancements:
```javascript
'Computer Science': {
    intro: '...',
    context: '...',
    noAI: '...',
    limited: '...',
    ok: '...',
    required: '...',

    // Optional enhancements
    exampleAssignments: ['Assignment 1 description', '...'],
    recommendedTools: ['GitHub Copilot', 'ChatGPT'],
    assessmentCriteria: 'How to grade AI use in CS',
    studentFAQs: [
        { q: 'Can I use Copilot for homework?', a: '...' }
    ]
}
```

---

## Support

If you encounter issues during integration:

1. Check that all 40 department names match exactly
2. Search for remaining references to `disciplineLanguage`
3. Verify `statementParts.department` is being set correctly
4. Test with browser console open to catch undefined property errors
5. Test one department thoroughly before testing all 40

---

**Questions?** Open an issue or consult the example files:
- `SAMPLE_COMPLETE_ENTRIES.md` - See full department examples
- `EXAMPLE_COMPARISONS.md` - See how language differs across fields
- `DEPARTMENT_LANGUAGE_SUMMARY.md` - Understand the design
