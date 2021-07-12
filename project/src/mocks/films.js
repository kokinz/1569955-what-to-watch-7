const films = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Jude Law', 'Willem Dafoe'],
    'runTime': 99,
    'genre': 'Comedies',
    'released': 2014,
    'isFavorite': false,
  },
  {
    'id': 2,
    'name': 'Fantastic Beasts: The Crimes of Grindelwald',
    'posterImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'previewImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 7.9,
    'scoresCount': 140,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 90,
    'genre': 'Crime',
    'released': 2015,
    'isFavorite': true,
  },
  {
    'id': 3,
    'name': 'Bohemian Rhapsody',
    'posterImage': 'img/bohemian-rhapsody.jpg',
    'previewImage': 'img/bohemian-rhapsody.jpg',
    'backgroundImage': 'img/bohemian-rhapsody.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 6.9,
    'scoresCount': 100,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 80,
    'genre': 'Documentary',
    'released': 2016,
    'isFavorite': false,
  },
  {
    'id': 4,
    'name': 'Macbeth',
    'posterImage': 'img/macbeth.jpg',
    'previewImage': 'img/macbeth.jpg',
    'backgroundImage': 'img/macbeth.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 5.9,
    'scoresCount': 40,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Saoirse Ronan'],
    'runTime': 80,
    'genre': 'Dramas',
    'released': 2017,
    'isFavorite': true,
  },
  {
    'id': 5,
    'name': 'Aviator',
    'posterImage': 'img/aviator.jpg',
    'previewImage': 'img/aviator.jpg',
    'backgroundImage': 'img/aviator.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 5.0,
    'scoresCount': 110,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    'runTime': 60,
    'genre': 'Horror',
    'released': 2018,
    'isFavorite': false,
  },
  {
    'id': 6,
    'name': 'We need to talk about Kevin',
    'posterImage': 'img/we-need-to-talk-about-kevin.jpg',
    'previewImage': 'img/we-need-to-talk-about-kevin.jpg',
    'backgroundImage': 'img/we-need-to-talk-about-kevin.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 4.9,
    'scoresCount': 70,
    'director': 'Wes Andreson',
    'starring': ['Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 50,
    'genre': 'Kids & Family',
    'released': 2019,
    'isFavorite': true,
  },
  {
    'id': 7,
    'name': 'What We Do in the Shadows',
    'posterImage': 'img/what-we-do-in-the-shadows.jpg',
    'previewImage': 'img/what-we-do-in-the-shadows.jpg',
    'backgroundImage': 'img/what-we-do-in-the-shadows.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 0.9,
    'scoresCount': 240,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 120,
    'genre': 'Romance',
    'released': 2020,
    'isFavorite': false,
  },
  {
    'id': 8,
    'name': 'Revenant',
    'posterImage': 'img/revenant.jpg',
    'previewImage': 'img/revenant.jpg',
    'backgroundImage': 'img/revenant.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 2.9,
    'scoresCount': 100,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 20,
    'genre': 'Sci-Fi',
    'released': 2021,
    'isFavorite': true,
  },
  {
    'id': 9,
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Jude Law', 'Willem Dafoe'],
    'runTime': 99,
    'genre': 'Comedies',
    'released': 2014,
    'isFavorite': false,
  },
  {
    'id': 10,
    'name': 'Fantastic Beasts: The Crimes of Grindelwald',
    'posterImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'previewImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 7.9,
    'scoresCount': 140,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 90,
    'genre': 'Crime',
    'released': 2015,
    'isFavorite': true,
  },
  {
    'id': 11,
    'name': 'Bohemian Rhapsody',
    'posterImage': 'img/bohemian-rhapsody.jpg',
    'previewImage': 'img/bohemian-rhapsody.jpg',
    'backgroundImage': 'img/bohemian-rhapsody.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 6.9,
    'scoresCount': 100,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'runTime': 80,
    'genre': 'Documentary',
    'released': 2016,
    'isFavorite': false,
  },
  {
    'id': 12,
    'name': 'Macbeth',
    'posterImage': 'img/macbeth.jpg',
    'previewImage': 'img/macbeth.jpg',
    'backgroundImage': 'img/macbeth.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fien\'s friene and protege.',
    'rating': 5.9,
    'scoresCount': 40,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Saoirse Ronan'],
    'runTime': 80,
    'genre': 'Dramas',
    'released': 2017,
    'isFavorite': true,
  },
];

export default films;
