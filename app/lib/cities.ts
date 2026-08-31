export type CityType = "metropolitan" | "university" | "hospitality" | "industrial" | "general";

export type City = {
  name: string;
  slug: string;
  country: "England" | "Scotland" | "Wales" | "Northern Ireland";
  region: string;
  description: string;
  buildingContext: string;
  cityType: CityType;
};

export type CityProduct = {
  slug: string;
  href: string;
  name: string;
  tagline: string;
};

export const typeProductDetails: Record<CityType, [CityProduct, CityProduct, CityProduct]> = {
  metropolitan: [
    {
      slug: "garbage-chute",
      href: "/products/garbage-chute",
      name: "Garbage Chute Systems",
      tagline: "Fire-rated, odour-free waste disposal from every floor in residential towers and hotels.",
    },
    {
      slug: "press-compactors",
      href: "/products/press-compactors",
      name: "Press Compactors",
      tagline: "Hydraulic compactors that reduce waste to 1/6th of its original volume.",
    },
    {
      slug: "bin-carousel",
      href: "/products/bin-carousel",
      name: "Bin Carousel Systems",
      tagline: "Automated bin rotation for chute-fed garbage rooms — minimal labour, maximum efficiency.",
    },
  ],
  university: [
    {
      slug: "garbage-chute",
      href: "/products/garbage-chute",
      name: "Garbage Chute Systems",
      tagline: "Reliable waste disposal from every floor in student accommodation and university buildings.",
    },
    {
      slug: "recycling-chute",
      href: "/products/recycling-chute",
      name: "Recycling Chute Systems",
      tagline: "Push-button selector panels that sort waste streams at source on every floor.",
    },
    {
      slug: "chute-compactor",
      href: "/products/chute-compactor",
      name: "Chute-Fed Compactors",
      tagline: "10:1 compaction ratio — reduces bin changes and labour in high-occupancy buildings.",
    },
  ],
  hospitality: [
    {
      slug: "laundry-chute",
      href: "/products/laundry-chute",
      name: "Laundry Chute Systems",
      tagline: "Electric, mechanical and password-access linen chutes for hotels and BTR schemes.",
    },
    {
      slug: "trash-bin-washer",
      href: "/products/trash-bin-washer",
      name: "Automatic Bin Washer",
      tagline: "Eliminates waste room odours at source — restores containers and enhances garbage room hygiene.",
    },
    {
      slug: "scent-diffuser",
      href: "/products/scent-diffuser",
      name: "Commercial Scent Diffusers",
      tagline: "Prolitec diffusers that neutralise waste room and garbage area odours.",
    },
  ],
  industrial: [
    {
      slug: "garbage-chute",
      href: "/products/garbage-chute",
      name: "Garbage Chute Systems",
      tagline: "Fire-rated, smell-proof waste disposal from every floor in commercial and industrial buildings.",
    },
    {
      slug: "bin-feed-press",
      href: "/products/bin-feed-press",
      name: "Bin Feed Press",
      tagline: "Automatic bin cycling and compaction — reduces labour, trolley usage and bin replacement frequency.",
    },
    {
      slug: "uv-ozone-plasma",
      href: "/products/uv-ozone-plasma",
      name: "UV-C Ozone & Plasma Purification",
      tagline: "Eliminates odours, bacteria and airborne contaminants from waste rooms and garbage areas.",
    },
  ],
  general: [
    {
      slug: "garbage-chute",
      href: "/products/garbage-chute",
      name: "Garbage Chute Systems",
      tagline: "Fire-rated, smell-proof waste disposal chutes for multi-storey residential and commercial buildings.",
    },
    {
      slug: "recycling-chute",
      href: "/products/recycling-chute",
      name: "Recycling Chute Systems",
      tagline: "Push-button selector panels that sort metals, cardboard and plastic at source on every floor.",
    },
    {
      slug: "scent-diffuser",
      href: "/products/scent-diffuser",
      name: "Commercial Scent Diffusers",
      tagline: "Prolitec diffusers that neutralise waste room and garbage area odours effectively.",
    },
  ],
};

