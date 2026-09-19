import { ProductInfo, DealerInfo } from '../types';

export const SITE_URL = 'https://www.teknic-euchner.co.in';
export const PDF_BASE = SITE_URL + '/wp-content/uploads/2025/01/';

export const CONTACT_INFO =
  'Head office: No. 64, 5th Cross, Electronics City, Bengaluru 560 100, Karnataka · ' +
  '<a href="tel:+918028522717">+91 80 28522717</a> · ' +
  '<a href="mailto:marketing@teknic-euchner.co.in">marketing@teknic-euchner.co.in</a>';

export const PRODUCTS: Record<string, ProductInfo> = {
  "Inductive Proximity Switches": {
    "badge": "Sensing",
    "tagline": "Built for extreme conditions",
    "lead": "Solid-state switching devices that need no physical contact to be actuated.",
    "paras": [
      "Used for control and positioning signals, they connect directly into conventional or electronic control systems. As plants and machines have become more automated, the need for switches like these has grown.",
      "High-quality materials and advanced construction give a very high degree of precision and reliability, even under the most arduous conditions."
    ],
    "features": [
      "Non-contact, solid-state operation",
      "Connects directly to conventional or electronic control systems",
      "Provides control and positioning signals on automated machines",
      "Precision and reliability in demanding industrial conditions"
    ],
    "specs": [
      [
        "Actuation",
        "No physical contact"
      ],
      [
        "Technology",
        "Solid-state switching"
      ],
      [
        "Detects",
        "Metal targets (inductive principle)"
      ],
      [
        "Connection",
        "Conventional or electronic controls"
      ]
    ],
    "uses": "Control and positioning signals on automated machines and manufacturing plants.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/Teknic-Euchner-Proximity-Switches-.pdf",
      "View official catalogue (PDF)"
    ]
  },
  "Single Limit Switches": {
    "badge": "Position switching",
    "tagline": "Precision, reliability and versatility",
    "lead": "A versatile limit switch built to European Standard EN 50041 with Euchner know-how, developed into a universal construction.",
    "paras": [
      "Robust construction, corrosion-resistant materials, precision finishing and a high IP67 protection class are the basis for trouble-free, reliable operation under the most arduous conditions."
    ],
    "features": [
      "Built to European Standard EN 50041",
      "Universal construction based on Euchner know-how",
      "Exclusive use of high-quality, corrosion-resistant materials",
      "Precision finishing for dependable operation"
    ],
    "specs": [
      [
        "Standard",
        "EN 50041"
      ],
      [
        "Protection class",
        "IP67 (IEC 60529, DIN 40050)"
      ],
      [
        "Materials",
        "Corrosion-resistant"
      ],
      [
        "Origin of design",
        "Euchner Germany know-how"
      ]
    ],
    "uses": "Machine and equipment position sensing where a rugged, IP67-rated limit switch is required.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/Catalogue-NG-Switches.pdf",
      "View official catalogue (PDF)"
    ]
  },
  "Precision Single and Multiple Limit Switches": {
    "badge": "Precision switching",
    "tagline": "Precision and know-how: the basis for your confidence",
    "lead": "Outstanding controls developed and perfected with the machine tool industry over the last 40 years by Euchner Germany.",
    "paras": [
      "High-grade materials and excellent technology give a reliable coordination of all necessary functions, which guarantees trouble-free operation under the most arduous conditions.",
      "They are used for the controlling and positioning of machines and industrial equipment."
    ],
    "features": [
      "Single and multiple limit switch versions",
      "Developed with the machine tool industry",
      "High-grade materials and reliable coordination of all functions",
      "Trouble-free operation under arduous conditions"
    ],
    "specs": [
      [
        "Heritage",
        "40+ years, Euchner Germany"
      ],
      [
        "Versions",
        "Single and multiple"
      ],
      [
        "Application",
        "Control & positioning of machines"
      ],
      [
        "Industry",
        "Machine tools & industrial equipment"
      ]
    ],
    "uses": "Controlling and positioning machine tools and other industrial equipment.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/Catalogue-Multiple-Limit-Switch.pdf",
      "View official catalogue (PDF)"
    ]
  },
  "Photoelectric Sensors": {
    "badge": "Optical sensing",
    "tagline": "How they work",
    "lead": "An emitter sends out a light beam and a receiver detects it. When the beam is interrupted, the change is converted into an electrical signal.",
    "paras": [
      "The light used is either infrared or red. Teknic Euchner photoelectric sensors are available in direct-reflection, reflector (polarised light) and emitter-receiver versions.",
      "Because of the flexible standard programmable versions, they allow stock reduction and are easily interchangeable with most units available in the market."
    ],
    "features": [
      "Fast, non-contact detection of objects",
      "Direct reflection, reflector and emitter-receiver versions",
      "Infrared or visible red light",
      "Programmable versions that help reduce stock"
    ],
    "specs": [
      [
        "Light source",
        "Infrared or red"
      ],
      [
        "Versions",
        "Direct reflection / reflector / emitter-receiver"
      ],
      [
        "Reflector type",
        "Polarised light"
      ],
      [
        "Interchangeability",
        "With most units on the market"
      ]
    ],
    "uses": "Automation: fast, non-contact detection of objects.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/Teknic-Euchner-Photosensors-.pdf",
      "View official catalogue (PDF)"
    ]
  },
  "NK Limit Switches": {
    "badge": "Position switching \u00b7 EN 50047",
    "tagline": "A configurable limit switch range",
    "lead": "Compact limit switches with dimensions to EN 50047 and electrical specifications to IEC 60947-5-1.",
    "paras": [
      "Different actuators can be mounted on the same basic housing, and the approach direction can be changed quickly and easily between four positions. The robust construction gives a long service life."
    ],
    "features": [
      "Choice of actuators on the same basic housing",
      "Easy, quick change of 4 approach directions",
      "Positive-opening NC contacts suitable for safety-related applications",
      "Robust construction for long service life"
    ],
    "specs": [
      [
        "Dimensions",
        "EN 50047"
      ],
      [
        "Electrical",
        "IEC 60947-5-1"
      ],
      [
        "TS 910",
        "Snap action, 1NO + 1NC"
      ],
      [
        "TS 920",
        "Slow action, 1NO + 1NC"
      ],
      [
        "TS 930",
        "Slow action, 2NC"
      ]
    ],
    "uses": "Position detection, including safety-related applications thanks to positive-opening NC contacts.",
    "note": "All three contact elements (TS 910, TS 920, TS 930) have positive-opening NC contacts.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/NK_Limit-Switch-Catalogue_2025.pdf",
      "View official catalogue (PDF)"
    ]
  },
  "Cable Connectors": {
    "badge": "Connectivity",
    "tagline": "Sensor & actuator cables",
    "lead": "High-quality initiator (sensor / actuator) cables that connect control units to sensors or actuators.",
    "paras": [
      "The cables have small cross-sections and come with TPU or PVC jackets. They are designed for use in energy chains, support tight bend radii and are tested for millions of cycles.",
      "They meet various industry standards, are oil-resistant, and are available with different cable-end options for different applications."
    ],
    "features": [
      "Connects control units to sensors or actuators",
      "TPU or PVC jacket options",
      "Designed for energy-chain use and tested for millions of cycles",
      "Oil-resistant, with diverse cable-end options"
    ],
    "specs": [
      [
        "Cross-section",
        "0.25 mm\u00b2 to 0.34 mm\u00b2"
      ],
      [
        "Jacket",
        "TPU or PVC"
      ],
      [
        "Bend radius",
        "From 5 \u00d7 d"
      ],
      [
        "Resistance",
        "Oil-resistant"
      ]
    ],
    "uses": "Wiring sensors and actuators to control units, including cable-chain installations.",
    "catalog": [
      "https://www.teknic-euchner.co.in/products/",
      "See it on the official site"
    ]
  },
  "STM Pro Safety Switch": {
    "badge": "Safety",
    "tagline": "Compact guard-locking safety",
    "lead": "The STM Pro is an electromechanical safety switch with guard locking, designed for applications with very little installation space.",
    "paras": [
      "The actuating head is adjustable and offers both vertical and horizontal actuation openings for flexible mounting. An integrated LED in the housing shows whether the guard-locking solenoid is energised.",
      "Four contacts deliver all necessary information to the control unit, and an enlarged connection space with an included cable gland simplifies wiring."
    ],
    "features": [
      "Compact guard-locking design",
      "Adjustable head: vertical and horizontal actuation openings",
      "Integrated LED shows solenoid status",
      "Enlarged connection space, cable gland included"
    ],
    "specs": [
      [
        "Function",
        "Guard locking"
      ],
      [
        "Contacts",
        "4"
      ],
      [
        "Indication",
        "Integrated LED"
      ],
      [
        "Actuation",
        "Vertical / horizontal openings"
      ]
    ],
    "uses": "Guarding applications that need guard locking in minimal installation space.",
    "catalog": [
      "https://www.teknic-euchner.co.in/wp-content/uploads/2025/01/STM-Pro-Teknic-Euchner-1.pdf",
      "View official catalogue (PDF)"
    ]
  }
};

