// Classes

class Song {
  constructor(composer, title, url) {
    this.composer = composer;
    this.title = title;
    this.url = url;
  };
};

class Playlist {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  };
};

// Links to songs. All music is in the public domain.

const a01 = new Song("Mozart", "Sonata no 1 in Fm Op 2 no 1 I Allegro.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_1_in_Fm_Op_2_no_1_I_Allegro.mp3");
const a02 = new Song("Mozart", "Sonata no 1 in Fm Op 2 no 1 II Adagio.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_1_in_Fm_Op_2_no_1_II_Adagio.mp3");
const a03 = new Song("Mozart", "Sonata no 1 in Fm Op 2 no 1 III Menuetto Allegretto.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_1_in_Fm_Op_2_no_1_III_Menuetto_Allegretto.mp3");
const a04 = new Song("Mozart", "Sonata no 1 in Fm Op 2 no 1 IV Prestissimo.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_1_in_Fm_Op_2_no_1_IV_Prestissimo.mp3");
const a05 = new Song("Mozart", "Sonata no 8 in C minor Pathetique Op 13 I Grave Allegro di molto e con brio", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_8_in_C_minor_Pathetique_Op_13_I_Grave_Allegro_di_molto_e_con_brio.mp3");
const a06 = new Song("Mozart", "Sonata no 8 in C minor Pathetique Op 13 II Adagio cantabile", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_8_in_C_minor_Pathetique_Op_13_II_Adagio_cantabile.mp3");
const a07 = new Song("Mozart", "Sonata no 8 in C minor Pathetique Op 13 III Rondo Allegro", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_8_in_C_minor_Pathetique_Op_13_III_Rondo_Allegro.mp3");
const a08 = new Song("Mozart", "Sonata no 10 in C major K 330 I Allegro moderato.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_10_in_C_major_K_330_I_Allegro_moderato.mp3");
const a09 = new Song("Mozart", "Sonata no 10 in C major K 330 II Andante Cantabile", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_10_in_C_major_K_330_II_Andante_Cantabile.mp3");
const a10 = new Song("Mozart", "Sonata no 10 in C major K 330 III Allegretto.mp3", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_10_in_C_major_K_330_III_Allegretto.mp3");
const a11 = new Song("Mozart", "Sonata no 11 K 331 I Andante grazioso", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_11_K_331_I_Andante_grazioso.mp3");
const a12 = new Song("Mozart", "Sonata no 11 K 331 II Menuetto", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_11_K_331_II_Menuetto.mp3");
const a13 = new Song("Mozart", "Sonata no 11 K 331 III Alla Turca", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_11_K_331_III_Alla_Turca.mp3");
const a14 = new Song("Mozart", "Sonata no 12 K 332", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_12_K_332.mp3");
const a15 = new Song("Mozart", "Sonata no 20 in G major Op 49 no 2 I Allegro ma non troppo", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_20_in_G_major_Op_49_no_2_I_Allegro_ma_non_troppo.mp3");
const a16 = new Song("Mozart", "Sonata no 20 in G major Op 49 no 2 II Tempo di menuetto", "https://publicdomainmusic.s3.amazonaws.com/mozart/Sonata_no_20_in_G_major_Op_49_no_2_II_Tempo_di_menuetto.mp3");
const b01 = new Song("Bach", "Goldberg Variations 01 Aria", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_01_Aria.mp3");
const b02 = new Song("Bach", "Goldberg Variations 02 Variatio 1 a 1 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_02_Variatio_1_a_1_Clav.mp3");
const b03 = new Song("Bach", "Goldberg Variations 03 Variatio 2 a 1 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_03_Variatio_2_a_1_Clav.mp3");
const b04 = new Song("Bach", "Goldberg Variations 04 Variatio 3 a 1 Clav Canone all Unisuono", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_04_Variatio_3_a_1_Clav_Canone_all_Unisuono.mp3");
const b05 = new Song("Bach", "Goldberg Variations 05 Variatio 4 a 1 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_05_Variatio_4_a_1_Clav.mp3");
const b06 = new Song("Bach", "Goldberg Variations 06 Variatio 5 a 1 ovvero 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_06_Variatio_5_a_1_ovvero_2_Clav.mp3");
const b07 = new Song("Bach", "Goldberg Variations 07 Variatio 6 a 1 Clav Conone alla Seconda", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_07_Variatio_6_a_1_Clav_Canone_alla_Seconda.mp3");
const b08 = new Song("Bach", "Goldberg Variations 08 Variatio 7 a 1 ovvero 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_08_Variatio_7_a_1_ovvero_2_Clav.mp3");
const b09 = new Song("Bach", "Goldberg Variations 09 Variatio 8 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_09_Variatio_8_a_2_Clav.mp3");
const b10 = new Song("Bach", "Goldberg Variations 10 Variatio 9 a 1 Clav Conone alla Terza", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_10_Variatio_9_a_1_Clav_Canone_alla_Terza.mp3");
const b11 = new Song("Bach", "Goldberg Variations 11 Variatio 10 a 1 Clav Fughetta", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_11_Variatio_10_a_1_Clav_Fughetta.mp3");
const b12 = new Song("Bach", "Goldberg Variations 12 Variatio 11 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_12_Variatio_11_a_2_Clav.mp3");
const b13 = new Song("Bach", "Goldberg Variations 13 Variatio 12 Conone alla Quarta", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_13_Variatio_12_Canone_alla_Quarta.mp3");
const b14 = new Song("Bach", "Goldberg Variations 14 Variatio 13 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_14_Variatio_13_a_2_Clav.mp3");
const b15 = new Song("Bach", "Goldberg Variations 15 Variatio 14 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_15_Variatio_14_a_2_Clav.mp3");
const b16 = new Song("Bach", "Goldberg Variations 16 Variatio 15 a 1 Clav Conone alla Quinta", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_16_Variatio_15_a_1_Clav_Canone_alla_Quinta.mp3");
const b17 = new Song("Bach", "Goldberg Variations 17 Variatio 16 a 1 Clav Ouverture", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_17_Variatio_16_a_1_Clav_Ouverture.mp3");
const b18 = new Song("Bach", "Goldberg Variations 18 Variatio 17 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_18_Variatio_17_a_2_Clav.mp3");
const b19 = new Song("Bach", "Goldberg Variations 19 Variatio 18 a 1 Clav Canone alla Sexta", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_19_Variatio_18_a_1_Clav_Canone_alla_Sexta.mp3");
const b20 = new Song("Bach", "Goldberg Variations 20 Variatio 19 a 1 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_20_Variatio_19_a_1_Clav.mp3");
const b21 = new Song("Bach", "Goldberg Variations 21 Variatio 20 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_21_Variatio_20_a_2_Clav.mp3");
const b22 = new Song("Bach", "Goldberg Variations 22 Variatio 21 Canone alla Settima", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_22_Variatio_21_Canone_alla_Settima.mp3");
const b23 = new Song("Bach", "Goldberg Variations 23 Variatio 22 a 1 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_23_Variatio_22_a_1_Clav.mp3");
const b24 = new Song("Bach", "Goldberg Variations 24 Variatio 23 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_24_Variatio_23_a_2_Clav.mp3");
const b25 = new Song("Bach", "Goldberg Variations 25 Variatio 24 a 1 Clav Canone alla Ottava", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_25_Variatio_24_a_1_Clav_Canone_all_Ottava.mp3");
const b26 = new Song("Bach", "Goldberg Variations 26 Variatio 25 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_26_Variatio_25_a_2_Clav.mp3");
const b27 = new Song("Bach", "Goldberg Variations 27 Variatio 26 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_27_Variatio_26_a_2_Clav.mp3");
const b28 = new Song("Bach", "Goldberg Variations 28 Variatio 27 a 2 Clav Canone alla Nona", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_28_Variatio_27_a_2_Clav_Canone_alla_Nona.mp3");
const b29 = new Song("Bach", "Goldberg Variations 29 Variatio 28 a 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_29_Variatio_28_a_2_Clav.mp3");
const b30 = new Song("Bach", "Goldberg Variations 30 Variatio 29 a 1 ovvero 2 Clav", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_30_Variatio_29_a_1_ovvero_2_Clav.mp3");
const b31 = new Song("Bach", "Goldberg Variations 31 Variatio 30 a 1 Clav Quodlibet", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_31_Variatio_30_a_1_Clav_Quodlibet.mp3");
const b32 = new Song("Bach", "Goldberg Variations 32 Aria da Cope e Fine", "https://publicdomainmusic.s3.amazonaws.com/bach/Goldberg_Variations_C_BWV_988_32_Aria_da_Capo_e_Fine.mp3");
const c01 = new Song("Chopin", "Nocturne in B flat minor C Op 9 no 1", "https://publicdomainmusic.s3.amazonaws.com/chopin/Nocturne_in_B_flat_minor_C_Op_9_no_1.mp3");
const c02 = new Song("Chopin", "Nocturne in E flat major C Op 9 no 2", "https://publicdomainmusic.s3.amazonaws.com/chopin/Nocturne_in_E_flat_major_C_Op_9_no_2.mp3");
const c03 = new Song("Chopin", "Nocturne in B major C Op 9 no 3", "https://publicdomainmusic.s3.amazonaws.com/chopin/Nocturne_in_B_major_C_Op_9_no_3.mp3");
const c04 = new Song("Chopin", "Ballade no 1 in G minor C Op 23", "https://publicdomainmusic.s3.amazonaws.com/chopin/Ballade_no_1_in_G_minor_C_Op_23.mp3");
const c05 = new Song("Chopin", "Etude Op 25 no 1 in A flat major Aeolian Harp Shephard Boy", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_1_in_A_flat_major_Aeolian_Harp_Shepherd_Boy.mp3");
const c15 = new Song("Chopin", "Etude Op 25 no 2 in F minor The Bees", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op._25_no_2_in_F_minor_The_Bees.mp3");
const c09 = new Song("Chopin", "Etude Op 25 no 3 in F major The Horseman", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_3_in_F_major_The_Horseman.mp3");
const c16 = new Song("Chopin", "Etude Op 25 no 4 in A minor Paganini", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op._25_no_4_in_A_minor_Paganini.mp3");
const c10 = new Song("Chopin", "Etude Op 25 no 5 in E minor Wrong Note", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_5_in_E_minor_Wrong_Note.mp3");
const c11 = new Song("Chopin", "Etude Op 25 no 6 in G sharp minor Thirds", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_6_in_G_sharp_minor_Thirds.mp3");
const c12 = new Song("Chopin", "Etude Op 25 no 7 in C sharp minor Cello", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_7_in_C_sharp_minor_Cello.mp3");
const c13 = new Song("Chopin", "Etude Op 25 no 8 in D flat major Sixths", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_8_in_D_flat_major_Sixths.mp3");
const c14 = new Song("Chopin", "Etude Op 25 no 9 in G flat major Butterfly", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_9_in_G_flat_major_Butterfly.mp3");
const c06 = new Song("Chopin", "Etude Op 25 no 10 in B minor Octave", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_10_in_B_minor_Octave.mp3");
const c07 = new Song("Chopin", "Etude Op 25 no 11 in A minor Winter Wind", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_11_in_A_minor_Winter_Wind.mp3");
const c08 = new Song("Chopin", "Etude Op 25 no 12 in C minor Ocean", "https://publicdomainmusic.s3.amazonaws.com/chopin/Etude_Op_25_no_12_in_C_minor_Ocean.mp3");
const c17 = new Song("Chopin", "Fantaisie Impromptu C Op 66", "https://publicdomainmusic.s3.amazonaws.com/chopin/Fantaisie_Impromptu_C_Op_66.mp3");

// Playlist for each composer

const mozart = new Playlist("Mozart Playlist", [a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14]);
const bach = new Playlist("Bach Playlist", [b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32]);
const chopin = new Playlist("Chopin Playlist", [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16, c17]);

// Variables

let isPlaying = false;
let currentPlaylist = chopin;
let index = 0;

// Setup for HTML audio player

var aud = document.getElementById("myAudio");
let song = currentPlaylist.songs[index];
aud.src = song.url;
document.getElementById("playlist-title").innerHTML = currentPlaylist.name;
document.getElementById("song-title").innerHTML = song.title;

// Helper functions for updating audio player

function updatePlayButton(state) {
  if (state === "pause") {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pause-button").style.display = "inline-block";
  } else {
    document.getElementById("play-button").style.display = "inline-block";
    document.getElementById("pause-button").style.display = "none";
  };
};

// Functions for custom audio player controlls

function playSong() {
  isPlaying = true;
  aud.play();
};

function pauseSong() {
  isPlaying = false;
  aud.pause();
  updatePlayButton("play");
};

function nextSong() {
  index++;
  if (index > currentPlaylist.songs.length - 1) {
    index = 0;
  };
  song = currentPlaylist.songs[index]
  document.getElementById("song-title").innerHTML = song.title;
  aud.src = song.url;
  if (isPlaying) {
    aud.play();
  };
};

function previousSong() {
  index--;
  if (index < 0) {
    index = currentPlaylist.songs.length - 1;
  };
  song = currentPlaylist.songs[index]
  document.getElementById("song-title").innerHTML = song.title;
  aud.src = song.url;
  if (isPlaying) {
    aud.play();
  };
};

function changeComposer(composer) {
  switch (composer) {
    case "Bach":
      currentPlaylist = bach;
      document.getElementById("playlist-title").innerHTML = "Bach Playlist";
      break;
    case "Chopin":
      currentPlaylist = chopin;
      document.getElementById("playlist-title").innerHTML = "Chopin Playlist";
      break;
    default:
      currentPlaylist = mozart;
      document.getElementById("playlist-title").innerHTML = "Mozart Playlist";
  };
  index = 0;
  song = currentPlaylist.songs[index]
  document.getElementById("song-title").innerHTML = song.title;
  aud.src = song.url;
  if (isPlaying) {
    aud.play();
  };
};

function volumeUp() {
  volume = aud.volume;
  if (volume < 1.0) {
    volume += 0.1;
    aud.volume = volume;
  };
};

function volumeDown() {
  volume = aud.volume;
  if (volume > 0.1) {
    volume -= 0.1;
    aud.volume = volume;
  };
};

// Event listeners for HTML audio player

aud.onplay = function() {
  isPlaying = true;
  updatePlayButton("pause");
};

aud.onended = function() {
  nextSong();
};
