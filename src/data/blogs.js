export const author = {
  name: 'Dr. Mirza Faizaan',
  role: 'PhD \u00b7 Polymer Additive Manufacturing',
};

export const blogs = [
  {
    slug: 'benchy-default-slicer-profile',
    title: 'You Are Using the Benchy Wrong. Build Your Default Slicer Profile Instead.',
    date: '2026-06-09',
    author: author,
    tags: ['Calibration', 'Process Optimization', 'Print Farm Operations'],
    excerpt:
      'The most downloaded 3D model on Printables is not a printer calibration print. It is a slicer diagnostic that exposes every weakness in your default profile.',
    content: [
      { type: 'h3', text: 'The Benchy Is Not a Printer Test' },
      {
        type: 'p',
        text: 'The Benchy is not a printer calibration print. It is a slicer diagnostic. Default slicer settings are a starting point. They are not a strategy.',
      },
      {
        type: 'p',
        text: 'A default profile gets you roughly 80 percent of the way to a printable model. The quality of the remaining 20 percent is what separates a clean print from a diagnostic puzzle. That 20 percent is not a fixed deficit. It is an artifact of settings designed for generalised geometry, not for the specific demands of a particular model.',
      },
      {
        type: 'p',
        text: 'Hundreds of troubleshooting threads show Benchies with drooping chimneys and visible hull lines and fine strings across the bow. The advice is consistent: tighten your belts, check for Z-wobble, dry your filament. The printer is blamed. The printer is almost never the problem.',
      },
      {
        type: 'p',
        text: 'Every zone on the Benchy demands a different decision from the slicer. If you load the model, select a default quality preset, and hit slice, you are giving one generic answer to six different questions. The result is predictable failure in predictable locations for predictable reasons.',
      },
      { type: 'h3', text: 'Six Zones, Six Demands' },
      {
        type: 'p',
        text: 'Before opening a single settings panel, look at the geometry. Ask what each zone is asking the slicer to do. Most people skip this step. It is the first mistake.',
      },
      {
        type: 'p',
        text: 'The Benchy contains six distinct geometry challenges. Each one tests a different slicer capability.',
      },
      {
        type: 'svg',
        text: '/assets/Benchy_Labelled.png',
        alt: 'Labelled 3DBenchy zones: Bow \u2014 Aggressive Overhang, Main Cabin \u2014 Retraction/Stringing test, Chimney \u2014 Small Cross section, cooling critical',
      },
      {
        type: 'p',
        text: 'The hull: a continuous overhang curve. The angle changes continuously from base to deck. This is not a fixed overhang. It is a gradient. The slicer must negotiate a curve where every layer extends slightly further than the one below it. A single support threshold angle cannot handle this well because the gradient crosses from mild to aggressive without a clean boundary.',
      },
      {
        type: 'p',
        text: 'The bow: the most aggressive overhang on the model. At the tip, the angle approaches 60 to 65 degrees from vertical. Default support settings will flag this zone and generate supports. Some slicers will generate supports across the entire bow opening. Some will leave it alone depending on the threshold angle. Neither decision is inherently correct. The decision should be conscious.',
      },
      {
        type: 'p',
        text: 'The cabin roof: a bridge. A horizontal span between two vertical walls. The slicer must detect this as a bridge and print it differently from standard infill. Most people do not notice the cabin roof is a bridge because bridges on the Benchy are not dramatic from the outside. The software either handles it or it does not. If the bridging lines sag, the surface above will be rough.',
      },
      {
        type: 'p',
        text: 'The chimney: a small cross-section tower. Small cross-section means the nozzle returns to the same tiny area very quickly. Each layer prints in two to three seconds at standard speeds. By the time the next layer begins, the previous layer has not cooled. The printer is depositing hot plastic on plastic that is still soft. The chimney droops, leans, or mushrooms at the top. This is not a printer problem. It is a cooling settings problem.',
      },
      {
        type: 'p',
        text: 'The porthole: a circular hole in the hull. A retraction test. The printer must stop extruding, travel across the gap without oozing, and resume extrusion cleanly on the other side. Stringing here means retraction distance or speed needs adjustment. It can also mean temperature is too high for the filament. Either way, the porthole is testing whether your slicer\u2019s retraction parameters are matched to your material.',
      },
      {
        type: 'p',
        text: 'The stern overhang: the rear bottom of the boat. The overhang under the back deck. This is the most ignored zone on the Benchy. People inspect the bow for overhang quality and completely miss the stern. The angle here is less aggressive than the bow, roughly 45 degrees, but the geometry transitions abruptly. If the slicer handles this poorly, the underside of the stern will be rough and under-extruded.',
      },
      {
        type: 'p',
        text: 'Six zones. Six demands. Six different settings families that must answer. Default profiles give one answer to all six.',
      },
      { type: 'h3', text: 'What Defaults Actually Handle Well' },
      {
        type: 'p',
        text: 'Before changing any settings, identify what defaults do well. Roughly 40 percent of the settings panel needs no attention for this model. Telling you what to ignore is as important as telling you what to change.',
      },
      {
        type: 'p',
        text: 'Wall count at three perimeters is sufficient. The hull is not structural. Thicker walls add print time without improving surface quality on this geometry.',
      },
      {
        type: 'p',
        text: 'Infill percentage and pattern matter far less than people assume. The Benchy sees no load. Ten percent, fifteen percent, twenty percent: the surface quality is identical. Wall count and top layer count determine what you see on the outside. Infill determines what you do not see. Set it to gyroid at fifteen percent and spend exactly zero more seconds on it.',
      },
      {
        type: 'p',
        text: 'Print temperature lives in the filament profile, not the per-model settings. If you have tuned your filament temperature with a temperature tower, do not change it here. Travel speed on the Benchy is also unremarkable. The model has no complex internal geometry that creates problematic travel paths.',
      },
      {
        type: 'p',
        text: 'Top and bottom layers at four each with a 0.2mm layer height produce 0.8mm of solid surface. Sufficient for a clean cabin roof on PLA at standard flow rates.',
      },
      {
        type: 'p',
        text: 'These settings are not where the Benchy fails. Spend your decision-making energy elsewhere.',
      },
      { type: 'h3', text: 'The Three Failures and Their Real Causes' },
      {
        type: 'p',
        text: 'Across 15 printers and hundreds of diagnostic prints, three failures appear with enough regularity to be treated as signals, not accidents. Each traces back to a specific slicer decision.',
      },
      {
        type: 'p',
        text: 'The hull line. A faint horizontal seam visible on the outside of the hull, typically appearing at 5 to 8 millimetres from the base. There are two distinct phenomena that get called a hull line, and they have completely different fixes.',
      },
      {
        type: 'p',
        text: 'Type 1 is a toolpath transition artifact. As the slicer moves from the solid bottom layers into the sparse infill region, the internal pressure state of the print changes. The perimeter passes do not change, but the nozzle pressure does. If pressure advance is not well tuned, the pressure inconsistency at that internal transition telegraphs through to the outer surface. The fix is pressure advance calibration. This is not a slicer setting. It lives in the firmware configuration.',
      },
      {
        type: 'p',
        text: 'Type 2 is a seam placement artifact at the hull-to-cabin geometry transition. Around 8 to 10 millimetres, the hull\u2019s continuous curve transitions to more vertical geometry as the cabin walls begin. If the slicer places a seam at or near this transition zone, you get a visible discontinuity. The fix is seam painting. Explicitly place the seam on the stern. This takes under a minute and produces an immediately visible improvement in the layer preview.',
      },
      {
        type: 'p',
        text: 'Chimney droop. The chimney top is rounded, leaning, or rough. The cause is almost always insufficient cooling time between layers. On a small cross-section like the chimney, each layer prints in two to three seconds at standard outer wall speeds. PLA needs time to solidify before the next layer deposits fresh heat. Without a minimum layer time enforcement, hot plastic stacks on plastic that has not solidified. The chimney sags. The default minimum layer time in most slicers is 5 to 8 seconds. For the chimney geometry, 12 seconds is the minimum that produces a clean result. Combined with the cooling fan running at full speed from layer 5 upward, this single change resolves chimney droop on nearly every printer.',
      },
      {
        type: 'p',
        text: 'Minimum layer time and fan speed together solve the chimney. Either one alone is insufficient.',
      },
      {
        type: 'p',
        text: 'Bow stringing. Fine threads crossing the bow opening. The porthole is also a retraction test, but the bow is where retraction problems are most visible because the span is larger. Stringing across the bow means the nozzle oozes during the travel move. The fix may require adjusting retraction distance, retraction speed, or print temperature. If retraction is calibrated and stringing persists, lower the temperature by 5 degrees. PLA at 210 may string where PLA at 205 does not. The temperature tower you ran for layer adhesion is your guide.',
      },
      { type: 'h3', text: 'The Non-Negotiable Settings' },
      {
        type: 'p',
        text: 'If you change nothing else when slicing a Benchy, change these. These are the settings where defaults consistently produce suboptimal results for this specific geometry.',
      },
      {
        type: 'p',
        text: 'Seam position: rear. Use the seam painting tool in your slicer. Paint the seam explicitly onto the stern. Default seam logic places the seam on the nearest corner, which on the Benchy hull frequently means near the bow or along the hull curve. A painted seam moves it to the least visible face in under a minute.',
      },
      {
        type: 'p',
        text: 'Minimum layer time: 12 seconds. Default values of 5 to 8 seconds are insufficient for the chimney cross-section. Twelve seconds gives each chimney layer enough time to cool before the next layer deposits heat. This is the single most impactful setting change for Benchy quality.',
      },
      {
        type: 'p',
        text: 'Fan speed: 100 percent from layer 5 upward. Most slicers allow fan speed ramp-up by layer. Set full cooling as early as possible. PLA has no reason to be conservative with the fan. The bridge detection on the cabin roof also benefits from maximal cooling.',
      },
      {
        type: 'p',
        text: 'Outer wall speed: 40 to 50 millimetres per second. The curved hull surface reveals speed artifacts: ringing, ghosting, inconsistent surface finish. Slowing the outer wall gives nozzle pressure time to stabilise and produces a visibly smoother hull. Inner walls can remain at default speeds.',
      },
      {
        type: 'p',
        text: 'Supports: off. Decide this consciously. Auto-generated supports on the Benchy bow leave surface marks that are often worse than the unsupported overhang texture they prevent. The bow overhang at 60 to 65 degrees prints cleanly without supports on a well-tuned printer with sufficient cooling. If you must use supports, place them manually and only on the bow tip.',
      },
      {
        type: 'p',
        text: 'That is five settings. Everything else: infill, top layers, bottom layers, temperature, wall count, travel speed. Leave them at defaults for this model. They are not where the Benchy fails.',
      },
      { type: 'h3', text: 'The Layer Preview Habit' },
      {
        type: 'p',
        text: 'None of these settings matter if you do not verify them before printing. The layer preview is the last chance to catch a decision that looks correct in the settings panel but behaves wrong in the toolpath.',
      },
      { type: 'p', text: 'Layer 1: uniform skirt or brim. Inconsistent line width means the Z offset is uncalibrated.' },
      {
        type: 'p',
        text: 'Layers 2 through 8: solid bottom layers with full coverage and no gaps.',
      },
      {
        type: 'p',
        text: 'Layer 12 and beyond: infill begins, pattern correct, shell consistent.',
      },
      {
        type: 'p',
        text: 'Bow overhang layers: each layer extends slightly further than the one below, no unsupported gaps at the tip.',
      },
      {
        type: 'p',
        text: 'Cabin roof: bridging lines perpendicular to the span. If the slicer treats it as standard infill, bridge detection is not active.',
      },
      {
        type: 'p',
        text: 'Chimney layers: speed annotation confirms the 12-second minimum layer time is applied. If speed has not dropped, the setting is not active.',
      },
      {
        type: 'p',
        text: 'Stern overhang: gradual extension, clean toolpaths, no gaps.',
      },
      {
        type: 'p',
        text: 'Seam view: seam runs consistently along the stern on every layer.',
      },
      { type: 'p', text: 'If all of this looks correct, print it.' },
      { type: 'h3', text: 'Build This Into Your Default Profile' },
      {
        type: 'p',
        text: 'The goal is not to configure the Benchy every time. The goal is to use the Benchy to configure your default profile once.',
      },
      {
        type: 'p',
        text: 'Save these settings as a printer profile template in your slicer. The seam position preference. The minimum layer time. The fan curve. The outer wall speed. None of these are model-specific compromises. They are general-purpose improvements to your default configuration that the Benchy\u2019s geometry exposed.',
      },
      {
        type: 'p',
        text: 'A well-tuned default profile transfers to other models. The chimney cooling settings that prevented droop on the Benchy are the same settings that produce clean small features on any print. The seam painting habit transfers. The layer preview walkthrough transfers. The discipline of asking what each zone demands before touching settings transfers.',
      },
      {
        type: 'p',
        text: 'Default settings are a starting point. The Benchy tells you what your starting point is missing.',
      },
      {
        type: 'p',
        text: 'The Benchy does not test your printer. It tests your judgment. The chimney droops when the minimum layer time is wrong. The hull shows a line when the seam is misplaced. The bow strings when retraction goes uncalibrated. None of these are printer failures. They are slicer decisions left unexamined.',
      },
      { type: 'p', text: 'The settings are the process.' },
    ],
  },
  {
    slug: '92-5-first-pass-yield',
    title: 'How a 15-Printer Facility Went from 0% to 92.5% First-Pass Yield',
    date: '2026-05-23',
    author: author,
    tags: ['Yield Improvement', 'Print Farm Operations', 'Calibration', 'Case Study'],
    excerpt:
      'Most AM shops treat calibration as optional maintenance. Here is what changed when a facility made it foundational.',
    content: [
      {
        type: 'p',
        text: 'A print farm I worked with ran 15 printers. Every print failed the first time. Not some. Every single one.',
      },
      {
        type: 'p',
        text: 'The facility produced functional prototypes and end-use parts. Experienced operators. Modern equipment. But the workflow was a repair loop: print, fail, diagnose, reprint. The lead operator spent six hours a day troubleshooting. Combined material scrap, operator overtime, and rework costs ran to several lakhs monthly. Deadlines slipped because failures were discovered late.',
      },
      { type: 'h3', text: 'What sustained the failure' },
      {
        type: 'p',
        text: 'Three things kept this state in place.',
      },
      {
        type: 'p',
        text: 'First, production pressure. Deadlines governed everything. If a print looked acceptable, it shipped. Calibration was treated as overhead: something you did when you had time, which was never. The machines degraded slowly, and the failures crept in gradually enough that no single event triggered alarm.',
      },
      {
        type: 'p',
        text: 'Second, knowledge was tribal. Operators knew certain printers were "moody" and certain materials "difficult." They developed workarounds: raft layers on everything, slower speeds on Tuesdays, filament swaps for no articulable reason. These heuristics accumulated over years. Some worked. Most masked deeper problems. None were written down.',
      },
      {
        type: 'p',
        text: 'Third, calibration carried a status problem. The engineering team treated it as technician-level work. The operators, lacking formal training, made ad-hoc adjustments with no unifying method. No one measured first-layer consistency across the fleet. No one logged extrusion multiplier drift over time. The baseline did not exist because no one thought to establish one.',
      },
      { type: 'h3', text: 'Measuring before fixing' },
      {
        type: 'p',
        text: 'I started by measuring.',
      },
      {
        type: 'p',
        text: 'Over three days I logged 40 consecutive prints across the fleet. The failures clustered into three categories. Bed adhesion problems caused roughly six in ten failures. Extrusion inconsistencies, worn nozzles, and clogged gears accounted for another quarter. Slicing errors made up the rest. I also found four printers with measurable axis misalignment and two with extruders far enough out of calibration that they over-extruded by more than 15%.',
      },
      {
        type: 'svg',
        text: '/assets/svgs/failure-chart.svg',
        alt: 'Donut chart: 60% bed adhesion failures, 25% extrusion issues, 15% slicing errors across 40 print faults',
      },
      {
        type: 'p',
        text: 'The operators knew something was wrong. They did not know what. They had never seen the data laid out.',
      },
      { type: 'h3', text: 'The intervention' },
      {
        type: 'p',
        text: 'Week one: calibration. I wrote a first-layer protocol that took under ten minutes per printer. Step by step: tram the bed, set nozzle height with a feeler gauge, run a single-layer test patch, measure with calipers, adjust, repeat once. I added an extrusion multiplier calibration using a hollow cube test print. I tuned input shaping on the firmware, which required no additional hardware. I established a maintenance schedule: weekly nozzle cleaning, monthly belt tension checks, quarterly lubrication.',
      },
      {
        type: 'svg',
        text: '/assets/svgs/calibration-flow.svg',
        alt: 'First-layer calibration protocol: 5-step process — tram bed, nozzle height, test patch, measure, adjust — under 10 minutes per printer',
      },
      {
        type: 'p',
        text: 'Week two: training and documentation. I trained four operators on the calibration protocols. I made them run the procedures themselves, correct their own mistakes, and calibrate printers I had deliberately thrown out of adjustment. I wrote concise SOPs. I mounted quick-reference cards at each printer station. I documented common failure modes with photographs and corrective steps.',
      },
      {
        type: 'p',
        text: 'Week three: parameter optimization. I built material-specific slicing profiles for PLA, PET-G, ABS, and TPU. I reduced average print time by 20% through optimized speeds, accelerations, and infill patterns. I added geometry-based slicing rules for tall parts, overhangs, and parts with large footprints.',
      },
      { type: 'h3', text: 'What changed' },
      {
        type: 'p',
        text: 'The facility went from zero first-pass prints to 92.5% within four weeks. Failures dropped from over 40 per month to fewer than three. The lead operator\u2019s troubleshooting time fell from six hours daily to under one. Material waste contracted by roughly 90%. The changes held: the facility sustained above 90% yield for the following eight weeks.',
      },
      {
        type: 'svg',
        text: '/assets/svgs/before-after-stats.svg',
        alt: 'Before vs after comparison: first-pass yield 0% to 92.5%, failures 40+ to under 3 per month, troubleshooting 6 hrs/day to under 1 hr/day, material waste reduced by 90%',
      },
      {
        type: 'p',
        text: 'What made the difference was not sophisticated technology. Input shaping and extrusion calibration are well-documented techniques. The literature on first-layer optimization is extensive. The problem was never a lack of available solutions.',
      },
      {
        type: 'p',
        text: 'The problem was that calibration had been classified as optional. It was not absence of knowledge. It was absence of priority.',
      },
      {
        type: 'p',
        text: 'A facility does not drift from 0% to 92.5% because someone discovers a novel technique. It drifts because someone finally measures the baseline, writes down the procedure, trains the operators, and insists that calibration is not overhead. It is the operation.',
      },
    ],
  },
];
