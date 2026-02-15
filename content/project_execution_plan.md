---
title: "Resistance Theory Project: Task Structure & Execution Plan"
---

## Project Overview

**Goal:** Develop comprehensive analytical framework and essay series on resistance movements, their tactics, contexts, and effectiveness.

**Deliverables:**
1. Analytical framework document ✓
2. Research questions guide ✓
3. Essay series outline ✓
4. Case studies database ✓
5. 10-essay series (drafts → publication)
6. Supporting materials (bibliography, glossary, interactive tools)

**Timeline:** Flexible, prioritize quality over speed

---

## Phase 1: Foundation Building ✓

### Completed
- [x] Core framework development
- [x] Research questions mapping
- [x] Essay series structure
- [x] Case study template
- [x] Initial conceptual work
- [x] Case studies database structure (Obsidian/Bases compatible)
- [x] CLAUDE.md project instructions for AI-assisted development

### In Progress
- [ ] Refine and expand framework based on feedback
- [x] Identify priority case studies for initial research
- [ ] Begin bibliography development

---

## Case Studies Infrastructure

### Directory Structure
```
case_studies/
├── _templates/
│   └── case_study.md      # Standard template with YAML frontmatter
├── index.md               # Map of Content (manual navigation)
├── US Civil Rights Movement.md
├── Polish Solidarity.md
├── Tiananmen Square.md
├── South African Anti-Apartheid.md
├── Hong Kong Protests.md
└── Syrian Uprising.md
```

### Obsidian/Bases Compatibility
- All case studies use YAML frontmatter properties for filtering
- Compatible with Obsidian Bases (no Dataview dependency)
- Publishable via Quartz static site generator
- Wikilinks for cross-referencing between cases and framework docs

### Key Properties for Filtering
| Property | Values |
|----------|--------|
| `outcome` | success, partial_success, failure, ongoing |
| `type` | nonviolent, armed, mixed |
| `status` | draft, in_progress, complete |
| `region` | africa, asia, europe, latin_america, middle_east, north_america, oceania |
| `regime_type` | democracy, hybrid, authoritarian, colonial, totalitarian |
| `tactics` | Array: mass_demonstration, strike, boycott, civil_disobedience, etc. |
| `themes` | Array: labor, anticolonial, civil_rights, democracy, etc. |

### AI-Assisted Development
- `CLAUDE.md` at project root contains instructions for Claude Code
- Ensures consistent template usage when creating new case studies
- Documents property values and wikilink conventions

---

## Phase 2: Research & Case Study Development

### Priority Case Studies (First Wave)

**Tier 1: Must Develop First (4-6 cases)**

Choose cases that:
1. Represent different tactical approaches
2. Span different outcomes (success/failure)
3. Cover different contexts (regime type, geography, era)
4. Provide clear lessons
5. Have adequate source material

**Tier 1 Cases (Revised):**

1. **US Civil Rights Movement (1954-1968)** ✓ DRAFTED
   - Well-documented, multiple tactics
   - Strategic non-violence in democracy
   - Partial success with lasting lessons
   - Location: `case_studies/US Civil Rights Movement.md`

2. **Polish Solidarity (1980-1989)** ✓ DRAFTED
   - Successful non-violent under authoritarianism
   - Sanctuary institutions (Church)
   - Long-term organizing through repression
   - Location: `case_studies/Polish Solidarity.md`

3. **Tiananmen Square (1989)** ✓ DRAFTED
   - Failed non-violent movement
   - High-capacity authoritarian repression
   - Contrast with Eastern Europe same year
   - Location: `case_studies/Tiananmen Square.md`

4. **South African Anti-Apartheid (1960-1994)** ✓ DRAFTED
   - Multi-pronged strategy (armed + nonviolent)
   - International sanctions effectiveness
   - Negotiated transition
   - Location: `case_studies/South African Anti-Apartheid.md`

5. **Hong Kong Protests (2014, 2019-2020)** ✓ DRAFTED
   - Digital-age tactics ("Be Water")
   - Failure against authoritarian power
   - Contemporary relevance
   - Location: `case_studies/Hong Kong Protests.md`

