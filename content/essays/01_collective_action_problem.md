---

title: "Why Resistance is Hard: The Mathematics of Mass Action"
essay_number: 1
series: "Resistance Theory"
status: draft
word_count: ~5000
last_updated: "2026-02-01"
---

## Introduction

Here's the thing about Rosa Parks that everyone gets wrong.

On December 1, 1955, she refused to give up her seat on a Montgomery bus. Her act became legendary—the brave seamstress who sparked a movement. Cool. But that's not why it mattered.

Parks had been arrested before for similar protests. So had other Black passengers. Individual acts of resistance, no matter how courageous, rarely change shit. The system just arrests you, replaces you, keeps running.

What made December 1, 1955 different was what happened next: within days, thousands of Montgomery's Black residents coordinated a boycott of the city's buses. They maintained this boycott for 381 days. The buses ran mostly empty. The city hemorrhaged money. The system changed.

This is the fundamental problem with resistance—and it's a math problem, not a courage problem. Individual defiance is easy but useless. Mass action is powerful but extraordinarily difficult to coordinate. Understanding why mass coordination is so hard, and how successful movements pull it off anyway, is essential to understanding when resistance works and when it doesn't.

Explore how this played out: [[US Civil Rights Movement]]

## The Paradox of Power in Numbers

The math is brutally simple. A system's power depends on compliance. When enough people withdraw that compliance simultaneously, the system cannot function. A general strike brings down governments. A sustained boycott changes laws. Mass civil disobedience transforms social norms.

But—and this is the catch—this power only manifests at scale. Ten people refusing to ride the bus is an inconvenience the city can ignore. Ten thousand people is an economic crisis they can't. One person marching is invisible. One million people is a political earthquake.

This creates a chicken-and-egg problem that drives me nuts: you need collective action to be effective, but collective action requires individuals to risk participation *before they know if others will join them*. You gotta commit before you know if you're part of a powerful movement or just an isolated gesture that accomplishes nothing except marking you for retaliation.

The Montgomery Bus Boycott worked because organizers—building on decades of previous organizing by the NAACP, Women's Political Council, and others—convinced tens of thousands of people to make this leap of faith simultaneously. They created systems to sustain coordination: alternative transportation networks, mass meetings for morale and decision-making, enforcement mechanisms to prevent defection, and most critically, visible evidence that others were actually participating.

Compare this with [[Occupy Wall Street]], which faced the same math problem in 2011. The occupiers were visible, their message resonated, they generated massive media attention. But they couldn't solve the fundamental coordination issue: how to translate attention into sustained mass participation. Most sympathizers remained sympathizers—consuming content, agreeing with critiques, liking posts—rather than participants. The camps never mobilized the numbers needed to impose economic or political costs sufficient to force concessions. Eventually, isolated and unable to scale, the occupations were cleared.

The difference wasn't courage or commitment (Occupy participants risked arrest and police violence). The difference was Montgomery organizers solved the collective action problem and Occupy didn't.

We see this pattern repeatedly. [[Polish Solidarity]] mobilized millions of workers through workplace networks and built institutions that sustained coordination for years, even underground during martial law. [[Tunisian Revolution]] sparked from bread protests to nationwide uprising in weeks because professional networks (doctors, teachers, lawyers organized through the Sudanese Professionals Association model) could rapidly coordinate action. [[Hong Kong Protests]], despite mobilizing millions with sophisticated digital coordination, ultimately couldn't sustain sufficient economic pressure on Beijing to force concessions.

The math doesn't change: you need numbers, and getting numbers requires solving brutal coordination challenges.

<div id="threshold-sim"></div>

*Try adjusting the initial spark percentage above to see how threshold distributions create tipping points—or prevent them entirely. This captures the core mathematical challenge: movements need enough early adopters to trigger cascades, but those early adopters must commit before knowing if others will follow.*

## The Free Rider Problem

Economist Mancur Olson identified what might be the most annoying challenge to collective action: the free rider problem. In any mass movement, each individual benefits if the movement succeeds, regardless of whether that specific individual participated. If the Montgomery Bus Boycott defeats segregation, all Black residents benefit—including those who continued riding buses and bore no risk.