export const DEALERS: DealerInfo[] = [
  {
    "className": "dealer-item dealer-item--hq",
    "region": "Head Office \u2022 Bengaluru, Karnataka",
    "name": "Teknic Euchner Electronics Pvt Ltd",
    "address": "No. 64, 5th Cross, Electronics City, Bengaluru 560 100",
    "phones": [
      "Tel: <a href=\"tel:+918028522717\">+91 80 28522717</a>",
      "<a href=\"mailto:marketing@teknic-euchner.co.in\">marketing@teknic-euchner.co.in</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ahmedabad",
    "name": "Mr. Prajesh Valekar",
    "address": "31, Shyam Sarthi Bungalow, B/h. Sarathi Bunglow, Nr. Satyamev Hospital, Chandkheda, Ahmedabad 382424",
    "phones": [
      "Tel: 08905523 555"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ahmedabad",
    "name": "J.D. Corporation",
    "address": "1402, Patel Vas, Mithakhali Gam, Ellisbridge, Ahmedabad 380006",
    "phones": [
      "Tel: 079 26577707 / 26576959 / 65126512",
      "Mob: <a href=\"tel:+919825346766\">9825346766</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ahmedabad",
    "name": "D.J. Associates",
    "address": "GF 7 &amp; 8, Wall Street \u2013 2, Opp Orient Club, Near Gujarat College, Ahmedabad 380006",
    "phones": [
      "Tel: 079-26562301 / 40069856",
      "Mob: <a href=\"tel:+919712946766\">9712946766</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ahmedabad",
    "name": "August Technocrat",
    "address": "Contact: Mr. Ashwin Hariramani",
    "phones": [
      "Tel: 08905523 555",
      "Mob: <a href=\"tel:+917878212558\">7878212558</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ahmedabad",
    "name": "Shree Electrolink",
    "address": "3/4, Muktjivan Chamber, Inside Padapole, Gandhi Road, Ahmedabad 380001",
    "phones": [
      "Mob: <a href=\"tel:+919825364896\">9825364896</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Bengaluru",
    "name": "Impex Electricals",
    "address": "Shop No.112, 1st Floor, Sajjansah Market, No.273-278, Chickpet Main Road, Bengaluru 560053",
    "phones": [
      "Tel: 080-41124771",
      "Mob: <a href=\"tel:+919844077771\">9844077771</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Bengaluru",
    "name": "Model Electricals",
    "address": "No.60/1, GF-01 &amp; GF-02, Albert Victor Rd, 1st Main Rd, Chamarajpet, Bengaluru 560018",
    "phones": [
      "Tel: 080-41537627",
      "Mob: <a href=\"tel:+919845351692\">9845351692</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Bengaluru",
    "name": "Manik Enterprises",
    "address": "#4, 41/43, SDV Khoday Complex, A.M. Lane, BVK Iyengar Rd Cross, Bengaluru 560053",
    "phones": [
      "Mob: <a href=\"tel:+919844390560\">9844390560</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Bengaluru",
    "name": "Krushi Solutions",
    "address": "#253, Sannidhi, 1st Floor, 1st Main, 2nd Cross, Hegganahalli, Bengaluru 560091",
    "phones": [
      "Mob: <a href=\"tel:+919535062171\">9535062171</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Chandigarh",
    "name": "Namrata Trade Links",
    "address": "SCO 40, Sector 7C, Madhya Marg, Chandigarh 160019",
    "phones": [
      "Tel: 0172-2793887",
      "Mob: <a href=\"tel:+919876544405\">9876544405</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Chennai",
    "name": "Teknic Controlgear Pvt. Ltd.",
    "address": "Matajee Complex, Room No. 4, 6 &amp; 12, 1st Floor, No.1, Wallers Lane, Mount Road, Chennai 600002",
    "phones": [
      "Tel: 044-28411611 / 28592131",
      "Mob: <a href=\"tel:+918144404876\">8144404876</a> / <a href=\"tel:+918144055666\">8144055666</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Chennai",
    "name": "Deepak Agencies",
    "address": "137/4, Angappa Naicken Street, Facing Errabalu Chetty Street, Parrys, Chennai 600001",
    "phones": [
      "Mob: <a href=\"tel:+919176146205\">9176146205</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Coimbatore",
    "name": "Suriya Marketing",
    "address": "206 K, Chellam Complex, Dr. Nanjappa Road, Coimbatore 641018",
    "phones": [
      "Tel: 0422-4378508 / 4378058",
      "Mob: <a href=\"tel:+919843556059\">9843556059</a> / <a href=\"tel:+919843356059\">9843356059</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Coimbatore",
    "name": "Grace Tech Solutions",
    "address": "331, Kamarajar Road, Varadharajapuram, Uppilipalayam Post, Coimbatore 641015",
    "phones": [
      "Mob: <a href=\"tel:+919865179509\">9865179509</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Cochin",
    "name": "P.O. Abraham &amp; Co.",
    "address": "Sahitya Parishat Building, East of Head Post Office, Hospital Road, Ernakulam, Cochin 682011",
    "phones": [
      "Tel: 0484-2369797 / 2351253",
      "Mob: <a href=\"tel:+919846055555\">9846055555</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Faridabad",
    "name": "Abhishek Enterprises",
    "address": "1E/17 BP N.I.T., Faridabad 121001, Haryana",
    "phones": [
      "Mob: <a href=\"tel:+917838499413\">7838499413</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Faridabad",
    "name": "Amar Electrical",
    "address": "2 A-6, NIT Faridabad 121001, Haryana",
    "phones": [
      "Tel: 0129-40289",
      "Mob: <a href=\"tel:+919811388953\">9811388953</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Faridabad",
    "name": "Sonia Electricals",
    "address": "2A-6, N.I.T. Faridabad 121001",
    "phones": [
      "Mob: <a href=\"tel:+919811388953\">9811388953</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Faridabad",
    "name": "Mundhra Brothers",
    "address": "1D-14, B.P, 1 &amp; 2 Chowk, NIT Faridabad 121001",
    "phones": [
      "Mob: <a href=\"tel:+919999934375\">9999934375</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Gandhidham",
    "name": "Kamdhenu Enterprises",
    "address": "3-4 Golden Point, Plot No.31, Sector-8, Gandhidham (Kutch) 370201",
    "phones": [
      "Tel: 02836-229900",
      "Mob: <a href=\"tel:+919925405001\">9925405001</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Gurgaon",
    "name": "Electric &amp; Machinery Traders",
    "address": "245/11, Old Railway Road, Opp. Canara Bank, Gurgaon 122001",
    "phones": [
      "Tel: 0124-4066295 / 4067295 / 2329295",
      "Mob: <a href=\"tel:+919718909292\">9718909292</a> / <a href=\"tel:+919899696196\">9899696196</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Hisar",
    "name": "Daksh Solutions",
    "address": "#67, Saini School Market, Hisar 125001, Haryana",
    "phones": [
      "Mob: <a href=\"tel:+917015316583\">7015316583</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Hosur",
    "name": "Annai Trading Corporation",
    "address": "Plot No.3, SIDCO Industrial Estate, Srinagar, Hosur 635109",
    "phones": [
      "Mob: <a href=\"tel:+918667000389\">8667000389</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Indore",
    "name": "Suny Enterprises",
    "address": "17, Dhenu Market, Behind Jai Mata Medicose, Indore 452003",
    "phones": [
      "Mob: <a href=\"tel:+919826287873\">9826287873</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Indore",
    "name": "Ashvin Product",
    "address": "29, Dhenu Market, Off MG Road, Nr. Lloyd AC Depot, Indore 452003",
    "phones": [
      "Mob: <a href=\"tel:+919425057450\">9425057450</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Jamshedpur",
    "name": "Incons India",
    "address": "Bajwa Complex, Masjid Road, 94-Golmuri Market, Jamshedpur 831003, Jharkhand",
    "phones": [
      "Tel: 0657-2341483",
      "Mob: <a href=\"tel:+919031727962\">9031727962</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Jaipur",
    "name": "Eltronics",
    "address": "86-87A, Dhuleshwar Garden, Jaipur 302001",
    "phones": [
      "Tel: 0141-4073214",
      "Mob: <a href=\"tel:+919928910325\">9928910325</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Kolkata",
    "name": "Teknic Control Gear Pvt Ltd",
    "address": "KGN House, 2nd Floor, Room No. 16, 14 Ganesh Chandra Avenue, Kolkata 700013",
    "phones": [
      "Tel: 033-40054649 / 22367429",
      "Mob: <a href=\"tel:+919330241996\">9330241996</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Kolhapur",
    "name": "Dhanshree Enterprises",
    "address": "C/B-3/4, Sterling Tower, 1031-K, E Ward, Gavat Mandai Road, Shahupuri, Kolhapur 416001",
    "phones": [
      "Tel: 0231-2663198 / 2663199 / 2669777",
      "Mob: <a href=\"tel:+919689925434\">9689925434</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ludhiana",
    "name": "Komal Electro Sales",
    "address": "S.C.O 3, Shiv Mandir Market, Opp Manju Cinema, G.T. Road, Ludhiana 141003",
    "phones": [
      "Mob: <a href=\"tel:+919872224551\">9872224551</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ludhiana",
    "name": "Monika Engineers",
    "address": "Rukmani Tower, 77-A, Industrial Estate, Ludhiana 141003",
    "phones": [
      "Mob: <a href=\"tel:+919417000445\">9417000445</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ludhiana",
    "name": "Indosons Electrical Industries",
    "address": "3102/3, Nirankari Colony, Sunder Nagar, Ludhiana 141007",
    "phones": [
      "Mob: <a href=\"tel:+919914319996\">9914319996</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ludhiana",
    "name": "Soni Electricals &amp; Electronics",
    "address": "5, Guru Nanak Market, Near Upper India Steels, Focal Point, Ludhiana 141010",
    "phones": [
      "Mob: <a href=\"tel:+919872620928\">9872620928</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ludhiana",
    "name": "General Electric &amp; Machinery",
    "address": "4, Oswal Market, Opp Fire Station, G.T. Road, Ludhiana 141003",
    "phones": [
      "Mob: <a href=\"tel:+919781022060\">9781022060</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Mumbai",
    "name": "A. Harilal &amp; Co. Pvt. Ltd",
    "address": "169 Lohar Chawl, K.M. Sharma Marg, Amrit Niwas, Ground Floor, Mumbai 400002",
    "phones": [
      "Tel: 022-22085553 / 22095882",
      "Mob: <a href=\"tel:+919321085554\">9321085554</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Mumbai",
    "name": "Teknic Control Gear Pvt. Ltd",
    "address": "116, Hammersmith Industrial Estate, Off Sitladevi Temple Road, Mahim, Mumbai 400016",
    "phones": [
      "Tel: 022-43626500 / 43626504 / 24451648"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Mumbai",
    "name": "Yogesh Switch Gear &amp; Cables Pvt. Ltd.",
    "address": "240, Gala Complex, Dindayal Upadhyay Marg, Dumping Road, Mulund West, Mumbai 400080",
    "phones": [
      "Tel: 25655261 / 32107482",
      "Mob: <a href=\"tel:+919322251679\">9322251679</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Mysuru",
    "name": "Advaith Enterprises",
    "address": "#Q205/1, 2nd Cross, Hebbal Industrial Area, Opp. DHL, Mysuru 570016",
    "phones": [
      "Mob: <a href=\"tel:+918050988683\">8050988683</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "Shree Shyam Electricals",
    "address": "2098/109, Chah Indara, Behind Jubilee Cinema, Bhagirath Place, Chandni Chowk, Delhi 110006",
    "phones": [
      "Tel: 011-23873310 / 23873311",
      "Mob: <a href=\"tel:+919811031624\">9811031624</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "Aarcee Mittal &amp; Bros",
    "address": "1723, Bhagirath Palace, New Delhi 110006",
    "phones": [
      "Tel: 011-23873766 / 55301231",
      "Mob: <a href=\"tel:+919871077020\">9871077020</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "Ankit Electricals",
    "address": "1809, 1st Floor, Bhagirath Palace, Chandni Chowk, New Delhi 110006",
    "phones": [
      "Tel: 011-23869752 / 23873098",
      "Mob: <a href=\"tel:+919899765966\">9899765966</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "Promark",
    "address": "67, Sunshine Apartments, A-3, Paschim Vihar, New Delhi 110063",
    "phones": [
      "Tel: 011-25264262",
      "Mob: <a href=\"tel:+919871667788\">9871667788</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "P.V. Associates",
    "address": "35, 1st Floor, DDA Shopping Complex, Mangala Market, Next to P.O. Kalkaji, New Delhi 110019",
    "phones": [
      "Tel: 011-26423160",
      "Mob: <a href=\"tel:+919811025899\">9811025899</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "New Delhi",
    "name": "Kartik Electricals",
    "address": "1809, 3rd Floor, Bhagirath Place, Chandni Chowk, Delhi 110006",
    "phones": [
      "Mob: <a href=\"tel:+919871166589\">9871166589</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Nagpur",
    "name": "Metro Electricals &amp; Industrial Agencies",
    "address": "79, Chhabriya Chambers, Central Avenue Road, Nagpur 440018",
    "phones": [
      "Tel: 0712-2723222 / 2729009",
      "Mob: <a href=\"tel:+919823400091\">9823400091</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Nagpur",
    "name": "Gassco Corporation",
    "address": "Plot No.74, Flat No.101, Dattatraya Apartment, Bhausaheb Surve Nagar, Nagpur 440022",
    "phones": [
      "Tel: 0712-2243325 / 2224754",
      "Mob: <a href=\"tel:+919403590821\">9403590821</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Nashik",
    "name": "NASA Enterprises",
    "address": "66, C-10/1, Nice Flatted Estate, A-Road, MIDC, Satpur, Nashik 422007",
    "phones": [
      "Tel: 0253-2357729 / 2360894",
      "Mob: <a href=\"tel:+919422271456\">9422271456</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Navi Mumbai",
    "name": "Central Electric (N.B.)",
    "address": "Shop No.1, 2 &amp; 5, Royal Tower, Plot No.52, Sector 8/A, Diva, Airoli, Navi Mumbai 400708",
    "phones": [
      "Tel: 022-27607600",
      "Mob: <a href=\"tel:+917666789261\">7666789261</a> / <a href=\"tel:+917666689262\">7666689262</a> / <a href=\"tel:+919322344720\">9322344720</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Nellore",
    "name": "Simhapuri Technologys",
    "address": "No.25/2/813, First Floor, Savithri Nagar, 8th Cross Rd, Vedayapalem, Nellore 524004",
    "phones": [
      "Mob: <a href=\"tel:+919703707442\">9703707442</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Neemrana",
    "name": "A.B. Enterprises",
    "address": "S-19, RIICO Shopping Complex, Behind Subzi Mandi, Near Police Station, Neemrana 301705",
    "phones": [
      "Mob: <a href=\"tel:+918003333311\">8003333311</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Pune",
    "name": "Spectra Trading Company",
    "address": "Plot No. A-129/1, H Block, Near Morwadi Court, Shantaram Electric Compound, MIDC, Pimpri, Pune 411018",
    "phones": [
      "Tel: 020-27440211",
      "Mob: <a href=\"tel:+919822498775\">9822498775</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Pune",
    "name": "Karishma Electric &amp; Trading Co.",
    "address": "144, Narayan Peth, Pune 411030",
    "phones": [
      "Tel: 020-24450952 / 24494979 / 66029945",
      "Mob: <a href=\"tel:+917875496111\">7875496111</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Pune",
    "name": "Shiv Engineers",
    "address": "Shop No.2, C-38, Near IBMR College, MIDC, Chinchwad, Pune 411019",
    "phones": [
      "Tel: 020-27440211",
      "Mob: <a href=\"tel:+919372355611\">9372355611</a> / <a href=\"tel:+919372555611\">9372555611</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Ranchi",
    "name": "Mr. Dinesh Rai",
    "address": "2nd Floor, Sukhram Enclave, Room D-2, Near Bank Colony, Morhabadi, Ranchi 834008",
    "phones": [
      "Mob: <a href=\"tel:+919608692392\">9608692392</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Rajkot",
    "name": "Noble Electric Co. Pvt. Ltd.",
    "address": "Opp. RMC Exit Gate, Ashapura Road, Rajkot 360001",
    "phones": [
      "Tel: 0281-2223088 / 2238288",
      "Mob: <a href=\"tel:+919925549730\">9925549730</a> / <a href=\"tel:+919825315551\">9825315551</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Rajkot",
    "name": "Perfect Switchgear",
    "address": "2-Bhakti Nagar, Station Road, Opp. Sonal Complex, Rajkot 360002, Gujarat",
    "phones": [
      "Mob: <a href=\"tel:+919376638238\">9376638238</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Rewari",
    "name": "Shivam Enterprises",
    "address": "Chandpur Ki Dhani, Bawal Road, Rewari 123401",
    "phones": [
      "Mob: <a href=\"tel:+919812510352\">9812510352</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Rudrapur",
    "name": "Perfect Control System",
    "address": "Plot No.2, Shakti Vihar Colony, Atariya Road, Rudrapur 263153",
    "phones": [
      "Mob: <a href=\"tel:+918755200777\">8755200777</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Sangli",
    "name": "Dipak Enterprises",
    "address": "P.B. No.123, 1048 Vrindavan-A, Near Sangli College Corner, High School Road, Opp. RBL Bank, Sangli 416416",
    "phones": [
      "Tel: 0233-2375653 / 2377303",
      "Mob: <a href=\"tel:+919890015900\">9890015900</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Surendranagar",
    "name": "Patel Electronic Corporation",
    "address": "K.V. Road, Opp. Indian Bank, Jamnagar 361001",
    "phones": [
      "Tel: 0288-224773 / 2673747",
      "Mob: <a href=\"tel:+919328100630\">9328100630</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Surendranagar",
    "name": "Patel Trading Co.",
    "address": "21, Panchvati Complex, Main Road, Surendranagar 363001",
    "phones": [
      "Mob: <a href=\"tel:+919879321410\">9879321410</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Secunderabad",
    "name": "Triveni Enterprises",
    "address": "H.O. 2-3-15, Ground Floor, Gandhi Market, M.G. Road, Secunderabad 500003",
    "phones": [
      "Tel: 040-66382622 / 27841627",
      "Mob: <a href=\"tel:+919989155190\">9989155190</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Secunderabad",
    "name": "New Star Engineering Company",
    "address": "141/17, 1st Floor, Durga Bhavan, Opp Kotak Mahindra Bank, R.P. Road, Secunderabad 500003",
    "phones": [
      "Tel: 040-66385346 / 27537466",
      "Mob: <a href=\"tel:+918885504647\">8885504647</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Vadodara",
    "name": "Seemaco AG",
    "address": "Anjali Chambers, R.C. Dutt Road, Alkapuri, Vadodara 390007",
    "phones": [
      "Tel: 0265-2359960 / 2344886 / 2355305",
      "Mob: <a href=\"tel:+919979081144\">9979081144</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Vasai East",
    "name": "Teknic Control Gears Pvt. Ltd.",
    "address": "Gala No.8, Amrut Industrial Estate No.2, K.T. Industrial Park II, Bilal Pada, Valiv Road, Vasai East 401208",
    "phones": [
      "Mob: <a href=\"tel:+919320451648\">9320451648</a>"
    ]
  },
  {
    "className": "dealer-item",
    "region": "Vijayawada",
    "name": "Sree Anjaneya Engineering Enterprises",
    "address": "Shop No.3, St Peter Complex, Tarapeta, Vijayawada 522001",
    "phones": [
      "Mob: <a href=\"tel:+919640561234\">9640561234</a>"
    ]
  }
];

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function li(items: string[]): string {
  return items.map((t) => '<li>' + t + '</li>').join('');
}

function actions(list: string[]): string {
  return '<div class="info-actions">' + list.join('') + '</div>';
}

function btn(label: string, attrs: string, primary?: boolean): string {
  return '<button type="button" class="info-btn' + (primary ? ' info-btn--primary' : '') + '" ' + attrs + '>' + label + '</button>';
}

export function getProductHTML(key: string, p: ProductInfo): string {
  return (
    '<span class="product-badge">' +
    esc(p.badge) +
    '</span>' +
    '<p class="info-tagline">' +
    esc(p.tagline) +
    '</p>' +
    '<p class="info-lead">' +
    esc(p.lead) +
    '</p>' +
    p.paras.map((t) => '<p class="info-p">' + esc(t) + '</p>').join('') +
    '<div class="info-cols">' +
    '<div class="info-box"><h4>Key features</h4><ul class="info-list">' +
    li(p.features.map(esc)) +
    '</ul></div>' +
    '<div class="info-box"><h4>Technical highlights</h4><ul class="info-specs">' +
    p.specs.map((s) => '<li><span>' + esc(s[0]) + '</span><strong>' + esc(s[1]) + '</strong></li>').join('') +
    '</ul></div>' +
    '</div>' +
    '<p class="info-p" style="margin-top:1.2rem"><strong>Typical use:</strong> ' +
    esc(p.uses) +
    '</p>' +
    (p.note ? '<p class="info-p">' + esc(p.note) + '</p>' : '') +
    actions([
      '<a class="info-btn info-btn--primary" href="' + p.catalog[0] + '" target="_blank" rel="noopener noreferrer">' + esc(p.catalog[1]) + '</a>',
      btn('Request a quote', 'data-act="quote" data-product="' + esc(key) + '"'),
      btn('Find a dealer', 'data-act="dealer"')
    ]) +
    '<p class="info-note">Source: Teknic Euchner official website. Full technical data and ordering codes are in the catalogue. ' +
    CONTACT_INFO +
    '</p>'
  );
}

export const SECTIONS: Record<string, { title: string; html: () => string }> = {
  about: {
    title: 'About Teknic Euchner',
    html: () =>
      '<p class="info-tagline">Control gear pioneers since 1989</p>' +
      '<p class="info-lead">Teknic Euchner Electronics Pvt Ltd is a family-driven business that has been a pioneer in India\'s control gear industry since 1989.</p>' +
      '<p class="info-p">The company was founded by the late Mr. Shyam Jaising and is led today by Managing Director Mr. Rajesh Jaising. It is an Indo-German joint venture that combines the engineering know-how of Euchner Germany with manufacturing experience in India.</p>' +
      '<p class="info-p">Teknic Euchner focuses on reliable, high-performance control gear that improves efficiency, safety and sustainability for industrial customers.</p>' +
      '<div class="info-cols">' +
      '<div class="info-box"><h4>At a glance</h4><ul class="info-specs">' +
      '<li><span>Established</span><strong>1989</strong></li>' +
      '<li><span>Headquarters</span><strong>Electronics City, Bengaluru</strong></li>' +
      '<li><span>Leadership</span><strong>Three generations</strong></li>' +
      '<li><span>Dealer network</span><strong>30+ cities across India</strong></li>' +
      '</ul></div>' +
      '<div class="info-box"><h4>What we make</h4><ul class="info-list">' +
      li(['Inductive proximity switches', 'Single, precision and multiple limit switches', 'NK limit switches', 'Photoelectric sensors', 'Cable connectors', 'STM Pro safety switch']) +
      '</ul></div>' +
      '</div>' +
      actions([
        btn('Leadership &amp; vision', 'data-act="open" data-target="leadership"', true),
        btn('Quality policy', 'data-act="open" data-target="quality"'),
        btn('Explore products', 'data-act="products"')
      ]) +
      '<p class="info-note">Source: Teknic Euchner official website (Overview). ' +
      CONTACT_INFO +
      '</p>'
  },
  leadership: {
    title: 'Leadership & Vision',
    html: () =>
      '<p class="info-tagline">The people behind Teknic Euchner</p>' +
      '<div class="info-people">' +
      '<div class="info-box"><div class="info-person-role">Managing Director</div><div class="info-person-name">Rajesh Jaising</div><p>Brings 30 years of experience to the company. Educated at Manipal Tech University, with work experience in Germany. He credits hard work, perseverance and a never-give-up attitude as the cornerstones of Teknic Euchner.</p></div>' +
      '<div class="info-box"><div class="info-person-role">Founder</div><div class="info-person-name">Late Shyam Jaising</div><p>A visionary whose passion for quality and excellence brought the company to life, and whose forward-looking approach set milestones for future generations.</p></div>' +
      '<div class="info-box"><div class="info-person-role">Head of Operations</div><div class="info-person-name">Rashi Jaising</div><p>A third-generation leader focused on streamlined processes, advanced automation and employee development.</p></div>' +
      '</div>' +
      '<div class="info-cols">' +
      '<div class="info-box"><h4>Vision</h4><p>To become a market leader in India and make a significant mark internationally across all business segments, particularly electrical and electrical control products, by consistently innovating and developing products that meet market demands.</p></div>' +
      '<div class="info-box"><h4>Mission</h4><p>To deliver world-class control gear solutions that redefine quality and performance.</p></div>' +
      '</div>' +
      '<div class="info-box" style="margin-top:1.1rem"><h4>What we aim to be</h4><ul class="info-list">' +
      li(['<strong>Team:</strong> an organisation where every member is driven to achieve customer delight through continuous improvement.', '<strong>Internal strengths:</strong> employee satisfaction, productivity and profitability.', '<strong>Quality first:</strong> high-quality products at fair prices.']) +
      '</ul></div>' +
      actions([btn('Quality policy', 'data-act="open" data-target="quality"', true), btn('Company profile', 'data-act="open" data-target="about"')]) +
      '<p class="info-note">Source: Teknic Euchner official website (Overview).</p>'
  },
  quality: {
    title: 'Quality Policy',
    html: () =>
      '<p class="info-tagline">Right first time, every time</p>' +
      '<p class="info-lead">Teknic Euchner aims to maintain the quality and standards of its products to the fullest.</p>' +
      '<div class="info-cols">' +
      '<div class="info-box"><h4>Policy</h4><p>To provide customers with products and services that more than meet their requirements and expectations.</p></div>' +
      '<div class="info-box"><h4>Objectives</h4><ul class="info-list">' +
      li(['Build so much confidence in customers that they clearly prefer Teknic Euchner products.', 'Achieve 100% right, first time and every time.']) +
      '</ul></div>' +
      '<div class="info-box"><h4>Commitment</h4><p>To comply with the requirements of the quality management system and continually improve its effectiveness through the total involvement of everyone in the organisation, including suppliers.</p></div>' +
      '</div>' +
      actions([btn('Explore products', 'data-act="products"', true), btn('Find a dealer', 'data-act="dealer"'), btn('Talk to an expert', 'data-act="quote" data-product=""')]) +
      '<p class="info-note">Source: Teknic Euchner official website (Quality Policy). ' +
      CONTACT_INFO +
      '</p>'
  },
  news: {
    title: 'News & Events',
    html: () =>
      '<p class="info-tagline">Stay up to date</p>' +
      '<p class="info-lead">Follow Teknic Euchner\'s latest updates, product announcements and events on its official channels.</p>' +
      '<div class="info-box"><h4>Official channels</h4><ul class="info-list">' +
      li([
        '<a href="' + SITE_URL + '/" target="_blank" rel="noopener noreferrer">Official website: teknic-euchner.co.in</a>',
        '<a href="https://in.linkedin.com/company/teknic-euchner-electronics-private-limited" target="_blank" rel="noopener noreferrer">LinkedIn: Teknic Euchner Electronics Private Limited</a>',
        '<a href="https://www.instagram.com/tekniceuchner/" target="_blank" rel="noopener noreferrer">Instagram: @tekniceuchner</a>',
        '<a href="https://www.youtube.com/channel/UCQGCDSE-EjQlgpULLqqgRHA" target="_blank" rel="noopener noreferrer">YouTube channel</a>'
      ]) +
      '</ul></div>' +
      '<p class="info-p" style="margin-top:1.1rem">For product launches or trade-show enquiries, our team is happy to help directly.</p>' +
      actions([btn('Talk to an expert', 'data-act="quote" data-product=""', true), btn('Explore products', 'data-act="products"')]) +
      '<p class="info-note">' +
      CONTACT_INFO +
      '</p>'
  }
};
