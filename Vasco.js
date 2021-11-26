const guarani_titulos = [
    {
        nome: "Campeonato Brasileiro",
        quantidade: 1,
        ano: 1978,
        tamanho: "Nacional"
    },
    {
        nome: "Campeonato Brasileiro - Série B",
        quantidade: 1,
        ano: 1981,
        tamanho: "Nacional"
    },
    {
        nome: "Campeonato Paulista do Interior",
        quantidade: 5,
        ano: [1944, 1972, 1973, 1974, 1975],
        tamanho: "Estadual"
    },
    {
        nome: "Campeonato Paulista - Série A2",
        quantidade: 4,
        ano: [1932, 1944, 1949, 2018],
        tamanho: "Estadual"
    },
    {
       nome: "Taça dos Invictos",
       quantidade: 1,
       ano: 1970,
       tamanho: "Estadual"
    },
    {
        nome: "Torneio Início Paulista",
        quantidade: 3,
        ano: [1953, 1954, 1956],
        tamanho: "Estadual"
    },
    {
        nome: "Campeonato Campineiro",
        quantidade: 12,
        ano: [1916, 1919, 1920, 1938, 1939, 1941, 1942, 1943, 1945, 1946, 1953, 1957],
        tamanho: "Municipal"
    }
];

const vasco_titulos = [
    {
        nome:"Octogonal Rivadávia Corrêa Meyer",
        quantidade: 1,
        ano: 1953,
        tamanho: "Intercontinental"
    },
    {
        nome: "Campeonato Sul-Americano de Campeões",
        quantidade: 1,
        ano: 1948,
        tamanho: "Continental"
    },
    {
        nome: "Copa Libertadores da América",
        quantidade: 1,
        ano: 1998,
        tamanho: "Continental"
    },
    {
        nome: "Copa Mercosul",
        quantidade: 1,
        ano: 2000,
        tamanho: "Continental"
    },
    {
        nome: "Campeonato Brasileiro",
        quantidade: 4,
        ano: [1974, 1989, 1997, 2000],
        tamanho: "Nacional"
    },
    {
        nome: "Copa do Brasil",
        quantidade: 1,
        ano: 2011,
        tamanho: "Nacional"
    },
    {
        nome: "Torneio Rio-São Paulo",
        quantidade: 3,
        ano: [1958, 1966, 1999],
        tamanho: "Interestadual"
    },
    {
        nome: "Taça dos Campeões Rio-São Paulo",
        quantidade: 1,
        ano: 1936,
        tamanho: "Interestadual"
    },
    {
        nome: "Torneio João Havelange",
        quantidade: 1,
        ano: 1993,
        tamanho: "Interestadual"
    },
    {
        nome: "Campeonato Carioca",
        quantidade: 24,
        ano: [1923, 1924, 1929, 1934, 1936, 1945, 1947, 1949, 1950, 1952, 1956, 1958, 1970, 1977, 1982, 1987, 1988, 1992, 1993, 1994, 1998, 2003, 2015, 2016],
        tamanho: "Estadual" 
    },
    {
        nome: "Taça Guanabara (edição separada do Campeonato Estadual)",
        quantidade: 1,
        ano: 1965,
        tamanho: "Estadual"
    },
    {
        nome: "Torneio Início",
        quantidade: 10,
        ano: [1926, 1929, 1930, 1931, 1932, 1942, 1944, 1945, 1948, 1958],
        tamanho: "Estadual"
    },
    {
        nome: "Campeonato Carioca - Série B",
        quantidade: 1,
        ano: 1922,
        tamanho: "Estadual"
    },
    {
        nome: "Campeonatos Cariocas de Aspirantes/Reservas ou Amadores",
        quantidade: 17,
        ano: [1924, 1928, 1934, 1936, 1937, 1941, 1942, 1943, 1946, 1947, 1948, 1949, 1960, 1961, 1964, 1966, 1967],
        tamanho: "Turno do Estadual"
    },
    {
        nome: "Taça Guanabara",
        quantidade: 12,
        ano: [1976, 1977, 1986, 1987, 1990, 1992, 1994, 1998, 2000, 2003, 2016, 2019],
        tamanho: "Turno do Estadual"
    },
    {
        nome: "Taça Rio",
        quantidade: 11,
        ano: [1984, 1988, 1992, 1993, 1998, 1999, 2001, 2003, 2004, 2017, 2021],
        tamanho: "Turno do Estadual"
    },
    {
        nome: "Copa Rio",
        quantidade: 2,
        ano: [1992, 1993],
        tamanho: "Turno do Estadual"
    },
    {
        nome: "Turnos do Campeonato Estadual disputados com outros nomes",
        quantidade: 9,
        ano: [1972, 1973, 1974, 1975, 1977, 1980, 1981, 1988, 1997],
        tamanho: "Turno do Estadual"
    },
    {
        nome: "Torneio Municipal do Rio de Janeiro",
        quantidade: 4,
        ano: [1944, 1945, 1946, 1947],
        tamanho: "municipal"
    },
    {
        nome: "Torneio Relâmpago do Rio de Janeiro",
        quantidade: 2,
        ano: [1944, 1946],
        tamanho: "municipal"
    },
    {
        nome: "Torneio Extra",
        quantidade: 2,
        ano: [1973, 1990],
        tamanho: "municipal"
    },
    {
        nome: "Campeonato da Capital",
        quantidade: 1,
        ano: 1992,
        tamanho: "municipal"
    }
];
if(vasco_titulos.length > guarani_titulos.length){
    console.log('vasco > guarani');
};
for(let i = 0; i < vasco_titulos.length; i++){
    console.table(vasco_titulos[i]);
};
for(let i = 0; i < guarani_titulos.length; i++){
    console.table(guarani_titulos[i]);
};