This creates perverse incentives that'll make your head hurt. From a purely self-interested perspective, the optimal strategy is to let others take risks while you benefit from their success. If the movement succeeds without you, you win without cost. If it fails, you haven't exposed yourself to retaliation. Either way, free riding seems rational.

The problem gets worse: your individual participation rarely determines the outcome. In a movement of thousands or millions, one more or fewer participant makes almost no difference. So even if you'd gladly participate in a *successful* movement, you might rationally conclude that your participation doesn't matter—making non-participation rational even for people who support the cause.

This logic, if universally applied, predicts mass movements should rarely occur. Yet they do. So what the fuck are people doing right when they overcome this?

<div id="free-rider-game"></div>

*Adjust the parameters above to explore when participation becomes individually rational. Notice how small changes in personal impact or participation costs can flip the entire decision calculus. This mathematical reality explains why successful movements work so hard to change these variables.*

Successful movements use multiple strategies:

**Selective incentives:** Montgomery organizers didn't just appeal to principle—they created carpools, making non-participation less convenient. [[Polish Solidarity]] wasn't just political—it was the only independent union that could defend workers' immediate interests. Participation became individually rational apart from collective outcomes.

[[Indian Independence]] Movement solved this brilliantly through Gandhi's constructive program—spinning thread, village development work, providing immediate tangible benefits alongside political resistance. [[Sudanese Revolution]]'s resistance committees offered neighborhood-level services and protection while organizing politically.

**Social pressure and monitoring:** In tight-knit communities, free riding carries social costs. Montgomery's Black churches provided organizing infrastructure *and* social accountability. In the segregated South, everyone knew who was riding the buses and who wasn't. Social sanction made participation easier than defection.

[[Serbian Otpor]] used this ruthlessly—in a country where everyone knew everyone, activists made participation cool and visible through graffiti, stickers, and creative actions. Not participating meant being left out of the cultural moment. [[East German Revolution]]'s Monday Demonstrations in Leipzig built through visible weekly commitment—your neighbors saw who showed up.

**Changing the calculus:** Some movements make non-participation risky. The Gdańsk shipyard workers in 1980 Poland struck knowing security forces might intervene. But they also knew that if they didn't strike, working conditions would keep deteriorating and the regime would remain unchanged. The status quo became less acceptable than resistance.

[[Chilean Resistance to Pinochet]] faced this calculation for 17 years. The dictatorship's brutality made eventual participation necessary for survival and dignity, even knowing the risks. [[South African Anti-Apartheid]] transformed apartheid from a system people lived with to one that demanded resistance despite severe repression.

**Identity and meaning:** Here's where pure economic self-interest breaks down—because it's not the only (or even primary) human motivation. People participate in movements for dignity, solidarity, identity, meaning. Montgomery participants weren't just avoiding segregated buses—they were asserting their humanity and rejecting subordination. The value wasn't just in the policy outcome but in the act of resistance itself.

[[Black Lives Matter]] mobilized millions not just for policy wins but for dignity, recognition, and communal expression of grief and anger. The George Floyd protests became rituals of collective meaning-making. [[Thailand 2020 Protests]] involved youth risking lèse-majesté charges (serious prison time) partly for generational identity and cultural expression through creative protest.

The most successful movements combine all these. But the free rider problem never disappears—it has to be actively managed. When movements fail to provide selective incentives, maintain social accountability, or sustain meaning and identity, participation erodes even when people still support the goals.

For tragic examples, see [[Belarus 2020]] and [[Myanmar 2021]]—both mobilized millions initially but couldn't sustain participation against prolonged brutal repression without institutional bases to manage free-riding and erosion.

## Coordination Costs

Cool. So you've overcome the free rider problem. People want to participate. Now you just have to... actually coordinate thousands of people, which is staggeringly difficult.

**Communication challenges:** Before participation, potential participants need to know (1) that action is happening, (2) when and where, (3) what specific actions to take, and (4) that enough others are participating to make it worthwhile. Each link in this chain can fail.

