export interface StadiumData {
  name: string;
  nameAr?: string;
  city: string;
  lat: number;
  lng: number;
  capacity: string;
  capacityNote: string;
  status: string;
  maxRound: string;
  distFromCentre: string;
  architect?: string;
  opened?: string;
  homeTo?: string;
  design: string;
  keyFact: string;
  gettingThere: string[];
  matchDayTips: string[];
  surroundings: string;
}

export const stadiums: Record<string, StadiumData> = {
  casablanca: {
    name: 'Grand Stade Hassan II',
    nameAr: 'ملعب الحسن الثاني',
    city: 'Casablanca',
    lat: 33.6050,
    lng: -7.3230,
    capacity: '115,000',
    capacityNote: 'Will be the largest football stadium in the world. Second-largest stadium of any kind, behind only Narendra Modi Stadium in Ahmedabad.',
    status: 'Under construction. Groundworks began late 2023. Expected completion 2028. Budget ~5 billion MAD (~$500 million).',
    maxRound: 'Final (Morocco is pushing for the 2030 World Cup final here; Santiago Bernabéu in Madrid is the other contender)',
    distFromCentre: '40 km east of Casablanca centre, in El Mansouria, Benslimane Province',
    architect: 'Oualalou + Choi (Paris-based Moroccan architect Tarik Oualalou) with Populous',
    opened: 'Expected 2028',
    homeTo: 'Morocco national team, Raja CA, Wydad AC (replacing Stade Mohammed V)',
    design: 'Inspired by the "moussem" — a traditional Moroccan communal tent gathering. The roof canopy shelters like a tent, with 32 grand stairways doubling as botanical walkways elevated 28 metres. Three steep tiers at each end hold 29,500 general admission seats. Five tiers of hospitality with 12,000+ VIP/VVIP seats flanking the Royal box. Gardens extend inside the roof structure.',
    keyFact: 'Morocco first proposed this stadium for the 2010 World Cup bid (lost to South Africa 14–10). It was proposed again for 2026 (lost to USA/Canada/Mexico). Third time\'s the charm.',
    gettingThere: [
      'Dedicated shuttle buses from Casa Voyageurs train station — the primary transport option. Plan to arrive early.',
      'A dedicated rail link to the stadium is planned for 2030. Currently no public transport to Benslimane.',
      'Private transfer from Casablanca centre: 40 min without traffic. Double that on match days.',
      'Do NOT stay near the stadium — there is nothing in Benslimane. Stay in Casablanca and take the shuttle.',
    ],
    matchDayTips: [
      'This is the newest and least-tested venue. Expect teething problems with transport logistics. Build in extra time.',
      'The stadium is on a 100-hectare open site. Sun exposure will be significant — bring water, sunscreen, a hat.',
      'Fan zone expected around the stadium complex. Arrive 3–4 hours early to experience it.',
      'Return shuttles will be crowded after the final whistle. If watching a group stage match, consider leaving 5 minutes early to beat the rush.',
    ],
    surroundings: 'The site is rural — farmland and forest. The nearest town (El Mansouria) is small. All amenities will be inside the stadium complex. Casablanca is your base.',
  },

  marrakech: {
    name: 'Grand Stade de Marrakech',
    nameAr: 'الملعب الكبير لمراكش',
    city: 'Marrakech',
    lat: 31.6295,
    lng: -8.0530,
    capacity: '~46,000',
    capacityNote: 'Expanding from 41,000 to approximately 45,860 after renovation. Athletics track being removed, pitch lowered 6m, new lower-tier stands built closer to the pitch.',
    status: 'Closing for Phase 2 renovation (Feb 2026). Converting to football-only venue. Two phases: Phase 1 (interior, completed for AFCON 2025), Phase 2 (major rebuild, track removal, pitch lowering — due by 2028).',
    maxRound: 'Group stage / Round of 16',
    distFromCentre: '7 km west of Jemaa el-Fna, Daoudiate district',
    architect: 'Saâd Benkirane (original and renovation)',
    opened: '2011 (original)',
    homeTo: 'Kawkab Marrakech',
    design: 'After renovation: a compact, football-specific bowl with spectators significantly closer to the pitch. The removal of the athletics track is the key change — transforming it from a multi-purpose arena to a proper football ground with improved atmosphere.',
    keyFact: 'A new train station is being built next to the stadium, due by 2028, which will connect to the new Marrakech–Casablanca HSR line. By 2030, you could take a high-speed train directly to the ground.',
    gettingThere: [
      'Taxi from Jemaa el-Fna: 15 min, 40–60 MAD in normal traffic. Double on match days.',
      'Match-day shuttles expected from Gare Routière (bus station) and potentially the new HSR station.',
      'Walking is not practical (7 km from the medina).',
      'If staying in Guéliz, taxis will be easier — the stadium is on the Guéliz side of the city.',
    ],
    matchDayTips: [
      'June heat: 35–40°C at kickoff time. The current stadium has no roof. Bring water, hat, sunscreen.',
      'Leave the medina early — traffic between medina and Daoudiate gets gridlocked on event days.',
      'Fan zone likely around the stadium parking area. Local food vendors will set up — better and cheaper than inside.',
      'After the match: Jemaa el-Fna food stalls run until 1am. Post-match harira at stall 1.',
    ],
    surroundings: 'The Daoudiate district is residential with some cafés and shops. Not much to do around the stadium itself. The medina (7 km east) and Guéliz (3 km east) are where the life is.',
  },

  rabat: {
    name: 'Complexe Prince Moulay Abdellah',
    nameAr: 'ملعب الأمير مولاي عبد الله',
    city: 'Rabat',
    lat: 33.9550,
    lng: -6.8700,
    capacity: '68,700',
    capacityNote: 'Brand new. Opened September 2025. Built in just 24 months — potentially a Guinness World Record for fastest stadium construction.',
    status: 'Completed. Opened 5 September 2025. Hosted AFCON 2025 opening match and final.',
    maxRound: 'Semi-final',
    distFromCentre: '7 km from Rabat city centre, Hay Riad district',
    architect: 'Populous (consultation)',
    opened: 'September 2025',
    homeTo: 'Morocco national team (shared with Casablanca)',
    design: 'A three-stand covered bowl with a windbreak roof, solar energy, HD LED screens, and smart crowd management. The facade uses illuminated pixel technology similar to The Sphere in Las Vegas — fully programmable, turning into a giant animated screen at sunset. A 23,000-capacity fan section behind one goal creates a wall of noise.',
    keyFact: 'The illuminated facade was the surprise of AFCON 2025. At sunset, the entire exterior becomes an LED canvas — the light shows are not projections but individually illuminated pixels built into the facade itself.',
    gettingThere: [
      'Tram Line 2: direct service from city centre to the stadium. 20 min, 6 MAD. This is the best option.',
      'New tramway extensions (23.7 km of new track by 2028, another 21.3 km by 2030) will further improve access.',
      'Taxi from the medina: 20–30 min, 30–50 MAD.',
      'The surrounding road network has been expanded specifically for the stadium. New highways connect to the wider city.',
    ],
    matchDayTips: [
      'This is the only venue tested at full capacity before 2030 — AFCON 2025 worked out the transport kinks.',
      'The tram is the smart option. It avoids all traffic. Take it.',
      'The 23,000-seat fan section behind the goal is where the atmosphere lives. If you want noise, sit there.',
      'The LED facade does a pre-match light show. Arrive before sunset to see it.',
    ],
    surroundings: 'Hay Riad is Rabat\'s modern commercial district — malls, restaurants, hotels. More practical than atmospheric, but well-connected.',
  },

  tangier: {
    name: 'Grand Stade Ibn Batouta',
    nameAr: 'الملعب الكبير ابن بطوطة',
    city: 'Tangier',
    lat: 35.7280,
    lng: -5.8340,
    capacity: '75,600',
    capacityNote: 'Recently renovated and expanded. Includes 5,800+ VIP seats and luxury boxes. Roof modification completed in just 69 days.',
    status: 'Renovation completed. Athletics track removed. Roof installed. One of Africa\'s largest stadium covers. Ready for 2030.',
    maxRound: 'Quarter-final / Semi-final',
    distFromCentre: '8 km south of city centre',
    architect: 'Original design by Moroccan-Italian consortium',
    opened: '2011 (original), renovated 2024–2025',
    homeTo: 'Ittihad Tanger, MAS Fes (during AFCON)',
    design: 'A football-specific stadium after the track removal. The new 360° roof is one of Africa\'s largest, creating better atmosphere and shelter. Advanced HD lighting meets FIFA broadcast standards. The renovation brought spectators significantly closer to the pitch.',
    keyFact: 'Named after Ibn Battuta, the 14th-century Tangier-born explorer who travelled 120,000 km across three continents. The stadium hosted Morocco\'s 2–1 friendly win over Brazil in 2023 — the match that showed Morocco could compete with anyone.',
    gettingThere: [
      'Taxi from city centre: 15 min, 30–50 MAD.',
      'Match-day shuttles expected from the port, Grand Socco, and new marina area.',
      'Tangier is building a tram network — unclear if it will reach the stadium by 2030.',
      'From Spain: ferry from Tarifa (35 min), then taxi or shuttle from Tangier port.',
    ],
    matchDayTips: [
      'If you\'re coming from Spain for the day, the ferry from Tarifa takes 35 min. You can watch football in Morocco and sleep in Spain.',
      'The roofed stadium means less sun exposure than Marrakech or Agadir. But June evenings are pleasant — 22–25°C.',
      'Tangier\'s medina is compact and walkable. Post-match dinner in the Kasbah or Petit Socco is 20 min by taxi.',
      'The stadium has already hosted major events (Club World Cup 2022). Transport logistics are proven.',
    ],
    surroundings: 'The area south of the city is developing rapidly. Some commercial areas nearby, but the main attractions (medina, kasbah, port, marina) are all in the centre.',
  },

  fes: {
    name: 'Complexe Sportif de Fès',
    nameAr: 'المركب الرياضي لفاس',
    city: 'Fes',
    lat: 34.0050,
    lng: -4.9630,
    capacity: '55,800',
    capacityNote: 'Undergoing renovation to expand from 45,000. Took 13 years to build originally (1990s–2003). The renovation aims to bring it to FIFA 2030 standards.',
    status: 'Renovation in progress. Phase 1 for AFCON 2025, Phase 2 for World Cup 2030 standards.',
    maxRound: 'Group stage / Round of 16',
    distFromCentre: '5 km from Fes el-Bali medina, Route d\'Imouzzer',
    opened: '2003 (original)',
    homeTo: 'MAS Fes, Wydad de Fès',
    design: 'Multi-purpose facility being upgraded to modern standards. The renovation includes expanded seating, improved facilities, and FIFA-standard pitch and lighting. Can host both football and athletics.',
    keyFact: 'Fes is the smallest host city and this is the smallest venue — but Fes el-Bali (the medina) is the largest car-free urban zone on Earth. The contrast between the medieval medina and a modern stadium is part of the experience.',
    gettingThere: [
      'Taxi from the medina: 15 min, 20–40 MAD.',
      'From the Ville Nouvelle: 10 min taxi.',
      'No tram in Fes. Taxis are the primary transport.',
      'Match-day shuttle expected from Fes train station.',
    ],
    matchDayTips: [
      'Fes is the most conservative host city. Dress modestly around the medina. Alcohol is less visible here.',
      'The medina is your pre-match experience. Get deliberately lost in the morning — the wrong turn is the right turn.',
      'Post-match: the medina is quiet after 10pm. Arrange dinner at your riad or Café Clock.',
      'The stadium is the most intimate of the six venues. The atmosphere will be intense.',
    ],
    surroundings: 'Route d\'Imouzzer area has some commercial activity. The real draw is 5 km away in the medina.',
  },

  agadir: {
    name: 'Grand Stade d\'Agadir (Stade Adrar)',
    nameAr: 'الملعب الكبير لأكادير',
    city: 'Agadir',
    lat: 30.3960,
    lng: -9.5430,
    capacity: '46,000',
    capacityNote: 'FIFA-confirmed: gross 46,000, net 42,800 for 2030. Expanding from 41,800. Phase 2 adds a 360° panoramic roof.',
    status: 'Phase 1 complete (AFCON 2025). Phase 2 by 2030: seating expansion + panoramic roof installation. €34 million invested to date.',
    maxRound: 'Group stage / Round of 16',
    distFromCentre: '10 km east of the main tourist hotel zone on the beach strip',
    architect: 'Gregotti Associati (Italy) with Saâd Benkirane (Morocco)',
    opened: '2013',
    homeTo: 'Hassania Agadir',
    design: '"Adrar" means "mountains" in Amazigh (Tamazight). The design echoes the Atlas Mountains with flowing lines and earth tones. Partly sunken into excavated land — the excavated earth forms embankments. This method improves seismic resistance, crucial in earthquake-prone Agadir. The new panoramic roof will harness Atlantic breezes for natural ventilation.',
    keyFact: 'Construction began in 2003 for the 2006 World Cup bid, stopped when Morocco lost, restarted in 2007, stopped again, finally opened in 2013 for the FIFA Club World Cup. The most patient stadium in football.',
    gettingThere: [
      'Free match-day shuttle buses from main hotel zones, city centre, and park-and-ride locations. Start 4 hours before kickoff.',
      'Petit taxi from beach strip: 40–60 MAD.',
      'Stadium parking: 4,100 spaces (expanded from 2,600). But driving is not recommended on match days.',
      'The city is flat — cycling is viable if you\'re staying within 5 km.',
    ],
    matchDayTips: [
      'This is the most relaxed host city. Morning surf, afternoon match, evening beach. That\'s the plan.',
      'The beach strip hotels are 10 km away — budget 30 min by shuttle, more by taxi on match days.',
      'June weather: 25–28°C, Atlantic breeze. The most comfortable match-day conditions of any host city.',
      'The new panoramic roof will provide shade — a significant upgrade from the current open bowl.',
    ],
    surroundings: 'A new urban park is being developed around the stadium with intelligent solar lighting (274 million MAD project). By 2030, the stadium precinct should be a proper destination.',
  },
};

export function getStadiumByCity(cityId: string): StadiumData | undefined {
  return stadiums[cityId];
}
