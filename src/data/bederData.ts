export interface MattressModel {
  id: string;
  name: string;
  badge?: string;
  features: string[];
  description: string;
  firmness: string;
  height: string;
  warranty: string;
  startingPrice: number;
  sizes: {
    size: string;
    dimensions: string;
    price: number;
  }[];
  image: string;
  theme: {
    bg: string;
    text: string;
    heading: string;
    border: string;
    btnClass: string;
    badgeBg?: string;
    badgeText?: string;
  };
}

export const MATTRESS_LINES: MattressModel[] = [
  {
    id: 'estandar',
    name: 'Estándar',
    features: ['Bedertech', 'Bonell Max', 'Tela de calidad', 'Calidad encase'],
    description: 'Soporte ortopédico y máxima durabilidad para el uso diario familiar. Estructura robusta que conserva su forma y firmeza por años.',
    firmness: 'Media-Firme (7/10)',
    height: '24 cm',
    warranty: '5 años directa de fábrica',
    startingPrice: 3850,
    sizes: [
      { size: 'Individual', dimensions: '1.00 x 1.90 m', price: 3850 },
      { size: 'Matrimonial', dimensions: '1.35 x 1.90 m', price: 4750 },
      { size: 'Queen Size', dimensions: '1.50 x 1.90 m', price: 5450 },
      { size: 'King Size', dimensions: '2.00 x 1.90 m', price: 6900 },
    ],
    image: '/src/assets/images/beder_bonell_springs_1791249228663.jpg',
    theme: {
      bg: 'bg-[#a9cde0]',
      text: 'text-[#1b1f8f]',
      heading: 'text-[#1b1f8f]',
      border: 'border-[#1b1f8f]/30',
      btnClass: 'bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white',
    },
  },
  {
    id: 'hotelero',
    name: 'Hotelero',
    features: ['Bedertech', 'Bonell Max', 'Tela de punto', 'Flexible y adaptable'],
    description: 'Creado para hostelería de alto nivel y recámaras que buscan la placentera sensación de hospedarse en una suite 5 estrellas.',
    firmness: 'Equilibrado Suave (6/10)',
    height: '26 cm',
    warranty: '7 años directa de fábrica',
    startingPrice: 4690,
    sizes: [
      { size: 'Individual', dimensions: '1.00 x 1.90 m', price: 4690 },
      { size: 'Matrimonial', dimensions: '1.35 x 1.90 m', price: 5690 },
      { size: 'Queen Size', dimensions: '1.50 x 1.90 m', price: 6590 },
      { size: 'King Size', dimensions: '2.00 x 1.90 m', price: 8290 },
    ],
    image: '/src/assets/images/beder_hotelero_bed_1791249219440.jpg',
    theme: {
      bg: 'bg-[#cbe9e5]',
      text: 'text-[#2f5d63]',
      heading: 'text-[#5d5aa0]',
      border: 'border-[#2f5d63]/20',
      btnClass: 'bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white',
    },
  },
  {
    id: 'luxury',
    name: 'Luxury',
    badge: 'Línea alta',
    features: [
      'Bedertech',
      'Bonell Max',
      'Tela Luxury',
      'Movimiento no transferible',
      'Acojinamiento de alta calidad',
    ],
    description: 'La máxima expresión del descanso premium BEDER. Telas de seda con tratamiento antibacterial, colchoneta viscoelástica y cero transferencia de movimiento.',
    firmness: 'Confort Plush Nube (5.5/10)',
    height: '32 cm',
    warranty: '10 años directa de fábrica',
    startingPrice: 6400,
    sizes: [
      { size: 'Individual', dimensions: '1.00 x 1.90 m', price: 6400 },
      { size: 'Matrimonial', dimensions: '1.35 x 1.90 m', price: 7950 },
      { size: 'Queen Size', dimensions: '1.50 x 1.90 m', price: 9200 },
      { size: 'King Size', dimensions: '2.00 x 1.90 m', price: 11800 },
    ],
    image: '/src/assets/images/beder_mattress_luxury_1791249198379.jpg',
    theme: {
      bg: 'bg-[#060c2c]',
      text: 'text-slate-200',
      heading: 'text-[#6fa8d6]',
      border: 'border-white/20',
      btnClass: 'bg-white text-[#060c2c] hover:bg-[#8fbfe0] hover:text-[#060c2c] shadow-lg',
      badgeBg: 'bg-[#6fa8d6]',
      badgeText: 'text-[#060c2c]',
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    features: ['Bedertech', 'Bonell Max', 'Tela de punto', 'Extra confort'],
    description: 'Ergonomía superior con doble capa de confort y tela de punto hipoalergénica con control térmico para noches frescas.',
    firmness: 'Medio Ortopédico (6.5/10)',
    height: '28 cm',
    warranty: '8 años directa de fábrica',
    startingPrice: 4990,
    sizes: [
      { size: 'Individual', dimensions: '1.00 x 1.90 m', price: 4990 },
      { size: 'Matrimonial', dimensions: '1.35 x 1.90 m', price: 5990 },
      { size: 'Queen Size', dimensions: '1.50 x 1.90 m', price: 6990 },
      { size: 'King Size', dimensions: '2.00 x 1.90 m', price: 8890 },
    ],
    image: '/src/assets/images/beder_factory_craft_1791249186403.jpg',
    theme: {
      bg: 'bg-[#f3f3f1]',
      text: 'text-[#4b4a6b]',
      heading: 'text-[#8d8bb5]',
      border: 'border-[#8d8bb5]/30',
      btnClass: 'bg-[#060c2c] text-white hover:bg-[#27457a]',
    },
  },
];

export const TECH_FEATURES = [
  {
    id: 'bedertech',
    title: 'Bedertech',
    short: 'Balance corporal',
    desc: 'Espumas de alta resiliencia que regulan la temperatura y alivian la presión en puntos clave.',
    layerName: 'Capa Superior y Núcleo de Disipación',
    layerColor: 'from-amber-400/20 to-amber-500/10',
  },
  {
    id: 'bonell',
    title: 'Bonell Max',
    short: 'Resortes templados',
    desc: 'Resortes bicónicos de acero al alto carbono para un soporte firme e indeformable.',
    layerName: 'Chasis de Resortes Templados Bonell',
    layerColor: 'from-sky-400/20 to-sky-500/10',
  },
  {
    id: 'telas',
    title: 'Telas de punto y Luxury',
    short: 'Tejidos jacquard',
    desc: 'Fibras naturales hipoalergénicas con máxima suavidad, frescura y transpirabilidad.',
    layerName: 'Cubierta Exterior Acolchada Jacquard',
    layerColor: 'from-emerald-400/20 to-emerald-500/10',
  },
  {
    id: 'movimiento',
    title: 'Movimiento no transferible',
    short: 'Aislamiento cinético',
    desc: 'Membrana que absorbe giros nocturnos para evitar la transferencia de movimiento.',
    layerName: 'Membrana de Aislamiento Acústico y Cinético',
    layerColor: 'from-indigo-400/20 to-indigo-500/10',
  },
];

export const REVIEWS = [
  {
    name: 'Ing. Carlos Morales P.',
    model: 'Modelo Luxury King Size',
    city: 'Puebla, Pue.',
    rating: 5,
    quote: 'Excelente calidad y soporte. Llevamos 7 meses usándolo y los dolores lumbares desaparecieron por completo. Gran firmeza y la colchoneta es increíblemente suave. Es un orgullo comprar productos tan bien hechos en Puebla.',
    tag: 'Cliente Residencial',
    avatar: '/src/assets/images/avatar_carlos_morales_1791252378559.jpg',
  },
  {
    name: 'Dra. Mariana Valdés R.',
    model: 'Modelo Hotelero Matrimonial',
    city: 'San Pedro Cholula, Pue.',
    rating: 5,
    quote: 'Compré un colchón Hotelero para la recámara principal y quedé tan encantada con la atención y la rapidez de entrega que ordené dos Estándar para mis hijos. La atención telefónica y por WhatsApp fue transparente y puntual.',
    tag: 'Compra Familiar',
    avatar: '/src/assets/images/avatar_mariana_valdes_1791252394532.jpg',
  },
  {
    name: 'Roberto Gómez Llaguno',
    model: 'Línea Hotelero (16 piezas)',
    city: 'Atlixco, Pue. · Hotel Boutique',
    rating: 5,
    quote: 'Equipamos todas las suites de nuestro hotel con la línea Hotelera BEDER. Los huéspedes elogian constantemente el descanso en sus reseñas. Resistencia probada tras un año de alta ocupación sin la mínima deformación.',
    tag: 'Proyecto Hotelero',
    avatar: '/src/assets/images/avatar_roberto_gomez_1791252404032.jpg',
  },
  {
    name: 'Mtra. Sofía y Fernando Castillo',
    model: 'Modelo Premium Queen Size',
    city: 'Cuautlancingo, Pue.',
    rating: 5,
    quote: 'El colchón superó todas nuestras expectativas. Cero transferencia de movimiento cuando alguno se mueve en la noche, y el tejido de la cubierta es fresquísimo en época de calor. Gran recomendación.',
    tag: 'Cliente Verificado',
    avatar: '/src/assets/images/avatar_sofia_castillo_1791252412501.jpg',
  },
  {
    name: 'Arq. Daniel E. Méndez',
    model: 'Modelo Estándar y Luxury',
    city: 'Puebla, Pue.',
    rating: 5,
    quote: 'Como profesional de la construcción valoro los buenos materiales. Los resortes Bonell Max tienen un soporte indeformable. He recomendado Colchones BEDER a varios clientes y todos han quedado fascinados.',
    tag: 'Recomendación Profesional',
    avatar: '/src/assets/images/avatar_carlos_morales_1791252378559.jpg',
  },
];

export const FAQ_ITEMS = [
  {
    q: '¿Cómo elijo el colchón adecuado?',
    a: 'Ofrecemos asesoría totalmente personalizada según tu peso, estatura, posición habitual de descanso y si duermes acompañado. La línea Estándar es perfecta para soporte firme ortopédico; Hotelero combina flexibilidad y durabilidad para confort equilibrado; Premium añade colchoneta pillow top de extra confort; y Luxury brinda la experiencia de máxima suavidad con soporte cero transferencia de movimiento.',
  },
  {
    q: '¿Qué medidas manejan?',
    a: 'Fabricamos en todas las medidas estándar mexicanas: Individual (1.00 x 1.90 m), Matrimonial (1.35 x 1.90 m), Queen Size (1.50 x 1.90 m) y King Size (2.00 x 1.90 m). Asimismo, como fabricantes directos en Puebla, podemos confeccionar medidas especiales para camas europeas, americanas o proyectos hoteleros a medida.',
  },
  {
    q: '¿Hacen envíos a mi ciudad?',
    a: 'Contamos con flotilla propia para entregas directas y programadas en la ciudad de Puebla, San Andrés y San Pedro Cholula, Cuautlancingo, Amozoc, Tehuacán y zonas conurbadas en 24 a 48 horas. También realizamos envíos asegurados a Tlaxcala, CDMX, Estado de México, Veracruz, Hidalgo y el resto de la República Mexicana mediante convenios con transportistas de carga consolidada.',
  },
  {
    q: '¿Qué cubre la garantía?',
    a: 'Nuestros colchones cuentan con póliza de garantía escrita directa de fábrica de 5 a 10 años según la línea elegida. Ampara cualquier deformación anormal del chasis de resortes Bonell Max, desprendimiento de costuras estructurales o hundimientos en las capas de acojinamiento Bedertech. Al ser fabricantes directos, la atención es rápida y sin intermediarios.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Aceptamos transferencias interbancarias SPEI, tarjetas de débito y crédito (Visa, Mastercard, American Express), efectivo contra entrega en entregas locales en Puebla, y planes de financiamiento con meses sin intereses en tarjetas participantes.',
  },
  {
    q: '¿Venden a mayoreo o a hoteles?',
    a: '¡Por supuesto! Contamos con una división especializada en hotelería, motelería, casas de descanso, desarrollos inmobiliarios y tiendas muebleras. Brindamos tarifas preferenciales por volumen, fichas técnicas certificadas, facturación fiscal inmediata y entregas escalonadas de acuerdo con los tiempos de obra de tu proyecto.',
  },
];

export const GALLERY_ITEMS = [
  {
    title: 'Fábrica y taller de producción',
    subtitle: 'Nave de manufactura en Puebla, México',
    src: '/src/assets/images/beder_factory_craft_1791249186403.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2',
    aspect: 'aspect-square md:aspect-auto h-full',
    hideOnMobile: false,
  },
  {
    title: 'Costura e hilos reforzados',
    subtitle: 'Detalle de ribeteado de alta resistencia',
    src: '/src/assets/images/beder_sewing_detail_1791249237816.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-4/3',
    hideOnMobile: true,
  },
  {
    title: 'Materiales y resortes Bonell Max',
    subtitle: 'Acero templado al alto carbono de máxima torsión',
    src: '/src/assets/images/beder_bonell_springs_1791249228663.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-4/3',
    hideOnMobile: false,
  },
  {
    title: 'Producto terminado',
    subtitle: 'Montaje en recámara residencial',
    src: '/src/assets/images/beder_hotelero_bed_1791249219440.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1',
    aspect: 'aspect-16/9 md:aspect-auto h-full',
    hideOnMobile: true,
  },
];