The Montgomery Boycott succeeded partly because organizers had multiple communication channels: Black churches where information could be shared from pulpits, ministers who coordinated among churches, the Women's Political Council's telephone networks, and ultimately leaflets distributed throughout Black neighborhoods. They used redundant systems because they knew single channels wouldn't be enough.

In authoritarian contexts, communication gets way harder. [[Polish Solidarity]] initially coordinated strikes through workplace networks, then developed underground distribution during martial law—printing and distributing newsletters at tremendous personal risk. [[Velvet Revolution]] in Czechoslovakia used churches and theaters as communication hubs where state control was weaker. When official media is controlled and unofficial communication criminalized, simply *telling people about planned action* becomes a major operational challenge.

Digital technology promised to solve this. And the [[Tunisian Revolution]], [[Egyptian Revolution 2011]], and [[Hong Kong Protests]] all relied heavily on social media for coordination. Digital tools enable communication at scales and speeds previously impossible.

[[Serbian Otpor]] pioneered this by using the Nexta Telegram channel—wait, no, that was [[Belarus 2020]]. Otpor used mobile phones and (later) social media. [[Myanmar 2021]]'s Civil Disobedience Movement coordinated via Facebook and Telegram when internet access remained. [[Thailand 2020 Protests]] used flash mob tactics announced via social media to avoid bans.

