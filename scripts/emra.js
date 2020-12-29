const templura = new Planet("emra", Planets.sun, 1.2, 0.9);
emra.generator = new SerpuloPlanetGenerator();
emra.mesh = new HexMesh(emra, 6);
emra.bloom = true;
emra.radius = 2;
emra.accessible = true;
emra.hasAtmosphere = true;
emra.atmosphereColor = Color.valueOf("c7fffbff");
emra.atmosphereRadIn = 0.02;
emra.atmosphereRadOut = 0.3;
emra.localizedName = "Emra";

const navalValley = new SectorPreset("navalValley", emra, 18);
navalValley.captureWave = 25;
navalValley.localizedName = "Naval Valley";
navalValley.difficulty = 4;
