export interface Showroom {
  name: string;
  address: string;
  city: string;
  phone: string;
}

export const showroomsByCarId: Record<string, Showroom> = {
  // Vintage
  v1: {
    name: 'HOOD Heritage Gallery — Mumbai',
    address: '14, Pedder Road, Breach Candy',
    city: 'Mumbai, Maharashtra 400026',
    phone: '+91 98201 43765',
  },
  v2: {
    name: 'HOOD Classic Atelier — Delhi',
    address: '7, Aurangzeb Road, Lutyens\' Delhi',
    city: 'New Delhi 110011',
    phone: '+91 98110 67234',
  },
  v3: {
    name: 'HOOD Vintage Pavilion — Bangalore',
    address: '22, Lavelle Road, Ashok Nagar',
    city: 'Bengaluru, Karnataka 560001',
    phone: '+91 98440 29871',
  },
  v4: {
    name: 'HOOD Collectors\' Lounge — Chennai',
    address: '5, Cathedral Road, Gopalapuram',
    city: 'Chennai, Tamil Nadu 600086',
    phone: '+91 94440 58312',
  },
  v5: {
    name: 'HOOD Prestige House — Hyderabad',
    address: '38, Road No. 12, Banjara Hills',
    city: 'Hyderabad, Telangana 500034',
    phone: '+91 98490 71456',
  },
  v6: {
    name: 'HOOD Motorcar Estate — Kolkata',
    address: '9, Alipore Road, Alipore',
    city: 'Kolkata, West Bengal 700027',
    phone: '+91 98300 62189',
  },
  v7: {
    name: 'HOOD Vintage Studio — Pune',
    address: '16, Koregaon Park Road, Koregaon Park',
    city: 'Pune, Maharashtra 411001',
    phone: '+91 98220 34907',
  },
  v8: {
    name: 'HOOD Classic Salon — Ahmedabad',
    address: '3, Judges Bungalow Road, Bodakdev',
    city: 'Ahmedabad, Gujarat 380054',
    phone: '+91 98250 81643',
  },
  v9: {
    name: 'HOOD Heritage Showroom — Jaipur',
    address: '11, C-Scheme, Sardar Patel Marg',
    city: 'Jaipur, Rajasthan 302001',
    phone: '+91 94140 27865',
  },
  v10: {
    name: 'HOOD Motorcar Gallery — Chandigarh',
    address: '24, Sector 17-C, City Centre',
    city: 'Chandigarh 160017',
    phone: '+91 98150 43921',
  },

  // Sports
  s1: {
    name: 'HOOD Performance Centre — Gurgaon',
    address: '8, DLF Cyber City, Phase II',
    city: 'Gurugram, Haryana 122002',
    phone: '+91 98182 56034',
  },
  s2: {
    name: 'HOOD Sports Arena — Noida',
    address: '45, Sector 18, Atta Market',
    city: 'Noida, Uttar Pradesh 201301',
    phone: '+91 98100 74523',
  },
  s3: {
    name: 'HOOD Track Edition — Kochi',
    address: '12, Marine Drive, Ernakulam',
    city: 'Kochi, Kerala 682031',
    phone: '+91 94470 38912',
  },
  s4: {
    name: 'HOOD Speed House — Indore',
    address: '6, Vijay Nagar, AB Road',
    city: 'Indore, Madhya Pradesh 452010',
    phone: '+91 98930 61247',
  },
  s5: {
    name: 'HOOD Motorsport Lounge — Surat',
    address: '19, Athwa Lines, Ring Road',
    city: 'Surat, Gujarat 395007',
    phone: '+91 98240 57831',
  },
  s6: {
    name: 'HOOD GT Studio — Nagpur',
    address: '33, Wardha Road, Dharampeth',
    city: 'Nagpur, Maharashtra 440010',
    phone: '+91 98230 49165',
  },
  s7: {
    name: 'HOOD Apex Showroom — Lucknow',
    address: '2, Hazratganj, Mahatma Gandhi Marg',
    city: 'Lucknow, Uttar Pradesh 226001',
    phone: '+91 98390 72418',
  },
  s8: {
    name: 'HOOD Circuit House — Coimbatore',
    address: '17, Avinashi Road, Peelamedu',
    city: 'Coimbatore, Tamil Nadu 641004',
    phone: '+91 94420 63897',
  },
  s9: {
    name: 'HOOD Velocity Centre — Bhopal',
    address: '5, Zone-I, MP Nagar',
    city: 'Bhopal, Madhya Pradesh 462011',
    phone: '+91 98930 28754',
  },
  s10: {
    name: 'HOOD EV Performance Hub — Vizag',
    address: '28, Beach Road, Siripuram',
    city: 'Visakhapatnam, Andhra Pradesh 530003',
    phone: '+91 98490 34612',
  },

  // Luxury
  l1: {
    name: 'HOOD Maison de Luxe — Mumbai',
    address: '1, Altamount Road, Cumballa Hill',
    city: 'Mumbai, Maharashtra 400026',
    phone: '+91 98200 11234',
  },
  l2: {
    name: 'HOOD Grand Atelier — Delhi',
    address: '3, Prithviraj Road, Lutyens\' Delhi',
    city: 'New Delhi 110003',
    phone: '+91 98111 22345',
  },
  l3: {
    name: 'HOOD Prestige Pavilion — Bangalore',
    address: '10, Vittal Mallya Road, Ashok Nagar',
    city: 'Bengaluru, Karnataka 560001',
    phone: '+91 98441 33456',
  },
  l4: {
    name: 'HOOD Royal Salon — Hyderabad',
    address: '1, Road No. 1, Jubilee Hills',
    city: 'Hyderabad, Telangana 500033',
    phone: '+91 98491 44567',
  },
  l5: {
    name: 'HOOD Sovereign House — Chennai',
    address: '8, Nungambakkam High Road',
    city: 'Chennai, Tamil Nadu 600034',
    phone: '+91 94441 55678',
  },
  l6: {
    name: 'HOOD Imperial Gallery — Kolkata',
    address: '4, Camac Street, Park Street Area',
    city: 'Kolkata, West Bengal 700016',
    phone: '+91 98301 66789',
  },
  l7: {
    name: 'HOOD Opulence Studio — Pune',
    address: '21, Boat Club Road, Shivajinagar',
    city: 'Pune, Maharashtra 411016',
    phone: '+91 98221 77890',
  },
  l8: {
    name: 'HOOD Grandeur Lounge — Ahmedabad',
    address: '6, Shahibaug Road, Shahibaug',
    city: 'Ahmedabad, Gujarat 380004',
    phone: '+91 98251 88901',
  },
  l9: {
    name: 'HOOD Celestial Showroom — Jaipur',
    address: '15, Mirza Ismail Road, MI Road',
    city: 'Jaipur, Rajasthan 302001',
    phone: '+91 94141 99012',
  },
  l10: {
    name: 'HOOD Pinnacle Estate — Chandigarh',
    address: '1, Sector 10-A, Madhya Marg',
    city: 'Chandigarh 160010',
    phone: '+91 98151 00123',
  },
};

export function getShowroomForCar(carId: string): Showroom {
  return (
    showroomsByCarId[carId] ?? {
      name: 'HOOD Flagship Showroom',
      address: '1, Connaught Place',
      city: 'New Delhi 110001',
      phone: '+91 98100 00000',
    }
  );
}