6. **Syrian Uprising (2011-)** ✓ DRAFTED
   - Non-violent to violent transition
   - Catastrophic failure case
   - Illustrates worst-case escalation
   - Location: `case_studies/Syrian Uprising.md`

**Tier 2 Cases (Next Priority):**

7. **Occupy Wall Street (2011)**
   - Contemporary relevance
   - Organizational lessons (horizontal structure)
   - Digital age tactics
   - Limited strategic success

8. **Black Lives Matter (2013-)**
   - Decentralized organizing
   - Policy outcomes
   - Digital + street
   - Ongoing

9. **Indian Independence (1920s-1947)**
   - Classic Gandhian nonviolence
   - Anti-colonial context
   - Influenced later movements

10. **People Power Philippines (1986)**
    - Quick success
    - Military defection crucial
    - Elite fracture

### Research Tasks per Case Study

**For each priority case:**

- [ ] Gather primary sources
  - Participant memoirs
  - Strategic documents
  - Media coverage (contemporary)
  - Organizational materials
  
- [ ] Gather secondary sources
  - Academic articles
  - Books
  - Documentaries
  - Analytical pieces
  
- [ ] Create timeline
  - Key events
  - Turning points
  - State responses
  - Movement evolution
  
- [ ] Analyze using framework
  - Complete case study template
  - Identify power mechanisms
  - Assess coordination challenges
  - Evaluate theory of change
  
- [ ] Comparative analysis
  - Similar cases
  - Different outcomes
  - Contextual factors
  
- [ ] Extract lessons
  - What worked
  - What failed
  - Transferable insights
  - Context-specific factors

### Bibliography Development

**Create annotated bibliography with sections:**

- [ ] Academic research on social movements
  - Key theorists (Tilly, Tarrow, McAdam, etc.)
  - Collective action theory
  - Resource mobilization
  - Political opportunity
  - Framing theory
  
- [ ] Historical accounts
  - Movement histories
  - Biographies
  - Journalistic accounts
  
- [ ] Strategic and tactical analysis
  - Handbooks and manuals
  - Strategic planning documents
  - Practitioner reflections
  
- [ ] Comparative studies
  - Cross-national
  - Cross-temporal
  - Quantitative analyses
  
- [ ] Ethics and philosophy
  - Just war theory
  - Civil disobedience
  - Revolutionary ethics
  
- [ ] Contemporary analysis
  - Digital activism
  - Climate movement
  - Recent developments

---

## Phase 3: Essay Development

### Essay Priority Order

**Recommended Writing Sequence:**

1. **Essay 3: The Violence Trap** (Start here)
   - Central to core argument
   - Clear thesis
   - Compelling hook
   - Sets up whole series
   - Can stand alone

2. **Essay 1: The Collective Action Problem**
   - Foundational concept
   - Frames the challenge
   - Academic grounding
   - Essential background

3. **Essay 2: The Asymmetry Question**
   - Complements Essay 1
   - Individual vs. collective
   - Nuances the argument
   - Practical examples

4. **Essay 6: Theories of Victory**
   - Strategic core
   - Practical application
   - Framework for evaluation
   - Essential for organizers

5. **Essay 4: Digital Resistance**
   - Contemporary relevance
   - Timely
   - Broad interest
   - Tech-savvy audience

6. **Essay 5: Context is Everything**
   - Analytical sophistication
   - Prevents universalizing
   - Case study integration
   - Shows depth

7. **Essay 7: Building Movements That Last**
   - Organizational focus
   - Practical wisdom
   - Less common topic
   - Important for sustainability

8. **Essay 8: When Resistance Fails**
   - Honest reckoning
   - Learn from defeat
   - Realistic perspective
   - Counterbalances triumphalism

9. **Essay 9: Ethics and Effectiveness**
   - Philosophical depth
   - Moral seriousness
   - Harder to write
   - Requires maturity of thought

