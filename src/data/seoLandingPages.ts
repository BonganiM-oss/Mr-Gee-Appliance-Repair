export interface TechnicalGuideSection {
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface SeoPageData {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  badge: string;
  subtitle: string;
  intro: string[];
  diagnosticsTitle: string;
  diagnosticsDesc: string;
  symptoms: {
    name: string;
    description: string;
    likelyCause: string;
    repairApproach: string;
  }[];
  technicalDeepDive: TechnicalGuideSection[];
  suburbsTitle: string;
  suburbsList: string[];
  brandsHandled?: string[];
  costBreakdown: {
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SEO_PAGES: Record<string, SeoPageData> = {
  // 1. TV Repair Johannesburg
  'tv-repair-johannesburg': {
    id: 'tv-repair-johannesburg',
    slug: 'tv-repair-johannesburg',
    title: 'TV Repair Johannesburg | Fast Smart & LED TV Repairs | MR Gee',
    metaDescription: 'Expert TV repair Johannesburg. On-site diagnostics for Samsung, LG, Hisense, LED, OLED & Smart TVs across Sandton, Randburg & Joburg. Call 062 351 0025.',
    h1: 'TV Repair Johannesburg & Mobile Television Services',
    badge: 'Johannesburg Mobile TV Specialist',
    subtitle: 'Precision on-site diagnostics and electronic repairs for Samsung, LG, Hisense, and all major Smart and LED television screens across Johannesburg and surrounding suburbs.',
    intro: [
      'Television breakdowns disrupt family routines, evening entertainment, sports broadcasts, and streaming connectivity. When your display goes dark or clicks endlessly, transporting a fragile 55-inch, 65-inch, or 75-inch smart television across busy Johannesburg roads exposes the delicate LCD matrix to severe risk of physical cracking and transport shock. At MR Gee Appliance Repair, we eliminate this hazard by delivering fully equipped mobile television diagnostics and repair services directly to your living room or business premises across Johannesburg.',
      'Modern LED, QLED, NanoCell, and Smart TVs are sophisticated microelectronic assemblies consisting of switch-mode power supply units (SMPS), main digital signal motherboards, LED backlight arrays, timing controller (T-Con) boards, and high-frequency ribbon connections. In South Africa, continuous grid fluctuations, load-shedding power surges, and elevated operating temperatures place immense thermal stress on sensitive filter capacitors and surface-mount MOSFETs. Our qualified technicians arrive with calibrated oscilloscopes, digital multimeters, regulated DC power supplies, and specialized LED backlight testers to isolate failures quickly and accurately.',
      'We believe in absolute transparency and honest customer service. With our straightforward R350 diagnostic call-out fee—which is 100% credited against your final repair invoice upon quote acceptance—you never face unexpected hidden charges. Furthermore, every television electronic repair, backlight replacement, and board service performed by MR Gee is backed by our comprehensive 6-month written warranty on both installed replacement parts and expert workmanship.'
    ],
    diagnosticsTitle: 'Common TV Faults We Diagnose & Resolve Across Johannesburg',
    diagnosticsDesc: 'We specialize in component-level electronic troubleshooting and module-level restoration for all major television models:',
    symptoms: [
      {
        name: 'Sound Is Working, But Screen Is Completely Black (Dark Display)',
        description: 'You can clearly hear audio from your DSTV decoder, gaming console, or Netflix app, and the remote control adjusts volume normally, but the screen remains pitch black or only reveals faint silhouettes under an external flashlight beam.',
        likelyCause: 'Burned-out series LED backlight strips, failed constant-current LED driver circuits on the power board, or an open-circuit return ground connection.',
        repairApproach: 'Complete disassembly of the optical diffuser stack and replacement of the entire LED backlight strip set with factory-spec, high-conductivity aluminum-backed strips for optimal heat dissipation and long-lasting lifespan.'
      },
      {
        name: 'Clicking Relay Sound With Red Standby Light Blinking Repeatedly',
        description: 'When pressing the remote power button, an audible internal mechanical clicking sound repeats every few seconds, and the red front standby indicator flashes in a distinct cycle while the television fails to power on.',
        likelyCause: 'Short-circuited Schottky diodes, dried-out electrolytic filtering capacitors, or blown PWM controller chips in the primary or secondary stages of the switch-mode power supply (SMPS).',
        repairApproach: 'Isolate the power supply unit from the mainboard, test DC voltage output rails (including 3.3V standby, 12V, 13V, and LED Vcc), replace damaged semiconductor components, or fit a factory-matched power board replacement.'
      },
      {
        name: 'TV Freezes on Brand Logo or Continuously Restarts (Boot Loop)',
        description: 'The manufacturer logo appears on screen for several seconds, disappears into a black screen, and reboots in an infinite loop without ever loading the smart dashboard or home menu.',
        likelyCause: 'Corrupted eMMC flash memory sectors, firmware partition damage triggered by abrupt load-shedding outages, or thermal micro-fractures in the BGA main processor chip solder balls.',
        repairApproach: 'Perform hardware firmware recovery reprogramming via serial console or replace the digital logic motherboard with an exact programmed board matching panel timing specifications.'
      },
      {
        name: 'HDMI Ports Display "No Signal" or Disconnect Intermittently',
        description: 'Decoders, media streaming boxes, and gaming consoles display a persistent "No Signal" warning across all HDMI inputs, or video drops out randomly during viewing.',
        likelyCause: 'High-voltage lightning surge spikes traveling through HDMI transmission cables, electrostatic discharge (ESD) failure, or physically damaged solder joints on the HDMI controller IC.',
        repairApproach: 'Inspect and reflow HDMI controller circuitry, replace blown ESD protection diode arrays, or install a certified replacement main logic board.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Component-Level TV Repair vs. Wasteful Replacement',
        paragraphs: [
          'In today’s consumer electronics market, authorized manufacturer warranty centers frequently advise customers to discard televisions with minor electronic faults, claiming that proprietary boards are no longer stocked or quoting prices higher than purchasing a brand-new screen. At MR Gee Appliance Repair, our technical philosophy centers on sustainable, cost-effective engineering. Over 85% of modern smart television failures originate in discrete electronic components—such as swollen aluminum capacitors, failed diodes, blown driver chips, or individual burned LED backlight beads.',
          'By inspecting and repairing down to the board and component level whenever possible, we save Johannesburg homeowners thousands of rands while keeping valuable electronics out of South African landfills. When board replacement is genuinely required, we source verified OEM assemblies directly from trusted electronic distributors, ensuring complete compatibility with your specific panel model.'
        ],
        bulletPoints: [
          'Aluminum-backed LED backlight replacements designed for Johannesburg summer temperatures',
          'Heavy-duty 105°C low-ESR electrolytic capacitors fitted to resist load-shedding surges',
          'Precision soldering and micro-electronics rework tools utilized by mobile technicians',
          'Full visual and electrical safety inspection of power inlet cabling and grounding terminals'
        ]
      },
      {
        title: 'Protecting Your Television from Load-Shedding Surges in Gauteng',
        paragraphs: [
          'Gauteng experiences some of the most aggressive electrical grid transient spikes in the world due to severe highveld electrical thunderstorms and sudden power restoration following scheduled load shedding. When grid electricity suddenly resumes, inductive switching surges can reach several thousand volts for microseconds, instantly destroying the primary rectifiers and varistors in your television power supply.',
          'To safeguard your repaired television, our technicians always review your home power setup. We strongly recommend installing a dedicated high-joule surge protection plug with telephone/antenna line suppression, and disconnecting your smart TV from wall outlets whenever extended outages occur.'
        ]
      }
    ],
    suburbsTitle: 'Johannesburg Suburbs We Service On-Site',
    suburbsList: [
      'Sandton', 'Rosebank', 'Randburg', 'Fourways', 'Bryanston', 
      'Northcliff', 'Melville', 'Linden', 'Hyde Park', 'Morningside',
      'Braamfontein', 'Glenvista', 'Mulbarton', 'Oakdene', 'Johannesburg South',
      'Parkhurst', 'Greenside', 'Rivonia', 'Sunninghill', 'Midrand',
      'Woodmead', 'Douglasdale', 'Paulshof', 'Kyalami', 'Lonehill'
    ],
    brandsHandled: ['Samsung', 'LG', 'Hisense', 'Sony', 'TCL', 'Sinotec', 'Skyworth', 'Panasonic', 'Philips'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Inspection',
        detail: 'R350 flat rate. If you accept the repair quotation, this inspection fee is 100% credited toward your final invoice.'
      },
      {
        title: 'LED Backlight Strip Replacement',
        detail: 'R650 – R1,450 depending on screen diagonal (32" to 75") and edge-lit vs. direct-lit configuration.'
      },
      {
        title: 'Power Supply Board (SMPS) Repairs',
        detail: 'R550 – R1,250 based on component-level semiconductor repair vs. full modular board replacement.'
      },
      {
        title: 'Main Logic Board Troubleshooting',
        detail: 'R650 – R1,350 for firmware reprogramming, port repairs, or replacement logic modules.'
      }
    ],
    faqs: [
      {
        question: 'How much does TV repair cost in Johannesburg?',
        answer: 'TV repair costs typically range from R550 to R1,450 depending on the screen size, fault type, and parts needed. Our upfront R350 diagnostic call-out fee is 100% credited against your final repair bill upon quote approval.'
      },
      {
        question: 'Do you repair Samsung, LG, and Hisense TVs in Johannesburg?',
        answer: 'Yes! We specialize in all three top South African brands—Samsung, LG, and Hisense—as well as Sony, TCL, and Skyworth. We resolve black screens, backlight failures, clicking relays, and boot loops.'
      },
      {
        question: 'Can you fix a physically cracked or shattered TV screen?',
        answer: 'Unfortunately, no. When the physical LCD/OLED panel matrix is cracked, replacement glass costs 80% to 110% of a brand-new television, making it uneconomical. We repair all internal electronic, backlight, power, and sound faults.'
      },
      {
        question: 'Do you offer same-day TV repair in Johannesburg?',
        answer: 'Yes, same-day repair is available across Johannesburg, Sandton, and Randburg when appointments are booked in the morning and technician dispatch slots are open in your sector.'
      }
    ]
  },

  // 2. Samsung TV Repair Johannesburg
  'samsung-tv-repair-johannesburg': {
    id: 'samsung-tv-repair-johannesburg',
    slug: 'samsung-tv-repair-johannesburg',
    title: 'Samsung TV Repair Johannesburg | QLED, UHD & Smart TVs | MR Gee',
    metaDescription: 'Specialist Samsung TV repair Johannesburg. We fix black screens, clicking red lights, boot loops & backlights on Crystal UHD & QLED. Call 062 351 0025.',
    h1: 'Samsung TV Repair Johannesburg & Gauteng',
    badge: 'Certified Samsung TV Specialist',
    subtitle: 'Expert on-site troubleshooting for Samsung Crystal UHD, QLED, The Frame, Neo QLED, and 4K Smart TV models throughout Johannesburg and Gauteng.',
    intro: [
      'Samsung televisions are the most widely owned home entertainment displays across South Africa, renowned for their vivid Quantum Dot color reproduction, sleek aesthetic design, and intuitive Tizen OS smart interface. However, operating Samsung televisions in Gauteng places unique demands on internal components due to frequent power shedding cycles, severe grid voltage swings, and thermal cycling in highveld climates. When your Samsung screen fails, MR Gee Appliance Repair delivers specialized on-site technical care directly to your doorstep in Johannesburg.',
      'Our senior technician possesses deep working knowledge of Samsung’s proprietary architecture, including BN44 series switch-mode power boards, BN94 digital signal processing motherboards, One Connect boxes, and Samsung direct-lit and edge-lit LED backlight arrays. Instead of leaving you stranded with an unresponsive screen, we arrive equipped to perform precision voltage testing, circuit isolation, and component repair right in your home.',
      'We recognize that having an appliance repaired should never involve stress or hidden fees. We provide a transparent R350 diagnostic call-out inspection that is 100% deducted from your repair bill when you approve our written quotation. Furthermore, all Samsung replacement components and labor are protected by our 6-month written guarantee.'
    ],
    diagnosticsTitle: 'Common Samsung TV Failures We Fix in Johannesburg',
    diagnosticsDesc: 'Specialized diagnostic signatures across Samsung Series 6, 7, 8, Crystal UHD, and QLED models:',
    symptoms: [
      {
        name: 'Samsung TV Clicking On and Off with Red LED Blinking (2-Blink Code)',
        description: 'You press the remote control power button, the internal power relay audibly clicks, the red standby indicator flashes twice in repeated succession, and the television refuses to display picture or sound.',
        likelyCause: 'Blown filtering capacitors, shorted secondary rectification diodes, or failing MOSFETs on the Samsung BN44 power supply board, or a short circuit on the panel driver chips triggering protection mode.',
        repairApproach: 'Remove the back cover, isolate the power supply, test DC voltage rails under simulated load, replace defective electrolytic capacitors with high-temperature low-ESR parts, or replace the entire power board.'
      },
      {
        name: 'Black Screen with Sound on Samsung UHD / Series 7 / Crystal UHD',
        description: 'The TV powers on, the Samsung startup melody or decoder audio is audible, and volume controls respond, but the display remains pitch dark.',
        likelyCause: 'One or more open-circuit LED chips in the backlight string have burned out, breaking the electrical circuit and causing the LED driver to enter automatic shutdown.',
        repairApproach: 'Carefully strip down the optical diffuser sheets and install an exact-spec, factory-matched Samsung aluminum-backed LED backlight set for cool, long-lasting performance.'
      },
      {
        name: 'Samsung TV Stuck in Boot Loop on "Samsung Smart TV" Logo',
        description: 'The television displays the Samsung Smart TV or Tizen logo for 10-15 seconds, abruptly restarts, and repeats this cycle endlessly.',
        likelyCause: 'Corrupted eMMC NAND flash memory partition, failed firmware handshake caused by an abrupt power outage, or micro-cracked solder joints under the main system-on-chip.',
        repairApproach: 'Re-flash Samsung factory firmware via dedicated service diagnostics port or install a replacement programmed Samsung main motherboard.'
      },
      {
        name: 'Dark Horizontal Shadows or Half-Dim Display on Samsung Screen',
        description: 'The top or bottom half of the television screen appears noticeably darker than the rest, or dark horizontal bands run across the picture.',
        likelyCause: 'One bank of the edge-lit or direct-lit backlight array has failed or lost electrical connection from the driver harness.',
        repairApproach: 'Replace the affected backlight bank with OEM-grade strips with matched color temperature (6500K).'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Why Do Samsung LED Backlights Fail in South Africa?',
        paragraphs: [
          'In many Samsung 4K television models (especially Series 7, Series 8, and TU/AU/CU Crystal UHD series), the factory default picture settings configure backlight intensity at 100%. While this delivers stunning brightness in showroom environments, continuous operation at maximum voltage causes the miniature surface-mount LED diodes to run at temperatures exceeding 85°C.',
          'Over several thousand viewing hours, the thermal junction of the LED deteriorates until a single diode burns open or shorts out. Because Samsung backlight strips are wired in series, a single failed diode can extinguish an entire bank. At MR Gee, our technicians not only replace the entire backlight assembly with superior aluminum-core strips, but we also calibrate your TV’s backlight driver current to ensure lasting reliability.'
        ],
        bulletPoints: [
          'High thermal conductivity aluminum backing to keep operating temperatures below 60°C',
          'Complete strip sets replaced rather than individual diodes to prevent uneven luminance',
          'Backlight current limiting adjustments implemented on the power supply to double lifespan',
          'Compatible with Samsung Series 6, 7, 8, Q60, Q70, Q80, The Frame, and Serif models'
        ]
      },
      {
        title: 'Genuine Samsung Motherboard & Power Board Replacements',
        paragraphs: [
          'Unlike generic repair shops that fit second-hand pulled parts of uncertain history, MR Gee uses verified Samsung original assemblies and certified grade-A electronic components. We verify panel voltage matching codes (e.g. 51V, 62V, or 120V backlight rails) before installation to ensure your television operates within exact factory tolerances.'
        ]
      }
    ],
    suburbsTitle: 'Samsung TV Service Coverage in Johannesburg',
    suburbsList: [
      'Sandton', 'Bryanston', 'Rosebank', 'Fourways', 'Randburg', 
      'Northcliff', 'Linden', 'Hyde Park', 'Morningside', 'Midrand', 
      'Sunninghill', 'Rivonia', 'Melrose', 'Parkhurst', 'Houghton',
      'Glenvista', 'Mulbarton', 'Krugersdorp', 'Roodepoort', 'Centurion'
    ],
    brandsHandled: ['Samsung Crystal UHD', 'Samsung Neo QLED', 'Samsung QLED 4K', 'Samsung The Frame', 'Samsung OLED', 'Samsung Series 7/8'],
    costBreakdown: [
      {
        title: 'Samsung Diagnostic Inspection',
        detail: 'R350 flat rate. 100% credited against your final invoice if you proceed with the repair.'
      },
      {
        title: 'Samsung LED Backlight Replacement',
        detail: 'R750 – R1,650 depending on screen size (40" to 75") and edge-lit vs direct-lit series.'
      },
      {
        title: 'Samsung BN44 Power Board Repair',
        detail: 'R650 – R1,350 for capacitor rebuild, diode replacement, or modular board exchange.'
      },
      {
        title: 'Samsung BN94 Main Logic Board',
        detail: 'R850 – R1,550 for firmware restore or complete motherboard replacement.'
      }
    ],
    faqs: [
      {
        question: 'Do you repair Samsung TVs in Johannesburg?',
        answer: 'Yes! We are specialists in Samsung Smart TVs, Crystal UHD, QLED, and LED screens. We repair backlight failure, clicking red standby lights, boot looping, and power faults on-site in Johannesburg.'
      },
      {
        question: 'How much does Samsung TV repair cost?',
        answer: 'Most Samsung TV electronic and backlight repairs range between R650 and R1,650. Our R350 call-out inspection fee is 100% credited toward your repair if you proceed.'
      },
      {
        question: 'Can you fix a cracked Samsung TV screen?',
        answer: 'No. Physically cracked or shattered LCD glass panels cost nearly the price of a brand-new TV to import and replace. We specialize in non-cracked electronic and backlight failures.'
      },
      {
        question: 'Do you offer same-day Samsung TV repair in Johannesburg?',
        answer: 'Yes, same-day repair is available across Johannesburg when booked early in the morning and our technician van schedule has available slots in your suburb.'
      }
    ]
  },

  // 3. LG TV Repair Johannesburg
  'lg-tv-repair-johannesburg': {
    id: 'lg-tv-repair-johannesburg',
    slug: 'lg-tv-repair-johannesburg',
    title: 'LG TV Repair Johannesburg | webOS, NanoCell & OLED | MR Gee',
    metaDescription: 'Specialist LG TV repair Johannesburg. We fix blue/purple tint screens, webOS boot issues, power failure & backlights across Gauteng. Call 062 351 0025.',
    h1: 'LG TV Repair Johannesburg & Gauteng',
    badge: 'Certified LG Television Specialist',
    subtitle: 'Expert on-site diagnostics and electronic repairs for LG UHD 4K, NanoCell, QNED, OLED, and webOS Smart TV displays across Johannesburg and Gauteng.',
    intro: [
      'LG televisions are internationally celebrated for their exceptional IPS display angles, razor-sharp picture processing, and user-friendly webOS smart interface. However, continuous operation over 2 to 4 years frequently exposes known electronic challenges—most notably the notorious purple or blue screen tint, WiFi module communication drops, and switch-mode power failures following load shedding. MR Gee Appliance Repair brings certified LG television diagnostic and repair capabilities directly to your Johannesburg residence.',
      'Our mobile repair technicians understand the intricate engineering of LG television architectures, including LG EAX series power supplies, EBU digital video mainboards, and the sensitive ribbon interconnects governing LG T-Con timing controllers. When your LG television exhibits display or audio abnormalities, you do not need to risk glass breakage by loading it into your vehicle. Our technician comes directly to you with calibrated diagnostic tools and genuine LG replacement parts.',
      'We stand behind every repair with our clear pricing policy: an upfront R350 diagnostic call-out fee that is 100% credited toward the cost of your repair upon quote approval, backed by an unconditional 6-month written warranty on all fitted parts and technician labor.'
    ],
    diagnosticsTitle: 'Typical LG TV Malfunctions We Repair Across Johannesburg',
    diagnosticsDesc: 'Common technical faults identified on LG 4K UHD, NanoCell, and webOS smart systems:',
    symptoms: [
      {
        name: 'Screen Has a Noticeable Purple, Violet, or Blue Color Tint',
        description: 'The entire television display takes on a pronounced blue or violet cast. White backgrounds, movie scenes, and facial skin tones look heavily discolored and cold.',
        likelyCause: 'Phosphor degradation on the LED backlight diodes. Over time, the yellow phosphor coating burns off, exposing the underlying raw ultraviolet/blue LED emission.',
        repairApproach: 'Complete replacement of all LED backlight strips with new, high-grade 6500K pure white LED arrays, restoring natural color reproduction and crisp contrast.'
      },
      {
        name: 'LG TV Sound Plays Normally, But Display Remains Pitch Black',
        description: 'You can hear the TV audio, change volume with the Magic Remote, and navigate menus blindly, but no visual image is displayed on the screen.',
        likelyCause: 'Failed LED backlight array or open-circuit fault in the high-voltage LED driver stage on the LG power supply unit.',
        repairApproach: 'Perform LED strip continuity testing, remove the optical diffuser stack with anti-static handling, and install factory-spec aluminum replacement strips.'
      },
      {
        name: 'LG TV "Wi-Fi is Turned Off" or Magic Remote Loses Pairing',
        description: 'The webOS settings menu displays "Wi-Fi is turned off" and cannot detect wireless networks, or the Magic Remote cursor fails to track across the screen.',
        likelyCause: 'Pinched flat-flex ribbon cables or oxidation on the internal LG WiFi/Bluetooth combo transceiver board located in the bottom bezel assembly.',
        repairApproach: 'Disassemble lower bezel housing, clean and straighten flex ribbon contacts, or replace the internal LG WiFi/BT transceiver module.'
      },
      {
        name: 'LG Standby Light Blinks 3 Times and Shuts Off Without Picture',
        description: 'When switching on from standby, the red power LED blinks 3 times in warning, the screen does not ignite, and the television reverts to sleep mode.',
        likelyCause: 'Secondary voltage output rail failure on the LG power board or a short circuit on the panel timing controller (T-Con) board.',
        repairApproach: 'Probe voltage test points (13.2V, 24V, and PWR-ON lines), replace blown surface-mount components, or swap the power board module.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'The Permanent Solution to LG Purple / Blue Screen Tint',
        paragraphs: [
          'The purple screen phenomenon is one of the most common television faults in South Africa, affecting millions of LG 43", 49", 55", and 65" UHD 4K screens (specifically the UJ, UK, and UM series). Many consumers mistakenly believe their TV panel is ruined or that the television must be replaced. In truth, the LCD glass is 100% fine—the fault lies purely in the deteriorating phosphor coating on the LED backlight strips.',
          'At MR Gee Appliance Repair, we replace every single backlight strip with brand-new, premium aluminum-core LED strips that feature enhanced thermal bonding and upgraded phosphor layers. This completely eliminates the violet cast and restores 100% vivid, true-to-life colors that last for years to come.'
        ],
        bulletPoints: [
          'Pure 6500K daylight-white color balance restored to factory standards',
          'Heavy-gauge aluminum substrate provides superior heat sinking',
          'Individual lens diffusers aligned to eliminate light bleed and hot spots',
          '6-month written warranty covers the entire newly installed backlight array'
        ]
      },
      {
        title: 'LG Power Supply Rebuilding After Highveld Storms',
        paragraphs: [
          'Johannesburg’s frequent summer thunderstorms and power grid surges cause severe stress to LG television primary input circuits. Our technicians are trained to identify sacrificial MOV (metal oxide varistor) surge suppressors, NTC thermistors, and bridge rectifiers that blow to protect the delicate mainboard. We rebuild or replace LG power supplies quickly and affordably.'
        ]
      }
    ],
    suburbsTitle: 'LG Television Repair Coverage Across Johannesburg',
    suburbsList: [
      'Sandton', 'Rosebank', 'Randburg', 'Fourways', 'Bryanston', 
      'Northcliff', 'Linden', 'Melville', 'Hyde Park', 'Morningside',
      'Midrand', 'Sunninghill', 'Rivonia', 'Centurion', 'Pretoria East',
      'Roodepoort', 'Krugersdorp', 'Bedfordview', 'Edenvale', 'Alberton'
    ],
    brandsHandled: ['LG UHD 4K', 'LG NanoCell', 'LG QNED', 'LG webOS Smart Series', 'LG OLED 4K', 'LG Commercial Signage'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat inspection rate, 100% credited toward repair upon quotation approval.'
      },
      {
        title: 'LG Purple Tint Backlight Replacement',
        detail: 'R700 – R1,450 depending on screen size (43", 49", 55", 65", 70").'
      },
      {
        title: 'LG Power Board & Mainboard Repair',
        detail: 'R550 – R1,250 depending on component vs. board swap requirements.'
      },
      {
        title: 'WiFi Module & Magic Remote Interconnect Fix',
        detail: 'R450 – R750 for cable realignment or module replacement.'
      }
    ],
    faqs: [
      {
        question: 'Do you repair LG TVs in Johannesburg?',
        answer: 'Yes! We specialize in LG webOS Smart TVs, NanoCell, and 4K UHD screens across Johannesburg, fixing purple tint, backlight failures, power problems, and WiFi issues on-site.'
      },
      {
        question: 'Why has my LG TV screen turned blue or purple?',
        answer: 'The phosphor coating on the factory LED backlight diodes has deteriorated over time, exposing raw blue/UV light. We resolve this completely by fitting brand-new pure white aluminum LED backlight strips.'
      },
      {
        question: 'How much does LG TV repair cost?',
        answer: 'LG repairs typically cost between R550 and R1,450 depending on screen size and parts required. Our R350 call-out inspection is 100% credited toward your approved repair.'
      },
      {
        question: 'Do you offer same-day LG TV repair?',
        answer: 'Yes, same-day repair is available across Johannesburg when booked in the morning and our dispatch van schedule permits.'
      }
    ]
  },

  // 4. Hisense TV Repair Johannesburg
  'hisense-tv-repair-johannesburg': {
    id: 'hisense-tv-repair-johannesburg',
    slug: 'hisense-tv-repair-johannesburg',
    title: 'Hisense TV Repair Johannesburg | VIDAA & Android 4K | MR Gee',
    metaDescription: 'Specialist Hisense TV repair Johannesburg. We resolve boot loops, red light clicking, backlight failure & power faults across Gauteng. Call 062 351 0025.',
    h1: 'Hisense TV Repair Johannesburg & Gauteng',
    badge: 'Certified Hisense TV Specialist',
    subtitle: 'Expert on-site troubleshooting for Hisense VIDAA OS, Android TV, ULED, and 4K Smart TV models throughout Johannesburg and Gauteng.',
    intro: [
      'Hisense televisions enjoy massive popularity across South African households due to their outstanding feature set, competitive pricing, and crisp 4K picture quality powered by VIDAA OS and Android TV systems. As one of the most common television brands installed in Johannesburg homes, Hisense units are also among the most frequently exposed to regional electrical grid fluctuations, sudden load shedding cutoffs, and component thermal degradation. MR Gee Appliance Repair provides dedicated on-site Hisense TV repair services across Johannesburg.',
      'Our senior electronics technician has extensive diagnostic experience with Hisense RSAG series power supply modules, combo mainboards, and direct-lit LED arrays. Whether your television is stuck cycling on the Hisense startup screen, producing sound without an image, or clicking continuously without booting, our mobile team carries the precise diagnostic tools and replacement parts required to resolve the issue on-site.',
      'We believe in fair, transparent, and honest service. Our R350 diagnostic call-out fee is 100% credited against your final invoice if you proceed with the repair. Furthermore, every Hisense backlight replacement, power board overhaul, and electronic repair is protected by our written 6-month warranty on parts and labor.'
    ],
    diagnosticsTitle: 'Common Hisense TV Faults We Diagnose & Fix',
    diagnosticsDesc: 'Common symptom signatures on Hisense Series 6, 7, 8, ULED, and VIDAA smart televisions:',
    symptoms: [
      {
        name: 'Hisense TV Stuck on "Hisense" Boot Logo (Boot Loop)',
        description: 'The green or white Hisense logo appears on screen, stays visible for 15 to 30 seconds, shuts down, and repeats endlessly without loading VIDAA or Android OS.',
        likelyCause: 'Corrupted eMMC firmware partition caused by sudden power cuts during automatic background system updates, or defective BGA memory chips.',
        repairApproach: 'Perform factory USB firmware restoration, ISP eMMC programming, or replace the main processing logic motherboard with a pre-flashed replacement.'
      },
      {
        name: 'Sound Is Working, But Screen Is Completely Black on Hisense TV',
        description: 'You can hear television audio from streaming services or decoders and adjust the volume, but the picture is black or only faintly visible with a flashlight.',
        likelyCause: 'Burned-out series LED backlight strips or failed constant-current LED driver circuits on the Hisense power supply board.',
        repairApproach: 'Full disassembly and replacement of the entire LED backlight array with high-performance aluminum-backed strips for superior heat cooling.'
      },
      {
        name: 'Red Standby Light Blinking Rapidly, TV Won\'t Turn On',
        description: 'The front standby LED flashes continuously in an error code sequence, but the display remains completely inactive.',
        likelyCause: 'Voltage rail failure in the Hisense RSAG power supply or short-circuited filter capacitors in the secondary DC output stage.',
        repairApproach: 'Bench-test voltage rails, replace failed capacitors with heavy-duty 105°C low-ESR parts, or install a replacement power board.'
      },
      {
        name: 'Hisense Remote Control Unresponsive / TV Freezes Randomly',
        description: 'The television ignores remote control commands or freezes completely during video playback, requiring a wall plug reset.',
        likelyCause: 'Faulty IR receiver sensor board, corrupted system cache, or overheating system-on-chip.',
        repairApproach: 'Inspect and replace the front IR sensor module or upgrade system firmware.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Resolving Hisense VIDAA Boot Loop & Firmware Corruption',
        paragraphs: [
          'One of the most widespread issues encountered on Hisense televisions across Johannesburg is the VIDAA boot loop. Because smart televisions continuously write system cache data to their internal eMMC flash storage, a sudden power interruption—such as an abrupt load shedding blackout—can corrupt the boot sector while data is being committed.',
          'Many inexperienced technicians mistakenly claim the TV screen is dead and suggest buying a new television. At MR Gee, our technician connects diagnostic hardware directly to the mainboard service headers to re-flash the verified Hisense factory firmware package matching your specific panel revision code, bringing your television back to life at a fraction of replacement cost.'
        ],
        bulletPoints: [
          'Factory Hisense firmware flashing tailored to exact South African panel revisions',
          'Diagnostic test headers probed to verify CPU and eMMC voltage rails',
          'Saves hundreds of rands compared to buying an unnecessary new television',
          'Backed by our 6-month written warranty on all electronic services'
        ]
      },
      {
        title: 'Heavy-Duty Backlight Upgrades for Hisense 4K TVs',
        paragraphs: [
          'Factory Hisense backlight strips in entry-level 4K models frequently utilize fiberglass backing, which traps heat and leads to diode burnout within 2 to 3 years. When MR Gee replaces your backlights, we exclusively install upgraded aluminum-core strips. Aluminum conducts heat away from the sensitive LED junctions rapidly, ensuring your new backlights last significantly longer.'
        ]
      }
    ],
    suburbsTitle: 'Hisense TV Service Areas Across Johannesburg & Gauteng',
    suburbsList: [
      'Johannesburg North & Central', 'Sandton', 'Randburg', 'Fourways', 
      'Roodepoort', 'Krugersdorp', 'Centurion', 'Pretoria', 'Midrand', 
      'Bedfordview', 'Edenvale', 'Kempton Park', 'Alberton', 'Soweto',
      'Glenvista', 'Noordheuwel', 'Constantia Kloof', 'Bryanston'
    ],
    brandsHandled: ['Hisense ULED 4K', 'Hisense VIDAA Smart TV', 'Hisense Android TV', 'Hisense Laser TV', 'Hisense A6 / A7 Series'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited against your final invoice if you proceed with the repair.'
      },
      {
        title: 'Hisense Backlight Strip Replacement',
        detail: 'R650 – R1,350 depending on screen diagonal (32" to 70") and strip count.'
      },
      {
        title: 'Hisense RSAG Power Supply Repair',
        detail: 'R550 – R1,150 for capacitor rebuild, MOSFET repair, or modular swap.'
      },
      {
        title: 'Firmware Recovery / Mainboard Service',
        detail: 'R600 – R1,250 for boot-loop firmware reprogramming or board exchange.'
      }
    ],
    faqs: [
      {
        question: 'Do you repair Hisense TVs in Johannesburg?',
        answer: 'Yes! We specialize in Hisense VIDAA OS, Android Smart TV, and ULED 4K televisions across Johannesburg, fixing boot loops, black screens, backlights, and power board failures on-site.'
      },
      {
        question: 'How much does Hisense TV repair cost?',
        answer: 'Hisense repairs typically range from R550 to R1,350 depending on screen size and parts required. Our R350 call-out inspection fee is 100% credited toward your repair upon quote approval.'
      },
      {
        question: 'Why is my Hisense TV stuck on the logo screen?',
        answer: 'This is usually caused by firmware corruption in the internal eMMC memory due to sudden power cuts or load shedding. We re-flash genuine Hisense firmware to restore full functionality.'
      },
      {
        question: 'Do you offer same-day Hisense TV repair?',
        answer: 'Yes, same-day repair is available in Johannesburg when you book in the morning and our technician van schedule has open slots.'
      }
    ]
  },

  // 5. Appliance Repair Johannesburg
  'appliance-repair-johannesburg': {
    id: 'appliance-repair-johannesburg',
    slug: 'appliance-repair-johannesburg',
    title: 'Appliance Repair Johannesburg | Fridges, Washing Machines & Stoves',
    metaDescription: 'Trusted appliance repair Johannesburg. On-site repairs for fridges, washing machines, stoves, ovens & TVs across Sandton, Randburg & Joburg. Call 062 351 0025.',
    h1: 'Appliance Repair Johannesburg & Surrounding Suburbs',
    badge: 'Johannesburg Appliance Specialist',
    subtitle: 'Comprehensive on-site diagnostics and professional repairs for domestic and commercial appliances across Johannesburg, Sandton, Randburg, and surrounding areas.',
    intro: [
      'Household appliances are the functional backbone of every modern Johannesburg home. When a refrigerator stops cooling, a washing machine floods your scullery, or an electric oven fails just before dinner, daily living is thrown into chaos. Transporting heavy appliances across Johannesburg traffic is nearly impossible and risks damaging your cabinetry and floors. At MR Gee Appliance Repair, we bring professional, certified mobile repair services directly to your home.',
      'With over 15 years of technical experience in domestic and commercial refrigeration, laundry equipment, electric cooking appliances, and electronics, our senior technician is equipped to diagnose and repair your machines on-site. We carry specialized diagnostic meters, refrigeration manifolds, genuine spare parts, and factory-standard testing gear in our mobile service vans.',
      'We operate with complete honesty and upfront transparency. Our R350 diagnostic call-out fee is 100% credited toward your repair invoice upon quotation acceptance. Every repair is backed by our 6-month written warranty on all fitted parts and technician labor, ensuring total peace of mind for you and your family.'
    ],
    diagnosticsTitle: 'Appliances We Diagnose & Repair Across Johannesburg',
    diagnosticsDesc: 'Expert on-site troubleshooting for all major domestic and commercial appliance categories:',
    symptoms: [
      {
        name: 'Refrigerator Not Cooling / Freezer Over-Freezing',
        description: 'The freezer compartment accumulates thick frost and ice while the refrigerator section below remains warm, or the compressor clicks every few minutes without starting.',
        likelyCause: 'Failed defrost heating element, broken bimetal defrost thermostat, faulty electronic defrost timer, or defective compressor starter PTC relay.',
        repairApproach: 'Test defrost heater resistance, inspect sensor continuity, replace defective defrost components, or fit a new heavy-duty compressor start relay.'
      },
      {
        name: 'Washing Machine Won\'t Drain or Spin (Error Codes E20, OE, 5E)',
        description: 'Water remains standing in the drum at the end of the wash cycle, or the machine makes a loud grinding noise during high-speed spin without extracting water.',
        likelyCause: 'Foreign object obstruction in the drain pump impeller (coins, hairpins), worn pump motor windings, or worn drum bearings.',
        repairApproach: 'Clear the drain pump assembly, test pump motor electrical resistance, replace failed drain pumps, or rebuild drum bearing and shaft seals.'
      },
      {
        name: 'Electric Oven Not Heating / Burning Food Unevenly',
        description: 'The oven bake element does not glow red, the fan runs but blows cool air, or the thermostat fails to maintain temperature.',
        likelyCause: 'Burnt-out bottom or top bake heating element, failed thermofan circular element, or defective multi-position selector switch.',
        repairApproach: 'Perform continuity and resistance testing on heating elements, replace burned elements with factory-spec parts, and calibrate the thermostat.'
      },
      {
        name: 'Microwave Running But Not Heating Food',
        description: 'The turntable rotates and the light illuminates, but food remains completely cold after several minutes of operation.',
        likelyCause: 'Shorted high-voltage diode, blown high-voltage ceramic fuse, or open-circuit magnetron filament.',
        repairApproach: 'Safely discharge high-voltage capacitor, test high-voltage components with specialized meters, and replace defective magnetron or diode.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Why Johannesburg Residents Trust MR Gee for Appliance Repairs',
        paragraphs: [
          'Unlike referral agencies that subcontract work to untested third parties, MR Gee is an owner-operated local business with over 15 years of hands-on technical experience. When you book an appointment, a vetted, skilled technician arrives at your door with the proper tools and genuine replacement parts.',
          'We service all leading South African and international appliance brands, including Defy, Samsung, LG, Bosch, Whirlpool, KIC, Smeg, AEG, Hisense, and Kelvinator. We take the time to explain the root cause of the failure and show you the worn part before completing the repair.'
        ],
        bulletPoints: [
          'Mobile vans stocked with fast-moving genuine spare parts for same-day completion',
          'R350 diagnostic call-out fee is 100% credited against your final repair invoice',
          'Comprehensive 6-month written guarantee on both parts and technician labor',
          'Proudly serving residential homes, rental properties, and commercial kitchens'
        ]
      },
      {
        title: 'Preventative Maintenance Advice for Johannesburg Appliances',
        paragraphs: [
          'Gauteng water hardness and erratic electrical supplies place severe strain on domestic appliances. We recommend regularly descaling washing machine drums and checking refrigerator condenser coils behind the unit every 6 months to ensure proper airflow and prevent compressor overheating.'
        ]
      }
    ],
    suburbsTitle: 'Johannesburg Suburbs We Service On-Site',
    suburbsList: [
      'Sandton', 'Rosebank', 'Randburg', 'Bryanston', 'Fourways', 
      'Northcliff', 'Melville', 'Linden', 'Hyde Park', 'Morningside',
      'Braamfontein', 'Glenvista', 'Mulbarton', 'Oakdene', 'Johannesburg South',
      'Parkhurst', 'Greenside', 'Rivonia', 'Sunninghill', 'Midrand',
      'Woodmead', 'Douglasdale', 'Paulshof', 'Kyalami', 'Lonehill'
    ],
    brandsHandled: ['Defy', 'Samsung', 'LG', 'Bosch', 'Whirlpool', 'KIC', 'Hisense', 'AEG', 'Smeg', 'Kelvinator'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited toward your repair invoice upon quotation acceptance.'
      },
      {
        title: 'Washing Machine Repair',
        detail: 'R450 – R1,250 depending on fault (pump, door seal, motor brushes, or bearings).'
      },
      {
        title: 'Fridge & Freezer Repair',
        detail: 'R550 – R1,450 depending on defrost sensors, fan motors, thermostat, or regassing.'
      },
      {
        title: 'Oven & Stove Repair',
        detail: 'R450 – R1,150 for bake elements, thermofan elements, or selector switches.'
      }
    ],
    faqs: [
      {
        question: 'What areas do you service for appliance repair in Johannesburg?',
        answer: 'We provide mobile on-site repairs across Johannesburg, Sandton, Randburg, Fourways, Bryanston, Northcliff, Midrand, and Johannesburg South.'
      },
      {
        question: 'How much does appliance repair cost in Johannesburg?',
        answer: 'Appliance repairs typically range from R450 to R1,450 depending on the appliance type and parts needed. Our R350 call-out fee is 100% credited toward your repair upon quote approval.'
      },
      {
        question: 'Do you offer same-day appliance repair?',
        answer: 'Yes, same-day repair is available across Johannesburg when you book in the morning and our mobile technician schedule permits.'
      },
      {
        question: 'Do your repairs include a warranty?',
        answer: 'Yes, every repair completed by MR Gee includes an unconditional 6-month written warranty on both installed replacement parts and technician labor.'
      }
    ]
  },

  // 6. Appliance Repair Roodepoort
  'appliance-repair-roodepoort': {
    id: 'appliance-repair-roodepoort',
    slug: 'appliance-repair-roodepoort',
    title: 'Appliance Repair Roodepoort | Fridges, Washing Machines & TVs',
    metaDescription: 'Trusted appliance repair Roodepoort. On-site repairs for fridges, washing machines, stoves & TVs across Florida, Helderkruin & Little Falls. Call 062 351 0025.',
    h1: 'Appliance Repair Roodepoort & West Rand Services',
    badge: 'Roodepoort Local Appliance Specialist',
    subtitle: 'Fast on-site diagnostics and professional repairs for washing machines, fridges, TVs, stoves, and microwaves across Roodepoort and the greater West Rand.',
    intro: [
      'Roodepoort is one of the West Rand’s most established residential and commercial hubs, encompassing thriving family neighborhoods from Florida and Constantia Kloof to Ruimsig and Little Falls. When an essential appliance breaks down in your home, dealing with spoiled food or piles of unwashed laundry causes immediate disruption. Transporting bulky appliances to distant industrial centers is costly and inconvenient. MR Gee Appliance Repair brings expert, fully equipped mobile repair technicians directly to your Roodepoort residence.',
      'Our technician has over 15 years of specialized field experience diagnosing and repairing domestic and commercial appliances. Whether your front-loader washing machine is refusing to drain, your Defy refrigerator is failing to chill, your smart TV is clicking continuously, or your electric oven bake element has burned out, our mobile van arrives with the diagnostic equipment and genuine spare parts needed to resolve the fault on-site.',
      'We take pride in building lasting relationships with Roodepoort homeowners and property managers. With our honest R350 diagnostic inspection fee—which is 100% credited toward your repair invoice upon quotation acceptance—and our unconditional 6-month written guarantee on all parts and labor, you can trust MR Gee for dependable, cost-effective service.'
    ],
    diagnosticsTitle: 'Common Appliance Issues We Solve in Roodepoort',
    diagnosticsDesc: 'On-site troubleshooting and component restoration for domestic and commercial appliances:',
    symptoms: [
      {
        name: 'Washing Machine Leaking Water or Making Loud Grinding Noises',
        description: 'Water pools beneath the machine during the fill or wash cycle, or a deafening roar resembling a jet engine occurs during the final high-speed spin cycle.',
        likelyCause: 'Torn door boot gasket seal, split drain hose, or worn drum shaft bearings and water seals.',
        repairApproach: 'Inspect and replace damaged door gaskets, replace drain hoses, or fit heavy-duty German-manufactured drum bearings with new water lip seals.'
      },
      {
        name: 'Fridge Freezer Cold But Refrigerator Section Warm',
        description: 'Frozen items in the freezer remain solid, but dairy, milk, and vegetables in the refrigerator compartment spoil quickly due to lack of cooling airflow.',
        likelyCause: 'Frost blockage over evaporator coil caused by a burned-out defrost heater element, failed bimetal thermostat, or broken evaporator fan motor.',
        repairApproach: 'Perform electrical resistance tests on the defrost heater circuit, replace failed thermal fuses or bimetal sensors, and verify airflow circulation.'
      },
      {
        name: 'Smart TV Screen Pitch Black While Sound Works',
        description: 'The television plays audio from your decoder or streaming app, but the screen is pitch dark.',
        likelyCause: 'Burned-out series LED backlight strips or open-circuit LED driver circuitry.',
        repairApproach: 'Carefully strip the display and install a complete set of factory-spec aluminum-core LED backlight strips for cool, reliable performance.'
      },
      {
        name: 'Stove Plate or Oven Bake Element Not Heating Up',
        description: 'Turn the stove knob or oven temperature dial, but the plate or element remains cold and no heat is generated.',
        likelyCause: 'Burned internal heating resistance wire, broken terminal spade connector, or burned rotary selector switch contacts.',
        repairApproach: 'Test element resistance with a multimeter, replace defective heating elements with genuine OEM parts, and replace worn selector switches.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Rapid Mobile Service Across All Roodepoort Suburbs',
        paragraphs: [
          'Because our mobile service vans operate daily across Ontdekkers Road, Hendrik Potgieter Road, and Christiaan de Wet Road, we can frequently provide same-day or next-day service to Roodepoort residents. Our vans are organized with specialized toolkits and commonly required spare parts for Defy, Samsung, LG, Whirlpool, Bosch, and KIC appliances.',
          'We respect your home: our technicians work cleanly, protect your floor surfaces with drop cloths, and test the repaired appliance thoroughly in your presence before issuing your invoice and 6-month written guarantee.'
        ],
        bulletPoints: [
          'Mobile vans stationed strategically across the West Rand for rapid call-out dispatch',
          'R350 call-out fee is 100% credited against your final repair invoice',
          '6-month written warranty on all installed replacement parts and technician labor',
          'Full safety check of electrical connections, drain hoses, and power plugs'
        ]
      },
      {
        title: 'Commercial Appliance Repair for Roodepoort Businesses',
        paragraphs: [
          'In addition to domestic residences, MR Gee services commercial refrigeration, under-counter bottle coolers, ice machines, and commercial catering ovens for restaurants, butcheries, and guest houses throughout Roodepoort.'
        ]
      }
    ],
    suburbsTitle: 'Roodepoort Suburbs We Service On-Site',
    suburbsList: [
      'Florida', 'Florida Hills', 'Florida Park', 'Constantia Kloof', 
      'Helderkruin', 'Weltevredenpark', 'Wilgeheuwel', 'Little Falls', 
      'Ruimsig', 'Horizon View', 'Discovery', 'Roodepoort West', 
      'Strubens Valley', 'Allens Nek', 'Radiokop', 'Honeydew', 
      'Roodekrans', 'Poortview', 'Princess', 'Groblerpark'
    ],
    brandsHandled: ['Defy', 'Samsung', 'LG', 'Bosch', 'Whirlpool', 'KIC', 'Hisense', 'AEG', 'Smeg', 'Kelvinator'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited toward your final repair invoice upon quote acceptance.'
      },
      {
        title: 'Washing Machine Repairs',
        detail: 'R450 – R1,250 depending on fault (pump, door seal, motor, or bearings).'
      },
      {
        title: 'Fridge & Freezer Repairs',
        detail: 'R550 – R1,450 for defrost elements, sensors, thermostat, fan, or regassing.'
      },
      {
        title: 'TV Repair in Roodepoort',
        detail: 'R550 – R1,450 for LED backlight strips, power boards, or mainboard repairs.'
      }
    ],
    faqs: [
      {
        question: 'Do you offer appliance repair in Roodepoort?',
        answer: 'Yes! We provide on-site appliance repair throughout Roodepoort including Florida, Constantia Kloof, Helderkruin, Weltevredenpark, Wilgeheuwel, Little Falls, and Ruimsig.'
      },
      {
        question: 'How much does appliance repair cost in Roodepoort?',
        answer: 'Repairs typically range from R450 to R1,450 depending on parts and labor. Our R350 diagnostic call-out fee is 100% credited against your repair upon quote approval.'
      },
      {
        question: 'Do you offer same-day service in Roodepoort?',
        answer: 'Yes, same-day service is available when appointments are booked in the morning and our West Rand van schedule permits.'
      },
      {
        question: 'Do you repair TVs in Roodepoort?',
        answer: 'Yes! We repair Samsung, LG, Hisense, and all Smart/LED TVs on-site in Roodepoort, including black screens and backlight replacements.'
      }
    ]
  },

  // 7. Appliance Repair Krugersdorp
  'appliance-repair-krugersdorp': {
    id: 'appliance-repair-krugersdorp',
    slug: 'appliance-repair-krugersdorp',
    title: 'Appliance Repair Krugersdorp | Fridges, Washing Machines & TVs',
    metaDescription: 'Trusted appliance repair Krugersdorp. Fast on-site repairs for fridges, washing machines, stoves & TVs across Monument, Kenmare & Noordheuwel. Call 062 351 0025.',
    h1: 'Appliance Repair Krugersdorp & Mogale City Services',
    badge: 'Krugersdorp Local Appliance Specialist',
    subtitle: 'Professional on-site diagnostics and precision repairs for refrigerators, washing machines, smart TVs, stoves, and microwaves across Krugersdorp and Mogale City.',
    intro: [
      'Krugersdorp and the broader Mogale City municipality represent a vibrant community of family homes, agricultural holdings, and commercial enterprises. When an essential household appliance malfunctions, finding a reliable local repair technician who shows up on time with the right spare parts can be challenging. Hauling large refrigerators or delicate smart televisions to repair workshops across the West Rand is inconvenient and risky. MR Gee Appliance Repair brings fully equipped mobile repair service directly to your Krugersdorp premises.',
      'Our technician has more than 15 years of specialized field experience diagnosing and repairing all domestic and commercial appliance brands. From Defy refrigerators and Bosch front-loaders to Samsung smart TVs and commercial cold rooms, our mobile van carries calibrated diagnostic equipment, specialized refrigeration tools, and genuine spare parts to complete most repairs right on-site.',
      'We believe in straightforward, transparent pricing and total customer satisfaction. Our R350 diagnostic call-out fee is 100% credited against your repair total upon quotation approval. Furthermore, every repair completed by MR Gee is backed by our comprehensive 6-month written warranty on both installed replacement parts and technician labor.'
    ],
    diagnosticsTitle: 'Common Appliance & TV Faults We Resolve in Krugersdorp',
    diagnosticsDesc: 'On-site diagnostics and lasting repairs for domestic and commercial appliances:',
    symptoms: [
      {
        name: 'Fridge Compressor Clicking Every 3 Minutes Without Starting',
        description: 'The refrigerator compressor attempts to start, makes a sharp clicking sound, vibrates briefly, and shuts off, causing the fridge and freezer to warm up.',
        likelyCause: 'Burnt PTC solid-state starter relay, failed run capacitor, or compressor motor winding overload.',
        repairApproach: 'Test motor windings for proper resistance, replace burned PTC start relays with heavy-duty components, or install hard-start kits where necessary.'
      },
      {
        name: 'Washing Machine Not Spinning or Agitating (Error Codes)',
        description: 'The machine fills with water and drains, but the drum remains stationary during wash or spin cycles, accompanied by a faint humming noise.',
        likelyCause: 'Worn carbon motor brushes, broken drive belt, seized drum bearing, or failed electronic motor inverter board.',
        repairApproach: 'Inspect and replace carbon brushes, fit new ribbed drive belts, or test motor inverter board voltages.'
      },
      {
        name: 'Smart TV Screen Dark With Sound Playing (Backlight Failure)',
        description: 'You can hear television audio clearly, but the screen is pitch black or displays a faint ghost image when illuminated by a flashlight.',
        likelyCause: 'Burned-out series LED backlight strips or open-circuit failure in the LED driver circuit.',
        repairApproach: 'Disassemble display and replace full backlight array with factory-spec aluminum-backed LED strips.'
      },
      {
        name: 'Oven Fan Running But Air Stays Cold',
        description: 'The oven thermofan runs and light turns on, but no heat is produced inside the cooking cavity.',
        likelyCause: 'Burned-out circular thermofan heating element or failed oven safety thermostat.',
        repairApproach: 'Perform electrical continuity testing on the circular element, replace burned elements, and verify safety thermostat operation.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Dedicated Local Coverage Across Krugersdorp & Mogale City',
        paragraphs: [
          'Our mobile repair technicians regularly dispatch across Robert Broom Drive, Paardekraal Drive, and Voortrekker Road, allowing us to offer prompt same-day or next-day service across Monument, Noordheuwel, Kenmare, Rangeview, and surrounding neighborhoods.',
          'We carry manufacturer-approved replacement components for South Africa’s most popular brands, including Defy, Samsung, LG, KIC, Whirlpool, and Bosch. We complete over 85% of repairs during our initial visit.'
        ],
        bulletPoints: [
          'Prompt mobile van dispatch across all Mogale City residential and commercial sectors',
          'R350 diagnostic call-out fee is 100% credited toward your final repair invoice',
          '6-month written guarantee covers all installed replacement parts and technician labor',
          'Specialist on-site repair for domestic appliances, smart TVs, and commercial chillers'
        ]
      },
      {
        title: 'Farm & Commercial Cold Storage Repairs in Krugersdorp',
        paragraphs: [
          'For Krugersdorp agricultural holdings, butcheries, and restaurants, MR Gee provides mobile repairs on commercial cold rooms, walk-in freezers, display chillers, and ice machines with emergency priority response.'
        ]
      }
    ],
    suburbsTitle: 'Krugersdorp Suburbs We Service On-Site',
    suburbsList: [
      'Monument', 'Kenmare', 'Noordheuwel', 'Rangeview', 'Kagiso', 
      'Chamdor', 'Krugersdorp West', 'Krugersdorp North', 'Silverfields', 
      'Breaunanda', 'Chancliff', 'Rant-en-Dal', 'Dan Pienaarville', 
      'Mindalore', 'Wentworth Park', 'Factoria', 'Tarlton', 'Hekpoort'
    ],
    brandsHandled: ['Defy', 'Samsung', 'LG', 'Bosch', 'Whirlpool', 'KIC', 'Hisense', 'AEG', 'Smeg', 'Kelvinator'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited toward your repair invoice upon quotation acceptance.'
      },
      {
        title: 'Washing Machine Repairs',
        detail: 'R450 – R1,250 depending on fault (pumps, belts, motor brushes, or bearings).'
      },
      {
        title: 'Fridge & Freezer Repairs',
        detail: 'R550 – R1,450 for defrost elements, thermostats, relays, fan motors, or regassing.'
      },
      {
        title: 'TV Repair Krugersdorp',
        detail: 'R550 – R1,450 for LED backlight strips, power boards, or mainboard repairs.'
      }
    ],
    faqs: [
      {
        question: 'Do you offer appliance repair in Krugersdorp?',
        answer: 'Yes! We provide on-site appliance repair throughout Krugersdorp and Mogale City, including Monument, Kenmare, Noordheuwel, Rangeview, Kagiso, Chamdor, and Chancliff.'
      },
      {
        question: 'How much does appliance repair cost in Krugersdorp?',
        answer: 'Repairs typically range from R450 to R1,450 depending on the parts needed. Our R350 call-out inspection fee is 100% credited toward your repair upon quote approval.'
      },
      {
        question: 'Do you offer same-day service in Krugersdorp?',
        answer: 'Yes, same-day service is available when appointments are booked early in the day and technician schedule slots permit.'
      },
      {
        question: 'Do you repair TVs in Krugersdorp?',
        answer: 'Yes! We repair Samsung, LG, Hisense, and all Smart/LED TVs on-site in Krugersdorp, including backlight replacements and power supply repairs.'
      }
    ]
  },

  // 8. Fridge Repair Johannesburg
  'fridge-repair-johannesburg': {
    id: 'fridge-repair-johannesburg',
    slug: 'fridge-repair-johannesburg',
    title: 'Fridge Repair Johannesburg | Regassing, Compressors & Defrost | MR Gee',
    metaDescription: 'Specialist fridge repair Johannesburg. On-site regassing, compressor repairs, defrost heaters & thermostats across Sandton, Randburg & Joburg. Call 062 351 0025.',
    h1: 'Fridge Repair Johannesburg & Mobile Refrigeration Services',
    badge: 'Johannesburg Refrigeration Specialist',
    subtitle: 'Professional on-site diagnostics, nitrogen leak testing, certified regassing, compressor repairs, and defrost servicing for domestic and commercial refrigerators across Johannesburg.',
    intro: [
      'A malfunctioning refrigerator creates an immediate domestic crisis. Within hours of a cooling breakdown, hundreds or thousands of rands worth of fresh meat, dairy, produce, and medications begin to spoil. Hauling a heavy 100kg refrigerator down staircases and across Johannesburg roads risks irreversible damage to the compressor mounting springs, internal refrigerant copper tubing, and residential flooring. MR Gee Appliance Repair brings certified mobile refrigeration technicians directly to your Johannesburg residence.',
      'Our technician has over 15 years of specialized field experience repairing domestic frost-free refrigerators, double-door side-by-side units, French-door models, chest freezers, and commercial cold rooms. We carry digital manifold gauges, nitrogen pressure testing tanks, high-vacuum pumps, electronic leak detectors, and certified R134a and R600a eco-friendly refrigerants directly in our service vans.',
      'We believe in total transparency. With our straightforward R350 diagnostic call-out fee—which is 100% credited toward your repair invoice upon quotation approval—you will never be surprised by unexpected hidden costs. Furthermore, every refrigerator repair, compressor installation, defrost component swap, and regassing service is protected by our written 6-month warranty on parts and labor.'
    ],
    diagnosticsTitle: 'Common Refrigerator & Freezer Faults We Repair in Johannesburg',
    diagnosticsDesc: 'Comprehensive on-site troubleshooting for all domestic and commercial cooling systems:',
    symptoms: [
      {
        name: 'Freezer Is Freezing Solid, But Refrigerator Section Is Warm',
        description: 'Ice cream and meat in the freezer remain frozen, but milk, vegetables, and drinks in the fresh food compartment below spoil quickly due to lack of cold airflow.',
        likelyCause: 'Frost-free defrost system failure. The evaporator coils behind the freezer panel are choked with solid ice because the defrost heater, bimetal defrost thermostat, or electronic defrost timer has failed.',
        repairApproach: 'Manually defrost the evaporator coils, test defrost heater element resistance, test bimetal sensor continuity, replace defective components with OEM parts, and verify timer advance cycle.'
      },
      {
        name: 'Compressor Clicks Every 3 Minutes and Shuts Off Without Cooling',
        description: 'An audible click comes from the back of the fridge, the compressor vibrates for 3 to 5 seconds, gets extremely hot, clicks again, and shuts down while the interior stays warm.',
        likelyCause: 'Burnt solid-state PTC compressor starter relay, failed run capacitor, or seized compressor piston motor.',
        repairApproach: 'Disconnect power, remove the compressor electrical terminal cover, test winding resistance (Common, Start, Run), replace burnt PTC starter relays, or install a hard-start capacitor kit.'
      },
      {
        name: 'Fridge Running Continuously But Barely Chilling (Gas Leak)',
        description: 'The compressor runs nonstop 24 hours a day without cycling off, but both the freezer and fridge sections remain barely cool to the touch.',
        likelyCause: 'Micro-leak in the sealed copper/aluminum refrigeration circuit causing loss of refrigerant gas charge.',
        repairApproach: 'Install a sealed access valve, perform high-pressure nitrogen leak detection, braze and seal the leak point, vacuum the circuit to under 500 microns, and recharge exact factory refrigerant weight (R134a or R600a).'
      },
      {
        name: 'Water Leaking on the Floor Beneath the Vegetable Crisper Drawers',
        description: 'Clean water pools inside the bottom of the fridge under the crisper boxes or leaks out across the kitchen floor during defrost cycles.',
        likelyCause: 'Blocked or frozen defrost condensate drain trough and drain tube preventing melted defrost water from draining to the compressor evaporation tray.',
        repairApproach: 'Clear the drain hole using high-pressure steam flushing, inspect drain trap grommet, and ensure proper drainage slope.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Certified R600a and R134a Refrigerant Regassing Standards',
        paragraphs: [
          'Modern domestic refrigerators across South Africa predominantly utilize R600a (isobutane) refrigerant. Because R600a operates under vacuum pressures and is flammable, servicing it requires specialized safety equipment, vacuum pumps, and electronic gram-precision charging scales.',
          'Many untrained handymen simply pump gas into a leaking system without finding the leak or pulling a proper deep vacuum, resulting in contaminated oil, moisture freeze-ups in the capillary tube, and compressor motor burnout within weeks. At MR Gee, our technicians perform full nitrogen pressure testing, leak rectification, deep vacuum evacuation, and exact gram-accurate digital charging to factory specifications.'
        ],
        bulletPoints: [
          'Digital electronic scale charging accurate to within 2 grams of factory data plate specs',
          'Nitrogen pressure testing up to 15 bar to locate hidden pinhole micro-leaks',
          'High-vacuum dual-stage pump degassing to eliminate moisture and non-condensables',
          'Supported brands: Defy, Samsung, LG, KIC, Bosch, Whirlpool, Hisense, Smeg, Kelvinator'
        ]
      },
      {
        title: 'Inverter Compressor vs. Conventional Compressor Troubleshooting',
        paragraphs: [
          'Contemporary refrigerators from Samsung and LG feature Digital Inverter compressors that vary speed based on cooling demand. Our technicians test the 3-phase AC voltage outputs from the inverter control board to determine whether the fault lies in the electronic control board or the compressor itself, preventing expensive misdiagnoses.'
        ]
      }
    ],
    suburbsTitle: 'Johannesburg Suburbs We Service for Fridge Repairs',
    suburbsList: [
      'Sandton', 'Rosebank', 'Randburg', 'Bryanston', 'Fourways', 
      'Northcliff', 'Melville', 'Linden', 'Hyde Park', 'Morningside',
      'Braamfontein', 'Glenvista', 'Mulbarton', 'Oakdene', 'Johannesburg South',
      'Parkhurst', 'Greenside', 'Rivonia', 'Sunninghill', 'Midrand',
      'Roodepoort', 'Krugersdorp', 'Centurion', 'Pretoria', 'East Rand'
    ],
    brandsHandled: ['Defy', 'Samsung', 'LG', 'KIC', 'Bosch', 'Whirlpool', 'Hisense', 'AEG', 'Smeg', 'Kelvinator'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited against your final invoice if you proceed with the repair.'
      },
      {
        title: 'Defrost Heater & Thermostat Service',
        detail: 'R550 – R1,150 for defrost element replacement, bimetal sensor, or defrost timer.'
      },
      {
        title: 'Compressor Starter Relay & Capacitor',
        detail: 'R450 – R850 for heavy-duty PTC starter relay and overload protector replacement.'
      },
      {
        title: 'Refrigerant Regassing & Leak Repair',
        detail: 'R750 – R1,450 including nitrogen leak test, vacuum degassing, and certified gas refill.'
      }
    ],
    faqs: [
      {
        question: 'How much does fridge repair cost in Johannesburg?',
        answer: 'Fridge repairs typically range from R550 to R1,450 depending on whether the issue is a defrost heater, thermostat, starter relay, or regassing. Our R350 call-out fee is 100% credited toward your approved repair.'
      },
      {
        question: 'Do you offer same-day fridge repair in Johannesburg?',
        answer: 'Yes! Refrigerator breakdowns are treated as urgent priority call-outs across Johannesburg, Sandton, and Randburg to prevent food spoilage.'
      },
      {
        question: 'Why is my freezer cold but my fridge warm?',
        answer: 'This is the classic symptom of a failed defrost system. Frost chokes the cooling coil and blocks air circulation to the fridge. We replace the faulty defrost heater, thermostat, or sensor on-site.'
      },
      {
        question: 'Can you regas my fridge at my house?',
        answer: 'Yes! Our mobile service vans carry nitrogen pressure testing tanks, vacuum pumps, and certified refrigerants (R134a and R600a) to complete leak tests and regassing directly at your home.'
      }
    ]
  },

  // 9. Washing Machine Repair Johannesburg
  'washing-machine-repair-johannesburg': {
    id: 'washing-machine-repair-johannesburg',
    slug: 'washing-machine-repair-johannesburg',
    title: 'Washing Machine Repair Johannesburg | Top & Front Loaders | MR Gee',
    metaDescription: 'Specialist washing machine repair Johannesburg. We fix drum bearings, drain pumps, leaks & spin faults on Defy, Bosch, LG & Samsung. Call 062 351 0025.',
    h1: 'Washing Machine Repair Johannesburg & Laundry Appliance Care',
    badge: 'Johannesburg Laundry Specialist',
    subtitle: 'Expert on-site troubleshooting, drum bearing replacement, drain pump repairs, and electronic diagnostics for front-loader, top-loader, and washer-dryer combo appliances across Johannesburg.',
    intro: [
      'A broken washing machine turns household routines upside down within hours. When water refuses to drain, clothes emerge soaking wet, or the drum makes terrifying grinding sounds during high-speed extraction, laundry piles up rapidly. Attempting to haul a 70kg washing machine filled with trapped water out of your house is dangerous and difficult. At MR Gee Appliance Repair, we deliver comprehensive, mobile washing machine repair services directly to your Johannesburg residence.',
      'Our senior technician has more than 15 years of specialized field experience diagnosing and repairing front-loading and top-loading washing machines from all leading South African and international manufacturers, including Defy, Bosch, Samsung, LG, Whirlpool, AEG, and Speed Queen. We arrive with specialized pullers, bearing presses, replacement pump modules, motor brushes, electronic control boards, and diagnostic multimeters to resolve failures on-site.',
      'We believe in absolute transparency and honest business ethics. Our R350 diagnostic call-out fee is 100% credited toward your final repair invoice upon quote acceptance. Furthermore, every washing machine repair, drain pump replacement, bearing overhaul, and electronic fix completed by MR Gee is backed by our comprehensive 6-month written warranty on both installed parts and technician labor.'
    ],
    diagnosticsTitle: 'Common Washing Machine Faults We Repair Across Johannesburg',
    diagnosticsDesc: 'On-site troubleshooting for front-loaders, top-loaders, and washer-dryers:',
    symptoms: [
      {
        name: 'Washing Machine Won\'t Drain Water (Error Codes OE, E20, 5E, F03)',
        description: 'The machine halts mid-cycle with water filling the drum, the cycle timer stops advancing, and an error code appears on the digital display.',
        likelyCause: 'Foreign object blockage in the drain pump filter (coins, bobby pins, lint, buttons) or burned-out synchronous drain pump motor windings.',
        repairApproach: 'Safely drain water, inspect and clear the drain pump impeller housing, test pump motor electrical resistance, and replace failed drain pumps with heavy-duty OEM units.'
      },
      {
        name: 'Loud Grinding or Jet-Engine Roar During High-Speed Spin Cycle',
        description: 'During the final spin cycle, the washing machine produces an overwhelming mechanical roaring sound that shakes the room, and the drum feels loose when pushed by hand.',
        likelyCause: 'Worn tub bearings and failed inner water lip seal. Water has leaked past the seal into the steel ball bearings, causing rust, pitting, and imminent failure.',
        repairApproach: 'Disassemble outer tub assembly, extract worn bearings using hydraulic pullers, install high-grade stainless steel bearings with factory double-lip rubber seals, and test spin balance.'
      },
      {
        name: 'Machine Not Spinning or Drum Stays Stationary (Motor Won\'t Turn)',
        description: 'The machine fills with water, clicks as if starting the wash cycle, but the drum fails to rotate or only moves sluggishly under light loads.',
        likelyCause: 'Worn carbon motor brushes on universal AC motors, snapped or slipping serpentine drive belt, or damaged motor inverter control PCB.',
        repairApproach: 'Inspect motor brush length, replace worn carbon brushes with OEM copper-braided brushes, install new drive belts, or test inverter motor driver outputs.'
      },
      {
        name: 'Door Lock Stuck / Error Code dE / Door Won\'t Open',
        description: 'After the cycle completes, the door mechanism refuses to unlock, or the machine beeps and displays a door lock error code when pressing Start.',
        likelyCause: 'Burned PTC bi-metal door lock mechanism, broken inner plastic door handle latch, or damaged door switch electrical harness.',
        repairApproach: 'Manually release emergency door catch, test door interlock electrical circuit, replace the door interlock switch, and verify safety lock operation.'
      }
    ],
    technicalDeepDive: [
      {
        title: 'Precision Drum Bearing Overhauls: Saving Your Washing Machine',
        paragraphs: [
          'When drum bearings fail, many appliance repair companies advise customers to discard their washing machine, quoting exorbitant prices for an entire outer tub assembly. At MR Gee, our technicians are specialists in component-level bearing rebuilds.',
          'We extract the damaged bearings and fit heavy-duty, German-manufactured SKF sealed ball bearings paired with marine-grade waterproof double-lip shaft seals. This precision repair restores silent, smooth spinning performance and adds 5 to 8 years of operational lifespan to your machine at a fraction of the cost of buying a new washer.'
        ],
        bulletPoints: [
          'High-grade SKF sealed bearings fitted with specialized water-resistant grease',
          'Precision shaft sleeve inspection to ensure leak-free seal seating',
          'Complete wash cycle calibration and shock absorber dampening verification',
          'Covers top South African models from Defy, Bosch, Samsung, LG, Whirlpool, and AEG'
        ]
      },
      {
        title: 'Combating Gauteng Hard Water Scale and Detergent Buildup',
        paragraphs: [
          'High mineral content in Gauteng municipal water often leads to calcium scale buildup around heating elements and outer tub walls, increasing bearing friction and burning out water heaters. Our technicians provide practical dosage recommendations for low-foam high-efficiency detergents and advise on routine maintenance cleaning cycles to protect your machine.'
        ]
      }
    ],
    suburbsTitle: 'Johannesburg Suburbs We Service for Washing Machine Repairs',
    suburbsList: [
      'Sandton', 'Rosebank', 'Randburg', 'Bryanston', 'Fourways', 
      'Northcliff', 'Melville', 'Linden', 'Hyde Park', 'Morningside',
      'Braamfontein', 'Glenvista', 'Mulbarton', 'Oakdene', 'Johannesburg South',
      'Parkhurst', 'Greenside', 'Rivonia', 'Sunninghill', 'Midrand',
      'Roodepoort', 'Krugersdorp', 'Centurion', 'Pretoria', 'East Rand'
    ],
    brandsHandled: ['Defy', 'Bosch', 'Samsung', 'LG', 'Whirlpool', 'AEG', 'KIC', 'Hisense', 'Speed Queen', 'Smeg'],
    costBreakdown: [
      {
        title: 'Diagnostic Call-Out Fee',
        detail: 'R350 flat rate. 100% credited against your final invoice if you proceed with the repair.'
      },
      {
        title: 'Drain Pump Replacement / Unblocking',
        detail: 'R450 – R850 including full pump chamber cleaning and foreign object removal.'
      },
      {
        title: 'Motor Carbon Brushes & Drive Belt',
        detail: 'R450 – R850 for carbon brush replacement or new heavy-duty drive belt.'
      },
      {
        title: 'Drum Bearing & Seal Overhaul',
        detail: 'R850 – R1,450 for complete drum disassembly, SKF bearings, and double-lip water seal.'
      }
    ],
    faqs: [
      {
        question: 'How much does washing machine repair cost in Johannesburg?',
        answer: 'Washing machine repairs generally range between R450 and R1,450 depending on whether the issue is a blocked pump, door lock, motor brushes, or drum bearings. Our R350 call-out inspection fee is 100% credited toward your repair upon quote approval.'
      },
      {
        question: 'Do you offer same-day washing machine repair?',
        answer: 'Yes! We offer same-day service across Johannesburg, Sandton, and Randburg when you call or book in the morning.'
      },
      {
        question: 'Why is my washing machine not draining water?',
        answer: 'The most common cause is a foreign object (coins, pins, lint) obstructing the drain pump impeller, or an electrical failure of the pump motor. We clear obstructions or fit a replacement pump on-site.'
      },
      {
        question: 'Why does my washing machine sound like an airplane taking off?',
        answer: 'This loud grinding sound during the spin cycle indicates worn drum bearings and a compromised water seal. We replace the worn bearings with high-grade sealed bearings on-site.'
      }
    ]
  }
};

// Aliases for backwards compatibility with earlier URL slugs
SEO_PAGES['samsung-tv-repair'] = SEO_PAGES['samsung-tv-repair-johannesburg'];
SEO_PAGES['lg-tv-repair'] = SEO_PAGES['lg-tv-repair-johannesburg'];
SEO_PAGES['hisense-tv-repair'] = SEO_PAGES['hisense-tv-repair-johannesburg'];
SEO_PAGES['smart-tv-repair'] = SEO_PAGES['tv-repair-johannesburg'];
SEO_PAGES['appliance-repair-pretoria'] = SEO_PAGES['appliance-repair-johannesburg'];
