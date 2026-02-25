export interface ModelSpec {
  label: string;
  value: string;
}

export interface Model {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: string;
  specs: ModelSpec[];
}

export const models: Model[] = [
  {
    id: 'apex-gt',
    name: 'Apex GT',
    description: 'Pure performance meets luxury. The flagship model that started it all.',
    image: '/assets/generated/apex-model-1.dim_1200x675.jpg',
    badge: 'Flagship',
    specs: [
      { label: 'Power', value: '750 HP' },
      { label: '0-60 mph', value: '2.8 seconds' },
      { label: 'Range', value: '420 miles' },
      { label: 'Top Speed', value: '200 mph' },
    ],
  },
  {
    id: 'apex-sport',
    name: 'Apex Sport',
    description: 'Agile, dynamic, and thrilling. Engineered for the driving enthusiast.',
    image: '/assets/generated/apex-model-2.dim_1200x675.jpg',
    badge: 'Performance',
    specs: [
      { label: 'Power', value: '550 HP' },
      { label: '0-60 mph', value: '3.5 seconds' },
      { label: 'Range', value: '380 miles' },
      { label: 'Top Speed', value: '175 mph' },
    ],
  },
  {
    id: 'apex-luxury',
    name: 'Apex Luxury',
    description: 'Refined elegance with cutting-edge technology. The ultimate grand tourer.',
    image: '/assets/generated/apex-model-3.dim_1200x675.jpg',
    badge: 'Premium',
    specs: [
      { label: 'Power', value: '450 HP' },
      { label: '0-60 mph', value: '4.2 seconds' },
      { label: 'Range', value: '450 miles' },
      { label: 'Top Speed', value: '155 mph' },
    ],
  },
];