10. **Essay 10: The Future of Resistance**
    - Concluding synthesis
    - Forward-looking
    - Pulls together themes
    - Leaves reader with direction

### Essay Development Process

**For each essay:**

#### Phase A: Detailed Outline (2-3 days)
- [ ] Refine thesis
- [ ] Develop section-by-section argument
- [ ] Identify case studies to include
- [ ] List examples and evidence needed
- [ ] Anticipate counterarguments
- [ ] Plan transitions
- [ ] Sketch introduction and conclusion

#### Phase B: Research & Evidence (3-5 days)
- [ ] Gather supporting evidence
- [ ] Conduct case study research
- [ ] Find specific examples
- [ ] Locate quotes (if using)
- [ ] Verify facts
- [ ] Note sources for citation

#### Phase C: First Draft (3-5 days)
- [ ] Write introduction
- [ ] Develop each section
- [ ] Integrate examples
- [ ] Create transitions
- [ ] Write conclusion
- [ ] Don't self-edit while drafting

#### Phase D: Revision (2-3 days)
- [ ] Read for argument flow
- [ ] Strengthen weak sections
- [ ] Cut unnecessary material
- [ ] Improve transitions
- [ ] Vary sentence structure
- [ ] Check tone consistency

#### Phase E: Editing (1-2 days)
- [ ] Line editing
- [ ] Fact-checking
- [ ] Source verification
- [ ] Consistency check
- [ ] Proofread

#### Phase F: Feedback (1 week)
- [ ] Share with trusted readers
- [ ] Get activist perspective
- [ ] Get academic perspective
- [ ] Get general reader perspective
- [ ] Collect and synthesize feedback

#### Phase G: Final Revision (2-3 days)
- [ ] Incorporate feedback
- [ ] Final polish
- [ ] Format for publication
- [ ] Prepare citations/footnotes
- [ ] Write metadata (abstract, keywords)

#### Phase H: Publication
- [ ] Choose platform
- [ ] Format appropriately
- [ ] Add images/graphics if relevant
- [ ] Write promotional copy
- [ ] Schedule/publish
- [ ] Share and promote

**Total time per essay: ~3-4 weeks**

---

## Phase 4: Supporting Materials

### Glossary Development

**Create comprehensive glossary of terms:**

- [ ] Resistance/activism terminology
- [ ] Tactical definitions
- [ ] Organizational forms
- [ ] Theoretical concepts
- [ ] Movement-specific jargon
- [ ] With examples for each

### Visual Materials

**Develop supporting graphics:**

- [ ] Framework diagrams
- [ ] Taxonomy charts
- [ ] Timeline visualizations
- [ ] Comparative tables
- [ ] Process flows
- [ ] Network diagrams

### Interactive Tools (if resources allow)

**Potential interactive elements:**

- [ ] Case study explorer
  - Filter by context, tactics, outcome
  - Comparative views
  - Timeline browser
  
- [ ] Framework quiz/assessment
  - Analyze your own context
  - Identify relevant tactics
  - Suggest case studies to study
  
- [ ] Strategy builder
  - Walk through power analysis
  - Theory of change development
  - Tactical selection
  
- [ ] Bibliography browser
  - Searchable
  - Categorized
  - Annotated

---

## Agentifiable Task Breakdown

### Research Tasks

**Task Type: Case Study Research**
- Input: Case study name, priority level
- Output: Completed case study template
- Subtasks:
  1. Source gathering
  2. Timeline creation
  3. Framework analysis
  4. Lesson extraction
  5. Bibliography for case

**Task Type: Bibliography Development**
- Input: Topic area
- Output: Annotated bibliography section
- Subtasks:
  1. Source identification
  2. Source acquisition
  3. Annotation writing
  4. Categorization
  5. Citation formatting

**Task Type: Fact Verification**
- Input: Claim to verify, potential sources
- Output: Verified fact with sources or correction
- Subtasks:
  1. Source checking
  2. Cross-referencing
  3. Uncertainty notation
  4. Citation preparation

### Writing Tasks

