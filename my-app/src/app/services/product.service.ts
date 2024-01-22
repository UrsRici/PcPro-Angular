import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getcos(){
    return[
      {"id":1,
      "link":"assets/Componente/Placi video1.jpg",
      "titlu":"Placa video Palit GeForce RTX 3060 StormX 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":3999.99
      },

      {"id":2,
      "link":"assets/Componente/Placi video2.jpg",
      "titlu":"Placa video XFX Radeon RX 6700 XT Core Gaming 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 6000",
      "descriere3":"GPU clock: 2581  MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":6399.99
      },

      {"id":3,
      "link":"assets/Componente/Placi video3.jpg",
      "titlu":"Placa video GIGABYTE GeForce RTX 3070 GAMING OC 8GB GDDR6 256-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1815  MHz",
      "descriere4":"Dimensiune memorie: 8 GB",
      "pret":7339.99
      },

      {"id":4,
      "link":"assets/Componente/Placi video4.png",
      "titlu":"Placa video ASUS GeForce GTX 1650 TUF Gaming D6 O4G 4GB GDDR6 128-bit",
      "descriere1":"Interfata: PCI Express x16 3.0",
      "descriere2":"Seria: GeForce GTX 1600",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 4 GB",
      "pret":2235.99
      },

      {"id":5,
      "link":"assets/Componente/Placi video5.jpg",
      "titlu":"Placa video XFX Radeon RX 6700 XT Speedster QICK 319 Ultra 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":5899.99
      },

      {"id":6,
      "link":"assets/Componente/Placi video6.png",
      "titlu":"Placa video GIGABYTE GeForce RTX 2060 GAMING OC 6GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 2060",
      "descriere3":"GPU clock: 2755 MHz",
      "descriere4":"Dimensiune memorie: 6 GB",
      "pret":3499.59
      },

      {"id":7,
      "link":"assets/Componente/Procesoare1.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i7 9700 3.0GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":1449.99
      },

      {"id":8,
      "link":"assets/Componente/Procesoare2.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i5 9600K 3.7GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 6000",
      "descriere3":"GPU clock: 2581  MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":1199.99
      },

      {"id":9,
      "link":"assets/Componente/Procesoare3.jpg",
      "titlu":"Procesor Intel Comet Lake, Core i9 10850K 3.6GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1815  MHz",
      "descriere4":"Dimensiune memorie: 8 GB",
      "pret":1989.99
      },

      {"id":10,
      "link":"assets/Componente/Procesoare4.jpg",
      "titlu":"Procesor Intel Comet Lake, Core i7 10700K 3.8GHz box",
      "descriere1":"Interfata: PCI Express x16 3.0",
      "descriere2":"Seria: GeForce GTX 1600",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 4 GB",
      "pret":1723.99
      },

      {"id":11,
      "link":"assets/Componente/Procesoare5.png",
      "titlu":"Procesor AMD Ryzen 9 3900X 3.8GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":2449.99
      },

      {"id":12,
      "link":"assets/Componente/Procesoare6.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i9 9900K 3.6GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 2060",
      "descriere3":"GPU clock: 2755 MHz",
      "descriere4":"Dimensiune memorie: 6 GB",
      "pret":1709.99
      },
      {"id":13,
      "link":"assets/Componente/Placi de baza1.jpg",
      "titlu":"Placa de baza ASUS TUF GAMING X570-PLUS",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":1149.99
      },

      {"id":14,
      "link":"assets/Componente/Placi de baza2.jpg",
      "titlu":"Placa de baza ASRock B365 PRO4",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: 1151 v2",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":599.99
      },

      {"id":15,
      "link":"assets/Componente/Placi de baza3.jpg",
      "titlu":"Placa de baza ASRock X570 Phantom Gaming 4",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":989.99
      },

      {"id":16,
      "link":"assets/Componente/Placi de baza4.jpg",
      "titlu":"Placa de baza MSI B450 TOMAHAWK MAX",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":723.99
      },

      {"id":17,
      "link":"assets/Componente/Placi de baza5.jpg",
      "titlu":"Placa de baza MSI MPG Z490 GAMING WiFi",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: 1200",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":499.99
      },

      {"id":18,
      "link":"assets/Componente/Placi de baza6.png",
      "titlu":"Placa de baza GIGABYTE B450 AORUS ELITE V2",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":1009.99
      },
      {"id":19,
      "link":"assets/Componente/Memorii1.jpg",
      "titlu":"Memorie HyperX Fury Black 16GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":239.99
      },

      {"id":20,
      "link":"assets/Componente/Memorii2.jpg",
      "titlu":"Memorie Corsair Vengeance RGB 16GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":199.99
      },

      {"id":21,
      "link":"assets/Componente/Memorii3.jpg",
      "titlu":"Memorie Corsair Vengeance RGB 32GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 32 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":589.99
      },

      {"id":22,
      "link":"assets/Componente/Memorii4.jpg",
      "titlu":"Memorie HyperX Fury RGB 16GB DDR4 3600MHz CL17 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3600 MHz",
      "descriere4":"Latenta CAS: 17 CL",
      "pret":123.99
      },

      {"id":23,
      "link":"assets/Componente/Memorii5.jpg",
      "titlu":"Memorie Corsair Value RED 8GB DDR4 2666MHz CL16",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 8 GB",
      "descriere3":"Frecventa: 2666 MHz",
      "descriere4":"Latenta CAS: 15 CL",
      "pret":99.99
      },

      {"id":24,
      "link":"assets/Componente/Memorii6.jpg",
      "titlu":"Memorie HyperX Fury Black 16GB DDR4 2666MHz CL16",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 8 GB",
      "descriere3":"Frecventa: 3000 MHz",
      "descriere4":"Latenta CAS: 15 CL",
      "pret":109.99
      },
      {"id":25,
      "link":"assets/Componente/SSD1.jpg",
      "titlu":"SSD Emtec Power Plus X250 256GB SATA-III M.2 2280",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 256 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 500 MB/s",
      "pret":149.99
      },

      {"id":26,
      "link":"assets/Componente/SSD2.jpg",
      "titlu":"SSD ADATA SX6000 Lite 128GB PCI Express M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 128 GB",
      "descriere3":"Citire max.: 1800 MB/s",
      "descriere4":"Scriere max.: 600 MB/s",
      "pret":199.99
      },

      {"id":27,
      "link":"assets/Componente/SSD3.jpg",
      "titlu":"SSD Intenso Performance 480GB SATA-III 2.5 inch",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 480 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 500 MB/s",
      "pret":189.99
      },

      {"id":28,
      "link":"assets/Componente/SSD4.jpg",
      "titlu":"SSD Intenso Performance 240GB SATA-III M.2 2280",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 240 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 480 MB/s",
      "pret":173.99
      },

      {"id":29,
      "link":"assets/Componente/SSD5.jpg",
      "titlu":"SSD ADATA XPG Gammix S11 Pro 256GB PCI Express 3.0 x4 M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 256 GB",
      "descriere3":"Citire max.: 3500 MB/s",
      "descriere4":"Scriere max.: 1200 MB/s",
      "pret":249.99
      },

      {"id":30,
      "link":"assets/Componente/SSD6.jpg",
      "titlu":"SSD Samsung 970 EVO Plus 500GB PCI Express 3.0 x4 M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 500 GB",
      "descriere3":"Citire max.: 3500 MB/s",
      "descriere4":"Scriere max.: 3200 MB/s",
      "pret":319.99
      },
      {"id":31,
      "link":"assets/Componente/Hard disk-uri1.jpg",
      "titlu":"Hard disk Seagate BarraCuda 1TB SATA-III 7200RPM 64MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 1 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":149.99
      },

      {"id":32,
      "link":"assets/Componente/Hard disk-uri2.jpg",
      "titlu":"Hard disk WD New Purple 6TB SATA-III 5400 RPM IntelliPower 64MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 6 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":899.99
      },

      {"id":33,
      "link":"assets/Componente/Hard disk-uri3.jpg",
      "titlu":"Hard disk WD Black 2TB SATA-III 7200 RPM 64MB WD2003FZEX",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 2 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":489.99
      },

      {"id":34,
      "link":"assets/Componente/Hard disk-uri4.jpg",
      "titlu":"Hard disk Toshiba P300 SATA-III 1TB 7200 RPM 64MB bulk",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 1 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":173.99
      },

      {"id":35,
      "link":"assets/Componente/Hard disk-uri5.jpg",
      "titlu":"Hard disk Seagate SkyHawk AI 10TB 7200RPM SATA-III 256MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 10 TB",
      "descriere3":"Buffer: 256 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":1249.99
      },

      {"id":36,
      "link":"assets/Componente/Hard disk-uri6.jpg",
      "titlu":"Hard disk Seagate IronWolf Pro 14TB SATA-III 7200RPM 256MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 14 TB",
      "descriere3":"Buffer: 256 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":1319.99
      },
      {"id":37,
      "link":"assets/Componente/Surse1.png",
      "titlu":"Sursa Segotep GP750G, 80+ Gold, 650W",
      "descriere1":"Putere: 650 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 92 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":349.99
      },

      {"id":38,
      "link":"assets/Componente/Surse2.jpg",
      "titlu":"Sursa SilentiumPC Supremo L2, 80+ Gold, 550W",
      "descriere1":"Putere: 550 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 90 %",
      "descriere4":"Certificare: Gold",
      "pret":399.99
      },

      {"id":39,
      "link":"assets/Componente/Surse3.png",
      "titlu":"Sursa Aerocool LUX RGB, 80+ Bronze, 550W",
      "descriere1":"Putere: 550 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 96 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":209.99
      },

      {"id":40,
      "link":"assets/Componente/Surse4.jpg",
      "titlu":"Sursa Segotep GP Series 600W, 80 PLUS GOLD",
      "descriere1":"Putere: 600 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 82 %",
      "descriere4":"Certificare: Gold",
      "pret":323.99
      },

      {"id":41,
      "link":"assets/Componente/Surse5.jpg",
      "titlu":"Sursa Segotep GP1350GN, 80+ Gold, 1250W",
      "descriere1":"Putere: 1250 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 86 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":1049.99
      },

      {"id":42,
      "link":"assets/Componente/Surse6.jpg",
      "titlu":"Sursa Inter-Tech Energon CM 750W",
      "descriere1":"Putere: 750 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 90 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":309.99
      },
      {"id":43,
      "link":"assets/Componente/Carcase1.jpg",
      "titlu":"Carcasa Aerocool Cylon Rgb",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 459 x 413 x 198mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":255.99
      },

      {"id":44,
      "link":"assets/Componente/Carcase2.jpg",
      "titlu":"Carcasa Aerocool Bionic V2",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 450 x 372 x 206 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Gold",
      "pret":174.99
      },

      {"id":45,
      "link":"assets/Componente/Carcase3.png",
      "titlu":"Carcasa Floston Blade Rgb",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 455 x 415 x 188 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":339.99
      },

      {"id":46,
      "link":"assets/Componente/Carcase4.jpg",
      "titlu":"Carcasa Floston Red BARS",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 410 x 410 x 175 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":235.99
      },

      {"id":47,
      "link":"assets/Componente/Carcase5.png",
      "titlu":"Placa video Palit GeForce RTX 3060 StormX 12GB GDDR6 192-bit",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 475 x 547 x 240 mm",
      "descriere3":"Sloturi expansiune: x7 + 2",
      "descriere4":"Permite Asamblare: Premium, Gold",
      "pret":817.99
      },

      {"id":48,
      "link":"assets/Componente/Carcase6.jpg",
      "titlu":"Carcasa SilentiumPC Signum SG1Q EVO TG ARGB",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 447 x 426 x 216 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Premium, Gold",
      "pret":348.59
      },
      {"id":49,
      "link":"assets/Componente/Coolere1.jpg",
      "titlu":"Cooler CPU SilentiumPC Spartan 4 MAX",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 2400 RPM",
      "pret":205.99
      },

      {"id":50,
      "link":"assets/Componente/Coolere2.jpg",
      "titlu":"Cooler CPU Corsair iCUE H100i Elite Capellix",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 2500 RPM",
      "pret":274.99
      },

      {"id":51,
      "link":"assets/Componente/Coolere3.jpg",
      "titlu":"Cooler CPU Deepcool GAMMAXX 300",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 1200 RPM",
      "pret":139.99
      },

      {"id":52,
      "link":"assets/Componente/Coolere4.jpg",
      "titlu":"Cooler CPU SilentiumPC Fera 3 EVO ARGB",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 1600 RPM",
      "pret":235.99
      },

      {"id":53,
      "link":"assets/Componente/Coolere5.jpg",
      "titlu":"Cooler CPU SilentiumPC Navis EVO ARGB 280",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 1800 RPM",
      "pret":617.99
      },

      {"id":54,
      "link":"assets/Componente/Coolere6.jpg",
      "titlu":"Cooler CPU ID-Cooling Zoomflow 240X ARGB",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 1500 RPM",
      "pret":448.59
      },
      {"id":55,
      "link":"assets/Componente/Ventilatoare radiatoare1.jpg",
      "titlu":"Ventilator / radiator Aerocool Saturn 12 FRGB 120mm",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1000 RPM",
      "descriere3":"Flux aer max.: 35 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":25.99
      },

      {"id":56,
      "link":"assets/Componente/Ventilatoare radiatoare2.jpg",
      "titlu":"Ventilator / radiator ARCTIC AC BioniX F120 Red",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1800 RPM",
      "descriere3":"Flux aer max.: 69 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":54.99
      },

      {"id":57,
      "link":"assets/Componente/Ventilatoare radiatoare3.jpg",
      "titlu":"Ventilator / radiator Deepcool Wind Blade Blue LED 120 mm",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1300 RPM",
      "descriere3":"Flux aer max.: 54 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":39.99
      },

      {"id":58,
      "link":"assets/Componente/Ventilatoare radiatoare4.jpg",
      "titlu":"Ventilator / radiator Scythe Slip Stream 140 mm",
      "descriere1":"Dimensiuni ventilator: 140 mm",
      "descriere2":"Viteza de rotatie: 1300 RPM",
      "descriere3":"Flux aer max.: 75 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":55.99
      },

      {"id":59,
      "link":"assets/Componente/Ventilatoare radiatoare5.png",
      "titlu":"Ventilator / radiator Aerocool Duo 12 Pro ARGB 120mm ​Three Fan Pack",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1000 RPM",
      "descriere3":"Flux aer max.: 33 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":157.99
      },

      {"id":60,
      "link":"assets/Componente/Ventilatoare radiatoare6.png",
      "titlu":"Ventilator / radiator SilentiumPC Corona HP EVO ARGB 120mm 3 Fan Pack",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1500 RPM",
      "descriere3":"Flux aer max.: 35 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":199.59
      },
    ];
  }
  getcomponente_placivideo(){
    return[
      {"id":1,
      "link":"assets/Componente/Placi video1.jpg",
      "titlu":"Placa video Palit GeForce RTX 3060 StormX 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":3999.99
      },

      {"id":2,
      "link":"assets/Componente/Placi video2.jpg",
      "titlu":"Placa video XFX Radeon RX 6700 XT Core Gaming 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 6000",
      "descriere3":"GPU clock: 2581  MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":6399.99
      },

      {"id":3,
      "link":"assets/Componente/Placi video3.jpg",
      "titlu":"Placa video GIGABYTE GeForce RTX 3070 GAMING OC 8GB GDDR6 256-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1815  MHz",
      "descriere4":"Dimensiune memorie: 8 GB",
      "pret":7339.99
      },

      {"id":4,
      "link":"assets/Componente/Placi video4.png",
      "titlu":"Placa video ASUS GeForce GTX 1650 TUF Gaming D6 O4G 4GB GDDR6 128-bit",
      "descriere1":"Interfata: PCI Express x16 3.0",
      "descriere2":"Seria: GeForce GTX 1600",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 4 GB",
      "pret":2235.99
      },

      {"id":5,
      "link":"assets/Componente/Placi video5.jpg",
      "titlu":"Placa video XFX Radeon RX 6700 XT Speedster QICK 319 Ultra 12GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":5899.99
      },

      {"id":6,
      "link":"assets/Componente/Placi video6.png",
      "titlu":"Placa video GIGABYTE GeForce RTX 2060 GAMING OC 6GB GDDR6 192-bit",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 2060",
      "descriere3":"GPU clock: 2755 MHz",
      "descriere4":"Dimensiune memorie: 6 GB",
      "pret":3499.59
      },
    ];
  }
  getcomponente_procesoare(){
    return[
      {"id":7,
      "link":"assets/Componente/Procesoare1.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i7 9700 3.0GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":1449.99
      },

      {"id":8,
      "link":"assets/Componente/Procesoare2.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i5 9600K 3.7GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 6000",
      "descriere3":"GPU clock: 2581  MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":1199.99
      },

      {"id":9,
      "link":"assets/Componente/Procesoare3.jpg",
      "titlu":"Procesor Intel Comet Lake, Core i9 10850K 3.6GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1815  MHz",
      "descriere4":"Dimensiune memorie: 8 GB",
      "pret":1989.99
      },

      {"id":10,
      "link":"assets/Componente/Procesoare4.jpg",
      "titlu":"Procesor Intel Comet Lake, Core i7 10700K 3.8GHz box",
      "descriere1":"Interfata: PCI Express x16 3.0",
      "descriere2":"Seria: GeForce GTX 1600",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 4 GB",
      "pret":1723.99
      },

      {"id":11,
      "link":"assets/Componente/Procesoare5.png",
      "titlu":"Procesor AMD Ryzen 9 3900X 3.8GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 3000",
      "descriere3":"GPU clock: 1320 MHz",
      "descriere4":"Dimensiune memorie: 12 GB",
      "pret":2449.99
      },

      {"id":12,
      "link":"assets/Componente/Procesoare6.jpg",
      "titlu":"Procesor Intel Coffee Lake, Core i9 9900K 3.6GHz box",
      "descriere1":"Interfata: PCI Express x16 4.0",
      "descriere2":"Seria: GeForce RTX 2060",
      "descriere3":"GPU clock: 2755 MHz",
      "descriere4":"Dimensiune memorie: 6 GB",
      "pret":1709.99
      },
    ];
  }
  getcomponente_placidebaza(){
    return[
      {"id":13,
      "link":"assets/Componente/Placi de baza1.jpg",
      "titlu":"Placa de baza ASUS TUF GAMING X570-PLUS",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":1149.99
      },

      {"id":14,
      "link":"assets/Componente/Placi de baza2.jpg",
      "titlu":"Placa de baza ASRock B365 PRO4",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: 1151 v2",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":599.99
      },

      {"id":15,
      "link":"assets/Componente/Placi de baza3.jpg",
      "titlu":"Placa de baza ASRock X570 Phantom Gaming 4",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":989.99
      },

      {"id":16,
      "link":"assets/Componente/Placi de baza4.jpg",
      "titlu":"Placa de baza MSI B450 TOMAHAWK MAX",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":723.99
      },

      {"id":17,
      "link":"assets/Componente/Placi de baza5.jpg",
      "titlu":"Placa de baza MSI MPG Z490 GAMING WiFi",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: 1200",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":499.99
      },

      {"id":18,
      "link":"assets/Componente/Placi de baza6.png",
      "titlu":"Placa de baza GIGABYTE B450 AORUS ELITE V2",
      "descriere1":"Format: ATX",
      "descriere2":"Soclu procesor: AM4",
      "descriere3":"Tip memorie: DDR4",
      "descriere4":"Tehnologie: Dual channel",
      "pret":1009.99
      },
    ];
  }
  getcomponente_memorii(){
    return[
      {"id":19,
      "link":"assets/Componente/Memorii1.jpg",
      "titlu":"Memorie HyperX Fury Black 16GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":239.99
      },

      {"id":20,
      "link":"assets/Componente/Memorii2.jpg",
      "titlu":"Memorie Corsair Vengeance RGB 16GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":199.99
      },

      {"id":21,
      "link":"assets/Componente/Memorii3.jpg",
      "titlu":"Memorie Corsair Vengeance RGB 32GB DDR4 3200MHz CL16 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 32 GB",
      "descriere3":"Frecventa: 3200 MHz",
      "descriere4":"Latenta CAS: 16 CL",
      "pret":589.99
      },

      {"id":22,
      "link":"assets/Componente/Memorii4.jpg",
      "titlu":"Memorie HyperX Fury RGB 16GB DDR4 3600MHz CL17 Dual Channel Kit",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 16 GB",
      "descriere3":"Frecventa: 3600 MHz",
      "descriere4":"Latenta CAS: 17 CL",
      "pret":123.99
      },

      {"id":23,
      "link":"assets/Componente/Memorii5.jpg",
      "titlu":"Memorie Corsair Value RED 8GB DDR4 2666MHz CL16",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 8 GB",
      "descriere3":"Frecventa: 2666 MHz",
      "descriere4":"Latenta CAS: 15 CL",
      "pret":99.99
      },

      {"id":24,
      "link":"assets/Componente/Memorii6.jpg",
      "titlu":"Memorie HyperX Fury Black 16GB DDR4 2666MHz CL16",
      "descriere1":"Tip: DDR4",
      "descriere2":"Capacitate: 8 GB",
      "descriere3":"Frecventa: 3000 MHz",
      "descriere4":"Latenta CAS: 15 CL",
      "pret":109.99
      },
    ];
  }
  getcomponente_ssd(){
    return[
      {"id":25,
      "link":"assets/Componente/SSD1.jpg",
      "titlu":"SSD Emtec Power Plus X250 256GB SATA-III M.2 2280",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 256 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 500 MB/s",
      "pret":149.99
      },

      {"id":26,
      "link":"assets/Componente/SSD2.jpg",
      "titlu":"SSD ADATA SX6000 Lite 128GB PCI Express M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 128 GB",
      "descriere3":"Citire max.: 1800 MB/s",
      "descriere4":"Scriere max.: 600 MB/s",
      "pret":199.99
      },

      {"id":27,
      "link":"assets/Componente/SSD3.jpg",
      "titlu":"SSD Intenso Performance 480GB SATA-III 2.5 inch",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 480 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 500 MB/s",
      "pret":189.99
      },

      {"id":28,
      "link":"assets/Componente/SSD4.jpg",
      "titlu":"SSD Intenso Performance 240GB SATA-III M.2 2280",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 240 GB",
      "descriere3":"Citire max.: 520 MB/s",
      "descriere4":"Scriere max.: 480 MB/s",
      "pret":173.99
      },

      {"id":29,
      "link":"assets/Componente/SSD5.jpg",
      "titlu":"SSD ADATA XPG Gammix S11 Pro 256GB PCI Express 3.0 x4 M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 256 GB",
      "descriere3":"Citire max.: 3500 MB/s",
      "descriere4":"Scriere max.: 1200 MB/s",
      "pret":249.99
      },

      {"id":30,
      "link":"assets/Componente/SSD6.jpg",
      "titlu":"SSD Samsung 970 EVO Plus 500GB PCI Express 3.0 x4 M.2 2280",
      "descriere1":"Interfata: PCI Express x4",
      "descriere2":"Capacitate: 500 GB",
      "descriere3":"Citire max.: 3500 MB/s",
      "descriere4":"Scriere max.: 3200 MB/s",
      "pret":319.99
      },
    ];
  }
  getcomponente_hdd(){
    return[
      {"id":31,
      "link":"assets/Componente/Hard disk-uri1.jpg",
      "titlu":"Hard disk Seagate BarraCuda 1TB SATA-III 7200RPM 64MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 1 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":149.99
      },

      {"id":32,
      "link":"assets/Componente/Hard disk-uri2.jpg",
      "titlu":"Hard disk WD New Purple 6TB SATA-III 5400 RPM IntelliPower 64MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 6 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":899.99
      },

      {"id":33,
      "link":"assets/Componente/Hard disk-uri3.jpg",
      "titlu":"Hard disk WD Black 2TB SATA-III 7200 RPM 64MB WD2003FZEX",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 2 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":489.99
      },

      {"id":34,
      "link":"assets/Componente/Hard disk-uri4.jpg",
      "titlu":"Hard disk Toshiba P300 SATA-III 1TB 7200 RPM 64MB bulk",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 1 TB",
      "descriere3":"Buffer: 64 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":173.99
      },

      {"id":35,
      "link":"assets/Componente/Hard disk-uri5.jpg",
      "titlu":"Hard disk Seagate SkyHawk AI 10TB 7200RPM SATA-III 256MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 10 TB",
      "descriere3":"Buffer: 256 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":1249.99
      },

      {"id":36,
      "link":"assets/Componente/Hard disk-uri6.jpg",
      "titlu":"Hard disk Seagate IronWolf Pro 14TB SATA-III 7200RPM 256MB",
      "descriere1":"Interfata: SATA-III",
      "descriere2":"Capacitate: 14 TB",
      "descriere3":"Buffer: 256 MB",
      "descriere4":"Viteza: 7200 RPM",
      "pret":1319.99
      },
    ];
  }
  getcomponente_surse(){
    return[
      {"id":37,
      "link":"assets/Componente/Surse1.png",
      "titlu":"Sursa Segotep GP750G, 80+ Gold, 650W",
      "descriere1":"Putere: 650 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 92 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":349.99
      },

      {"id":38,
      "link":"assets/Componente/Surse2.jpg",
      "titlu":"Sursa SilentiumPC Supremo L2, 80+ Gold, 550W",
      "descriere1":"Putere: 550 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 90 %",
      "descriere4":"Certificare: Gold",
      "pret":399.99
      },

      {"id":39,
      "link":"assets/Componente/Surse3.png",
      "titlu":"Sursa Aerocool LUX RGB, 80+ Bronze, 550W",
      "descriere1":"Putere: 550 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 96 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":209.99
      },

      {"id":40,
      "link":"assets/Componente/Surse4.jpg",
      "titlu":"Sursa Segotep GP Series 600W, 80 PLUS GOLD",
      "descriere1":"Putere: 600 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 82 %",
      "descriere4":"Certificare: Gold",
      "pret":323.99
      },

      {"id":41,
      "link":"assets/Componente/Surse5.jpg",
      "titlu":"Sursa Segotep GP1350GN, 80+ Gold, 1250W",
      "descriere1":"Putere: 1250 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 86 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":1049.99
      },

      {"id":42,
      "link":"assets/Componente/Surse6.jpg",
      "titlu":"Sursa Inter-Tech Energon CM 750W",
      "descriere1":"Putere: 750 W",
      "descriere2":"PFC: Active",
      "descriere3":"Eficienta: 90 %",
      "descriere4":"Certificare: 80+ Gold",
      "pret":309.99
      },
    ];
  }
  getcomponente_carcase(){
    return[
      {"id":43,
      "link":"assets/Componente/Carcase1.jpg",
      "titlu":"Carcasa Aerocool Cylon Rgb",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 459 x 413 x 198mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":255.99
      },

      {"id":44,
      "link":"assets/Componente/Carcase2.jpg",
      "titlu":"Carcasa Aerocool Bionic V2",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 450 x 372 x 206 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Gold",
      "pret":174.99
      },

      {"id":45,
      "link":"assets/Componente/Carcase3.png",
      "titlu":"Carcasa Floston Blade Rgb",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 455 x 415 x 188 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":339.99
      },

      {"id":46,
      "link":"assets/Componente/Carcase4.jpg",
      "titlu":"Carcasa Floston Red BARS",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 410 x 410 x 175 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Standard",
      "pret":235.99
      },

      {"id":47,
      "link":"assets/Componente/Carcase5.png",
      "titlu":"Placa video Palit GeForce RTX 3060 StormX 12GB GDDR6 192-bit",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 475 x 547 x 240 mm",
      "descriere3":"Sloturi expansiune: x7 + 2",
      "descriere4":"Permite Asamblare: Premium, Gold",
      "pret":817.99
      },

      {"id":48,
      "link":"assets/Componente/Carcase6.jpg",
      "titlu":"Carcasa SilentiumPC Signum SG1Q EVO TG ARGB",
      "descriere1":"Tip carcasa: MiddleTower",
      "descriere2":"Dimensiuni (H x D x W): 447 x 426 x 216 mm",
      "descriere3":"Sloturi expansiune: x7",
      "descriere4":"Permite Asamblare: Premium, Gold",
      "pret":348.59
      },
    ];
  }
  getcomponente_coolere(){
    return[
      {"id":49,
      "link":"assets/Componente/Coolere1.jpg",
      "titlu":"Cooler CPU SilentiumPC Spartan 4 MAX",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 2400 RPM",
      "pret":205.99
      },

      {"id":50,
      "link":"assets/Componente/Coolere2.jpg",
      "titlu":"Cooler CPU Corsair iCUE H100i Elite Capellix",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 2500 RPM",
      "pret":274.99
      },

      {"id":51,
      "link":"assets/Componente/Coolere3.jpg",
      "titlu":"Cooler CPU Deepcool GAMMAXX 300",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 1200 RPM",
      "pret":139.99
      },

      {"id":52,
      "link":"assets/Componente/Coolere4.jpg",
      "titlu":"Cooler CPU SilentiumPC Fera 3 EVO ARGB",
      "descriere1":"Tip racire: Aer",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 1",
      "descriere4":"Viteza de rotatie ventilator: 1600 RPM",
      "pret":235.99
      },

      {"id":53,
      "link":"assets/Componente/Coolere5.jpg",
      "titlu":"Cooler CPU SilentiumPC Navis EVO ARGB 280",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 1800 RPM",
      "pret":617.99
      },

      {"id":54,
      "link":"assets/Componente/Coolere6.jpg",
      "titlu":"Cooler CPU ID-Cooling Zoomflow 240X ARGB",
      "descriere1":"Tip racire: Lichid",
      "descriere2":"Racire: Activ",
      "descriere3":"Numar ventilatoare: 2",
      "descriere4":"Viteza de rotatie ventilator: 1500 RPM",
      "pret":448.59
      },
    ];
  }
  getcomponente_ventilatoare(){
    return[
      {"id":55,
      "link":"assets/Componente/Ventilatoare radiatoare1.jpg",
      "titlu":"Ventilator / radiator Aerocool Saturn 12 FRGB 120mm",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1000 RPM",
      "descriere3":"Flux aer max.: 35 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":25.99
      },

      {"id":56,
      "link":"assets/Componente/Ventilatoare radiatoare2.jpg",
      "titlu":"Ventilator / radiator ARCTIC AC BioniX F120 Red",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1800 RPM",
      "descriere3":"Flux aer max.: 69 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":54.99
      },

      {"id":57,
      "link":"assets/Componente/Ventilatoare radiatoare3.jpg",
      "titlu":"Ventilator / radiator Deepcool Wind Blade Blue LED 120 mm",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1300 RPM",
      "descriere3":"Flux aer max.: 54 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":39.99
      },

      {"id":58,
      "link":"assets/Componente/Ventilatoare radiatoare4.jpg",
      "titlu":"Ventilator / radiator Scythe Slip Stream 140 mm",
      "descriere1":"Dimensiuni ventilator: 140 mm",
      "descriere2":"Viteza de rotatie: 1300 RPM",
      "descriere3":"Flux aer max.: 75 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":55.99
      },

      {"id":59,
      "link":"assets/Componente/Ventilatoare radiatoare5.png",
      "titlu":"Ventilator / radiator Aerocool Duo 12 Pro ARGB 120mm ​Three Fan Pack",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1000 RPM",
      "descriere3":"Flux aer max.: 33 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":157.99
      },

      {"id":60,
      "link":"assets/Componente/Ventilatoare radiatoare6.png",
      "titlu":"Ventilator / radiator SilentiumPC Corona HP EVO ARGB 120mm 3 Fan Pack",
      "descriere1":"Dimensiuni ventilator: 120 mm",
      "descriere2":"Viteza de rotatie: 1500 RPM",
      "descriere3":"Flux aer max.: 35 CFM",
      "descriere4":"Tip bearing: Hydraulic",
      "pret":199.59
      },
    ];
  }
}