But (there's always a but)—technology creates new problems. Digital communication is surveilled. Hong Kong protesters developed sophisticated use of encrypted apps and offline distribution, knowing their phones were potentially tracked. Even then, the constant risk of infiltration and identification remained.

Moreover, digital communication can create an *illusion* of coordination. Thousands of people liking a post or sharing an event isn't the same as thousands of people showing up. The gap between digital expression of support and physical participation is vast. [[Occupy Wall Street]] learned this painfully—huge online followings didn't translate into sufficient sustained participation. [[Black Lives Matter]] faces ongoing challenges translating viral moments into sustained organizational capacity.

**Trust requirements:** Coordination requires trust that others will follow through. In one-time actions, manageable. But sustained campaigns require ongoing trust despite inevitable setbacks, provocations, exhaustion.

Montgomery organizers built trust through existing institutions—churches that had served communities for decades, leaders known and respected, organizational track records. When Martin Luther King Jr. called for continued boycott despite hardship, people trusted him partly because they trusted the institutions backing him.

[[Indian Independence]] Movement built trust over decades through Gandhi's ashrams, Congress party infrastructure, and continuous campaigns that demonstrated organizational capacity. [[People Power Philippines]] could mobilize rapidly because Cardinal Sin and the Catholic Church had immense institutional credibility built over generations.

Conversely, when movements lack institutional foundations, maintaining trust is harder. [[Occupy Wall Street]]'s deliberate leaderlessness meant no one could speak authoritatively for the movement, making it difficult to coordinate strategy or negotiate. What began as principled rejection of hierarchy became a practical obstacle to sustained coordination.

**Temporal synchronization:** Actions must happen at the right time. Too early, insufficient participation. Too late, the moment passes. Montgomery organizers had to move quickly after Parks's arrest to capitalize on outrage while it was fresh, but not so quickly that people couldn't prepare or spread the word. This timing required sophisticated judgment and rapid communication.

[[Velvet Revolution]] in Czechoslovakia compressed into six weeks from first protests to victory because organizers moved decisively while momentum built. [[Tunisian Revolution]] similarly capitalized on Mohamed Bouazizi's self-immolation, escalating from local protests to nationwide uprising in weeks.

Contrast this with movements that couldn't find the right moment: [[Hong Kong Protests]] sustained for months but couldn't identify a decisive moment for escalation that would force concessions before Beijing's patience expired.

**Maintaining commitment over time:** Even when initial coordination succeeds, sustaining participation is its own nightmare. Montgomery Boycott lasted 381 days. [[Polish Solidarity]] existed legally for 16 months, then underground for seven years before victory. [[Chilean Resistance to Pinochet]] sustained resistance for 17 years across multiple strategies. People had to maintain commitment through exhaustion, retaliation, slow progress, and uncertainty about outcome.

Successful sustained campaigns develop rituals and rhythms that make participation habitual rather than requiring constant re-decision. Montgomery's mass meetings served this function—weekly reinforcement of solidarity, information sharing, collective encouragement. These weren't just logistical necessities; they were mechanisms to sustain coordination over time.

[[Polish Solidarity]]'s underground newsletters, workplace networks, and Church masses provided this rhythm during martial law. [[Chilean Resistance to Pinochet]]'s resistance committees (comités de resistencia) maintained local organization over nearly two decades. [[Sudanese Revolution]]'s resistance committees became durable neighborhood institutions that persist even after the 2021 military coup.

## Visibility vs. Security

Every act of coordination faces a dilemma that's gotten way worse in the digital age: to coordinate, the movement must be visible to potential participants; but visibility makes the movement visible to opponents who can disrupt or repress it.

Montgomery organizers wanted maximum visibility for the boycott—they needed every Black bus rider to know about it and see others participating. But they also needed to protect leaders from retaliation (though they ultimately couldn't—King and others were arrested, bombed, threatened). Balancing publicity with operational security.

This tension intensifies under repressive regimes. When the [[US Civil Rights Movement]] faced beatings and arrests, participants still had some legal protections and public visibility created international pressure that constrained violence (though not enough to prevent murders). When [[Tiananmen Square]] protesters made themselves visible to the Chinese state, they were massacred—visibility brought no protection and enabled comprehensive repression.

The digital age transforms this dilemma in ways that honestly freak me out a bit. Social media enables unprecedented coordination speed and scale—[[Hong Kong Protests]] mobilized millions partly through digital coordination. But digital presence is digital evidence. Every photo shared, every encrypted message, every social media post becomes potential evidence for prosecution once the state decides to repress.

Hong Kong protesters developed remarkable operational security: encrypted apps, burner phones, cash instead of traceable cards, masks, destroying Octopus cards (transit cards that track movement), laser pointers to blind facial recognition cameras. Yet these measures could only mitigate, not eliminate, the fundamental trade-off—some visibility was necessary to coordinate, but all visibility was evidence.

The National Security Law imposed in 2020 exploited this accumulated evidence. Digital footprints that seemed safe during mass protests became prosecution evidence once the state chose mass repression. The same tools that enabled coordination enabled, months later, systematic arrests.

[[Belarus 2020]] protesters using Telegram via Nexta channel faced similar dynamics—coordination enabled mass protests but created digital trails used for prosecution. The Nexta founders were eventually arrested, and hundreds of protesters faced charges based on digital evidence.

[[Myanmar 2021]] faced perhaps the worst version: Facebook—the primary communication platform for the country—became evidence database for the military junta. Photos, videos, posts that coordinated the Civil Disobedience Movement later became prosecution evidence.

[[Serbian Otpor]] operated pre-smartphone era but pioneered decentralized cell structure partly to manage the visibility-security trade-off. Each cell could act visibly (graffiti, stickers, actions) while protecting broader networks.

There's no perfect solution here. Successful movements make strategic choices based on context. In relatively open societies, transparency can be protective—visible movements are harder to repress without generating sympathy. Under authoritarianism, operational security becomes paramount, even at the cost of coordination efficiency.

## Delayed and Uncertain Gratification

Finally—and this might be the hardest part psychologically—resistance movements must convince people to accept costs now for uncertain benefits later. Possibly much later.

Rosa Parks and other Montgomery activists endured a year of walking to work in Alabama heat, organizing carpools, facing white backlash. The Supreme Court ruling desegregating buses came 381 days after the boycott began. [[Polish Solidarity]] members struck in 1980, lived through martial law repression from 1981-1989, and finally saw democracy in 1989—nine years after the initial strikes, seven years underground.

This temporal dimension makes coordination harder in several ways:

**Uncertainty compounds over time:** Short term, you might assess your chances and accept risk. Over years, uncertainty accumulates. Will the movement sustain? Will victory be possible? Will the personal costs be worth it? This uncertainty erodes participation.

**Fatigue and burnout:** Sustaining high-intensity participation is exhausting. Montgomery organizers had to constantly recruit new energy, support those ready to give up, pace the campaign to prevent complete burnout.

[[Chilean Resistance to Pinochet]] faced this across 17 years, cycling through strategies—armed resistance, mass protests, civil disobedience, electoral focus—partly to manage burnout. [[South African Anti-Apartheid]] sustained resistance for decades through multiple generations of activists.

[[Syrian Uprising]] shows the tragic outcome when exhaustion wins. Initial peaceful protests gave way to armed conflict partly because sustaining nonviolent resistance for months against brutal repression proved psychologically and physically impossible for enough participants. The movement fragmented, militarized, and ultimately produced catastrophic civil war.

**Changing circumstances:** Over extended periods, people's lives change. They move, start families, get sick, change priorities. Movements requiring years-long commitment must account for natural attrition and constantly recruit new participants.

**Small wins as strategy:** To sustain participation despite delayed ultimate victory, successful movements create intermediate goals that provide evidence of progress and reward for participation. Montgomery's mid-campaign victories (legal filings progressing, international attention, small concessions from the city) sustained morale when ultimate victory remained distant.

[[Indian Independence]] Movement sustained over decades partly through incremental campaigns—each satyagraha had defined beginning and end, allowing rest and recruitment between escalations. [[Polish Solidarity]] in underground phase celebrated small acts of resistance—illegal newsletters distributed, church services held, May Day protests—as victories maintaining commitment when regime change seemed distant.

But small wins carry risks. If intermediate concessions satisfy enough participants, the movement may demobilize before achieving larger goals. Movement leaders must calibrate—celebrate wins to sustain morale, but maintain pressure for transformative change.

[[Egyptian Revolution 2011]] and [[Sudanese Revolution]] both "won" by removing dictators (Mubarak, Bashir) but then faced military coups because the movements demobilized after initial victory rather than consolidating power. Removing a dictator proved easier than preventing military hijacking of the transition.

## Why Some Movements Actually Pull This Off

Given these extraordinary challenges, you might wonder how movements ever succeed. The answer is not that successful movements eliminate these problems—they manage them, imperfectly, with a lot of luck and timing.

```vega-lite
{
  "title": {
    "text": "Success vs Failure: Patterns Across Key Dimensions",
    "fontSize": 16,
    "anchor": "start",
    "font": "Inter, sans-serif"
  },
  "data": {
    "url": "https://corpetty.github.io/resist/static/movements.json"
  },
  "transform": [
    {
      "fold": [
        "radarData.organizationLevel",
        "radarData.popularSupport",
        "radarData.internationalSupport",
        "radarData.stateRepression",
        "radarData.violenceLevel"
      ],
      "as": ["dimension", "value"]
    },
    {
      "calculate": "replace(datum.dimension, 'radarData.', '')",
      "as": "dimension_clean"
    },
    {
      "calculate": "datum.dimension_clean == 'organizationLevel' ? 'Organization' : datum.dimension_clean == 'popularSupport' ? 'Popular Support' : datum.dimension_clean == 'internationalSupport' ? 'Intl Support' : datum.dimension_clean == 'stateRepression' ? 'Repression' : 'Violence'",
      "as": "dimension_label"
    }
  ],
  "width": "container",
  "height": 350,
  "mark": {
    "type": "point",
    "filled": true,
    "size": 60,
    "opacity": 0.7
  },
  "encoding": {
    "x": {
      "field": "dimension_label",
      "type": "nominal",
      "title": null,
      "axis": {
        "labelAngle": -30,
        "labelFontSize": 12
      }
    },
    "y": {
      "field": "value",
      "type": "quantitative",
      "title": "Level (1-5 scale)",
      "scale": {"domain": [0, 5]},
      "axis": {"grid": true}
    },
    "color": {
      "field": "outcome",
      "type": "nominal",
      "title": "Outcome",
      "scale": {
        "domain": ["success", "partial", "mixed", "failure"],
        "range": ["#2E8B57", "#FFB347", "#DDA0DD", "#CD5C5C"]
      }
    },
    "xOffset": {
      "field": "outcome",
      "type": "nominal"
    },
    "tooltip": [
      {"field": "name", "title": "Movement"},
      {"field": "outcome", "title": "Outcome"},
      {"field": "dimension_label", "title": "Dimension"},
      {"field": "value", "title": "Score"}
    ]
  }
}
```

*This chart reveals key patterns: successful movements tend to have higher organization levels and popular support, but face similar repression. The relationship between international support and success is weaker than often assumed.*

Compare successful and failed cases:

**[[Indian Independence]] succeeded because:**
- Decades of prior organizing built institutional capacity (Congress party, ashrams)
- Selective incentives (constructive program provided immediate benefits)
- Strong social networks (villages, caste associations, religious communities)
- Charismatic leadership (Gandhi) combined with organizational infrastructure
- British unwillingness to massacre millions + post-WWII exhaustion changed calculus
- Partition tragedy shows even "success" had catastrophic costs

**[[Polish Solidarity]] succeeded because:**
- Met immediate worker needs (independent union representation), making participation individually rational
- Catholic Church provided sanctuary institutions beyond state control
- Dense workplace networks enabled trust and coordination
- Seven years of underground organizing built organizational resilience
- Gorbachev's reforms in the USSR changed the international context
- Negotiated transition offered regime elites an acceptable exit

**[[Tunisian Revolution]] succeeded because:**
- Professional networks (doctors, teachers, lawyers) provided organizational capacity
- Economic crisis motivated participation across classes
- Military refused to massacre protesters (critical difference from Egypt, Syria)
- Relatively homogeneous society (no sectarian divisions to exploit)
- UGTT labor union provided institutional backbone
- Rapid timeline prevented counter-mobilization

**[[People Power Philippines]] succeeded because:**
- Catholic Church mobilized millions via Cardinal Sin's radio calls
- Military defection (Enrile, Ramos) removed regime's enforcement tool
- Cross-class coalition in capital where regime depended on compliance
- Four-day speed prevented military from fully responding
- US pressure on Marcos decisive

Now contrast with failures:

**[[Occupy Wall Street]] failed because:**
- No selective incentives beyond participation itself
- Deliberately leaderless prevented strategic coordination
- Digital following didn't translate to sustained physical presence
- No economic leverage over financial sector it targeted
- Couldn't convert attention into institutional power

**[[Tiananmen Square]] failed because:**
- Military willing to massacre (unlike Tunisia, Philippines, Poland)
- International context (pre-1989 wave, no Gorbachev)
- Students lacked institutional base beyond universities
- Urban-rural divide prevented broader coalition
- No leverage over regime that prioritized stability over legitimacy

**[[Hong Kong Protests]] failed because:**
- Beijing willing to wait out protests then impose National Security Law
- Leaderless structure couldn't adapt strategically when tactics failed
- Economic leverage insufficient (China could absorb costs)
- International community provided rhetoric but not intervention
- COVID-19 provided cover for crackdown

**[[Belarus 2020]] failed because:**
- Russia decisively backed Lukashenko (external support)
- Security forces remained loyal (well-paid, regime-dependent)
- Lèse-majesté-equivalent repression (torture, thousands arrested)
- International community ineffective (rhetoric without action)
- Decentralized coordination insufficient against determined repression

**[[Myanmar 2021]] failed (ongoing) because:**
- Military willing to use unlimited violence
- International community won't intervene
- Ethnic divisions complicating resistance coordination
- Nonviolent resistance failed, armed resistance fragmented
- Geopolitics (China, Thailand support junta) prevent isolation

**[[Syrian Uprising]] failed catastrophically because:**
- Regime willing to use unlimited violence (barrel bombs, chemical weapons)
- International intervention backed regime (Russia, Iran) more than opposition
- Peaceful protests couldn't sustain against severe repression
- Armed resistance led to civil war killing hundreds of thousands
- Sectarian divisions exploited by regime and external actors

The pattern that emerges: successful movements solve the collective action problem through institutional capacity, selective incentives, social accountability, and external conditions (regime fracture, international pressure, economic crisis). Failed movements often mobilize millions but can't sustain coordination against determined repression, lack institutional foundations, or face geopolitical contexts that support authoritarianism.

## What This Means for Violence

Understanding these coordination challenges illuminates why violence is tempting. A lone gunman doesn't need to coordinate with thousands of people. A small cell of bombers doesn't face free-rider problems. Terrorism achieves visibility without requiring mass participation.

Violence offers a solution to the collective action problem—individual agency restored, coordination costs eliminated, immediate impact possible.

But (and this is a big fucking but)—it does so at catastrophic cost. It changes who you are, what you can achieve, and who will support you. Most importantly, it plays directly into state power rather than challenging it.

Compare [[Indian Independence]] (largely nonviolent) with [[Algerian Independence]] (armed struggle). India achieved independence through mass nonviolent resistance that made British rule untenable. Algeria achieved independence through brutal eight-year war killing hundreds of thousands. Both "succeeded" at independence—but India became a democracy (flawed but functioning) while Algeria became an authoritarian state dominated by the military that fought the war. The means shaped the outcome.

[[Chilean Resistance to Pinochet]] combined both: armed resistance (MIR, FPMR) and nonviolent mass protests. The armed resistance was counterproductive—gave Pinochet justification for repression, divided opposition, didn't threaten regime militarily. The nonviolent mass protests and eventual electoral strategy succeeded. Violence was a trap.

[[Syrian Uprising]] shows the tragic extreme. Peaceful protests in 2011 faced brutal repression. Some protesters took up arms defensively. Armed resistance escalated. Regime responded with worse violence. Civil war killed over 500,000 and displaced half the population. Even if Assad eventually falls, the violence has made any positive outcome nearly impossible.

Before we examine why violence fails strategically—which we will, in painful detail in [[Essay 3]]—we need to understand another dimension of the coordination problem: why some individuals have structural positions that let them act alone with significant impact, while others can only act collectively.

When does individual action actually matter? That's next in [[Essay 2]].

---

*Draft Essay 1 of 10 in the Resistance Theory series.*

*Next: [[Essay 2]] - "When One Person Can Matter: Structural Power vs. Numerical Power"*

*See also:*
- *[[resistance_framework]] - Overview of the full research project*
- *[[research_questions]] - Systematic questions this essay addresses*
- *[[essay_series_outline]] - How this fits in the broader argument*

---

## References and Further Reading

### Primary Case Sources

This essay draws examples from case studies in this collection:

**Successful Nonviolent Transitions:**
- [[US Civil Rights Movement]]
- [[Polish Solidarity]]
- [[Indian Independence]]
- [[Tunisian Revolution]]
- [[People Power Philippines]]
- [[Velvet Revolution]]
- [[East German Revolution]]
- [[South African Anti-Apartheid]]

**Failed or Ongoing Resistance:**
- [[Occupy Wall Street]]
- [[Tiananmen Square]]
- [[Hong Kong Protests]]
- [[Belarus 2020]]
- [[Myanmar 2021]]
- [[Syrian Uprising]]
- [[Thailand 2020 Protests]]

**Mixed or Complicated Outcomes:**
- [[Chilean Resistance to Pinochet]]
- [[Serbian Otpor]]
- [[Egyptian Revolution 2011]]
- [[Sudanese Revolution]]
- [[Iranian Revolution]]
- [[Algerian Independence]]
- [[Black Lives Matter]]

### Theoretical Works
- Mancur Olson, *The Logic of Collective Action: Public Goods and the Theory of Groups* (Cambridge: Harvard University Press, 1965)
- Elinor Ostrom, *Governing the Commons: The Evolution of Institutions for Collective Action* (Cambridge: Cambridge University Press, 1990)
- Dennis Chong, *Collective Action and the Civil Rights Movement* (Chicago: University of Chicago Press, 1991)
- Doug McAdam, *Political Process and the Development of Black Insurgency, 1930-1970* (Chicago: University of Chicago Press, 1982)

### Contemporary Analysis
- Zeynep Tufekci, *Twitter and Tear Gas: The Power and Fragility of Networked Protest* (New Haven: Yale University Press, 2017)
- Frances Fox Piven and Richard Cloward, *Poor People's Movements: Why They Succeed, How They Fail* (New York: Vintage, 1979)

---

*Note: This essay was written with AI assistance but revised to match my actual voice and analysis. Hit me up if you have thoughts or criticisms on the framework.*
