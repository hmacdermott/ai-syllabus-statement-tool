// ============================================================================
// DEPARTMENT-SPECIFIC AI SYLLABUS LANGUAGE
// Washington and Lee University - 40 Departments
// ============================================================================

const departmentSpecificLanguage = {
    // ============================================================================
    // STEM (4 departments)
    // ============================================================================

    'Computer Science': {
        considerations: [
            "Are students learning to debug, or just generate?",
            "Can students verify AI solutions and explain why?",
            "Does your course build algorithmic thinking AI bypasses?",
            "Are students developing problem decomposition skills independently?",
            "Can they trace code execution without AI assistance?"
        ],
        intro: "AI coding assistants like GitHub Copilot and ChatGPT can generate code, debug programs, and explain algorithms. In computer science, these tools are becoming standard in professional practice, but they can also prevent you from developing the problem-solving skills and debugging instincts that define computational thinking. This policy helps you learn when AI enhances your work versus when it short-circuits essential learning.",
        context: "In computer science, the ability to think algorithmically, design systems, and debug independently are foundational skills that require sustained practice and struggle.",
        noAI: "AI cannot develop your ability to break problems into logical steps, design algorithms from first principles, or debug code by tracing execution. These cognitive skills emerge through practice, failure, and revision—experiences AI tools would bypass.",
        limited: "You may use AI for syntax checking, exploring alternative approaches, or understanding error messages, but algorithm design and core problem-solving logic must be your own. AI can help you work more efficiently once you understand what you're trying to accomplish.",
        ok: "You remain responsible for understanding every line of code you submit, testing edge cases thoroughly, and ensuring your solution actually solves the problem. AI-generated code is a starting point, not a finished product.",
        required: "Learning to prompt AI coding tools effectively, evaluate their suggestions critically, and integrate AI-generated code into larger systems is becoming essential for modern software development. Understanding AI's limitations in code generation prepares you for professional practice."
    },

    'Mathematics': {
        considerations: [
            "Are students constructing proofs or consuming solutions?",
            "Can they recognize when theorems apply?",
            "Does AI mask gaps in mathematical reasoning?",
            "Are students building pattern recognition through struggle?",
            "Can they solve problems without procedural shortcuts?"
        ],
        intro: "AI tools can solve equations, generate proofs, and explain mathematical concepts—but mathematics learning isn't about getting correct answers. It's about developing the reasoning patterns and proof techniques that allow you to solve novel problems. This policy protects the struggle that builds mathematical thinking while acknowledging AI's growing role in computational mathematics.",
        context: "In mathematics, proof construction, logical reasoning, and problem-solving intuition develop through working problems by hand and wrestling with abstract concepts.",
        noAI: "AI cannot develop your ability to construct mathematical proofs, recognize when theorems apply, or build the pattern recognition that lets you approach unfamiliar problems. These capacities emerge from sustained engagement with mathematical reasoning.",
        limited: "You may use computational tools for numerical calculations or visualizations after you've solved problems analytically, but proof construction and mathematical reasoning must be your own work. AI can verify answers but shouldn't generate your solution approach.",
        ok: "You remain responsible for mathematical correctness, understanding the logic behind every step, and being able to reconstruct solutions without AI assistance. If you can't explain why your solution works, you haven't learned the mathematics.",
        required: "Understanding how AI handles mathematical reasoning—where it succeeds and where it fails—helps you think critically about computational approaches to mathematics and prepares you for fields where AI assists mathematical work."
    },

    'Physics & Engineering': {
        considerations: [
            "Are students developing physical intuition about results?",
            "Can they set up problems from first principles?",
            "Does your course require troubleshooting unexpected outcomes?",
            "Are students checking dimensional analysis independently?",
            "Can they estimate whether solutions make physical sense?"
        ],
        intro: "AI tools can solve physics problems, perform engineering calculations, and generate design solutions. In engineering practice, computational tools are essential—but the judgment about which principles apply, whether results make physical sense, and how to troubleshoot unexpected outcomes requires deep conceptual understanding that AI cannot replace.",
        context: "In physics and engineering, developing physical intuition, experimental design skills, and the ability to validate results through estimation and reasoning are irreplaceable professional competencies.",
        noAI: "AI cannot develop your physical intuition about whether results make sense, your ability to set up free-body diagrams or circuit analyses from first principles, or your capacity to troubleshoot when calculations don't match observations. These skills require repeated practice with foundational problems.",
        limited: "You may use computational tools after deriving equations and setting up problems analytically, but problem conceptualization and selecting appropriate physical principles must reflect your understanding. AI can perform calculations, but you must verify results make physical sense.",
        ok: "You remain responsible for checking whether AI-generated solutions satisfy conservation laws, dimensional analysis, and limiting case behaviors. Engineering judgment—knowing when to trust calculations and when something is wrong—is yours to develop and maintain.",
        required: "Learning to use AI for simulation, modeling, and computational analysis while maintaining critical oversight prepares you for engineering practice where computational tools augment but don't replace engineering judgment."
    },

    'Data Science': {
        considerations: [
            "Are students selecting methods or accepting suggestions?",
            "Can they diagnose when algorithms fail?",
            "Does AI hide biases in data or models?",
            "Are students implementing algorithms from scratch first?",
            "Can they interpret results with appropriate uncertainty?"
        ],
        intro: "AI tools can clean data, build models, and generate analyses—often using the same machine learning techniques you're learning to implement. In data science, understanding what's happening inside these tools, not just using them, distinguishes practitioners who can innovate from those who can only apply existing solutions. This policy helps you build foundational understanding before leveraging AI's power.",
        context: "In data science, the ability to select appropriate methods, interpret results correctly, and recognize when models fail requires deep understanding of statistical principles and algorithmic behavior.",
        noAI: "AI cannot teach you why certain models work for specific problems, how to diagnose when algorithms fail, or how to communicate uncertainty and limitations in your analyses. These capacities require implementing algorithms from scratch and wrestling with real data's messiness.",
        limited: "You may use AI for data preprocessing or exploring alternative approaches after you've analyzed the problem structure, but model selection, interpretation, and validation must demonstrate your statistical reasoning. AI can suggest methods, but you must justify why they're appropriate.",
        ok: "You remain responsible for understanding your analytical pipeline end-to-end, validating assumptions, recognizing biases in data and models, and communicating findings with appropriate uncertainty. Using AI without understanding creates dangerous overconfidence.",
        required: "Understanding AI as both tool and subject of study is fundamental to data science. You must learn to work with AI systems while maintaining critical perspective on their limitations, biases, and appropriate use cases."
    },

    // ============================================================================
    // NATURAL SCIENCES (4 departments)
    // ============================================================================

    'Biology': {
        considerations: [
            "Are students observing organisms or accepting identifications?",
            "Can they design experiments controlling confounding variables?",
            "Does AI replace reasoning about evolutionary mechanisms?",
            "Are students developing anatomical recognition skills?",
            "Can they interpret data using physiological principles?"
        ],
        intro: "AI tools can identify species from images, analyze genetic sequences, and generate hypotheses about biological mechanisms. While AI is revolutionizing biological research—from protein folding prediction to ecological monitoring—the ability to observe organisms carefully, design experiments, and reason from first principles about biological systems remains irreplaceable in biological practice.",
        context: "In biology, developing observational skills, understanding evolutionary and mechanistic reasoning, and learning to design controlled experiments are fundamental to thinking like a biologist.",
        noAI: "AI cannot develop your ability to observe organisms in detail, recognize anatomical patterns, design experiments that control for confounding variables, or reason about biological mechanisms using evolutionary and physiological principles. These skills require direct engagement with living systems.",
        limited: "You may use AI for literature searches or data visualization after collecting and analyzing your own data, but experimental design, organism identification through careful observation, and biological interpretation must reflect your developing understanding of biological principles.",
        ok: "You remain responsible for ensuring your observations are accurate, your experimental designs control for relevant variables, and your interpretations reflect sound biological reasoning about mechanisms, evolution, and ecology. AI can assist analysis but cannot replace biological judgment.",
        required: "Learning to use AI tools for sequence analysis, structure prediction, or image classification prepares you for modern biological research where computational approaches are increasingly central—but only if you understand the biological principles underlying these tools."
    },

    'Chemistry & Biochemistry': {
        considerations: [
            "Are students developing laboratory technique and safety?",
            "Can they troubleshoot reactions that don't work?",
            "Does your course require predicting reactivity from structure?",
            "Are students proposing mechanisms, not just accepting?",
            "Can they interpret spectroscopic data independently?"
        ],
        intro: "AI can predict molecular properties, suggest reaction mechanisms, and analyze spectroscopic data—capabilities increasingly important in chemical research. However, laboratory technique, chemical intuition about reactivity, and the ability to troubleshoot unexpected results require hands-on experience that AI cannot provide. This policy protects essential bench skills while preparing you for computational chemistry's role in modern practice.",
        context: "In chemistry, laboratory technique, understanding reaction mechanisms, and developing intuition about molecular behavior require direct experimental work and problem-solving with chemical principles.",
        noAI: "AI cannot develop your laboratory technique, your ability to predict reactivity based on molecular structure, or your capacity to troubleshoot when reactions don't work as expected. These skills emerge from working with chemicals, analyzing your own data, and reasoning through mechanisms by hand.",
        limited: "You may use computational tools for molecular modeling or data analysis after conducting experiments and proposing mechanisms, but experimental design, mechanism prediction, and interpretation of your results must demonstrate your chemical reasoning.",
        ok: "You remain responsible for laboratory safety, proper experimental technique, and ensuring your mechanistic interpretations are consistent with chemical principles. AI can analyze data, but you must judge whether results make chemical sense.",
        required: "Learning to use computational chemistry tools, molecular dynamics simulations, and AI-driven structure prediction prepares you for research where these methods are standard—but only when coupled with strong foundational chemical knowledge."
    },

    'Earth & Environmental Geoscience': {
        considerations: [
            "Are students learning to read stratigraphic sequences?",
            "Can they identify rocks and minerals in field?",
            "Does AI replace observing earth processes directly?",
            "Are students interpreting satellite imagery with geological context?",
            "Can they distinguish field evidence from assumptions?"
        ],
        intro: "AI tools can analyze satellite imagery, model climate systems, and predict geological hazards—capabilities transforming earth science research. However, field observation skills, understanding of earth processes, and the ability to read landscapes and rock formations require direct experience with natural systems that AI cannot replace.",
        context: "In geoscience, field observation, understanding earth processes across scales, and interpreting geological and environmental evidence require direct engagement with natural systems.",
        noAI: "AI cannot develop your ability to read stratigraphic sequences, interpret satellite imagery in geological context, or observe environmental processes in the field. These skills require learning to see what's actually present in rocks, landscapes, and environmental data—not what AI suggests should be there.",
        limited: "You may use AI for data analysis or literature research after making your own observations and measurements, but field observations, sample interpretation, and geological reasoning must reflect your developing understanding of earth processes.",
        ok: "You remain responsible for ensuring field observations are accurate and complete, interpretations are geologically sound, and conclusions follow from evidence rather than assumptions. AI can process data but cannot develop the field skills and geological intuition essential to geoscience.",
        required: "Learning to use GIS, remote sensing, and climate modeling tools prepares you for geoscience careers where computational methods are increasingly important—but these tools amplify rather than replace field skills and geological reasoning."
    },

    'Neuroscience': {
        considerations: [
            "Are students reasoning across biological levels?",
            "Can they design experiments distinguishing competing hypotheses?",
            "Does AI mask complexity of brain function?",
            "Are students integrating anatomy, physiology, and behavior?",
            "Can they interpret neural data with mechanistic understanding?"
        ],
        intro: "AI can analyze brain imaging data, model neural networks, and identify patterns in behavioral data—techniques central to modern neuroscience research. However, understanding brain function requires integrating knowledge across levels from molecules to behavior, designing experiments that test specific hypotheses, and interpreting results in light of neural mechanisms.",
        context: "In neuroscience, thinking across levels of analysis, designing experiments that isolate neural mechanisms, and interpreting complex data in light of brain function require deep integrative understanding.",
        noAI: "AI cannot develop your ability to reason about neural mechanisms across levels, design experiments that distinguish between competing hypotheses about brain function, or interpret neuroscience findings in light of anatomy, physiology, and behavior. These capacities require working through problems systematically.",
        limited: "You may use AI for statistical analysis or literature review after designing studies and collecting data, but experimental design, hypothesis generation, and interpretation of neural mechanisms must demonstrate your integrative neuroscience reasoning.",
        ok: "You remain responsible for ensuring experimental designs adequately test hypotheses, data interpretations are consistent with known neural mechanisms, and conclusions acknowledge the complexity of brain function. AI can process data but cannot replace neuroscientific judgment.",
        required: "Learning to use computational neuroscience tools, brain imaging analysis software, and neural modeling prepares you for research where these methods are standard—but only when grounded in deep understanding of brain function."
    },

    // ============================================================================
    // HUMANITIES (12 departments)
    // ============================================================================

    'English': {
        considerations: [
            "Are students developing their own analytical voice?",
            "Can students do close reading, not just summary?",
            "Does AI mask actual comprehension of complex texts?",
            "Are students noticing language at sentence level?",
            "Can they construct original arguments from evidence?"
        ],
        intro: "AI can generate literary analysis, suggest interpretations, and produce polished prose about texts you've read. However, the capacity for close reading—noticing diction, syntax, imagery, and form—and developing your analytical voice through writing requires sustained practice that AI would bypass. This policy protects the reading and writing practice that develops literary thinking.",
        context: "In English, close reading skill, analytical voice, and the ability to construct nuanced arguments about texts develop through repeated practice with reading and writing.",
        noAI: "AI cannot develop your ability to notice how language works at the sentence level, construct original arguments grounded in textual evidence, or articulate ideas in your authentic voice. These capacities emerge from sustained reading and writing practice.",
        limited: "You may use AI for brainstorming essay structures or researching literary criticism after forming your own interpretation, but close reading, argument construction, and your writing voice must be authentically yours. AI can suggest improvements but shouldn't generate your analysis.",
        ok: "You remain responsible for ensuring all claims are grounded in textual evidence, arguments are original and nuanced, and your writing reflects your developing analytical voice. AI can help with editing, but the thinking and writing must be yours.",
        required: "Understanding how AI generates literary analysis—and why its interpretations tend toward generic patterns—helps you think critically about both literature and language models, developing skills relevant as AI increasingly mediates textual interpretation."
    },

    'History': {
        considerations: [
            "Are students evaluating sources or accepting summaries?",
            "Can they understand historical context beyond facts?",
            "Does AI simplify historical complexity and ambiguity?",
            "Are students working with primary sources directly?",
            "Can they construct nuanced arguments from evidence?"
        ],
        intro: "AI can summarize historical events, suggest causes, and generate historical narratives—but historical thinking requires evaluating sources, understanding context, and constructing arguments that acknowledge complexity and ambiguity. This policy helps you develop the historian's craft of working with evidence while acknowledging AI's growing presence in historical research.",
        context: "In history, source analysis, contextual understanding, and the ability to construct evidence-based arguments that acknowledge historical complexity are fundamental to historical practice.",
        noAI: "AI cannot develop your ability to evaluate source reliability, understand historical context beyond surface facts, or construct nuanced arguments that acknowledge complexity and competing interpretations. These skills require sustained engagement with primary sources and historical scholarship.",
        limited: "You may use AI for locating sources or understanding historical background after engaging with primary sources yourself, but source analysis, contextualization, and historical argument construction must reflect your reasoning about evidence and context.",
        ok: "You remain responsible for evaluating source credibility, understanding historical context, properly citing evidence, and constructing arguments that acknowledge historical complexity. AI can summarize, but historical judgment is yours.",
        required: "Understanding how AI processes historical information—and its limitations in handling complexity, bias, and interpretive nuance—prepares you to work critically with AI in fields increasingly using these tools for historical research and analysis."
    },

    'Philosophy': {
        considerations: [
            "Are students identifying logical fallacies independently?",
            "Can they construct valid arguments from scratch?",
            "Does AI bypass wrestling with conceptual problems?",
            "Are students engaging with counterarguments themselves?",
            "Can they test reasoning against objections?"
        ],
        intro: "AI can summarize philosophical arguments, explain theories, and generate philosophical prose—but philosophical thinking requires grappling with conceptual problems, constructing careful arguments, and developing your own reasoned positions through dialectical engagement with ideas. This policy protects the struggle that builds philosophical reasoning.",
        context: "In philosophy, the ability to analyze arguments, identify assumptions, construct valid reasoning, and engage with conceptual problems requires sustained practice with philosophical methods.",
        noAI: "AI cannot develop your ability to identify logical fallacies, construct valid arguments, or reason through conceptual problems systematically. Philosophical thinking emerges from wrestling with difficult questions and testing your reasoning against counterarguments.",
        limited: "You may use AI for understanding philosophical vocabulary or historical context after reading primary texts yourself, but argument analysis, position development, and philosophical reasoning must demonstrate your own thinking.",
        ok: "You remain responsible for logical validity, accurate representation of philosophical positions, engagement with counterarguments, and clarity of reasoning. AI can help with expression, but philosophical thinking must be yours.",
        required: "Understanding how AI reasons—its strengths in pattern recognition and limitations in genuine conceptual understanding—raises philosophical questions about intelligence, meaning, and reasoning that are central to contemporary philosophy."
    },

    'Religion': {
        considerations: [
            "Are students interpreting sacred texts with context?",
            "Can they engage respectfully with different beliefs?",
            "Does AI miss symbolic and sacred language?",
            "Are students understanding religious practices, not descriptions?",
            "Can they recognize cultural frameworks in traditions?"
        ],
        intro: "AI can summarize religious texts, explain theological concepts, and describe religious traditions—but religious studies requires careful interpretive work with texts, understanding historical and cultural context, and engaging respectfully with beliefs and practices. This policy helps you develop interpretive skills while acknowledging AI's limitations in handling religious complexity.",
        context: "In religious studies, interpretive skill with sacred texts, understanding of religious traditions in context, and respectful engagement with beliefs require careful study and cultural sensitivity.",
        noAI: "AI cannot develop your ability to interpret religious texts with attention to language and context, understand religious practices within cultural frameworks, or engage respectfully with beliefs different from your own. These capacities require sustained engagement with religious traditions.",
        limited: "You may use AI for background research or understanding terminology after engaging with religious texts and traditions yourself, but textual interpretation, contextual analysis, and development of arguments must reflect your careful study.",
        ok: "You remain responsible for accurate representation of religious traditions, respectful engagement with beliefs and practices, proper citation of sources, and interpretations grounded in textual and contextual evidence.",
        required: "Understanding how AI processes religious texts and concepts—and its limitations in handling sacred language, symbolism, and lived religious experience—prepares you to think critically about technology's role in mediating religious knowledge."
    },

    'Classics': {
        considerations: [
            "Are students learning to read ancient languages?",
            "Can they understand how syntax shapes meaning?",
            "Does AI bypass grammatical and linguistic analysis?",
            "Are students engaging with texts in original?",
            "Can they interpret within ancient cultural contexts?"
        ],
        intro: "AI translation tools and text databases can assist with ancient languages and accessing classical texts—but reading Greek and Latin, understanding ancient contexts, and interpreting classical literature require linguistic skill and cultural knowledge that develop through sustained study. This policy protects language learning while acknowledging technology's role in classical scholarship.",
        context: "In Classics, language acquisition, close reading of ancient texts in original languages, and understanding of ancient Mediterranean contexts are foundational to engaging with classical civilization.",
        noAI: "AI cannot develop your ability to read ancient languages, understand how Latin or Greek syntax shapes meaning, or interpret classical texts within their cultural and historical contexts. These skills require sustained language practice and engagement with ancient sources.",
        limited: "You may use digital tools for looking up vocabulary or parsing assistance after attempting translation yourself, but translation, grammatical analysis, and interpretation of classical texts must demonstrate your developing language skills and cultural understanding.",
        ok: "You remain responsible for translation accuracy, grammatical correctness, understanding of cultural context, and interpretations grounded in the ancient text. AI can assist with vocabulary, but reading and interpretation must be yours.",
        required: "Learning to use digital corpora, text databases, and computational text analysis prepares you for modern classical scholarship while maintaining the language skills and cultural knowledge that distinguish classical studies."
    },

    'Medieval & Renaissance Studies': {
        considerations: [
            "Are students reading premodern texts with attention?",
            "Can they understand historical alterity, not analogies?",
            "Does AI impose modern frameworks anachronistically?",
            "Are students working with primary sources directly?",
            "Can they interpret without projecting contemporary values?"
        ],
        intro: "AI can summarize medieval and Renaissance texts, explain historical contexts, and generate analyses—but understanding these periods requires careful work with primary sources, attention to cultural differences, and interpretive skill with texts in historical context. This policy protects the close reading and historical analysis essential to studying premodern periods.",
        context: "In Medieval and Renaissance Studies, understanding historical alterity, working with primary sources, and interpreting texts within premodern cultural frameworks require careful historical and literary analysis.",
        noAI: "AI cannot develop your ability to read premodern texts with attention to historical difference, understand medieval and Renaissance contexts on their own terms, or construct interpretations that avoid anachronism. These skills require sustained engagement with primary sources and historical scholarship.",
        limited: "You may use AI for background research or understanding historical terminology after engaging with primary sources yourself, but textual analysis, historical contextualization, and interpretation must demonstrate your understanding of premodern cultures.",
        ok: "You remain responsible for accurate representation of medieval and Renaissance cultures, interpretations grounded in historical context, proper citation of primary and secondary sources, and awareness of historical difference.",
        required: "Understanding how AI processes premodern texts—and its tendency toward modern interpretive frameworks—helps you think critically about how we access historical periods and prepares you for scholarship increasingly using digital humanities methods."
    },

    'Writing Program': {
        considerations: [
            "Are students developing their own voice and style?",
            "Can they revise substantively, not just edit for correctness?",
            "Does AI prevent the struggle that develops writing skill?",
            "Are students learning to recognize when arguments need support?",
            "Can they make decisions about structure and organization?"
        ],
        intro: "AI can generate drafts, suggest improvements, and polish prose—but writing is thinking made visible. Learning to write requires developing your own voice, wrestling with how to structure arguments, and revising through multiple drafts. This policy protects the cognitive work of writing while acknowledging AI's growing presence in composition.",
        context: "In writing, developing voice, learning to revise substantively, and making rhetorical decisions about audience and purpose require practice with the messy process of drafting, revising, and refining your thinking.",
        noAI: "AI cannot develop your ability to discover ideas through writing, make rhetorical choices about audience and purpose, or revise your thinking as you draft. These skills emerge through the struggle of putting ideas into words and learning what you think by writing.",
        limited: "You may use AI for grammar checking or generating ideas after drafting yourself, but initial drafting, substantive revision, and rhetorical decision-making must be your own. AI can polish, but you must compose.",
        ok: "You remain responsible for your argument, your voice, and your rhetorical choices. AI-generated text must be substantially revised to reflect your thinking, and you must be able to explain and defend every claim you make.",
        required: "Understanding how AI generates text—and its limitations in making context-appropriate rhetorical choices—helps you develop critical awareness of automated writing and prepares you for environments where AI writing assistance is common."
    },

    'Romance Languages': {
        considerations: [
            "Are students thinking in the target language?",
            "Can they understand speech without translation tools?",
            "Does AI use prevent building conversational fluency?",
            "Are students producing language, not just translating?",
            "Can they grasp grammar patterns through practice?"
        ],
        intro: "AI translation tools can instantly translate between French, Spanish, Italian, and other Romance languages—but language learning requires building vocabulary, understanding grammar, and developing the ability to think in another language. This policy protects language acquisition while acknowledging technology's role in language practice.",
        context: "In language learning, vocabulary acquisition, grammatical understanding, and developing the ability to produce and comprehend target language require extensive practice that builds proficiency incrementally.",
        noAI: "AI cannot develop your ability to understand spoken language in real time, produce grammatically correct sentences without translating from English, or think in your target language. These skills emerge from sustained practice with listening, speaking, reading, and writing.",
        limited: "You may use AI for vocabulary lookup or checking your translations after attempting writing yourself, but language production, grammatical analysis, and development of proficiency require your own practice. AI can verify, but you must produce.",
        ok: "You remain responsible for developing speaking and listening skills, grammatical accuracy, appropriate vocabulary use, and the ability to communicate without translation tools. AI is a study aid, not a substitute for language acquisition.",
        required: "Understanding how AI translation works—and where it fails with idiomatic language, cultural context, and register—prepares you for professional contexts where you'll need both language skills and ability to work with translation technology."
    },

    'East Asian Languages & Literatures': {
        considerations: [
            "Are students mastering character recognition and writing?",
            "Can they understand grammar patterns without translation?",
            "Does AI bypass learning fundamentally different structures?",
            "Are students reading texts with cultural nuance?",
            "Can they produce language using appropriate registers?"
        ],
        intro: "AI can translate between English and Chinese, Japanese, or Korean and analyze East Asian literature—but learning these languages requires mastering character systems, understanding grammatical structures fundamentally different from English, and engaging with texts in cultural context. This policy protects language learning while acknowledging technology's growing role in East Asian studies.",
        context: "In East Asian language study, character recognition, understanding syntax patterns, and developing reading fluency require sustained practice with language systems fundamentally different from English.",
        noAI: "AI cannot develop your character recognition, understanding of grammar patterns, or ability to read literary Chinese, Japanese, or Korean texts with cultural and linguistic nuance. These skills require extensive practice with writing systems and grammatical structures.",
        limited: "You may use AI for character lookup or translation checking after attempting work yourself, but character writing, grammar practice, translation, and literary analysis must demonstrate your developing language proficiency and cultural understanding.",
        ok: "You remain responsible for character accuracy, grammatical correctness, translation quality, and interpretations that reflect understanding of East Asian cultural contexts. AI can assist learning, but proficiency requires your sustained practice.",
        required: "Understanding how AI handles East Asian languages—and its limitations with classical texts, literary language, and cultural nuance—prepares you for work requiring both language skills and critical awareness of translation technology."
    },

    'German': {
        considerations: [
            "Are students mastering case system through practice?",
            "Can they parse complex German sentence structures?",
            "Does AI prevent understanding word order flexibility?",
            "Are students building vocabulary actively, not passively?",
            "Can they produce idiomatic German without translating?"
        ],
        intro: "AI translation tools can instantly translate German to English and vice versa—but learning German requires understanding case systems, word order patterns, and developing the ability to read and speak without mental translation. This policy protects language acquisition while acknowledging technology's role in language study.",
        context: "In German language learning, mastering case grammar, understanding compound word formation, and developing reading fluency with complex sentence structures require sustained practice.",
        noAI: "AI cannot develop your understanding of case endings, your ability to parse complex German sentence structure, or your capacity to produce idiomatic German. These skills emerge from grammatical practice and extensive reading and writing in German.",
        limited: "You may use AI for vocabulary assistance or checking your work after attempting translation yourself, but grammar practice, sentence construction, and translation must demonstrate your developing German language skills.",
        ok: "You remain responsible for grammatical accuracy, appropriate case usage, reading comprehension, and the ability to communicate in German without relying on translation. AI can help you learn, but proficiency requires your practice.",
        required: "Understanding how AI translation handles German—and where it struggles with case ambiguity, word order flexibility, and cultural context—prepares you for professional environments where you'll need both German proficiency and technology literacy."
    },

    'Russian': {
        considerations: [
            "Are students developing Cyrillic reading fluency?",
            "Can they understand aspectual verb distinctions?",
            "Does AI mask the logic of cases?",
            "Are students practicing grammar, not bypassing it?",
            "Can they read authentic texts without translation?"
        ],
        intro: "AI can translate Russian texts and explain grammatical concepts—but learning Russian requires mastering the Cyrillic alphabet, understanding aspect and case systems, and developing reading fluency in a language with different grammatical logic from English. This policy protects the language practice essential to proficiency.",
        context: "In Russian language learning, understanding aspectual verb pairs, mastering case systems, and reading Cyrillic fluently require sustained practice with grammatical patterns and writing systems.",
        noAI: "AI cannot develop your Cyrillic reading fluency, your understanding of verbal aspect, or your ability to use case endings correctly in context. These skills require extensive grammar practice and engagement with Russian texts.",
        limited: "You may use AI for vocabulary lookup or translation verification after attempting work yourself, but Cyrillic writing, grammar exercises, and translation must reflect your developing Russian language proficiency.",
        ok: "You remain responsible for grammatical correctness, proper case usage, understanding of aspectual differences, and ability to read and produce Russian without translation tools. AI assists learning but doesn't replace practice.",
        required: "Understanding how AI handles Russian—and its limitations with aspectual nuance, case ambiguity, and cultural context—prepares you for work requiring Russian language skills alongside critical awareness of translation technology."
    },

    'Arabic': {
        considerations: [
            "Are students mastering Arabic script and handwriting?",
            "Can they recognize trilateral root patterns?",
            "Does AI bypass understanding morphological word formation?",
            "Are students reading unvocalized texts with comprehension?",
            "Can they produce appropriate grammatical forms?"
        ],
        intro: "AI translation tools can work with Arabic text—but learning Arabic requires mastering the Arabic script, understanding root-pattern morphology, and developing reading fluency in a language with grammatical and writing systems fundamentally different from English. This policy protects language acquisition essential to Arabic proficiency.",
        context: "In Arabic language learning, mastering the Arabic alphabet and script, understanding trilateral root systems, and reading without vowel markings require sustained practice with fundamentally different linguistic structures.",
        noAI: "AI cannot develop your ability to recognize Arabic script, understand root-pattern word formation, or read unvocalized texts with comprehension. These skills require extensive practice with Arabic writing and grammatical systems.",
        limited: "You may use AI for vocabulary assistance or root identification after attempting work yourself, but script practice, grammar exercises, and translation must demonstrate your developing Arabic language skills and understanding of morphological patterns.",
        ok: "You remain responsible for script accuracy, grammatical correctness, understanding of root-pattern relationships, and reading comprehension. AI can assist your learning process but cannot replace the practice required for Arabic proficiency.",
        required: "Understanding how AI processes Arabic—and its challenges with unvocalized text, dialectal variation, and cultural context—prepares you for professional work requiring both Arabic skills and awareness of language technology's capabilities and limitations."
    },

    // ============================================================================
    // SOCIAL SCIENCES (6 departments)
    // ============================================================================

    'Accounting & Finance': {
        considerations: [
            "Are students identifying appropriate accounting treatments?",
            "Can they exercise professional judgment on reporting?",
            "Does AI mask ethical implications of choices?",
            "Are students understanding principles, not just calculations?",
            "Can they evaluate whether financial statements mislead?"
        ],
        intro: "AI tools can analyze financial statements, perform calculations, and generate financial reports—but professional accounting and finance require understanding underlying principles, exercising professional judgment, and maintaining ethical responsibility for financial decisions. This policy helps you develop the judgment and technical skills essential to financial professions.",
        context: "In accounting and finance, understanding accounting principles, financial analysis techniques, and ethical responsibilities for financial decisions require practice with real cases and professional scenarios.",
        noAI: "AI cannot develop your ability to identify appropriate accounting treatments, exercise professional judgment about financial reporting, or understand the ethical implications of financial decisions. These capacities require working through cases and understanding principles deeply.",
        limited: "You may use AI for calculations or technical assistance after determining proper accounting treatment yourself, but financial analysis, judgment about accounting methods, and ethical reasoning must demonstrate your understanding of professional standards and principles.",
        ok: "You remain responsible for correctness of financial analysis, appropriateness of accounting treatments, ethical soundness of recommendations, and professional judgment about financial reporting. AI can perform calculations, but professional judgment is yours.",
        required: "Learning to use financial modeling tools, data analytics, and AI-driven analysis prepares you for modern finance careers where technology augments but doesn't replace professional judgment and ethical responsibility."
    },

    'Business Administration': {
        considerations: [
            "Are students reading organizational situations, not data?",
            "Can they make decisions with incomplete information?",
            "Does AI oversimplify human dimensions of problems?",
            "Are students developing strategic judgment, not formulas?",
            "Can they assess implementation challenges realistically?"
        ],
        intro: "AI can analyze business cases, generate strategic recommendations, and create business plans—but business judgment requires understanding organizational dynamics, evaluating information critically, and making decisions with incomplete information. This policy helps you develop the analytical and leadership skills that distinguish effective managers.",
        context: "In business, strategic thinking, organizational analysis, and leadership judgment develop through analyzing real cases, evaluating alternatives, and learning to make decisions under uncertainty.",
        noAI: "AI cannot develop your ability to read organizational situations, exercise judgment about strategy with incomplete information, or understand the human dimensions of business problems. These capacities emerge from wrestling with complex cases and business scenarios.",
        limited: "You may use AI for research or testing your analysis after developing your own strategic thinking, but case analysis, strategic recommendations, and business judgment must demonstrate your reasoning about organizational problems.",
        ok: "You remain responsible for strategic soundness, realistic assessment of implementation challenges, understanding of organizational dynamics, and recognition that business problems rarely have single correct answers. AI can provide information, but judgment is yours.",
        required: "Learning to work with business analytics, AI-driven insights, and data tools prepares you for management roles where technology provides information but human judgment about strategy, people, and implementation remains essential."
    },

    'Cognitive & Behavioral Science': {
        considerations: [
            "Are students designing experiments testing cognitive theories?",
            "Can they integrate across psychological and neural levels?",
            "Does AI simplify behavioral data interpretation?",
            "Are students distinguishing between competing theories?",
            "Can they recognize methodological limitations independently?"
        ],
        intro: "AI can analyze behavioral data, suggest explanations for cognitive phenomena, and generate experimental designs—but understanding mind and behavior requires integrating knowledge across psychology, neuroscience, and philosophy while designing rigorous studies. This policy helps you develop the integrative thinking and research skills essential to cognitive science.",
        context: "In cognitive and behavioral science, designing experiments that test cognitive theories, interpreting behavioral and neural data, and integrating across levels of explanation require deep understanding of mind and behavior.",
        noAI: "AI cannot develop your ability to design experiments that distinguish between cognitive theories, interpret behavioral data in light of cognitive mechanisms, or integrate across psychological and neural levels of explanation. These skills require working through research problems systematically.",
        limited: "You may use AI for statistical analysis or literature search after designing studies yourself, but experimental design, hypothesis development, and interpretation of cognitive mechanisms must demonstrate your integrative scientific reasoning.",
        ok: "You remain responsible for experimental rigor, appropriate interpretation of behavioral and cognitive data, integration across levels of explanation, and recognition of methodological limitations. AI can analyze data, but cognitive science judgment is yours.",
        required: "Understanding how AI models cognition—and where AI systems differ from human cognitive processes—is central to modern cognitive science, preparing you to work at the intersection of artificial and natural intelligence."
    },

    'Economics': {
        considerations: [
            "Are students reasoning through economic mechanisms?",
            "Can they evaluate whether model assumptions fit?",
            "Does AI mask trade-offs in policy analysis?",
            "Are students understanding theory, not just techniques?",
            "Can they identify when models misrepresent reality?"
        ],
        intro: "AI can analyze economic data, run econometric models, and generate economic analysis—but economic thinking requires understanding theoretical frameworks, evaluating assumptions, and reasoning about policy implications. This policy helps you develop the analytical skills and theoretical understanding essential to economics.",
        context: "In economics, understanding economic models, reasoning about assumptions and mechanisms, and evaluating empirical evidence require practice with both theoretical and applied analysis.",
        noAI: "AI cannot develop your ability to think through economic mechanisms, evaluate whether model assumptions fit real-world situations, or reason about policy trade-offs. These capacities require working through problems and understanding economic logic deeply.",
        limited: "You may use AI for calculations or data analysis after setting up models and identifying appropriate methods yourself, but economic reasoning, model specification, and policy analysis must demonstrate your understanding of economic principles.",
        ok: "You remain responsible for economic logic, appropriateness of methods, correct interpretation of results, and realistic assessment of policy implications. AI can perform analysis, but economic reasoning is yours.",
        required: "Learning to work with economic data analytics, machine learning for prediction, and computational methods prepares you for modern economics where these tools are increasingly standard—but only when grounded in economic theory and judgment."
    },

    'Politics': {
        considerations: [
            "Are students analyzing power relations, not events?",
            "Can they understand how institutions shape outcomes?",
            "Does AI flatten normative arguments about governance?",
            "Are students engaging with political theory directly?",
            "Can they evaluate evidence about political behavior?"
        ],
        intro: "AI can summarize political events, analyze polling data, and generate policy analysis—but political science requires understanding institutions, evaluating arguments about power and governance, and analyzing political phenomena with theoretical frameworks. This policy helps you develop the analytical skills essential to studying politics.",
        context: "In political science, analyzing institutions, understanding political behavior, and evaluating normative arguments about governance require engagement with political theory and empirical evidence.",
        noAI: "AI cannot develop your ability to analyze power relations, understand how institutions shape political outcomes, or evaluate normative arguments about justice and governance. These capacities require sustained engagement with political theory and empirical research.",
        limited: "You may use AI for background research or data analysis after developing your own political analysis, but argument construction, institutional analysis, and political reasoning must demonstrate your understanding of political concepts and evidence.",
        ok: "You remain responsible for accurate representation of political positions, evidence-based claims about institutions and behavior, engagement with political theory, and recognition of normative dimensions of political questions.",
        required: "Understanding how AI processes political information—and its limitations in handling normative reasoning, power dynamics, and institutional complexity—prepares you to work critically with technology increasingly mediating political knowledge and discourse."
    },

    'Sociology & Anthropology': {
        considerations: [
            "Are students conducting fieldwork and participant observation?",
            "Can they interpret qualitative data with theory?",
            "Does AI miss meaning and context in social life?",
            "Are students understanding power, not just patterns?",
            "Can they maintain research ethics with human subjects?"
        ],
        intro: "AI can analyze demographic data, suggest social patterns, and generate sociological analysis—but understanding social life requires fieldwork, interpretive skill with qualitative data, and theoretical frameworks for analyzing power, culture, and social structures. This policy protects the research skills essential to social science.",
        context: "In sociology and anthropology, conducting fieldwork, analyzing qualitative data, and understanding social phenomena through theoretical lenses require direct engagement with social worlds and research methods.",
        noAI: "AI cannot develop your ability to conduct fieldwork, understand social contexts through participant observation, or interpret qualitative data with theoretical sophistication. These skills require direct experience with research and sustained engagement with social theory.",
        limited: "You may use AI for literature review or coding assistance after conducting research yourself, but research design, fieldwork, and sociological/anthropological interpretation must demonstrate your methodological skills and theoretical understanding.",
        ok: "You remain responsible for research ethics, methodological rigor, theoretically informed interpretation, and recognition that studying social life requires understanding meaning and context, not just identifying patterns.",
        required: "Understanding how AI analyzes social data—and its limitations in handling meaning, context, and power relations—prepares you for social research increasingly using computational methods while maintaining the interpretive skills essential to sociology and anthropology."
    },

    // ============================================================================
    // CREATIVE ARTS & COMMUNICATIONS (4 departments)
    // ============================================================================

    'Art & Art History': {
        considerations: [
            "Are students developing drawing and technical skills?",
            "Can they analyze how visual form creates meaning?",
            "Does AI bypass creative problem-solving in studio?",
            "Are students doing close looking, not description?",
            "Can they make compositional and color judgments?"
        ],
        intro: "AI can generate images, analyze artworks, and describe art historical contexts—but developing artistic vision, technical skill, and understanding of how art creates meaning require sustained studio practice and close looking at art. This policy protects the making and interpretive skills essential to art practice and scholarship.",
        context: "In art, creative vision, technical mastery, and the ability to analyze how visual form creates meaning develop through making art and sustained engagement with visual culture.",
        noAI: "AI cannot develop your drawing skills, color sense, compositional judgment, or ability to analyze how artworks function visually. In studio work, AI would bypass the technical skills and creative problem-solving built through practice. In art history, AI cannot replace close looking and interpretive skill.",
        limited: "For studio work, you may use digital tools after developing concepts and techniques by hand. For art history, you may use AI for background research after engaging with artworks through close visual analysis. Creative decisions and art historical interpretation must be yours.",
        ok: "You remain responsible for artistic vision and technical execution in studio work, and for interpretations grounded in close visual analysis in art history. AI can assist with information or digital processes, but seeing and making are irreplaceable.",
        required: "Understanding AI as both creative tool and subject of critical analysis is increasingly relevant to contemporary art practice and theory, preparing you to engage with technology's role in image-making and visual culture."
    },

    'Music': {
        considerations: [
            "Are students developing ear training and aural skills?",
            "Can they perform with technical control and expression?",
            "Does AI bypass understanding harmonic progressions?",
            "Are students composing, not just generating music?",
            "Can they analyze how music creates meaning?"
        ],
        intro: "AI can compose music, generate arrangements, and analyze musical structures—but musical understanding requires developing aural skills, instrumental or vocal technique, and the ability to make expressive musical decisions. This policy protects the practice and deep listening essential to musicianship.",
        context: "In music, ear training, performance technique, and understanding of musical structure through listening and analysis require sustained practice with sound and repeated performance experience.",
        noAI: "AI cannot develop your ability to hear harmonic progressions, perform with technical control and musical expression, or analyze how music creates meaning through sound. These capacities require extensive practice with listening, performing, and musical analysis.",
        limited: "You may use music software for notation or playback after composing or arranging yourself, but musical ideas, performance technique, and analytical understanding must develop through your work with sound and sustained musical practice.",
        ok: "You remain responsible for musical decisions, performance technique, and analytical interpretations grounded in careful listening. AI can assist with notation or information, but musical understanding requires your ears and interpretive judgment.",
        required: "Understanding how AI generates music—and its limitations in creating genuinely expressive or innovative musical works—helps you think critically about creativity, expression, and technology's role in musical practice."
    },

    'Theater, Dance & Film Studies': {
        considerations: [
            "Are students developing embodied performance technique?",
            "Can they analyze how bodies create meaning?",
            "Does AI replace collaborative creative work?",
            "Are students interpreting texts through performance?",
            "Can they make staging and movement choices?"
        ],
        intro: "AI can generate scripts, analyze performances, and create digital effects—but understanding performance requires embodied practice, interpretive work with texts and bodies, and developing the collaborative skills essential to theater, dance, and film. This policy protects the embodied and collaborative learning central to performance study.",
        context: "In theater, dance, and film, embodied performance skills, interpretive work with texts and movement, and collaborative creation require practice that is fundamentally social and physical.",
        noAI: "AI cannot develop your performance technique, ability to analyze how bodies and staging create meaning, or capacity to collaborate creatively with others. These skills require embodied practice, careful observation of performance, and sustained collaborative work.",
        limited: "You may use AI for research or technical assistance after developing performance concepts and analyses yourself, but interpretation of performances, creative development, and embodied technique must emerge from your practice and collaborative work.",
        ok: "You remain responsible for performance quality, interpretive depth in analysis, understanding of how theater/dance/film create meaning through performance, and the collaborative and ethical dimensions of performance work.",
        required: "Understanding how AI technologies are changing performance—from digital performance capture to AI-generated video—prepares you to work critically with technology increasingly present in contemporary theater, dance, and film practice."
    },

    'Journalism & Mass Communications': {
        considerations: [
            "Are students developing news judgment about newsworthiness?",
            "Can they verify sources and facts independently?",
            "Does AI mask ethical communication responsibilities?",
            "Are students understanding audiences, not demographics?",
            "Can they distinguish reporting from public relations?"
        ],
        intro: "AI can draft news articles, analyze media content, and generate communications materials—but journalism and strategic communication require news judgment, ethical decision-making, and understanding audiences and publics. This policy helps you develop the judgment and ethical reasoning essential to communication professions.",
        context: "In journalism and communications, developing news judgment, understanding audience analysis, and maintaining ethical standards in information dissemination require practice with real communication scenarios.",
        noAI: "AI cannot develop your news judgment about what's newsworthy, your ability to verify sources and facts, or your ethical reasoning about communication responsibilities. These capacities require practice with reporting, writing, and ethical decision-making in communication contexts.",
        limited: "You may use AI for research or drafting assistance after developing news angles and communication strategies yourself, but reporting, editorial judgment, and ethical reasoning must demonstrate your developing professional skills.",
        ok: "You remain responsible for accuracy, proper sourcing, ethical communication practices, and editorial judgment about newsworthiness and audience needs. AI can assist with drafting, but journalistic and communication judgment is yours.",
        required: "Understanding how AI generates news and communications content—and its implications for misinformation, source verification, and media ethics—is increasingly essential for journalism and communications professionals navigating technology's role in media."
    },

    // ============================================================================
    // INTERDISCIPLINARY PROGRAMS (10 departments)
    // ============================================================================

    'Africana Studies': {
        considerations: [
            "Are students analyzing how race shapes knowledge?",
            "Can they interpret cultural works within resistance?",
            "Does AI reproduce stereotypes or distortions?",
            "Are students engaging with primary sources directly?",
            "Can they critique representations with historical context?"
        ],
        intro: "AI can summarize information about African and African diaspora histories and cultures—but Africana Studies requires critical engagement with power, race, and representation, along with interpretive skills for understanding diverse cultural productions and social movements. This policy helps you develop the critical thinking essential to Africana Studies.",
        context: "In Africana Studies, analyzing power relations, understanding cultural production in context, and engaging critically with representations of African and African diaspora peoples require sustained engagement with histories, texts, and cultural forms.",
        noAI: "AI cannot develop your ability to analyze how race and power shape knowledge production, interpret cultural works within historical contexts of resistance and creativity, or engage critically with representations that have often distorted African peoples' experiences.",
        limited: "You may use AI for background research after engaging with primary sources yourself, but analysis of power relations, interpretation of cultural productions, and critical engagement with representations must reflect your developing understanding of Africana Studies frameworks.",
        ok: "You remain responsible for accurate and respectful representation of African and diaspora cultures, analysis grounded in historical and cultural context, and critical awareness of how knowledge about Africa and its diaspora has been produced and contested.",
        required: "Understanding how AI processes information about race, Africa, and diaspora cultures—including biases in training data—is essential for thinking critically about technology's role in representing and potentially distorting these histories and cultures."
    },

    'East Asian Studies': {
        considerations: [
            "Are students developing language skills, not relying?",
            "Can they recognize and critique Orientalist representations?",
            "Does AI impose Western frameworks on Asia?",
            "Are students understanding cultures within their frameworks?",
            "Can they work with texts in original languages?"
        ],
        intro: "AI can translate East Asian texts and provide information about East Asian cultures—but East Asian Studies requires language skills, understanding of diverse cultural contexts, and critical engagement with how Asia is represented in Western discourse. This policy protects the language learning and cultural analysis essential to the field.",
        context: "In East Asian Studies, language proficiency, understanding of diverse cultural traditions, and critical awareness of Orientalism and Western representations of Asia are fundamental to engaged scholarship.",
        noAI: "AI cannot develop your language skills, your ability to understand East Asian cultures within their own frameworks rather than through Western assumptions, or your capacity to recognize and critique Orientalist representations.",
        limited: "You may use AI for translation assistance or background information after engaging with texts and cultures yourself, but language work, cultural analysis, and critical interpretation must demonstrate your developing skills and cultural understanding.",
        ok: "You remain responsible for language accuracy, culturally informed interpretation, awareness of how Western discourse has represented Asia, and respect for cultural difference and complexity.",
        required: "Understanding how AI processes information about East Asia—and biases embedded in systems often trained primarily on Western sources—helps you think critically about technology's role in mediating cross-cultural knowledge."
    },

    'Environmental Studies': {
        considerations: [
            "Are students integrating across scientific and social?",
            "Can they reason about environmental justice?",
            "Does AI offer technical fixes ignoring politics?",
            "Are students evaluating solutions for equity?",
            "Can they think ecologically and socially simultaneously?"
        ],
        intro: "AI can analyze environmental data, model climate scenarios, and suggest sustainability solutions—but environmental studies requires integrating natural science, social science, and humanities to understand complex environmental problems. This policy helps you develop the integrative thinking essential to environmental work.",
        context: "In environmental studies, thinking across disciplines, understanding both biophysical and social dimensions of environmental issues, and evaluating potential solutions require integrative analysis.",
        noAI: "AI cannot develop your ability to integrate across natural sciences, social sciences, and humanities in analyzing environmental problems, or to reason about environmental justice and sustainability with attention to both ecological and social considerations.",
        limited: "You may use AI for data analysis or background research after developing your own integrated analysis, but environmental reasoning, evaluation of solutions, and attention to justice dimensions must demonstrate your interdisciplinary thinking.",
        ok: "You remain responsible for scientific accuracy, social and ethical reasoning about environmental issues, integration across disciplinary perspectives, and recognition that environmental problems require both technical and political solutions.",
        required: "Learning to use environmental modeling tools, GIS, and data analytics prepares you for environmental careers while maintaining the integrative thinking and ethical reasoning that distinguish environmental studies from purely technical approaches."
    },

    'Latin American & Caribbean Studies': {
        considerations: [
            "Are students developing Spanish or Portuguese skills?",
            "Can they understand colonial legacies in context?",
            "Does AI center whose perspectives on region?",
            "Are students engaging with regional diversity?",
            "Can they critique power relations in representation?"
        ],
        intro: "AI can provide information about Latin America and the Caribbean—but the field requires language skills, understanding of diverse cultural and political contexts, and critical engagement with histories of colonialism and representation. This policy protects the language learning and critical analysis essential to area studies.",
        context: "In Latin American and Caribbean Studies, language proficiency, understanding of colonial legacies and cultural diversity, and critical awareness of how the region has been represented in global discourse are foundational.",
        noAI: "AI cannot develop your Spanish or Portuguese language skills, your ability to understand the region's diversity and complexity, or your capacity to engage critically with histories of colonialism and ongoing power relations.",
        limited: "You may use AI for translation assistance or background information after engaging with sources yourself, but language work, cultural and political analysis, and critical interpretation must demonstrate your developing regional expertise.",
        ok: "You remain responsible for language accuracy, culturally and historically informed analysis, awareness of colonial legacies and power relations, and respect for the region's complexity and diversity.",
        required: "Understanding how AI processes information about Latin America and the Caribbean—including whose perspectives are centered in training data—helps you think critically about technology's role in global knowledge production and representation."
    },

    'Middle East & South Asia Studies': {
        considerations: [
            "Are students learning languages of the region?",
            "Can they recognize and critique Orientalism?",
            "Does AI perpetuate stereotypes about region?",
            "Are students understanding religious and cultural diversity?",
            "Can they analyze power in Western representations?"
        ],
        intro: "AI can provide information about the Middle East and South Asia—but area studies requires language skills, deep understanding of diverse cultures and religions, and critical engagement with Orientalism and Western representations of the region. This policy protects the language learning and critical frameworks essential to the field.",
        context: "In Middle East and South Asia Studies, language proficiency, understanding of religious and cultural diversity, and critical awareness of Orientalism and power relations are fundamental to responsible scholarship.",
        noAI: "AI cannot develop your language skills, your ability to understand Middle Eastern and South Asian cultures within their own frameworks, or your capacity to recognize and critique Orientalist representations and power dynamics.",
        limited: "You may use AI for translation assistance or background research after engaging with sources yourself, but language work, cultural and political analysis, and critical interpretation must demonstrate your developing area expertise and theoretical frameworks.",
        ok: "You remain responsible for language accuracy, culturally informed interpretation grounded in historical context, critical awareness of representation and power, and respect for religious and cultural diversity.",
        required: "Understanding how AI processes information about the Middle East and South Asia—and biases in how these regions are represented in training data—is essential for critical engagement with technology's role in representing regions often subject to Orientalist distortion."
    },

    "Women's, Gender & Sexuality Studies": {
        considerations: [
            "Are students analyzing intersecting systems of power?",
            "Can they understand lived experiences in context?",
            "Does AI encode gender and sexuality biases?",
            "Are students engaging with feminist and queer theory?",
            "Can they critique how knowledge production gendered?"
        ],
        intro: "AI tools can summarize gender theory and describe identity categories—but they often reflect the biases of their training data, centering dominant narratives while marginalizing queer and trans voices. WGSS requires intersectional analysis that questions whose knowledge counts, how power operates through representation, and what gets erased. This policy protects the critical feminist and queer frameworks essential to studying gender and sexuality.",
        context: "In WGSS, analyzing power relations, understanding intersectionality, and engaging critically with how gender and sexuality shape and are shaped by knowledge production require sustained engagement with feminist and queer theory.",
        noAI: "AI cannot develop your ability to analyze intersecting systems of power, understand lived experiences of gender and sexuality in context, or engage critically with how knowledge production has been shaped by patriarchy and heteronormativity.",
        limited: "You may use AI for background research after developing your own analysis, but feminist and queer analysis, attention to intersectionality, and critical engagement with power must demonstrate your understanding of WGSS frameworks.",
        ok: "You remain responsible for intersectional analysis, accurate and respectful representation of diverse experiences of gender and sexuality, engagement with feminist and queer theory, and critical awareness of how power shapes knowledge.",
        required: "Understanding how AI encodes gender and sexuality—including biases and assumptions in training data and algorithms—is essential for feminist and queer critique of technology and for thinking about how AI systems reproduce or challenge gender and sexual norms."
    },

    'Law, Justice & Society': {
        considerations: [
            "Are students analyzing legal arguments critically?",
            "Can they reason about justice beyond rules?",
            "Does AI hide how law perpetuates power?",
            "Are students understanding institutional legitimacy questions?",
            "Can they evaluate rights claims with theory?"
        ],
        intro: "AI can summarize legal cases, analyze policy arguments, and generate legal reasoning—but understanding law and justice requires critical analysis of legal institutions, reasoning about justice and rights, and understanding how law shapes and is shaped by social power. This policy helps you develop the critical thinking essential to legal and justice studies.",
        context: "In Law, Justice & Society, analyzing legal reasoning, understanding institutional power, and engaging with normative questions about justice require critical engagement with law as both text and social practice.",
        noAI: "AI cannot develop your ability to analyze legal arguments, reason about justice and rights, or understand how legal institutions reflect and perpetuate social power. These capacities require sustained engagement with legal texts, theory, and institutional analysis.",
        limited: "You may use AI for case research or background information after developing your own legal and political analysis, but legal reasoning, normative argumentation about justice, and institutional critique must demonstrate your critical thinking.",
        ok: "You remain responsible for accuracy in representing legal positions, normative reasoning about justice, critical analysis of how law operates in society, and engagement with questions of rights, power, and institutional legitimacy.",
        required: "Understanding how AI is used in legal contexts—from predictive policing to automated decision systems—and its implications for justice, rights, and legal institutions is increasingly central to critical study of law and society."
    },

    'Poverty Studies': {
        considerations: [
            "Are students analyzing structural causes of inequality?",
            "Can they integrate statistics and lived experiences?",
            "Does AI offer technical fixes ignoring politics?",
            "Are students critiquing systems that produce poverty?",
            "Can they evaluate policies for justice implications?"
        ],
        intro: "AI can analyze poverty data and suggest policy solutions—but poverty studies requires understanding structural causes of inequality, engaging with lived experiences, and critical analysis of economic and political systems. This policy helps you develop the critical frameworks and analytical skills essential to studying poverty and inequality.",
        context: "In Poverty Studies, understanding structural causes of poverty, engaging with qualitative and quantitative evidence, and analyzing policy proposals require integrative thinking across economics, sociology, and political economy.",
        noAI: "AI cannot develop your ability to analyze structural causes of inequality, understand poverty through both statistical and lived experience evidence, or reason critically about economic and political systems that produce and sustain poverty.",
        limited: "You may use AI for data analysis or background research after developing your own structural analysis, but interpretation of poverty data, understanding of lived experiences, and critical evaluation of policies must demonstrate your analytical thinking.",
        ok: "You remain responsible for structural analysis of inequality, integration of quantitative and qualitative evidence, critical assessment of policy proposals, and recognition that poverty requires both technical and political solutions.",
        required: "Understanding how AI systems may perpetuate or exacerbate inequality—through algorithmic bias, automated decision systems affecting poor communities, and data-driven policies—is essential for critical poverty studies in the age of algorithmic governance."
    },

    'Digital Culture & Information': {
        considerations: [
            "Are students analyzing how algorithms shape culture?",
            "Can they understand digital power relations?",
            "Does using AI prevent studying it critically?",
            "Are students engaging with digital studies theory?",
            "Can they experiment with AI as object?"
        ],
        intro: "AI is itself a subject of study in digital culture—both as technology and as cultural phenomenon. This field requires critical analysis of how digital technologies shape knowledge, culture, and social relations. This policy helps you develop the critical frameworks for analyzing digital culture while potentially using AI as object of study.",
        context: "In Digital Culture & Information, analyzing how technologies shape knowledge production, understanding algorithmic culture, and engaging critically with digital power relations require theoretical frameworks and analytical skills.",
        noAI: "AI cannot develop your ability to analyze digital culture critically, understand how algorithms shape social life, or engage with theoretical frameworks for studying technology and culture. These capacities require sustained engagement with digital studies scholarship and critical analysis.",
        limited: "You may use AI as an object of study—experimenting with systems to understand how they work—but analysis of digital culture, critical engagement with technology, and theoretical interpretation must demonstrate your developing expertise in digital studies.",
        ok: "You remain responsible for critical analysis of technology, theoretically informed interpretation of digital culture, understanding of how algorithms and platforms shape social life, and recognition of digital power relations.",
        required: "Studying how AI functions—both technically and culturally—is central to digital culture studies. You should develop both practical understanding of AI systems and critical frameworks for analyzing their cultural and social implications."
    },

    'Education Studies': {
        considerations: [
            "Are students understanding how people actually learn?",
            "Can they analyze pedagogical approaches critically?",
            "Does AI obscure educational equity questions?",
            "Are students engaging with learning theory?",
            "Can they evaluate AI's pedagogical assumptions?"
        ],
        intro: "AI is rapidly entering educational contexts, from automated grading to adaptive learning systems. Education studies requires critical analysis of pedagogy, learning theories, and educational justice. This policy helps you develop the critical frameworks essential to thinking about education while considering AI's growing presence in learning environments.",
        context: "In Education Studies, understanding learning theory, analyzing pedagogical approaches, and engaging with questions of educational equity and justice require frameworks for thinking critically about teaching and learning.",
        noAI: "AI cannot develop your understanding of how people learn, your ability to analyze pedagogical approaches, or your capacity to reason about educational justice and equity. These require sustained engagement with educational theory and practice.",
        limited: "You may study AI as educational technology—analyzing its pedagogical assumptions and implications—but your analysis of learning, pedagogy, and educational justice must demonstrate your understanding of educational theory and commitment to equitable practice.",
        ok: "You remain responsible for theoretically informed analysis of education, critical engagement with pedagogical approaches, attention to equity and justice in education, and recognition that teaching and learning are fundamentally human and social processes.",
        required: "Understanding how AI is being deployed in educational contexts—and critically analyzing its pedagogical assumptions, effectiveness claims, and implications for educational equity—is increasingly essential for educators and education scholars."
    }
};

// ============================================================================
// USAGE INSTRUCTIONS
// ============================================================================

/*
To integrate this into your existing code, replace the current `disciplineLanguage` object
with this `departmentSpecificLanguage` object. Each department now has its own custom language.

Update your code to reference departments directly rather than mapping to categories:

Instead of:
    const lang = disciplineLanguage[statementParts.departmentCategory];

Use:
    const lang = departmentSpecificLanguage[statementParts.department];

The structure for each department is:
{
    intro: "2-3 sentence introduction explaining AI tools and their relevance",
    context: "1 sentence core disciplinary importance statement",
    noAI: "1-2 sentences on why students can't use AI for essential skills",
    limited: "1-2 sentences on how AI can help selectively",
    ok: "1-2 sentences on student responsibility with free AI use",
    required: "1-2 sentences on why learning to work with AI matters"
}
*/
