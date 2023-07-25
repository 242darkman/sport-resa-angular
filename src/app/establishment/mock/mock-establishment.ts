import { Establishment } from '@/app/establishment/domain/establishment';

export const establishmentsMock: Establishment[] = [
  {
    id: 1,
    nom: 'Gymnase Fitness Plus',
    address: '123 Rue du Sport, 75001 Paris',
    imgUrl: 'assets/pictures/porte-maillot-600x400-c-default.png',
    phoneNumber: '+33 1 23 45 67 89',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '09:00', endTime: '18:00' },
      { dayOfWeek: 'Jeudi', startTime: '09:00', endTime: '18:00' },
      { dayOfWeek: 'Vendredi', startTime: '09:00', endTime: '18:00' },
      { dayOfWeek: 'Samedi', startTime: '09:00', endTime: '13:00' },
    ],
  },
  {
    id: 2,
    nom: 'Stade Olympique',
    address: '456 Avenue des Sportifs, 69000 Lyon',
    imgUrl: 'assets/pictures/bandeau-club-gambetta-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 98 76 54 32',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '09:00', endTime: '18:00' },
      { dayOfWeek: 'Mardi', startTime: '09:00', endTime: '18:00' },
      { dayOfWeek: 'Jeudi', startTime: '09:00', endTime: '18:00' },
    ],
  },
  {
    id: 3,
    nom: 'Salle de Musculation Power Gym',
    address: '789 Rue de la Forme, 69002 Lyon',
    imgUrl: 'assets/pictures/dsc5365-600x400-c-default.jpeg',
    phoneNumber: '+33 1 55 66 77 88',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '09:00', endTime: '22:00' },
      { dayOfWeek: 'Mardi', startTime: '09:00', endTime: '22:00' },
      { dayOfWeek: 'Mercredi', startTime: '09:00', endTime: '22:00' },
      { dayOfWeek: 'Vendredi', startTime: '09:00', endTime: '22:00' },
    ],
  },
  {
    id: 4,
    nom: 'Centre de Boxe Punch Club',
    address: '1010 Rue des Boxeurs, 78000 Besançon',
    imgUrl: 'assets/pictures/espace-cardio-besancon-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 22 33 44 55',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '07:30', endTime: '21:00' },
      { dayOfWeek: 'Mardi', startTime: '07:30', endTime: '21:00' },
      { dayOfWeek: 'Mercredi', startTime: '07:30', endTime: '21:00' },
    ],
  },
  {
    id: 5,
    nom: 'Studio Yoga Zen',
    address: '555 Rue du Yoga, 48000 Lille',
    imgUrl: 'assets/pictures/espace-cardio-muscu-1-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 66 77 88 99',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '10:00', endTime: '19:30' },
      { dayOfWeek: 'Mardi', startTime: '10:00', endTime: '19:30' },
      { dayOfWeek: 'Vendredi', startTime: '10:00', endTime: '19:30' },
      { dayOfWeek: 'Samedi', startTime: '09:00', endTime: '12:30' },
    ],
  },
  {
    id: 6,
    nom: 'Centre de Natation AquaSport',
    address: '222 Place de la Natation, 28900 Clermont',
    imgUrl:
      'assets/pictures/espace-cardio-muscu-clermont-1-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 11 22 33 44',
    openingHours: [
      { dayOfWeek: 'Mercredi', startTime: '06:30', endTime: '19:00' },
      { dayOfWeek: 'Jeudi', startTime: '06:30', endTime: '19:00' },
      { dayOfWeek: 'Vendredi', startTime: '06:30', endTime: '19:00' },
      { dayOfWeek: 'Samedi', startTime: '08:00', endTime: '15:00' },
    ],
  },
  {
    id: 7,
    nom: 'Salle de CrossFit IronFit',
    address: '333 Rue du CrossFit, 92000 Marseille',
    imgUrl:
      'assets/pictures/espace-cardio-muscu-marseille-1-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 44 55 66 77',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '10:00', endTime: '20:00' },
      { dayOfWeek: 'Mercredi', startTime: '10:00', endTime: '20:00' },
      { dayOfWeek: 'Jeudi', startTime: '10:00', endTime: '20:00' },
    ],
  },
  {
    id: 8,
    nom: "Club d'Escalade Vertigo",
    address: "444 Avenue de l'Escalade, 75017 Paris",
    imgUrl:
      'assets/pictures/espace-cardio-muscu-tassin-1-1-600x400-c-default.jpeg',
    phoneNumber: '+33 1 99 88 77 66',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '09:30', endTime: '22:00' },
      { dayOfWeek: 'Mercredi', startTime: '09:30', endTime: '22:00' },
      { dayOfWeek: 'Vendredi', startTime: '09:30', endTime: '22:00' },
      { dayOfWeek: 'Samedi', startTime: '10:00', endTime: '20:00' },
    ],
  },
  {
    id: 9,
    nom: 'Terrain de Football SoccerCity',
    address: '777 Boulevard du Football, 69100 Lyon',
    imgUrl: 'assets/pictures/espace-cardio-villeurbanne-600x400-c-default.jpeg',
    phoneNumber: '+33 1 12 34 56 78',
    openingHours: [
      { dayOfWeek: 'Mardi', startTime: '16:00', endTime: '22:00' },
      { dayOfWeek: 'Mercredi', startTime: '16:00', endTime: '22:00' },
      { dayOfWeek: 'Vendredi', startTime: '16:00', endTime: '22:00' },
      { dayOfWeek: 'Samedi', startTime: '09:00', endTime: '14:00' },
    ],
  },
  {
    id: 10,
    nom: 'Salle de Danse MoveIt',
    address: '888 Rue de la Danse, 69002 Lyon Confluence',
    imgUrl: 'assets/pictures/piscine-confluence-600x400-c-default.jpeg',
    phoneNumber: '+33 1 23 45 67 89',
    openingHours: [
      { dayOfWeek: 'Lundi', startTime: '14:00', endTime: '20:00' },
      { dayOfWeek: 'Mardi', startTime: '14:00', endTime: '20:00' },
      { dayOfWeek: 'Samedi', startTime: '09:00', endTime: '18:00' },
    ],
  },
];