export const cities: City[] = [
  // ─── ENGLAND ─────────────────────────────────────────────────────────────────

  {
    name: "Bath",
    slug: "bath",
    country: "England",
    region: "South West England",
    description:
      "Bath's UNESCO World Heritage status creates unique challenges for waste management in a dense, conservation-led built environment. A growing pipeline of boutique hotels, premium BTR schemes and student accommodation within strict planning constraints means space-efficient and discreet waste handling is a constant priority for developers and facilities managers.",
    buildingContext: "heritage hotels, luxury apartments and conservation-constrained developments",
    cityType: "hospitality",
  },
  {
    name: "Birmingham",
    slug: "birmingham",
    country: "England",
    region: "West Midlands",
    description:
      "Birmingham is the UK's second city and one of its most active development markets, driven by the HS2 Curzon Street terminus, the East Side regeneration zone and a significant BTR pipeline in the city centre. High-rise residential towers, major office developments and a thriving hotel sector make it one of the most demanding markets for whole-building waste management solutions in the UK.",
    buildingContext: "high-rise BTR developments, HS2 corridor schemes and major hotels",
    cityType: "metropolitan",
  },
  {
    name: "Bradford",
    slug: "bradford",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Bradford, UK City of Culture 2025, is undergoing significant regeneration with growing investment in residential and mixed-use development. A major student population, growing hospitality offer and an evolving BTR pipeline are driving demand for integrated waste management solutions across the city's new and refurbished building stock.",
    buildingContext: "student accommodation, BTR residential and mixed-use regeneration",
    cityType: "general",
  },
  {
    name: "Brighton & Hove",
    slug: "brighton",
    country: "England",
    region: "South East England",
    description:
      "Brighton & Hove combines a major university population with a world-famous hotel and hospitality sector and dense seafront residential development. Constrained urban plots and high-occupancy buildings mean efficient, compact waste systems are particularly important for developers and facilities managers operating in the city.",
    buildingContext: "coastal hotels, student accommodation and dense seafront residential",
    cityType: "university",
  },
  {
    name: "Bristol",
    slug: "bristol",
    country: "England",
    region: "South West England",
    description:
      "Bristol is one of the UK's strongest BTR markets outside London, with major development at Temple Meads, the Harbourside and Bedminster. A significant tech and creative economy, two large universities and a growing luxury hotel sector create diverse demand for waste chutes, compactors and bin handling systems across residential and commercial developments.",
    buildingContext: "high-rise BTR, Harbourside regeneration and university accommodation",
    cityType: "metropolitan",
  },
  {
    name: "Cambridge",
    slug: "cambridge",
    country: "England",
    region: "East of England",
    description:
      "Cambridge's world-class university and burgeoning science and technology sector are driving significant new development across both the historic city and its expanding research campuses. Purpose-built student accommodation, laboratory facilities, corporate headquarters and a growing hotel sector all require well-designed, integrated waste management solutions.",
    buildingContext: "university accommodation, science campus buildings and corporate headquarters",
    cityType: "university",
  },
  {
    name: "Canterbury",
    slug: "canterbury",
    country: "England",
    region: "South East England",
    description:
      "Canterbury's position as a major international tourist destination and home to three universities creates a distinctive mix of hospitality, student accommodation and heritage-sensitive residential development. Space-efficient waste systems are essential given the city's dense medieval street pattern and growing demand for modern living within conservation constraints.",
    buildingContext: "student accommodation, heritage hotels and tourism-led development",
    cityType: "university",
  },
  {
    name: "Carlisle",
    slug: "carlisle",
    country: "England",
    region: "North West England",
    description:
      "Carlisle serves as the main commercial and retail centre for Cumbria and the Borders, with growing investment in residential and logistics development. Its position as a key transport hub on the West Coast Main Line is attracting distribution and industrial development that requires robust waste handling solutions.",
    buildingContext: "logistics facilities, industrial buildings and growing residential",
    cityType: "industrial",
  },
  {
    name: "Chelmsford",
    slug: "chelmsford",
    country: "England",
    region: "East of England",
    description:
      "Chelmsford is one of Essex's fastest-growing urban centres with a significant residential development pipeline feeding London commuter demand. Growing BTR activity, a regenerating city centre and new commercial development are all driving requirements for modern waste management infrastructure.",
    buildingContext: "BTR residential, commuter-focused development and commercial regeneration",
    cityType: "general",
  },
  {
    name: "Chester",
    slug: "chester",
    country: "England",
    region: "North West England",
    description:
      "Chester's Roman and medieval heritage draws millions of tourists each year, supporting a premium hotel and hospitality sector that demands high standards for waste management. The Northgate regeneration scheme and a growing residential market are creating new opportunities for integrated waste handling in a conservation-sensitive urban environment.",
    buildingContext: "heritage hotels, residential development and conservation-area regeneration",
    cityType: "hospitality",
  },
  {
    name: "Chichester",
    slug: "chichester",
    country: "England",
    region: "South East England",
    description:
      "Chichester is a prosperous cathedral city with a significant tourism, arts and hospitality economy centred on the Chichester Festival Theatre and the nearby coast. Development within the city is heavily conservation-constrained, making space-efficient and discreet waste handling systems particularly important for hotel and residential developers.",
    buildingContext: "boutique hotels, heritage residential and arts-sector development",
    cityType: "hospitality",
  },
  {
    name: "Colchester",
    slug: "colchester",
    country: "England",
    region: "East of England",
    description:
      "Colchester, the UK's oldest recorded town and a city since 2022, is experiencing significant residential growth driven by the University of Essex campus and proximity to London. Growing student accommodation, BTR and commercial development all require modern waste handling infrastructure.",
    buildingContext: "student accommodation, BTR residential and commercial development",
    cityType: "general",
  },
  {
    name: "Coventry",
    slug: "coventry",
    country: "England",
    region: "West Midlands",
    description:
      "Coventry's UK City of Culture 2021 status accelerated major investment in the city centre, including the Friargate business district, growing residential towers and a regenerated hospitality sector. Two major universities generate significant student accommodation demand, and a growing BTR market is bringing new high-rise residential to the city.",
    buildingContext: "student accommodation, BTR residential towers and Friargate commercial",
    cityType: "metropolitan",
  },
  {
    name: "Derby",
    slug: "derby",
    country: "England",
    region: "East Midlands",
    description:
      "Derby is a major UK manufacturing hub, home to Rolls-Royce, Toyota and a large advanced manufacturing supply chain. Industrial estates, corporate campuses, growing residential development and the Cathedral Quarter regeneration create a diverse demand for waste compactors, containers and handling equipment.",
    buildingContext: "manufacturing facilities, corporate campuses and city-centre residential",
    cityType: "industrial",
  },
  {
    name: "Doncaster",
    slug: "doncaster",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Doncaster is a strategic logistics and distribution hub at the heart of the Sheffield City Region, with significant industrial and commercial development around the airport. Growing residential regeneration and Doncaster's role as a transport interchange are driving new building activity that requires integrated waste management solutions.",
    buildingContext: "logistics facilities, distribution centres and residential regeneration",
    cityType: "industrial",
  },
  {
    name: "Durham",
    slug: "durham",
    country: "England",
    region: "North East England",
    description:
      "Durham is a UNESCO World Heritage city and home to one of the UK's leading universities, attracting both significant tourism and a large student population. Premium hotels within the historic city, purpose-built student accommodation and a growing BTR market in the wider Durham area all require well-planned waste management systems.",
    buildingContext: "luxury heritage hotels, student accommodation and residential development",
    cityType: "hospitality",
  },
  {
    name: "Ely",
    slug: "ely",
    country: "England",
    region: "East of England",
    description:
      "Ely is a small cathedral city in Cambridgeshire that serves as a desirable residential and tourism centre within the Greater Cambridge commuter belt. Growing residential development on the city's fringes and a heritage hospitality sector create demand for compact and reliable waste handling systems.",
    buildingContext: "residential development, heritage hospitality and commuter-belt schemes",
    cityType: "general",
  },
  {
    name: "Exeter",
    slug: "exeter",
    country: "England",
    region: "South West England",
    description:
      "Exeter is the South West's fastest-growing city, with a world-class university, a thriving science park and a growing tech sector attracting significant investment. A strong hotel and hospitality economy, purpose-built student accommodation and a growing BTR pipeline make Exeter an increasingly active market for integrated waste management solutions.",
    buildingContext: "student accommodation, tech campus development and hospitality venues",
    cityType: "university",
  },
  {
    name: "Gloucester",
    slug: "gloucester",
    country: "England",
    region: "South West England",
    description:
      "Gloucester's Docks waterfront regeneration and its strategic position on the M5 corridor are attracting growing investment in logistics, commercial and residential development. Industrial estates alongside a regenerating retail and hospitality core create diverse requirements for waste compactors and handling equipment.",
    buildingContext: "waterfront regeneration, logistics facilities and commercial development",
    cityType: "industrial",
  },
  {
    name: "Hereford",
    slug: "hereford",
    country: "England",
    region: "West Midlands",
    description:
      "Hereford is the market town capital of one of England's most rural counties, with a heritage cathedral, growing residential development and a specialist food and agricultural sector. Hotels, residential developments and agricultural processing facilities all require reliable waste handling solutions suited to the local context.",
    buildingContext: "heritage hotels, residential development and agricultural facilities",
    cityType: "general",
  },
  {
    name: "Kingston upon Hull",
    slug: "hull",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Hull's UK City of Culture 2017 legacy transformed the city centre and created lasting momentum for investment in the Fruit Market creative quarter, the waterfront and growing residential development. A significant offshore wind energy sector, industrial heritage and growing hospitality economy make Hull a diverse market for waste management solutions.",
    buildingContext: "waterfront regeneration, industrial facilities and creative-quarter development",
    cityType: "industrial",
  },
  {
    name: "Lancaster",
    slug: "lancaster",
    country: "England",
    region: "North West England",
    description:
      "Lancaster is a historic maritime city and home to Lancaster University, one of the UK's top-ranked institutions. A significant student residential sector, growing hospitality economy and heritage development in the city centre create demand for waste chutes, laundry systems and handling equipment across a range of building types.",
    buildingContext: "student accommodation, heritage hospitality and residential development",
    cityType: "university",
  },
  {
    name: "Leeds",
    slug: "leeds",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Leeds is one of the UK's fastest-growing cities and arguably its strongest BTR market outside London, with a significant high-rise residential pipeline, major hotel brands and one of the UK's most active city-centre development programmes. The South Bank regeneration, Arena Quarter and growing luxury residential market make Leeds a major market for waste chutes, compactors and bin handling systems.",
    buildingContext: "high-rise BTR towers, major hotels and South Bank mixed-use development",
    cityType: "metropolitan",
  },
  {
    name: "Leicester",
    slug: "leicester",
    country: "England",
    region: "East Midlands",
    description:
      "Leicester has a diverse economy and a significant residential development pipeline, including a growing BTR market driven by two universities and a strong professional services sector. The Waterside regeneration and growing city-centre residential activity create demand for integrated waste management solutions across a range of building types.",
    buildingContext: "BTR residential, student accommodation and Waterside regeneration",
    cityType: "metropolitan",
  },
  {
    name: "Lichfield",
    slug: "lichfield",
    country: "England",
    region: "West Midlands",
    description:
      "Lichfield is a prosperous Staffordshire cathedral city within the Birmingham commuter belt, with a premium residential market and a heritage hospitality sector. Development within the city's conservation areas requires compact, discreet waste handling solutions that meet both performance and planning requirements.",
    buildingContext: "conservation-area residential, heritage hospitality and commercial development",
    cityType: "general",
  },
  {
    name: "Lincoln",
    slug: "lincoln",
    country: "England",
    region: "East Midlands",
    description:
      "Lincoln is a growing cathedral and university city with a fast-developing student accommodation sector and an expanding residential market in the Brayford Waterfront area. A thriving tourism and hospitality economy around the historic Steep Hill and castle complement the growing modern development pipeline.",
    buildingContext: "student accommodation, waterfront residential and heritage hospitality",
    cityType: "university",
  },
  {
    name: "Liverpool",
    slug: "liverpool",
    country: "England",
    region: "North West England",
    description:
      "Liverpool is one of the UK's most active development cities, with major schemes at Liverpool Waters, the Knowledge Quarter and a growing luxury hotel and residential market in the city centre. A world-heritage waterfront, two major universities and a thriving hospitality economy make Liverpool a significant market for whole-building waste management solutions.",
    buildingContext: "high-rise residential, Liverpool Waters mixed-use and luxury hotels",
    cityType: "metropolitan",
  },
  {
    name: "London",
    slug: "london",
    country: "England",
    region: "Greater London",
    description:
      "London is the UK's largest and most active development market, with a continuous pipeline of high-rise residential towers, major BTR schemes, 5-star hotels and mixed-use developments across every borough. Space constraints, high occupancy densities and the demands of luxury residential and hospitality operators make efficient, well-engineered waste management systems essential on virtually every major scheme.",
    buildingContext: "high-rise luxury residential, mega BTR schemes and 5-star hotels",
    cityType: "metropolitan",
  },
  {
    name: "Manchester",
    slug: "manchester",
    country: "England",
    region: "North West England",
    description:
      "Manchester is the UK's BTR capital, with more high-rise residential cranes in the sky than any other city outside London and a hospitality sector growing at pace. The Northern Quarter, Spinningfields, Deansgate and NOMA are just a few of the districts driving continuous demand for waste chutes, compactors, bin carousels and odour control systems across high-density residential and commercial buildings.",
    buildingContext: "high-rise BTR towers, luxury hotels and mixed-use city-centre development",
    cityType: "metropolitan",
  },
  {
    name: "Milton Keynes",
    slug: "milton-keynes",
    country: "England",
    region: "South East England",
    description:
      "Milton Keynes is one of the UK's most planned and fastest-growing cities, with a large corporate campus economy, significant logistics and distribution infrastructure and a continuously expanding residential market. Modern commercial headquarters, major retail and leisure developments and growing residential schemes require reliable, scalable waste handling solutions.",
    buildingContext: "corporate campuses, residential development and major retail and logistics",
    cityType: "industrial",
  },
  {
    name: "Newcastle upon Tyne",
    slug: "newcastle-upon-tyne",
    country: "England",
    region: "North East England",
    description:
      "Newcastle is the North East's commercial and cultural capital, with a growing BTR market, significant Quayside regeneration and a major hospitality and leisure sector. Science Central, Strawberry Place and the wider city-centre development pipeline are driving demand for integrated waste management systems in high-rise residential and commercial buildings.",
    buildingContext: "BTR residential towers, Quayside hotels and city-centre regeneration",
    cityType: "metropolitan",
  },
  {
    name: "Norwich",
    slug: "norwich",
    country: "England",
    region: "East of England",
    description:
      "Norwich is East Anglia's largest city and a major centre for higher education, financial services and technology. The University of East Anglia, a growing city-centre residential market and a well-developed hospitality and tourism sector create varied demand for waste chutes, compactors and handling equipment across building types.",
    buildingContext: "student accommodation, city-centre residential and hospitality",
    cityType: "general",
  },
  {
    name: "Nottingham",
    slug: "nottingham",
    country: "England",
    region: "East Midlands",
    description:
      "Nottingham is home to two major universities with a combined student population of over 60,000, generating enormous demand for purpose-built student accommodation. The Broad Marsh regeneration, a growing BTR market and major hotel brands are creating new high-rise residential and commercial development requiring integrated waste management solutions.",
    buildingContext: "student accommodation, BTR residential and Broad Marsh regeneration",
    cityType: "metropolitan",
  },
  {
    name: "Oxford",
    slug: "oxford",
    country: "England",
    region: "South East England",
    description:
      "Oxford's world-famous university, knowledge economy and international tourism create a development market characterised by premium hotels, purpose-built student accommodation and high-end residential within a tightly constrained heritage city. Space efficiency and discreet integration are key requirements for waste management systems serving Oxford's built environment.",
    buildingContext: "luxury hotels, student accommodation and knowledge-economy campus buildings",
    cityType: "university",
  },
  {
    name: "Peterborough",
    slug: "peterborough",
    country: "England",
    region: "East of England",
    description:
      "Peterborough is one of the UK's fastest-growing cities, with a major regeneration masterplan underway in the city centre and a large logistics and distribution economy taking advantage of its position on the East Coast Main Line. Growing residential development and commercial expansion are creating increasing demand for waste management solutions.",
    buildingContext: "residential regeneration, logistics facilities and commercial development",
    cityType: "industrial",
  },
  {
    name: "Plymouth",
    slug: "plymouth",
    country: "England",
    region: "South West England",
    description:
      "Plymouth is a maritime city with a major naval heritage, a growing university sector and a significant waterfront regeneration programme. Hotels, student accommodation and growing residential development around The Box cultural quarter are all driving demand for integrated waste handling solutions.",
    buildingContext: "student accommodation, waterfront regeneration and naval/commercial facilities",
    cityType: "general",
  },
  {
    name: "Portsmouth",
    slug: "portsmouth",
    country: "England",
    region: "South East England",
    description:
      "Portsmouth is a naval and maritime city undergoing significant waterfront regeneration, with Gunwharf Quays setting the benchmark for mixed-use leisure and retail. A growing BTR market, University of Portsmouth student accommodation and a significant hospitality economy are all creating demand for waste management solutions in high-density urban buildings.",
    buildingContext: "waterfront BTR, student accommodation and hospitality regeneration",
    cityType: "general",
  },
  {
    name: "Preston",
    slug: "preston",
    country: "England",
    region: "North West England",
    description:
      "Preston is Lancashire's county town and a city with a growing residential development pipeline, a major UCLan university campus and growing commercial and hospitality ambitions. City Deal investment, growing city-centre residential and student accommodation are driving demand for modern waste handling infrastructure.",
    buildingContext: "student accommodation, city-centre residential and commercial development",
    cityType: "general",
  },
  {
    name: "Ripon",
    slug: "ripon",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Ripon is a small North Yorkshire cathedral city surrounded by the Yorkshire Dales, with a premium rural tourism and hospitality economy. Country house hotels, boutique accommodation and heritage residential development within strict planning constraints require compact and efficient waste handling solutions.",
    buildingContext: "country house hotels, boutique hospitality and heritage residential",
    cityType: "hospitality",
  },
  {
    name: "Salford",
    slug: "salford",
    country: "England",
    region: "North West England",
    description:
      "Salford is one of the UK's most remarkable regeneration stories, anchored by MediaCityUK — home to the BBC, ITV and hundreds of creative and technology businesses — alongside a major BTR pipeline on Chapel Street and along the Irwell waterfront. High-rise residential towers, corporate campuses and a rapidly growing hospitality sector make Salford one of the most active markets for waste chutes and compactors in the North West.",
    buildingContext: "BTR residential towers, MediaCityUK corporate buildings and Irwell waterfront",
    cityType: "metropolitan",
  },
  {
    name: "Salisbury",
    slug: "salisbury",
    country: "England",
    region: "South West England",
    description:
      "Salisbury is a cathedral city with a strong tourism, heritage and defence economy, home to a premium hospitality sector serving both Stonehenge visitors and defence and technology professionals. Development within the city's conservation areas requires waste handling solutions that are compact, efficient and appropriate to the historic context.",
    buildingContext: "heritage hotels, residential development and defence-sector facilities",
    cityType: "hospitality",
  },
  {
    name: "Sheffield",
    slug: "sheffield",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Sheffield, the Steel City, has reinvented itself as a major student city and growing BTR market, with two major universities generating significant purpose-built accommodation demand. West Bar, Kelham Island and the Heart of the City regeneration are creating a growing pipeline of high-rise residential and mixed-use development requiring integrated waste management solutions.",
    buildingContext: "student accommodation, BTR residential and Heart of the City regeneration",
    cityType: "metropolitan",
  },
  {
    name: "Southampton",
    slug: "southampton",
    country: "England",
    region: "South East England",
    description:
      "Southampton is a major port city and a growing development market, with a significant BTR pipeline, University of Southampton student accommodation and waterfront regeneration at West Quay and Mayflower. A cruise terminal economy and growing hospitality sector add to the demand for integrated waste management solutions.",
    buildingContext: "waterfront BTR, student accommodation and port-sector commercial",
    cityType: "general",
  },
  {
    name: "Southend-on-Sea",
    slug: "southend-on-sea",
    country: "England",
    region: "East of England",
    description:
      "Southend-on-Sea became a city in 2022 and is one of London's closest coastal cities, attracting significant residential development from London overspill demand. Seafront hotel regeneration, growing residential development and Southend Airport's business zone are all creating demand for waste handling solutions.",
    buildingContext: "seafront hotels, London-overspill residential and airport-zone commercial",
    cityType: "general",
  },
  {
    name: "St Albans",
    slug: "st-albans",
    country: "England",
    region: "East of England",
    description:
      "St Albans is one of the UK's most prosperous commuter cities, with a premium residential market, a strong hotel and conference sector and a growing commercial economy built on excellent rail connections to London. High-value BTR, boutique hotels and high-end residential within the city's conservation area require waste handling solutions that are both high-performing and discreet.",
    buildingContext: "premium BTR residential, boutique hotels and high-end commercial",
    cityType: "hospitality",
  },
  {
    name: "Stoke-on-Trent",
    slug: "stoke-on-trent",
    country: "England",
    region: "West Midlands",
    description:
      "Stoke-on-Trent, the Potteries city, is undergoing significant regeneration with growing investment in affordable residential, commercial and cultural development. A large industrial base, growing distribution economy and residential development pipeline create demand for robust waste compactors and handling equipment.",
    buildingContext: "industrial facilities, affordable residential and commercial regeneration",
    cityType: "industrial",
  },
  {
    name: "Sunderland",
    slug: "sunderland",
    country: "England",
    region: "North East England",
    description:
      "Sunderland is a city in transformation, with Nissan's UK automotive plant, a growing technology and software sector and significant regeneration investment around the Riverside Sunderland masterplan. Industrial waste handling requirements alongside growing city-centre residential and hospitality development create diverse demand for waste management solutions.",
    buildingContext: "automotive and industrial facilities, city-centre residential and commercial",
    cityType: "industrial",
  },
  {
    name: "Truro",
    slug: "truro",
    country: "England",
    region: "South West England",
    description:
      "Truro is Cornwall's only city and the administrative and commercial centre for one of the UK's most tourism-intensive regions. Premium hotels, coastal living developments and a growing serviced apartment sector create demand for laundry, waste and odour management systems suited to the hospitality and residential mix.",
    buildingContext: "premium hotels, coastal residential and tourism-sector development",
    cityType: "hospitality",
  },
  {
    name: "Wakefield",
    slug: "wakefield",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "Wakefield is a growing Yorkshire city with a strong arts and culture economy centred on the Hepworth Gallery and Yorkshire Sculpture Park, alongside growing commercial and residential development. Industrial heritage in the surrounding area and a growing city-centre residential market create demand for both industrial and residential waste handling solutions.",
    buildingContext: "residential regeneration, industrial facilities and cultural-sector development",
    cityType: "general",
  },
  {
    name: "Wells",
    slug: "wells",
    country: "England",
    region: "South West England",
    description:
      "Wells is England's smallest city by population, a Somerset cathedral city with a predominantly heritage and tourism-driven economy. Premium boutique hotels and holiday accommodation within a conservation-sensitive setting require compact, reliable waste handling solutions appropriate to a small but high-value market.",
    buildingContext: "boutique heritage hotels and conservation-area residential",
    cityType: "hospitality",
  },
  {
    name: "Westminster",
    slug: "westminster",
    country: "England",
    region: "Greater London",
    description:
      "The City of Westminster is London's political, cultural and luxury hotel hub, home to some of the world's most prestigious residential and hospitality addresses. Mayfair, Belgravia, Knightsbridge and the West End demand waste management solutions that combine engineering excellence with the discretion required in premium urban environments.",
    buildingContext: "luxury hotels, premium residential and iconic commercial addresses",
    cityType: "metropolitan",
  },
  {
    name: "Winchester",
    slug: "winchester",
    country: "England",
    region: "South East England",
    description:
      "Winchester is regularly ranked among the UK's most desirable places to live, with a premium residential market, significant heritage and tourism economy and a boutique hotel sector. Development within the city's extensive conservation areas requires waste handling systems that perform to the highest standards while fitting discreetly into the historic built environment.",
    buildingContext: "boutique heritage hotels, premium residential and conservation-area development",
    cityType: "hospitality",
  },
  {
    name: "Wolverhampton",
    slug: "wolverhampton",
    country: "England",
    region: "West Midlands",
    description:
      "Wolverhampton is a major West Midlands city undergoing significant regeneration through the i9 investment framework, with growing commercial, residential and cultural investment in the city centre. A large manufacturing and logistics base in the surrounding Black Country creates strong demand for industrial waste compactors and handling equipment.",
    buildingContext: "industrial facilities, commercial regeneration and growing residential",
    cityType: "industrial",
  },
  {
    name: "Worcester",
    slug: "worcester",
    country: "England",
    region: "West Midlands",
    description:
      "Worcester is a prosperous cathedral city on the River Severn, with a growing residential and retail economy and a solid hospitality sector serving both tourists and corporate visitors. A growing BTR market, a new university campus and the Shrub Hill regeneration scheme are creating demand for modern waste management infrastructure.",
    buildingContext: "residential development, heritage hospitality and university campus buildings",
    cityType: "general",
  },
  {
    name: "York",
    slug: "york",
    country: "England",
    region: "Yorkshire and the Humber",
    description:
      "York is one of the UK's most visited cities, with an exceptional heritage tourism economy and a premium hotel sector operating within a UNESCO World Heritage setting. University of York student accommodation, a growing BTR market and one of the UK's most active hotel development pipelines create strong demand for waste chutes, laundry systems and odour control in a density-constrained environment.",
    buildingContext: "luxury heritage hotels, student accommodation and conservation-area residential",
    cityType: "hospitality",
  },

  // ─── SCOTLAND ────────────────────────────────────────────────────────────────

  {
    name: "Aberdeen",
    slug: "aberdeen",
    country: "Scotland",
    region: "North East Scotland",
    description:
      "Aberdeen is the energy capital of Europe, home to the headquarters of major oil and gas companies and a growing renewables transition economy. Large corporate campuses, premium hotels serving energy industry professionals, a significant university sector and growing residential development make Aberdeen a varied market for waste management solutions.",
    buildingContext: "corporate headquarters, premium hotels and energy-sector facilities",
    cityType: "general",
  },
  {
    name: "Dundee",
    slug: "dundee",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Dundee's waterfront regeneration, anchored by the V&A Dundee design museum, has transformed the city into one of Scotland's most dynamic development markets. A growing creative industries economy, two universities, premium waterfront hotels and a growing residential market make Dundee an increasingly active market for integrated waste management solutions.",
    buildingContext: "waterfront development, student accommodation and creative-quarter regeneration",
    cityType: "university",
  },
  {
    name: "Dunfermline",
    slug: "dunfermline",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Dunfermline is a rapidly expanding Fife city and one of Scotland's fastest-growing residential development markets, benefiting from its rail connections to Edinburgh and Glasgow. A large new residential pipeline, growing commercial activity and improving town centre are creating demand for modern waste handling solutions.",
    buildingContext: "new residential development, commercial facilities and growing retail",
    cityType: "general",
  },
  {
    name: "Edinburgh",
    slug: "edinburgh",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Edinburgh is Scotland's capital and one of the UK's most active development cities, with a world-class tourism economy, luxury hotel sector, a thriving festivals calendar and a growing BTR market. The Old Town, New Town, Leith and the Western Waterfront are all active development zones where high-quality waste management solutions are essential for residential towers, boutique hotels and mixed-use schemes.",
    buildingContext: "high-rise BTR, luxury hotels and Old Town hospitality",
    cityType: "metropolitan",
  },
  {
    name: "Glasgow",
    slug: "glasgow",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Glasgow is Scotland's largest city and a major development hub, with the Clyde waterfront, Glasgow City Innovation District and significant BTR pipeline in the city centre all driving new high-rise residential and mixed-use development. A world-class hotel and hospitality economy, two major universities and a growing student accommodation sector make Glasgow one of the most active markets for waste chutes and compactors in Scotland.",
    buildingContext: "high-rise BTR, Clyde waterfront development and major hotels",
    cityType: "metropolitan",
  },
  {
    name: "Inverness",
    slug: "inverness",
    country: "Scotland",
    region: "Highlands",
    description:
      "Inverness is the capital of the Highlands and the main service centre for Scotland's most tourism-intensive region. A growing hospitality economy serving Highland tourism, significant whisky industry infrastructure and a growing residential market make Inverness a diverse market for waste handling solutions suited to both hospitality and commercial applications.",
    buildingContext: "Highland tourism hotels, whisky industry facilities and residential development",
    cityType: "hospitality",
  },
  {
    name: "Perth",
    slug: "perth",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Perth, the Fair City, is the gateway to Perthshire and the wider Highland tourism market, with a premium hotel and hospitality sector and a growing residential development market. Cultural investment following Perth's city status and ongoing town centre regeneration are creating new demand for waste management solutions.",
    buildingContext: "tourism hotels, residential development and town-centre regeneration",
    cityType: "hospitality",
  },
  {
    name: "Stirling",
    slug: "stirling",
    country: "Scotland",
    region: "Central Scotland",
    description:
      "Stirling's iconic castle and Wallace Monument draw significant tourism, supporting a premium hotel and conference economy, while Stirling University and a growing residential sector create additional demand. Development within and around the historic city requires waste handling solutions that are reliable, efficient and sympathetic to a sensitive built environment.",
    buildingContext: "castle-adjacent hotels, student accommodation and residential development",
    cityType: "hospitality",
  },

  // ─── WALES ───────────────────────────────────────────────────────────────────

  {
    name: "Bangor",
    slug: "bangor-wales",
    country: "Wales",
    region: "North Wales",
    description:
      "Bangor is a university city on the North Wales coast, home to Bangor University and a significant student residential economy. The city's growing hospitality offer, student accommodation pipeline and a developing waterfront area create demand for waste chutes, handling equipment and odour management suited to mixed residential and hospitality buildings.",
    buildingContext: "student accommodation, waterfront hospitality and residential development",
    cityType: "university",
  },
  {
    name: "Cardiff",
    slug: "cardiff",
    country: "Wales",
    region: "South Wales",
    description:
      "Cardiff is Wales's capital and one of the UK's most active development cities, with major schemes at Cardiff Bay, Central Square and a significant BTR pipeline growing throughout the city. A world-class events economy, major hotel brands, two major universities and a growing luxury residential market make Cardiff a key market for whole-building waste management solutions.",
    buildingContext: "high-rise BTR, Cardiff Bay development and major hotel and residential schemes",
    cityType: "metropolitan",
  },
  {
    name: "Newport",
    slug: "newport",
    country: "Wales",
    region: "South Wales",
    description:
      "Newport is a growing South Wales city with a significant industrial and logistics economy, Celtic Manor Resort as its flagship hospitality asset, and growing residential and commercial investment. The city's regeneration ambitions and improving infrastructure are creating new opportunities for waste management solutions across industrial, commercial and residential buildings.",
    buildingContext: "resort and hotel facilities, industrial logistics and growing residential",
    cityType: "general",
  },
  {
    name: "St Asaph",
    slug: "st-asaph",
    country: "Wales",
    region: "North Wales",
    description:
      "St Asaph is Wales's smallest city by population, a North Wales market town with a heritage cathedral and a growing local economy serving the wider Denbighshire area. Small-scale residential development, local hospitality and heritage tourism create modest but consistent demand for reliable waste handling solutions.",
    buildingContext: "heritage hospitality, residential development and small commercial",
    cityType: "general",
  },
  {
    name: "St Davids",
    slug: "st-davids",
    country: "Wales",
    region: "West Wales",
    description:
      "St Davids is Britain's smallest city by population, a Pembrokeshire pilgrimage and tourism destination built around its magnificent medieval cathedral. Premium boutique accommodation, holiday retreats and heritage hospitality in a coastal and conservation setting require compact, reliable waste handling solutions appropriate to a small but high-value tourism economy.",
    buildingContext: "boutique heritage hotels and pilgrimage tourism accommodation",
    cityType: "hospitality",
  },
  {
    name: "Swansea",
    slug: "swansea",
    country: "Wales",
    region: "South Wales",
    description:
      "Swansea is Wales's second city, with a major regeneration programme underway in the Kingsway and city centre, a significant university economy and a growing marina and waterfront hospitality sector. Growing BTR activity, purpose-built student accommodation and a growing hotel pipeline are creating demand for integrated waste management solutions.",
    buildingContext: "BTR residential, student accommodation and marina waterfront development",
    cityType: "metropolitan",
  },
  {
    name: "Wrexham",
    slug: "wrexham",
    country: "Wales",
    region: "North Wales",
    description:
      "Wrexham, North Wales's largest town and a city since 2022, has attracted growing investment in hospitality, commercial and residential development. An industrial and logistics economy, growing creative and digital sector and improving town centre are all creating demand for waste handling solutions.",
    buildingContext: "industrial facilities, commercial regeneration and growing residential",
    cityType: "industrial",
  },

  // ─── NORTHERN IRELAND ────────────────────────────────────────────────────────

  {
    name: "Armagh",
    slug: "armagh",
    country: "Northern Ireland",
    region: "County Armagh",
    description:
      "Armagh is the ecclesiastical capital of Ireland, with two cathedrals, significant heritage tourism and a thriving local food production economy. Heritage hotels, growing residential development and specialist processing facilities all create demand for reliable waste handling solutions suited to the local context.",
    buildingContext: "heritage hotels, residential development and food production facilities",
    cityType: "general",
  },
  {
    name: "Bangor",
    slug: "bangor-northern-ireland",
    country: "Northern Ireland",
    region: "County Down",
    description:
      "Bangor is a coastal commuter city and marina destination for greater Belfast, with a growing residential market and an improving seafront hospitality and leisure offer. Growing investment in the waterfront and marina area alongside significant residential development create demand for waste chutes and handling equipment suited to multi-storey residential and hospitality buildings.",
    buildingContext: "marina residential development, coastal hotels and commuter housing",
    cityType: "general",
  },
  {
    name: "Belfast",
    slug: "belfast",
    country: "Northern Ireland",
    region: "County Antrim",
    description:
      "Belfast is Northern Ireland's capital and one of the UK's most remarkable regeneration cities, with the Titanic Quarter, Cathedral Quarter and growing BTR market in the city centre all driving major investment. Major hotel brands, high-rise residential towers, a thriving hospitality economy and a growing student accommodation sector make Belfast an increasingly active market for waste chutes, compactors and odour management solutions.",
    buildingContext: "high-rise BTR, Titanic Quarter hotels and Cathedral Quarter mixed-use",
    cityType: "metropolitan",
  },
  {
    name: "Lisburn",
    slug: "lisburn",
    country: "Northern Ireland",
    region: "County Antrim",
    description:
      "Lisburn is a growing city in the greater Belfast area, with significant retail, commercial and residential development serving Belfast's expanding commuter population. Industrial estates, commercial parks and growing residential development create demand for waste compactors and handling equipment suited to commercial and multi-residential buildings.",
    buildingContext: "commercial retail, industrial facilities and growing residential",
    cityType: "industrial",
  },
  {
    name: "Londonderry / Derry",
    slug: "londonderry-derry",
    country: "Northern Ireland",
    region: "County Londonderry",
    description:
      "Londonderry/Derry, UK City of Culture 2013, has undergone significant regeneration in its Walled City, waterfront and wider urban areas. Ulster University's Magee campus, a growing hospitality economy and cross-border commerce with the Republic make Derry a diverse market for waste management solutions across residential, commercial and hospitality buildings.",
    buildingContext: "student accommodation, Walled City hospitality and waterfront regeneration",
    cityType: "general",
  },
  {
    name: "Newry",
    slug: "newry",
    country: "Northern Ireland",
    region: "County Down",
    description:
      "Newry is Northern Ireland's gateway city to the Republic of Ireland and a major cross-border commerce hub, with significant retail, commercial and growing residential development. Its strategic location on the A1 Belfast–Dublin corridor and growing industrial and logistics development create demand for waste compactors and handling equipment suited to commercial and residential applications.",
    buildingContext: "cross-border commercial, retail development and growing residential",
    cityType: "general",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const citiesByCountry: Record<string, City[]> = {
  England: cities.filter((c) => c.country === "England"),
  Scotland: cities.filter((c) => c.country === "Scotland"),
  Wales: cities.filter((c) => c.country === "Wales"),
  "Northern Ireland": cities.filter((c) => c.country === "Northern Ireland"),
};