**Task Type: Essay Outline**
- Input: Essay number, thesis
- Output: Detailed section-by-section outline
- Subtasks:
  1. Thesis refinement
  2. Section planning
  3. Example identification
  4. Transition planning
  5. Introduction/conclusion sketching

**Task Type: Essay Drafting**
- Input: Detailed outline, research materials
- Output: First draft
- Subtasks:
  1. Section writing
  2. Example integration
  3. Transition creation
  4. Introduction writing
  5. Conclusion writing

**Task Type: Essay Revision**
- Input: First draft, feedback (if any)
- Output: Revised draft
- Subtasks:
  1. Argument strengthening
  2. Example improvement
  3. Transition smoothing
  4. Tone consistency
  5. Fact checking

### Production Tasks

**Task Type: Glossary Entry**
- Input: Term to define
- Output: Definition with example
- Subtasks:
  1. Definition drafting
  2. Example selection
  3. Cross-reference linking
  4. Source citation

**Task Type: Visual Creation**
- Input: Concept to visualize
- Output: Diagram/chart
- Subtasks:
  1. Concept analysis
  2. Design planning
  3. Creation
  4. Iteration
  5. Accessibility check

---

## Quality Control

### Standards for Each Deliverable

**Essays:**
- Clear thesis
- Well-supported arguments
- Concrete examples
- Accessible language
- Proper citations
- 3000-5000 words
- Professional editing

**Case Studies:**
- Complete template filled
- Multiple sources consulted
- Framework analysis applied
- Comparative insights included
- Uncertainties noted
- Proper citations

**Framework Documents:**
- Logically organized
- Comprehensive coverage
- Clear definitions
- Practical applicability
- Examples throughout
- Regular updates

### Review Process

**Before Publication:**
- [ ] Self-review against checklist
- [ ] Peer review (activist)
- [ ] Peer review (academic)
- [ ] Peer review (general reader)
- [ ] Fact-checking
- [ ] Citation verification
- [ ] Accessibility check
- [ ] Final polish

---

## Milestones & Checkpoints

### 3 Month Checkpoint
- [x] 2-3 priority case studies complete → **6 Tier 1 cases drafted**
- [ ] Bibliography foundation established
- [ ] Essay 3 drafted
- [ ] Essay 1 outlined
- [ ] Initial glossary (50 terms)

### 6 Month Checkpoint
- [x] 5-6 case studies complete → **6 Tier 1 cases drafted (ahead of schedule)**
- [ ] Essays 3, 1, 2 drafted
- [ ] Essay 6 outlined
- [ ] Bibliography comprehensive
- [ ] Glossary expanded (100 terms)

### 9 Month Checkpoint
- [ ] 8-10 case studies complete
- [ ] Essays 3, 1, 2, 6, 4 drafted
- [ ] Essays 5, 7 outlined
- [ ] Visual materials started
- [ ] First essays revised and published

### 12 Month Checkpoint
- [ ] All priority case studies complete
- [ ] 7-8 essays drafted
- [ ] 3-4 essays published
- [ ] Visual materials developed
- [ ] Interactive tools prototyped

### 18 Month Checkpoint
- [ ] All 10 essays drafted
- [ ] 6-8 essays published
- [ ] Comprehensive case study database
- [ ] Full glossary
- [ ] Visual materials complete

### 24 Month Checkpoint
- [ ] All essays published
- [ ] Interactive tools complete
- [ ] Ongoing case study updates
- [ ] Promotion and distribution
- [ ] Community building

---

## Resource Requirements

### Time
- Writing: 10-15 hours/week
- Research: 5-10 hours/week
- Editing: 2-5 hours/week
- Administration: 1-2 hours/week

### Skills Needed
- Research
- Writing
- Analysis
- Project management
- Some graphic design (or collaborator)
- Some web development (for interactive tools, or collaborator)

### Potential Collaborators
- Academic advisors (feedback)
- Activist reviewers (perspective)
- Editors (polish)
- Designers (visuals)
- Developers (interactive tools)
- Translators (for reach)

