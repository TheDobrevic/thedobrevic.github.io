class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Lover Like Me", "CL", "1.jpeg", "1.mp3"),
  new Music(
    "Princess Diana Remix",
    "Ice Spice, Nicki Minaj",
    "2.jpeg",
    "2.mp3"
  ),
  new Music("Endless Fashion", "Lil Uzi, Nicki Mİnaj", "3.jpeg", "3.mp3"),
  new Music("Snow Fairy", "FAIRY TAIL", "4.jpeg", "4.mp3"),
  new Music("Masuyame Chasing", "FAIRY TAIL", "5.jpeg", "5.mp3"),
  new Music("Funkist", "FAIRY TAIL", "6.jpeg", "6.mp3"),
];