### Platforms
- Writing: Obsidian (markdown with Bases for case study database)
- Research management: reference manager (Zotero, etc.)
- Project tracking: this document + task manager
- Publication: Quartz (static site generator for Obsidian) + blog, academic journals, book
- Distribution: social media, movement networks, academic channels
- AI assistance: Claude Code with CLAUDE.md project instructions

---

## Risk Management

### Potential Challenges

**Scope Creep**
- Risk: Project becomes too large
- Mitigation: Stick to 10 essay framework, resist adding more
- Fallback: Cut to essential 5 essays if needed

**Research Overwhelm**
- Risk: Too many case studies, never finish
- Mitigation: Focus on priority cases, accept imperfect coverage
- Fallback: Reduce case study count

**Writer's Block**
- Risk: Stuck on difficult essay
- Mitigation: Skip to easier essay, return later
- Fallback: Break essay into smaller pieces

**Controversial Reception**
- Risk: Backlash from particular perspective
- Mitigation: Evenhanded approach, anticipate objections
- Fallback: Engage constructively, stand by analysis

**Time Constraints**
- Risk: Other commitments interfere
- Mitigation: Flexible timeline, sustainable pace
- Fallback: Extend timeline, reduce scope

**Motivation Loss**
- Risk: Project feels overwhelming or pointless
- Mitigation: Small wins, visible progress, community
- Fallback: Take break, return when energized

---

## Success Metrics

### Quantitative (if relevant)
- Essays published: 10
- Case studies completed: 15-20
- Words written: ~40,000
- Citations collected: 200+
- Readers reached: (platform dependent)

### Qualitative
- Clarity of framework
- Usefulness to practitioners
- Contribution to scholarship
- Quality of analysis
- Depth of case studies
- Accessibility of writing

### Impact Goals
- Used by organizers
- Cited by scholars
- Sparks conversation
- Educates readers
- Influences strategy
- Contributes to collective knowledge

---

## Next Immediate Actions

### Completed (as of 2026-01-29)
1. [x] Select priority case studies → 6 Tier 1 cases identified
2. [x] Set up case studies database structure (Obsidian/Bases compatible)
3. [x] Create case study template with YAML frontmatter
4. [x] Draft all 6 Tier 1 case studies:
   - US Civil Rights Movement
   - Polish Solidarity
   - Tiananmen Square
   - South African Anti-Apartheid
   - Hong Kong Protests
   - Syrian Uprising
5. [x] Create case studies index (Map of Content)
6. [x] Create CLAUDE.md for AI-assisted development

### This Week
1. [ ] Review and refine framework document
2. [ ] Begin Essay 3 detailed outline (The Violence Trap)
3. [ ] Set up bibliography management system
4. [ ] Review drafted case studies for gaps and accuracy
5. [ ] Begin source verification for case studies

### Next 2 Weeks
1. [ ] Finish Essay 3 outline
2. [ ] Begin Essay 3 research phase
3. [ ] Develop 50-term initial glossary
4. [ ] Start Tier 2 case studies (Occupy Wall Street, Black Lives Matter)
5. [ ] Extract bibliography entries from drafted case studies

### Next Month
1. [ ] Draft Essay 3
2. [ ] Outline Essay 1
3. [ ] Complete 2 Tier 2 case studies
4. [ ] Expand bibliography
5. [ ] Create first visual diagrams

---

## Adaptation Protocol

**Review this plan monthly:**
- What's working?
- What's not working?
- What needs adjustment?
- What can be dropped?
- What should be added?

**Be willing to:**
- Change essay order
- Modify scope
- Adjust timeline
- Seek help
- Pivot approach
- Learn and adapt

**Remember:**
- Quality over quantity
- Sustainable over rushed
- Useful over perfect
- Analysis over ideology
- Honesty over optimism

---

## Long-term Vision

Beyond initial 10 essays:
- Expand to book
- Develop curriculum
- Create workshop series
- Build online resource
- Foster community of practice
- Continue case study updates
- Engage with feedback
- Iterate and improve

This is not a finished product but an ongoing contribution to understanding how change happens and how to make it happen more effectively.
