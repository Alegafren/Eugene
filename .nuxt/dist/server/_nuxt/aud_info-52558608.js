const infoData = [
  {
    id: 1,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5100",
    type: "",
    desc: ""
  },
  {
    id: 2,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5101",
    type: "Преподовательская",
    desc: ""
  },
  {
    id: 3,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5101A",
    type: "",
    desc: ""
  },
  {
    id: 4,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5102",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 5,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5103",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 6,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5104",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 7,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5105",
    type: "Проектное бюро",
    desc: ""
  },
  {
    id: 8,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5106",
    type: "Проектное бюро",
    desc: ""
  },
  {
    id: 9,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5107",
    type: "Лаборатория",
    desc: ""
  },
  {
    id: 10,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5108",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 11,
    campus: "АВ",
    corpus: "5",
    floor: "1",
    number: "5109",
    type: "",
    desc: ""
  },
  {
    id: 12,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5201",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 13,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5202",
    type: "Аквариальная",
    desc: ""
  },
  {
    id: 14,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5203",
    type: "Молекулярно-клеточный блок",
    desc: ""
  },
  {
    id: 15,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5204",
    type: "Лаборатория",
    desc: "Лаборатория молекулярной биологии и клеточных технологий"
  },
  {
    id: 16,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5205",
    type: "Лаборатория",
    desc: "Лаборатория молекулярной биологии"
  },
  {
    id: 17,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5206",
    type: "Лаборатория",
    desc: "Лаборатория препаративных методов"
  },
  {
    id: 18,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5206А",
    type: "",
    desc: ""
  },
  {
    id: 19,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5206Б",
    type: "Лаборатория, инсектарий",
    desc: "Лаборатория биологических методов борьбы с вредителями сельскохозяйственных растений, инсектарий"
  },
  {
    id: 20,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5207",
    type: "",
    desc: ""
  },
  {
    id: 21,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5207А",
    type: "Молекулярно-клеточный блок",
    desc: "Хранилище расходных материалов"
  },
  {
    id: 22,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5208",
    type: "Центрифужная",
    desc: ""
  },
  {
    id: 23,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5209",
    type: "Форезная",
    desc: ""
  },
  {
    id: 24,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5210",
    type: "",
    desc: ""
  },
  {
    id: 25,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5211",
    type: "Криобанк",
    desc: ""
  },
  {
    id: 26,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5212",
    type: "Лаборатория",
    desc: "Лаборатория физической и коллоидной химии"
  },
  {
    id: 27,
    campus: "АВ",
    corpus: "5",
    floor: "2",
    number: "5213",
    type: "Лаборатория",
    desc: "Лаборатория органической химии"
  },
  {
    id: 28,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5301",
    type: "Лаборатория",
    desc: "Лаборатория общей химии"
  },
  {
    id: 29,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5302",
    type: "",
    desc: ""
  },
  {
    id: 30,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5303",
    type: "Лаборатория",
    desc: "Лаборатория общей химии"
  },
  {
    id: 31,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5304",
    type: "Аспирантская",
    desc: ""
  },
  {
    id: 32,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5305",
    type: "Лаборатория",
    desc: "Лаборатория аналитической химии"
  },
  {
    id: 33,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5306",
    type: "Лаборатория",
    desc: "Лаборатория общей химии"
  },
  {
    id: 34,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5307",
    type: "Лаборатория",
    desc: "Лаборатория органической химии"
  },
  {
    id: 35,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5308",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 36,
    campus: "АВ",
    corpus: "5",
    floor: "3",
    number: "5309",
    type: "Преподавательская",
    desc: ""
  },
  {
    id: 37,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5401",
    type: "Лаборатория",
    desc: "Лаборатория прокариотов"
  },
  {
    id: 38,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "",
    type: "Лаборатория",
    desc: "Лаборатория агробиотехнологии"
  },
  {
    id: 39,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5402",
    type: "",
    desc: ""
  },
  {
    id: 40,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5403",
    type: "Мастерская",
    desc: ""
  },
  {
    id: 41,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5404А",
    type: "Микробиологический блок",
    desc: "Лекционная аудитория"
  },
  {
    id: 42,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5404Б",
    type: "Микробиологический блок",
    desc: "Препараторская, учебная лаборатория"
  },
  {
    id: 43,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5405",
    type: "Микробиологический блок",
    desc: "Препараторская, учебная лаборатория"
  },
  {
    id: 44,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5406А",
    type: "Технопарк",
    desc: ""
  },
  {
    id: 45,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5406Б",
    type: "Лаборатория",
    desc: "Лаборатория БАС"
  },
  {
    id: 46,
    campus: "АВ",
    corpus: "5",
    floor: "4",
    number: "5407",
    type: "Преподавательская",
    desc: ""
  },
  {
    id: 47,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5501",
    type: "",
    desc: ""
  },
  {
    id: 48,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 49,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5503",
    type: "",
    desc: ""
  },
  {
    id: 50,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5503А",
    type: "",
    desc: ""
  },
  {
    id: 51,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5504",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 52,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5505",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 53,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 54,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5507",
    type: "",
    desc: ""
  },
  {
    id: 55,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5507А",
    type: "",
    desc: ""
  },
  {
    id: 56,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 57,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 58,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5510",
    type: "",
    desc: ""
  },
  {
    id: 59,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5511",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 60,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5512",
    type: "Лаборатория",
    desc: "Лаборатория промышленных продуцентов и технологий"
  },
  {
    id: 61,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "",
    type: "Лаборатория",
    desc: "Лаборатория промышленных продуцентов и технологий"
  },
  {
    id: 62,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5514",
    type: "Архив",
    desc: ""
  },
  {
    id: 63,
    campus: "АВ",
    corpus: "5",
    floor: "5",
    number: "5515",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 64,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2101",
    type: "Лаборатория",
    desc: "Секция сварка"
  },
  {
    id: 65,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2102",
    type: "Лаборатория",
    desc: "Обработка материалов давлением"
  },
  {
    id: 66,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2103",
    type: "Лаборатория",
    desc: "Техника низких температур"
  },
  {
    id: 67,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2104",
    type: "Лаборатория",
    desc: ""
  },
  {
    id: 68,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2105",
    type: "Лаборатория",
    desc: "Лаборатория промышленных роботов и средст автоматизации"
  },
  {
    id: 69,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2106",
    type: "",
    desc: ""
  },
  {
    id: 70,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2107",
    type: "",
    desc: ""
  },
  {
    id: 71,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2108",
    type: "",
    desc: ""
  },
  {
    id: 72,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2109",
    type: "Аудитория",
    desc: "Программирование ЧПУ"
  },
  {
    id: 73,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2110",
    type: "Лаборатория",
    desc: "Секция литья"
  },
  {
    id: 74,
    campus: "АВ",
    corpus: "2",
    floor: "1",
    number: "2111",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 75,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2201",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 76,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2202",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 77,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2203",
    type: "",
    desc: ""
  },
  {
    id: 78,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2204",
    type: "",
    desc: ""
  },
  {
    id: 79,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2205",
    type: "",
    desc: ""
  },
  {
    id: 80,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2206",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 81,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2206А",
    type: "",
    desc: ""
  },
  {
    id: 82,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2207",
    type: "Преподовательская",
    desc: "Кафедра техники низких температур"
  },
  {
    id: 83,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2208",
    type: "Профессорская",
    desc: "Кафедра техники низких температур"
  },
  {
    id: 84,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2209",
    type: "Аудитория",
    desc: "Кафедра техники низких температур"
  },
  {
    id: 85,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2210",
    type: "Издательство",
    desc: "Издательство-полиграфический центр"
  },
  {
    id: 86,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2211",
    type: "",
    desc: ""
  },
  {
    id: 87,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2212",
    type: "",
    desc: ""
  },
  {
    id: 88,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2213",
    type: "",
    desc: ""
  },
  {
    id: 89,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2214",
    type: "Аудитория",
    desc: "Кафедра техники низких температур"
  },
  {
    id: 90,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2215",
    type: "Издательство",
    desc: "Издательство-полиграфический центр"
  },
  {
    id: 91,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2216",
    type: "",
    desc: ""
  },
  {
    id: 92,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2217",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 93,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2218",
    type: "Аудитория",
    desc: "Факультет урбанистики"
  },
  {
    id: 94,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2219",
    type: "",
    desc: "Факультет урбанистики"
  },
  {
    id: 95,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2220",
    type: "",
    desc: "Факультет урбанистики"
  },
  {
    id: 96,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2221",
    type: "",
    desc: "Факультет урбанистики"
  },
  {
    id: 97,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2222",
    type: "Кафедра",
    desc: "Факультет урбанистики"
  },
  {
    id: 98,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2223",
    type: "Кафедра",
    desc: "Факультет урбанистики"
  },
  {
    id: 99,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2224",
    type: "",
    desc: "Факультет урбанистики"
  },
  {
    id: 100,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2225",
    type: "",
    desc: ""
  },
  {
    id: 101,
    campus: "АВ",
    corpus: "2",
    floor: "2",
    number: "2226",
    type: "",
    desc: "Факультет урбанистики"
  },
  {
    id: 102,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2301",
    type: "Лаборатория",
    desc: "Маркшейдерское дело"
  },
  {
    id: 103,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2302",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 104,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2303",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 105,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2304",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 106,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2305",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 107,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2306",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 108,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2307",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 109,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2308",
    type: "",
    desc: ""
  },
  {
    id: 110,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2309",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 111,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2310",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 112,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2311",
    type: "Кабинет",
    desc: "Центр по работе со студентами"
  },
  {
    id: 113,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2312",
    type: "Кабинет",
    desc: "Центр по работе со студентами"
  },
  {
    id: 114,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2313",
    type: "Кабинет",
    desc: "Центр по работе со студентами"
  },
  {
    id: 115,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2314",
    type: "Кабинет",
    desc: ""
  },
  {
    id: 116,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2315",
    type: "Кабинет",
    desc: "Многофункциональный центр"
  },
  {
    id: 117,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2316",
    type: "Лаборатория",
    desc: "Лаборатория неразрушающего контроля"
  },
  {
    id: 118,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2317",
    type: "",
    desc: ""
  },
  {
    id: 119,
    campus: "АВ",
    corpus: "2",
    floor: "3",
    number: "2318",
    type: "",
    desc: ""
  },
  {
    id: 120,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2401",
    type: "",
    desc: "Кафедра промышленной теплоэнергетики "
  },
  {
    id: 121,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2402",
    type: "",
    desc: ""
  },
  {
    id: 122,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2403",
    type: "",
    desc: ""
  },
  {
    id: 123,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2404",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 124,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2405",
    type: "",
    desc: ""
  },
  {
    id: 125,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2406",
    type: "Лаборатория",
    desc: "Кафедра промышленной теплоэнергетики "
  },
  {
    id: 126,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2407",
    type: "Преподовательская",
    desc: "Кафедра промышленной теплоэнергетики "
  },
  {
    id: 127,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2407А",
    type: "Преподовательская",
    desc: "Кафедра промышленной теплоэнергетики "
  },
  {
    id: 128,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2408",
    type: "Преподовательская",
    desc: "Кафедра АССИ"
  },
  {
    id: 129,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2409",
    type: "Компьютерный класс",
    desc: "Кафедра АССИ"
  },
  {
    id: 130,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2410",
    type: "",
    desc: ""
  },
  {
    id: 131,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2411",
    type: "",
    desc: ""
  },
  {
    id: 132,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2412",
    type: "Преподовательская",
    desc: "Кафедра основы программирования"
  },
  {
    id: 133,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2413",
    type: "Преподовательская",
    desc: "Кафедра АССИ"
  },
  {
    id: 134,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2414",
    type: "",
    desc: ""
  },
  {
    id: 135,
    campus: "АВ",
    corpus: "2",
    floor: "4",
    number: "2415",
    type: "Лаборатория",
    desc: "Кафедра промышленной теплоэнергетики "
  },
  {
    id: 136,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2501",
    type: "",
    desc: ""
  },
  {
    id: 137,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2502",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 138,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2503",
    type: "",
    desc: ""
  },
  {
    id: 139,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2504",
    type: "Преподовательская",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 140,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2505",
    type: "Аудитория",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 141,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2506",
    type: "Аудитория",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 142,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2507",
    type: "Компьютерный класс",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 143,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2507А",
    type: "Кафедра",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 144,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2508",
    type: "Аудитория",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 145,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2509",
    type: "Аудитория",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 146,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2510",
    type: "",
    desc: ""
  },
  {
    id: 147,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2511",
    type: "Преподовательская",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 148,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2512",
    type: "Преподовательская",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 149,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2513",
    type: "Преподовательская",
    desc: "Кафедра оборудования технологии сварочного производства"
  },
  {
    id: 150,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2514",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 151,
    campus: "АВ",
    corpus: "2",
    floor: "5",
    number: "2515",
    type: "",
    desc: ""
  },
  {
    id: 152,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2601",
    type: "",
    desc: ""
  },
  {
    id: 153,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2602",
    type: "Лаборатория",
    desc: "Надёжность и диагностика АС"
  },
  {
    id: 154,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2603",
    type: "",
    desc: ""
  },
  {
    id: 155,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2604",
    type: "Преподовательская",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 156,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2605",
    type: "",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 157,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2606",
    type: "",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 158,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2607",
    type: "",
    desc: ""
  },
  {
    id: 159,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2608",
    type: "",
    desc: ""
  },
  {
    id: 160,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2609",
    type: "Лаборатория",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 161,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2610",
    type: "",
    desc: ""
  },
  {
    id: 162,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2611",
    type: "Преподовательская",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 163,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2612",
    type: "Преподовательская",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 164,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2613",
    type: "Лаборатория",
    desc: "Микропроцессорная техника "
  },
  {
    id: 165,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2614",
    type: "Преподовательская",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 166,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2615",
    type: "Лаборатория",
    desc: "Теория управления"
  },
  {
    id: 167,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2616",
    type: "Бюро",
    desc: "Студенческое конструкторское бюро"
  },
  {
    id: 168,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2617",
    type: "Лаборатория",
    desc: "Кафедра автоматики и управления в технических системах"
  },
  {
    id: 169,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2618",
    type: "Лаборатория",
    desc: "Электротехника и электроника"
  },
  {
    id: 170,
    campus: "АВ",
    corpus: "2",
    floor: "6",
    number: "2619",
    type: "Лаборатория",
    desc: "Измерительная техника"
  },
  {
    id: 171,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2701",
    type: "Компьютерный класс",
    desc: ""
  },
  {
    id: 172,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2702",
    type: "",
    desc: ""
  },
  {
    id: 173,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2703",
    type: "Читальный зал",
    desc: ""
  },
  {
    id: 174,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2704",
    type: "",
    desc: ""
  },
  {
    id: 175,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2705",
    type: "",
    desc: ""
  },
  {
    id: 176,
    campus: "АВ",
    corpus: "2",
    floor: "7",
    number: "2706",
    type: "Библиотека",
    desc: ""
  },
  {
    id: 177,
    campus: "АВ",
    corpus: "2",
    floor: "8",
    number: "",
    type: "Кафедра физкультуры",
    desc: ""
  },
  {
    id: 178,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3101",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 179,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3102",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 180,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3103",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 181,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3104",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 182,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3105",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 183,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3106",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 184,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3107",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 185,
    campus: "АВ",
    corpus: "3",
    floor: "1",
    number: "3108",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 186,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3201",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 187,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3202",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 188,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3203",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 189,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3204",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 190,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3205",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 191,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3206",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 192,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3207",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 193,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3209",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 194,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3210",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 195,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3211",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 196,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3212",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 197,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3213А",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 198,
    campus: "АВ",
    corpus: "3",
    floor: "2",
    number: "3214",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 199,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3301",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 200,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3302",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 201,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3303",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 202,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3304",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 203,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3305",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 204,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3306",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 205,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3307",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 206,
    campus: "АВ",
    corpus: "3",
    floor: "3",
    number: "3308",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 207,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3401",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 208,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3402",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 209,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3404",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 210,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3405",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 211,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3406",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 212,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3407",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 213,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3408",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 214,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3409",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 215,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3410",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 216,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3412",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 217,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3414",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 218,
    campus: "АВ",
    corpus: "3",
    floor: "4",
    number: "3415",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 219,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3501",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 220,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3502",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 221,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3503",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 222,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3505",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 223,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3506",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 224,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3507",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 225,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3508",
    type: "",
    desc: "Спецотдел"
  },
  {
    id: 226,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3510",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 227,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3511",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 228,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3512",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 229,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3513",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 230,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3514",
    type: "Аудитория",
    desc: "Учебный класс"
  },
  {
    id: 231,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "",
    type: "Штаб ГОСЧ",
    desc: "Штаб ГОСЧ"
  },
  {
    id: 232,
    campus: "АВ",
    corpus: "3",
    floor: "5",
    number: "3515",
    type: "",
    desc: "Военно-учетный стол"
  },
  {
    id: 233,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4001",
    type: "",
    desc: "Эл. шитовая"
  },
  {
    id: 234,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4002",
    type: "Гардероб",
    desc: "Гардероб"
  },
  {
    id: 235,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4004",
    type: "",
    desc: "Камера приточной вентиляции"
  },
  {
    id: 236,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4005",
    type: "",
    desc: "Камера приточной вентиляции"
  },
  {
    id: 237,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4006",
    type: "",
    desc: "Эл. шитовая"
  },
  {
    id: 238,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4007",
    type: "",
    desc: ""
  },
  {
    id: 239,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4008",
    type: "",
    desc: ""
  },
  {
    id: 240,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4009",
    type: "",
    desc: ""
  },
  {
    id: 241,
    campus: "АВ",
    corpus: "4",
    floor: "0",
    number: "4010",
    type: "",
    desc: ""
  },
  {
    id: 242,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4101",
    type: "Лаборатория",
    desc: "Учебная лаборатория кафедры АОиАТП"
  },
  {
    id: 243,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4101А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 244,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4102",
    type: "Лаборатория",
    desc: "Учебная лаборатория кафедры АОиАТП"
  },
  {
    id: 245,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4102А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 246,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4103",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 247,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4103А",
    type: "",
    desc: ""
  },
  {
    id: 248,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4104",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 249,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4104А",
    type: "Лаборатория",
    desc: "Каф. 'Термодинамика,и,неравновесные процессы,переноса'"
  },
  {
    id: 250,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4105",
    type: "Лаборатория",
    desc: "Учебная лаборатория кафедры АОиАТП"
  },
  {
    id: 251,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4105А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 252,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4106",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 253,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4106А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 254,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4107",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 255,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4107А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 256,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4108",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 257,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4108А",
    type: "Лаборатория",
    desc: "Каф. 'Термодинамика,и,неравновесные процессы,переноса'"
  },
  {
    id: 258,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4109",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 259,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4109А",
    type: "Лаборатория",
    desc: "Центр технологической поддержки образования (цтпо)"
  },
  {
    id: 260,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4110",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 261,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4111А",
    type: "Уборная",
    desc: "Мужская"
  },
  {
    id: 262,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4112А",
    type: "Уборная",
    desc: "Женская"
  },
  {
    id: 263,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4113А",
    type: "Уборная",
    desc: "Мужская"
  },
  {
    id: 264,
    campus: "АВ",
    corpus: "4",
    floor: "1",
    number: "4114А",
    type: "Уборная",
    desc: "Женская"
  },
  {
    id: 265,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4201",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 266,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4201А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 267,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4202",
    type: "Архив",
    desc: "Институт дистанционного образования"
  },
  {
    id: 268,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4202А-Л",
    type: "",
    desc: "Амфитеатр"
  },
  {
    id: 269,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4202А-П",
    type: "",
    desc: "Амфитеатр"
  },
  {
    id: 270,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4203",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 271,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4203А",
    type: "Аудитория",
    desc: 'Кафедра "Термодинамика и неравновесные процессы переноса"'
  },
  {
    id: 272,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4204",
    type: "Преподавательская",
    desc: ""
  },
  {
    id: 273,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4204А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 274,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4205",
    type: "Аудитория",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 275,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4205-2",
    type: "Аудитория",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 276,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4205А",
    type: "Лаборатория",
    desc: "Центр технологической поддержки образования (ЦТПО)"
  },
  {
    id: 277,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4206",
    type: "Лаборатория",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 278,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4206А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 279,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4207",
    type: "Лаборатория",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 280,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4207А",
    type: "Лаборатория",
    desc: 'Лаборатория "Полезные ископаемые"'
  },
  {
    id: 281,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4208А",
    type: "Музей",
    desc: 'Минералогический музей, Кафедра "Техника и технология горного и нефтегазового производства"'
  },
  {
    id: 282,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4209",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 283,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4209А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 284,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4210",
    type: "Преподавательская",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 285,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4210А",
    type: "",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 286,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4210А-2",
    type: "",
    desc: ""
  },
  {
    id: 287,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4211",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 288,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4211А-1",
    type: "Аудитория",
    desc: "Аудитория имени Леонида Аркадьевича Костандова"
  },
  {
    id: 289,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4211А-2",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 290,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4212",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 291,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4212А",
    type: "Лаборатория",
    desc: 'Лаборатория "Минералогия, петрография и полезные ископаемые"'
  },
  {
    id: 292,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4213",
    type: "",
    desc: "Переход"
  },
  {
    id: 293,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4213А",
    type: "",
    desc: "Выход на лестницу"
  },
  {
    id: 294,
    campus: "АВ",
    corpus: "4",
    floor: "2",
    number: "4214А",
    type: "",
    desc: "Выход на лестницу"
  },
  {
    id: 295,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4301",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 296,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4302",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 297,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4303",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 298,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4304",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 299,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4305",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 300,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4306",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 301,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4307",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 302,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4308",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 303,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4309",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 304,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4310",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 305,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4311",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 306,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4312",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 307,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4313",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 308,
    campus: "АВ",
    corpus: "4",
    floor: "3",
    number: "4314",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 309,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4401",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 310,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4402",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 311,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4403",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 312,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4404",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 313,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4405",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 314,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4406",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 315,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4407",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 316,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4408",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 317,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4409",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 318,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4410",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 319,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4411",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 320,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4412",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 321,
    campus: "АВ",
    corpus: "4",
    floor: "4",
    number: "4413",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 322,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4501",
    type: "Лаборатория",
    desc: "Учебно-исследовательская лаборатория / Каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 323,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4502",
    type: "Лаборантская",
    desc: "Лаборантская / Каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 324,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4503",
    type: "Преподавательская",
    desc: "Каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 325,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4503А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 326,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4504",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 327,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4505",
    type: "Мультимедийная аудитория",
    desc: "каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 328,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4506",
    type: "Преподавательская",
    desc: "Каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 329,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4507",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 330,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4508",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 331,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4509",
    type: "Мультимедийная аудитория",
    desc: "Лекционный мультимедийный класс / Каф. 'Процессы и аппараты химической технологии'"
  },
  {
    id: 332,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4510",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 333,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4511",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 334,
    campus: "АВ",
    corpus: "4",
    floor: "5",
    number: "4512",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 335,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4601",
    type: "Преподавательская",
    desc: "Каф. 'Прикладная информатика'"
  },
  {
    id: 336,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4602",
    type: "Преподавательская",
    desc: "Заведующий кафедрой Колтунов Игорь Ильич / Каф. 'Информационные системы и технологии'"
  },
  {
    id: 337,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4603",
    type: "Компьютерный класс",
    desc: "Каф. 'Информационные системы и технологии'"
  },
  {
    id: 338,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4604",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 339,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4605",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 340,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4606",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 341,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4607",
    type: "Аудитория",
    desc: "Аудитория деловых игр"
  },
  {
    id: 342,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4608",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 343,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4609",
    type: "Аудитория",
    desc: "Каф. 'Издательское дело и книговедение'"
  },
  {
    id: 344,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4610",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 345,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4611",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 346,
    campus: "АВ",
    corpus: "4",
    floor: "6",
    number: "4612",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 347,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4701",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 348,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4702",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 349,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4703",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 350,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4704",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 351,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4705",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 352,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4707",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 353,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4708",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 354,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4709",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 355,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4710",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 356,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4711",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 357,
    campus: "АВ",
    corpus: "4",
    floor: "7",
    number: "4712",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 358,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4801",
    type: "Лаборатория",
    desc: "Каф. 'Информационная безопасность'"
  },
  {
    id: 359,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4802",
    type: "Преподавательская",
    desc: "Каф. 'Прикладная информатика'"
  },
  {
    id: 360,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4803",
    type: "Лаборатория",
    desc: "Каф. 'Информатика и вычислительная техника'"
  },
  {
    id: 361,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4804",
    type: "Преподавательская",
    desc: "Заведующий кафедрой Суворов Станислав Вадимович / Каф. 'Прикладная информатика'"
  },
  {
    id: 362,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4805",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 363,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4806",
    type: "Лаборатория",
    desc: "Каф. 'Прикладная информатика'"
  },
  {
    id: 364,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4807",
    type: "",
    desc: "Вычислительный центр"
  },
  {
    id: 365,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4808",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 366,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4809",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 367,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4810",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 368,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4811",
    type: "Мультимедийная аудитория",
    desc: ""
  },
  {
    id: 369,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4812",
    type: "Преподавательская",
    desc: "Заведующий кафедрой Фёдоров Николай Владимирович / Каф. 'Информационная безопасность'"
  },
  {
    id: 370,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4813",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 371,
    campus: "АВ",
    corpus: "4",
    floor: "8",
    number: "4814",
    type: "Преподавательская",
    desc: "Каф. 'Информационная безопасность'"
  },
  {
    id: 372,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4901",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 373,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4902",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 374,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4903",
    type: "",
    desc: "Дискуссионный клуб"
  },
  {
    id: 375,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4904",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 376,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4905",
    type: "Библиотека",
    desc: ""
  },
  {
    id: 377,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4906",
    type: "Читальный зал",
    desc: "Читальный зал для преподавателей (пн.-пт. 11.00-18.00)"
  },
  {
    id: 378,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4907",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 379,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4907А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 380,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4908",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 381,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4909",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 382,
    campus: "АВ",
    corpus: "4",
    floor: "9",
    number: "4910",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 383,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "411",
    type: "Лаборатория",
    desc: "Кафедра 'ХимБиотех'"
  },
  {
    id: 384,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "412",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 385,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "413",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 386,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "414",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 387,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "415",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 388,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "416",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 389,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "417",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 390,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "418",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 391,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "419",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 392,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "420",
    type: "Кафедра",
    desc: "Менеджмент архив"
  },
  {
    id: 393,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "421",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 394,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "421А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 395,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "421Б",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 396,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "422",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 397,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "423",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 398,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "424",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 399,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "425",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 400,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "425А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 401,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "426",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 402,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "429",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 403,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "430",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 404,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "431",
    type: "Лаборатория",
    desc: "Научно-исследовательская и экспериментальная лаборатория экологии Московского региона"
  },
  {
    id: 405,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "432",
    type: "Преподавательская",
    desc: "Кафедра 'ХимБиотех'"
  },
  {
    id: 406,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "433",
    type: "Лаборатория",
    desc: "Кафедра 'ХимБиотех'"
  },
  {
    id: 407,
    campus: "ПК",
    corpus: "",
    floor: "4",
    number: "433А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 408,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "501",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 409,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "502",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 410,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "503",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 411,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "503А-Б",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 412,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "504",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 413,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "505",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 414,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "506",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 415,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "507",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 416,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "508",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 417,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "509",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 418,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "510",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 419,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "511",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 420,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "512",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 421,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "513",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 422,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "514",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 423,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "515",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 424,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "516",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 425,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "517",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 426,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "518",
    type: "Аудитория",
    desc: "Компьютерный класс"
  },
  {
    id: 427,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "523",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 428,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "523А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 429,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "524",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 430,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "524А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 431,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "525",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 432,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "526",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 433,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "527",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 434,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "528",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 435,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "529",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 436,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "532",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 437,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "533",
    type: "Аудитория",
    desc: "Коворкинг"
  },
  {
    id: 438,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "534",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 439,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "535",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 440,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "536",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 441,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "537",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 442,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "537В",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 443,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "537С",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 444,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "538",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 445,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "539",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 446,
    campus: "ПК",
    corpus: "",
    floor: "5",
    number: "",
    type: "Аудитория",
    desc: "Спортзал Копоэйра"
  },
  {
    id: 447,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "101",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 448,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "",
    type: "Спортзал",
    desc: "Спортзал бокса"
  },
  {
    id: 449,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "103",
    type: "Спортзал №4",
    desc: "Спортзал тяжелой атлетики"
  },
  {
    id: 450,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "104",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 451,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "105",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 452,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "105А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 453,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "106",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 454,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "106А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 455,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "108",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 456,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "110",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 457,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "114",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 458,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "115",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 459,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "125",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 460,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "126",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 461,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "128",
    type: "Преподавательская",
    desc: ""
  },
  {
    id: 462,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "129",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 463,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "133",
    type: "Спортзал №5",
    desc: ""
  },
  {
    id: 464,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "136",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 465,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "137",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 466,
    campus: "ПК",
    corpus: "",
    floor: "1",
    number: "",
    type: "Лаборатория",
    desc: "Лаборатория сопротивления материалов "
  },
  {
    id: 467,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "203",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 468,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "204",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 469,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "205",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 470,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "206",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 471,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "207",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 472,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "208",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 473,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "209",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 474,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "210",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 475,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "211",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 476,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "212",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 477,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "213",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 478,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "213А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 479,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "214",
    type: "Аудитория",
    desc: "Читальный зал"
  },
  {
    id: 480,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "217",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 481,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "218",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 482,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "220",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 483,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "221",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 484,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "222",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 485,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "224",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 486,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "225",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 487,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "227",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 488,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "228",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 489,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "229",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 490,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "230",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 491,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "231",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 492,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "232",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 493,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "232А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 494,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "233",
    type: "Аудитория",
    desc: "'Кафедра Управления, персоналом'"
  },
  {
    id: 495,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "234",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 496,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "235",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 497,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "236",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 498,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "237",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 499,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "238",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 500,
    campus: "ПК",
    corpus: "",
    floor: "2",
    number: "",
    type: "Доброцентр",
    desc: "Коворкинг Доброцентр"
  },
  {
    id: 501,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "301",
    type: "Санитарная комната",
    desc: ""
  },
  {
    id: 502,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "302",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 503,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "303",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 504,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "304",
    type: "Аудитория",
    desc: "Опечатано"
  },
  {
    id: 505,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "305",
    type: "Аудитория",
    desc: "Опечатано"
  },
  {
    id: 506,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "307",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 507,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "308",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 508,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "308А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 509,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "309",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 510,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "310",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 511,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "311",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 512,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "312",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 513,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "313",
    type: "Аудитория",
    desc: "Кафедра 'Иностранные, языки'"
  },
  {
    id: 514,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "314",
    type: "Лаборатория",
    desc: "Учебная лаборатория 'Механика и молекулярная физика'. Кафедра 'Физика'"
  },
  {
    id: 515,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "314А",
    type: "Мастерская",
    desc: "Учебная мастерская. Кафедра 'Физика'"
  },
  {
    id: 516,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "315",
    type: "Лаборатория",
    desc: "Учебная лаборатория 'Оптика'. Кафедра 'Физика'"
  },
  {
    id: 517,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "316",
    type: "Лаборатория",
    desc: "Учебная лаборатория 'Физика полупроводников'. Кафедра 'Физика'"
  },
  {
    id: 518,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "317",
    type: "Лаборатория",
    desc: "Учебная лаборатория 'Электричество и магнетизм'. Кафедра 'Физика'"
  },
  {
    id: 519,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "318",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 520,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "319",
    type: "Лаборатория",
    desc: "Лаборатория. Кафедра 'Менеджмент'"
  },
  {
    id: 521,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "320",
    type: "Аудитория",
    desc: "Преподавательская. Кафедра 'Экономика и организация'"
  },
  {
    id: 522,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "321",
    type: "Лаборатория",
    desc: "Учебная лаборатория 'Механика и молекулярная физика'. Кафедра 'Физика'"
  },
  {
    id: 523,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "321А",
    type: "Аудитория",
    desc: "Учебно-методический кабинет. Кафедра 'Физика'"
  },
  {
    id: 524,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "321Б",
    type: "Лаборатория",
    desc: "Научно-исследовательская лаборатория. Кафедра 'Физика'"
  },
  {
    id: 525,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "321В",
    type: "Аудитория",
    desc: "Лабораторная аудитория. Кафедра 'Физика'"
  },
  {
    id: 526,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "322",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 527,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "323",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 528,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "324",
    type: "Аудитория",
    desc: "Преподавательская. Кафедра 'Физика'"
  },
  {
    id: 529,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "325",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 530,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "327",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 531,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "328",
    type: "Аудитория",
    desc: "Лабораторная аудитория. Кафедра ‘Физика’"
  },
  {
    id: 532,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "329",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 533,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "330",
    type: "Аудитория",
    desc: "Отдел итоговой аттестации "
  },
  {
    id: 534,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "331",
    type: "Аудитория",
    desc: "Электромагнетизм"
  },
  {
    id: 535,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "332",
    type: "Аудитория",
    desc: "Механика и молекулярная физика "
  },
  {
    id: 536,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "333",
    type: "Аудитория",
    desc: "Оптика"
  },
  {
    id: 537,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "334",
    type: "Аудитория",
    desc: "Физический кабинет. Кафедра 'Физика'"
  },
  {
    id: 538,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "335",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 539,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "337",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 540,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "338",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 541,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "338А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 542,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "339",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 543,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "340",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 544,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "341",
    type: "Аудитория",
    desc: "Профсоюзное бюро "
  },
  {
    id: 545,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "342",
    type: "Аудитория",
    desc: "Опечатано "
  },
  {
    id: 546,
    campus: "ПК",
    corpus: "",
    floor: "3",
    number: "343",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 547,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2101",
    type: "Аудитория",
    desc: "Для самостоятельной работы, для обучения лиц с ОВЗ"
  },
  {
    id: 548,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "",
    type: "гардероб",
    desc: ""
  },
  {
    id: 549,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2108",
    type: "",
    desc: ""
  },
  {
    id: 550,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2109",
    type: "Аудитория",
    desc: "Литография"
  },
  {
    id: 551,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2110",
    type: "аудитория",
    desc: "литография"
  },
  {
    id: 552,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2110а",
    type: "аудитория",
    desc: "литография"
  },
  {
    id: 553,
    campus: "ПР",
    corpus: "4",
    floor: "1",
    number: "2116",
    type: "лаборатория",
    desc: "кафедра полиграфических машин и оборудования"
  },
  {
    id: 554,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2201",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 555,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2201м",
    type: "лаборатория",
    desc: "цифровые печатные машины"
  },
  {
    id: 556,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2202а",
    type: "лаборатория",
    desc: "испытания полимерных плёнок и нтц"
  },
  {
    id: 557,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2202б",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 558,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2203",
    type: "лаборатория",
    desc: "печатные, послепечатные и отделочные процессы"
  },
  {
    id: 559,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2204",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 560,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2205",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 561,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2206",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 562,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2207",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 563,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2208",
    type: "аудитория",
    desc: "класс гражданской обороны и защиты от чрезвычайных ситуаций"
  },
  {
    id: 564,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2210",
    type: "лаборатория",
    desc: "печатные и послепечатные процессы"
  },
  {
    id: 565,
    campus: "ПР",
    corpus: "4",
    floor: "2",
    number: "2214",
    type: "-",
    desc: "-"
  },
  {
    id: 566,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "2303",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 567,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "2304",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 568,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "2305",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 569,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "2306",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 570,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "2307",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 571,
    campus: "ПР",
    corpus: "4",
    floor: "3",
    number: "-",
    type: "кафе",
    desc: "-"
  },
  {
    id: 572,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2402",
    type: "лаборатория",
    desc: "автоматизация полиграфических производств"
  },
  {
    id: 573,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2403",
    type: "лаборатория",
    desc: "автоматизация полиграфических производств"
  },
  {
    id: 574,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2404",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 575,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2405",
    type: "-",
    desc: "-"
  },
  {
    id: 576,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2406",
    type: "-",
    desc: "-"
  },
  {
    id: 577,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2407",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 578,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2408",
    type: "аудитория",
    desc: "аспирантура"
  },
  {
    id: 579,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2409",
    type: "преподавательская",
    desc: "-"
  },
  {
    id: 580,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2410",
    type: "преподавательская",
    desc: "-"
  },
  {
    id: 581,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2411",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 582,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2412(ФО-1)",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 583,
    campus: "ПР",
    corpus: "4",
    floor: "4",
    number: "2413(ФО-2)",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 584,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2501",
    type: "кабинет",
    desc: "отдел технической поддержки"
  },
  {
    id: 585,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2502",
    type: "аудитория",
    desc: 'компьютерный класс кафедры "Информатика и информационные технологии"'
  },
  {
    id: 586,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2503",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 587,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2504",
    type: "-",
    desc: "-"
  },
  {
    id: 588,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2505",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 589,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2506",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 590,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2507",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 591,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "-",
    type: "Серверная",
    desc: "отдел администрирования компьютерных сетей"
  },
  {
    id: 592,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2552",
    type: "кабинет",
    desc: "ДИТ"
  },
  {
    id: 593,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2553",
    type: "аудитория",
    desc: "компьютерный класс №1"
  },
  {
    id: 594,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2554",
    type: "аудитория",
    desc: "компьютерный класс №2"
  },
  {
    id: 595,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2555",
    type: "аудитория",
    desc: "компьютерный класс №3"
  },
  {
    id: 596,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2557",
    type: "аудитория",
    desc: 'Лаборатория "Информационные системы", кафедра "Информатика и информационные технологии"'
  },
  {
    id: 597,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2558",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 598,
    campus: "ПР",
    corpus: "4",
    floor: "5",
    number: "2559",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 599,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2605",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 600,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2606",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 601,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2608",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 602,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2609",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 603,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2610",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 604,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2611",
    type: "аудитория",
    desc: 'Лаборатория "Интеллектуальные системы", кафедра "Информатика и информационные технологии"'
  },
  {
    id: 605,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2662",
    type: "аудитория",
    desc: 'Лаборатория "Интеллектуальные системы", кафедра "Информатика и информационные технологии"'
  },
  {
    id: 606,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2663",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 607,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2664",
    type: "аудитория",
    desc: 'Кафедра "Информатика и информационные технологии"'
  },
  {
    id: 608,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2665",
    type: "-",
    desc: "-"
  },
  {
    id: 609,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2666",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 610,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2667",
    type: "аудитория",
    desc: 'Лаборатория "Информационные системы", кафедра "Информатика и информационные технологии"'
  },
  {
    id: 611,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2668",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 612,
    campus: "ПР",
    corpus: "4",
    floor: "6",
    number: "2669",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 613,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "2701",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 614,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "2702",
    type: "читальный зал",
    desc: "-"
  },
  {
    id: 615,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "2711",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 616,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "2712",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 617,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "кабинет",
    desc: "студия интернет-вещания"
  },
  {
    id: 618,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "кабинет",
    desc: "абонемент учебной литературы"
  },
  {
    id: 619,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "кабинет",
    desc: "директор библиотечно-информационного центра"
  },
  {
    id: 620,
    campus: "ПР",
    corpus: "4",
    floor: "7",
    number: "-",
    type: "библиотека",
    desc: "-"
  },
  {
    id: 621,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2802",
    type: "аудитория",
    desc: "компьютерный класс кафедры информатики и информационных технологий"
  },
  {
    id: 622,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2802а",
    type: "-",
    desc: "-"
  },
  {
    id: 623,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2803",
    type: "преподавательская",
    desc: "кафедра информатики и информационных технологий"
  },
  {
    id: 624,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2804",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 625,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2806",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 626,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2808",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 627,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2810",
    type: "аудитория",
    desc: "-"
  },
  {
    id: 628,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2811",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 629,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2812",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 630,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2813",
    type: "лаборатория",
    desc: "трафаретная печать"
  },
  {
    id: 631,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2814",
    type: "аудитория",
    desc: "кафедра информатики и информационных технологий"
  },
  {
    id: 632,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2814а",
    type: "преподавательская",
    desc: "-"
  },
  {
    id: 633,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2815а",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 634,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2815б",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 635,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2815в",
    type: "кабинет",
    desc: "-"
  },
  {
    id: 636,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2815г",
    type: "лаборантская",
    desc: "-"
  },
  {
    id: 637,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2816",
    type: "лаборантская",
    desc: "-"
  },
  {
    id: 638,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2816б",
    type: "лаборантская",
    desc: "-"
  },
  {
    id: 639,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2817а",
    type: "-",
    desc: "-"
  },
  {
    id: 640,
    campus: "ПР",
    corpus: "4",
    floor: "8",
    number: "2817б",
    type: "-",
    desc: "-"
  },
  {
    id: 641,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-100",
    type: "Точка кипения",
    desc: "Точка кипения"
  },
  {
    id: 642,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-106",
    type: "-",
    desc: "Отдел охраны труда"
  },
  {
    id: 643,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-107",
    type: "Медпункт",
    desc: "Медпункт"
  },
  {
    id: 644,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-108",
    type: "Кафедра",
    desc: "Кафедра физического воспитания, спортивный зал"
  },
  {
    id: 645,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-112б",
    type: "Кафедра",
    desc: "Кафедра физического воспитания"
  },
  {
    id: 646,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-112в",
    type: "Кафедра",
    desc: "Кафедра физического воспитания"
  },
  {
    id: 647,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-112г",
    type: "Кафедра",
    desc: "Кафедра физического воспитания"
  },
  {
    id: 648,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-105",
    type: "-",
    desc: "Управление комплексной безопасности"
  },
  {
    id: 649,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-104",
    type: "-",
    desc: "Проректор по безопасности"
  },
  {
    id: 650,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-4",
    type: "Лаборатория",
    desc: "ЦПД, лаборатория электроники и робототехники"
  },
  {
    id: 651,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-8",
    type: "Лаборатория",
    desc: "ЦПД, лаборатория электроники и робототехники"
  },
  {
    id: 652,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-12",
    type: "Лаборатория",
    desc: "ЦПД, лаборатория электроники и робототехники"
  },
  {
    id: 653,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-13",
    type: "Лаборатория",
    desc: "ЦПД, лаборатория электроники и робототехники"
  },
  {
    id: 654,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-103",
    type: "-",
    desc: "Проректор по цифровому развитию"
  },
  {
    id: 655,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-109",
    type: "Аудитория",
    desc: "Отдел музейно-выставочной деятельности"
  },
  {
    id: 656,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-102",
    type: "-",
    desc: "ЦПД"
  },
  {
    id: 657,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-101",
    type: "-",
    desc: "ЦПД"
  },
  {
    id: 658,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-110",
    type: "-",
    desc: "Отдел контроля и делопроизводства"
  },
  {
    id: 659,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-111",
    type: "Аудитория",
    desc: "Экспедиция"
  },
  {
    id: 660,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-112",
    type: "Аудитория",
    desc: "Инженерная школа(факультет)"
  },
  {
    id: 661,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-120",
    type: "Аудитория",
    desc: "Инженерная школа(факультет)"
  },
  {
    id: 662,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-119",
    type: "-",
    desc: "-"
  },
  {
    id: 663,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-113",
    type: "-",
    desc: "Отдел кадров"
  },
  {
    id: 664,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-114",
    type: "-",
    desc: "Отдел кадров"
  },
  {
    id: 665,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-118",
    type: "-",
    desc: "Управление развития персонала"
  },
  {
    id: 666,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-117",
    type: "-",
    desc: "Центр по связям с общественностью"
  },
  {
    id: 667,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-115",
    type: "Аудитория",
    desc: "Инженерная школа(факультет)"
  },
  {
    id: 668,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-116",
    type: "-",
    desc: "Центр по связям с общественностью"
  },
  {
    id: 669,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-218",
    type: "-",
    desc: "Центр развития кампуса"
  },
  {
    id: 670,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-219",
    type: "-",
    desc: "Имущественное управления"
  },
  {
    id: 671,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-220",
    type: "-",
    desc: "Управление модернизации и эксплуатации кампуса"
  },
  {
    id: 672,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-221",
    type: "-",
    desc: "Директор по развитию кампуса"
  },
  {
    id: 673,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-216",
    type: "-",
    desc: "Управление модернизации и эксплуатации кампуса"
  },
  {
    id: 674,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-215",
    type: "-",
    desc: "-"
  },
  {
    id: 675,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-211",
    type: "-",
    desc: "Проректор по управлению кампусом"
  },
  {
    id: 676,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-212",
    type: "-",
    desc: "Дирекция по развитию кампуса"
  },
  {
    id: 677,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-214",
    type: "-",
    desc: "-"
  },
  {
    id: 678,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-210",
    type: "-",
    desc: "Проректор по соц. и воспитательной работе"
  },
  {
    id: 679,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-201",
    type: "-",
    desc: "Директор по связям с общественностью"
  },
  {
    id: 680,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-202",
    type: "-",
    desc: "Проректор по международной деятельности"
  },
  {
    id: 681,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-208",
    type: "-",
    desc: "Начальник управления делами"
  },
  {
    id: 682,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-207",
    type: "-",
    desc: "Проректор по научной работе"
  },
  {
    id: 683,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-206",
    type: "-",
    desc: "Первый проректор"
  },
  {
    id: 684,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-205",
    type: "Зал",
    desc: "Зал заседаний"
  },
  {
    id: 685,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-203",
    type: "-",
    desc: "Ректор"
  },
  {
    id: 686,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-204",
    type: "-",
    desc: "Проректор по учебной работе"
  },
  {
    id: 687,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "А-200",
    type: "Актовый зал",
    desc: "-"
  },
  {
    id: 688,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-316",
    type: "Кабинет",
    desc: "-"
  },
  {
    id: 689,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-315",
    type: "-",
    desc: "Управление экономики и финансов, договорной отдел"
  },
  {
    id: 690,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-301",
    type: "-",
    desc: "-"
  },
  {
    id: 691,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-314",
    type: "-",
    desc: "Финансовый отдел"
  },
  {
    id: 692,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-313",
    type: "-",
    desc: "Финансовый отдел"
  },
  {
    id: 693,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-302",
    type: "-",
    desc: "Контрактная служба"
  },
  {
    id: 694,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-312",
    type: "-",
    desc: "Финансовый отдел"
  },
  {
    id: 695,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-311",
    type: "-",
    desc: "Расчётный отдел"
  },
  {
    id: 696,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-303",
    type: "-",
    desc: "Управление экономики и финансов, договорной отдел"
  },
  {
    id: 697,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-310",
    type: "-",
    desc: "Управление бухгалтерского отчёта"
  },
  {
    id: 698,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-304",
    type: "-",
    desc: "-"
  },
  {
    id: 699,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-309",
    type: "-",
    desc: "Управление бухгалтерского отчёта, отдел учёта доходов и налогов"
  },
  {
    id: 700,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-305",
    type: "-",
    desc: "Отдел мониторинга и формирования отчётности"
  },
  {
    id: 701,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-308",
    type: "-",
    desc: "Управление бухгалтерского отчёта, материальный отдел"
  },
  {
    id: 702,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-306",
    type: "-",
    desc: "Отдел снабжения"
  },
  {
    id: 703,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-307",
    type: "-",
    desc: "Управление бухгалтерского отчёта, расчётный отдел"
  },
  {
    id: 704,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-317",
    type: "Кабинет",
    desc: "-"
  },
  {
    id: 705,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-326",
    type: "-",
    desc: "Управление экономики и финансов"
  },
  {
    id: 706,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-324",
    type: "-",
    desc: "Директор по планированию и организации бюджетного процесса"
  },
  {
    id: 707,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-318",
    type: "-",
    desc: "Отдел планирование и бюджетирования"
  },
  {
    id: 708,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-323",
    type: "-",
    desc: "Отдел финансового сопровождения филиалов"
  },
  {
    id: 709,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-322",
    type: "-",
    desc: "Отдел по организации мероприятий"
  },
  {
    id: 710,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-321",
    type: "-",
    desc: "Контрольное управление"
  },
  {
    id: 711,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-319",
    type: "-",
    desc: "Управление экономики и финансов, отдел труда и заработной платы"
  },
  {
    id: 712,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "А-320",
    type: "Офис",
    desc: "Проектный офис"
  },
  {
    id: 713,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-421",
    type: "-",
    desc: "Центр оценки и развития управленческих компетенций"
  },
  {
    id: 714,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-420",
    type: "-",
    desc: "Отдел организации учебного процесса"
  },
  {
    id: 715,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-422",
    type: "-",
    desc: "Центр профессиональной переподготовки и повышения квалификации"
  },
  {
    id: 716,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-419",
    type: "-",
    desc: "Отдел организации учебного процесса"
  },
  {
    id: 717,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-423",
    type: "-",
    desc: "Отдел снабжения"
  },
  {
    id: 718,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-424",
    type: "-",
    desc: "Советник ректора"
  },
  {
    id: 719,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-418",
    type: "-",
    desc: "Отдел технической поддержки"
  },
  {
    id: 720,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-425",
    type: "-",
    desc: "Отдел контроля образовательного процесса"
  },
  {
    id: 721,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-417",
    type: "Кабинет",
    desc: "-"
  },
  {
    id: 722,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-416",
    type: "-",
    desc: "Управление информационных технологий"
  },
  {
    id: 723,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-415",
    type: "-",
    desc: "Управление по воспитательной и социальной работе"
  },
  {
    id: 724,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-414",
    type: "-",
    desc: "Управление по воспитательной и социальной работе"
  },
  {
    id: 725,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-401",
    type: "-",
    desc: "Отдел развития персонала и организационной культуры"
  },
  {
    id: 726,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-413",
    type: "-",
    desc: "Отдел аккредитации и лицензирования"
  },
  {
    id: 727,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-402",
    type: "-",
    desc: "Управление экономики и финансов, отдел экономического сопровождения проектов"
  },
  {
    id: 728,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-403",
    type: "-",
    desc: "Центр по работе со студентами"
  },
  {
    id: 729,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-412",
    type: "-",
    desc: "Директор по взаимодействию со студентами и выпускниками"
  },
  {
    id: 730,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-404",
    type: "-",
    desc: "Центр карьеры и трудоустройства"
  },
  {
    id: 731,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-411",
    type: "Кабинет",
    desc: "-"
  },
  {
    id: 732,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-405",
    type: "-",
    desc: "Департамент по образовательной политике"
  },
  {
    id: 733,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-410",
    type: "-",
    desc: "Отдел соц. защиты"
  },
  {
    id: 734,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-409",
    type: "-",
    desc: "Помощник ректора"
  },
  {
    id: 735,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-408",
    type: "-",
    desc: "Первый отдел"
  },
  {
    id: 736,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-406",
    type: "-",
    desc: "Отдел планирования учебного процесса"
  },
  {
    id: 737,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "А-407",
    type: "-",
    desc: "Первый отдел"
  },
  {
    id: 738,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "А-3",
    type: "-",
    desc: "Отдел главного энергетика"
  },
  {
    id: 739,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-109",
    type: "",
    desc: "Кафедра Дизайн"
  },
  {
    id: 740,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-101",
    type: "",
    desc: "Оздоровительная гимнастика"
  },
  {
    id: 741,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-107",
    type: "",
    desc: "Лаборатория"
  },
  {
    id: 742,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-102",
    type: "",
    desc: ""
  },
  {
    id: 743,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-103",
    type: "",
    desc: ""
  },
  {
    id: 744,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-104",
    type: "",
    desc: ""
  },
  {
    id: 745,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-105",
    type: "",
    desc: ""
  },
  {
    id: 746,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "Б-105А",
    type: "",
    desc: ""
  },
  {
    id: 747,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "Б-208",
    type: "",
    desc: "Юридическое управление"
  },
  {
    id: 748,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "Б-201",
    type: "",
    desc: "Центр информационных технологий"
  },
  {
    id: 749,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "Б-201А",
    type: "",
    desc: "Издательско-полиграфический центр"
  },
  {
    id: 750,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-306",
    type: "",
    desc: ""
  },
  {
    id: 751,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-305",
    type: "",
    desc: ""
  },
  {
    id: 752,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-304",
    type: "",
    desc: "Дирекция по реализации развития Московского Политеха"
  },
  {
    id: 753,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-303",
    type: "",
    desc: "Конференц зал"
  },
  {
    id: 754,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-301",
    type: "",
    desc: ""
  },
  {
    id: 755,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "Б-302",
    type: "",
    desc: ""
  },
  {
    id: 756,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-407",
    type: "",
    desc: "Управление научно-исследовательских работ"
  },
  {
    id: 757,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-406",
    type: "",
    desc: "Кафедра Дизайн"
  },
  {
    id: 758,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-405",
    type: "",
    desc: "Кафедра Дизайн"
  },
  {
    id: 759,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-404",
    type: "",
    desc: "Кафедра Дизайн"
  },
  {
    id: 760,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-400",
    type: "",
    desc: "Отдел молодежных программ проектов"
  },
  {
    id: 761,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-401",
    type: "",
    desc: ""
  },
  {
    id: 762,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-402",
    type: "",
    desc: "Управление научно-исследовательских работ"
  },
  {
    id: 763,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-403",
    type: "",
    desc: "Сектор технического обеспечения культуро-массовых работ"
  },
  {
    id: 764,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "Б-403А",
    type: "",
    desc: ""
  },
  {
    id: 765,
    campus: "М",
    corpus: "1",
    floor: "2",
    number: "-",
    type: "гардероб",
    desc: "-"
  },
  {
    id: 766,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3301",
    type: "фотостудия",
    desc: "-"
  },
  {
    id: 767,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3302",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 768,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3303",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 769,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3304",
    type: "кабинет",
    desc: 'кабинет для хранения практических работ студентов кафедры "Иллюстрация и эстамп"'
  },
  {
    id: 770,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3305",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 771,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3306",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 772,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3307А",
    type: "кабинет",
    desc: "институт графики и искусства книги имени В. А. Фаворского"
  },
  {
    id: 773,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3308",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 774,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3310",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 775,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3311",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 776,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3312",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 777,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3313",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 778,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3314",
    type: "аудитория",
    desc: "мастерская анимации"
  },
  {
    id: 779,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3315",
    type: "аудитория",
    desc: "ХТОПП"
  },
  {
    id: 780,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3315А",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 781,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3316",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 782,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3317",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 783,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3317А",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 784,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3318",
    type: "перподавательская",
    desc: "заведующий межфакультетским информационным сектором"
  },
  {
    id: 785,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3319",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 786,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3320",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 787,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3321",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 788,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3322",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 789,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3323",
    type: "серверная",
    desc: "-"
  },
  {
    id: 790,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3325",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 791,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3326",
    type: "аудиитория",
    desc: "компьютерный класс"
  },
  {
    id: 792,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3326А",
    type: "-",
    desc: "-"
  },
  {
    id: 793,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3327",
    type: "аудиитория",
    desc: "компьютерный класс"
  },
  {
    id: 794,
    campus: "М",
    corpus: "1",
    floor: "3",
    number: "3328",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 795,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3402",
    type: "",
    desc: ""
  },
  {
    id: 796,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3403",
    type: "",
    desc: ""
  },
  {
    id: 797,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3404",
    type: "санитарная комната",
    desc: ""
  },
  {
    id: 798,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3405",
    type: "аудитория",
    desc: ""
  },
  {
    id: 799,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3406",
    type: "",
    desc: ""
  },
  {
    id: 800,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3407",
    type: "аудитория",
    desc: "лекционная"
  },
  {
    id: 801,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3409",
    type: "аудитория",
    desc: ""
  },
  {
    id: 802,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3410",
    type: "аудитория",
    desc: "лекционная"
  },
  {
    id: 803,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3411",
    type: "коворкинг",
    desc: "коворкинг"
  },
  {
    id: 804,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3413",
    type: "",
    desc: ""
  },
  {
    id: 805,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3414",
    type: "",
    desc: ""
  },
  {
    id: 806,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3415",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 807,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3416",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 808,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3417",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 809,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3418",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 810,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3419",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 811,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3420",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 812,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3422",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 813,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3422А",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 814,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3423",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 815,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3424",
    type: "аудитория",
    desc: "учебный класс"
  },
  {
    id: 816,
    campus: "М",
    corpus: "1",
    floor: "4",
    number: "3425",
    type: "серверная",
    desc: "-"
  },
  {
    id: 817,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3501",
    type: "кабинет",
    desc: 'кафедра "Рисунок и живопись"'
  },
  {
    id: 818,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3503",
    type: "аудитория",
    desc: ""
  },
  {
    id: 819,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3504",
    type: "",
    desc: ""
  },
  {
    id: 820,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3505",
    type: "аудитория",
    desc: ""
  },
  {
    id: 821,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3506",
    type: "кабинет",
    desc: "отдел профессионального образования специалистов редакционно-издательских и полиграфических подразделений высших и средних специальных учебных заведений"
  },
  {
    id: 822,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3507",
    type: "кабинет",
    desc: "кабинет лабораторного центра для подготовки студенческих художественных работ к выставке"
  },
  {
    id: 823,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3508",
    type: "кабинет",
    desc: "эксплуатационно-технический отдел"
  },
  {
    id: 824,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3509",
    type: "кабинет",
    desc: "кабинет русского языка"
  },
  {
    id: 825,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3510",
    type: "кабинет",
    desc: 'преподавательская, кафедра "Философии и общественных наук"'
  },
  {
    id: 826,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3511",
    type: "",
    desc: ""
  },
  {
    id: 827,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3512",
    type: "",
    desc: ""
  },
  {
    id: 828,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3513",
    type: "",
    desc: ""
  },
  {
    id: 829,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3514А",
    type: "",
    desc: ""
  },
  {
    id: 830,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3515",
    type: "аудитория",
    desc: ""
  },
  {
    id: 831,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3516",
    type: "аудитория",
    desc: ""
  },
  {
    id: 832,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3518",
    type: "аудитория",
    desc: ""
  },
  {
    id: 833,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3519",
    type: "кабинет",
    desc: 'кабинет для хранения учебно-методического материала кафедры "Рисунок и Живопись"'
  },
  {
    id: 834,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3520",
    type: "аудитория",
    desc: ""
  },
  {
    id: 835,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3520",
    type: "",
    desc: ""
  },
  {
    id: 836,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3521",
    type: "кабинет",
    desc: ""
  },
  {
    id: 837,
    campus: "М",
    corpus: "1",
    floor: "5",
    number: "3582",
    type: "",
    desc: ""
  },
  {
    id: 838,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-101",
    type: "-",
    desc: "Отдел по работе с иностранными обучающимися"
  },
  {
    id: 839,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-102",
    type: "-",
    desc: "Отдел по работе с иностранными обучающимися"
  },
  {
    id: 840,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-104",
    type: "-",
    desc: "Приёмная комиссия"
  },
  {
    id: 841,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-105",
    type: "-",
    desc: "Приёмная комиссия"
  },
  {
    id: 842,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-107",
    type: "-",
    desc: "Многофункциональный центр"
  },
  {
    id: 843,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "В-108",
    type: "-",
    desc: "Центр по работе со студентами"
  },
  {
    id: 844,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-203",
    type: "-",
    desc: "Профсоюзная организация Московского Политеха"
  },
  {
    id: 845,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-210",
    type: "-",
    desc: 'Кафедра "Наземные транспортные средства"'
  },
  {
    id: 846,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-204",
    type: "Компьютерный класс",
    desc: 'Кафедра "Наземные транспортные средства"'
  },
  {
    id: 847,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-205",
    type: "Специализированная аудитория",
    desc: 'Кафедра "Наземные транспортные средства"'
  },
  {
    id: 848,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-209",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 849,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-206",
    type: "Компьютерный класс",
    desc: 'Кафедра "Наземные транспортные средства"'
  },
  {
    id: 850,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-207",
    type: "кабинет",
    desc: ""
  },
  {
    id: 851,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-208",
    type: "кабинет",
    desc: ""
  },
  {
    id: 852,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "В-202",
    type: "-",
    desc: "Профсоюзная организация Московского Политеха"
  },
  {
    id: 853,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-301",
    type: "кабинет",
    desc: "Отдел итоговой аттестации"
  },
  {
    id: 854,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-302",
    type: "кабинет",
    desc: "Отдел итоговой аттестации"
  },
  {
    id: 855,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-303",
    type: "кабинет",
    desc: ""
  },
  {
    id: 856,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-304",
    type: "кабинет",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 857,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-305",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 858,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-312",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 859,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-306",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 860,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-311",
    type: "кабинет",
    desc: ""
  },
  {
    id: 861,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-307",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 862,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-308",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 863,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-309",
    type: "кабинет",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 864,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "В-310",
    type: "Лаборатория",
    desc: 'Кафедра "Электрооборудование и промышленная электроника"'
  },
  {
    id: 865,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-401",
    type: "-",
    desc: ""
  },
  {
    id: 866,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-409",
    type: "кабинет",
    desc: ""
  },
  {
    id: 867,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-403",
    type: "кабинет",
    desc: ""
  },
  {
    id: 868,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-408",
    type: "-",
    desc: 'НТЦ "Оптоэлектроника"'
  },
  {
    id: 869,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-404",
    type: "Лаборатория",
    desc: 'НТЦ "Оптоэлектроника"'
  },
  {
    id: 870,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-405",
    type: "Лаборатория",
    desc: 'НТЦ "Оптоэлектроника"'
  },
  {
    id: 871,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-406",
    type: "кабинет",
    desc: ""
  },
  {
    id: 872,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "В-407",
    type: "кабинет",
    desc: ""
  },
  {
    id: 873,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-501",
    type: "кабинет",
    desc: ""
  },
  {
    id: 874,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-502",
    type: "кабинет",
    desc: ""
  },
  {
    id: 875,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-503",
    type: "-",
    desc: ""
  },
  {
    id: 876,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-504",
    type: "коворкинг",
    desc: ""
  },
  {
    id: 877,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-505",
    type: "коворкинг",
    desc: ""
  },
  {
    id: 878,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-510",
    type: "-",
    desc: ""
  },
  {
    id: 879,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-508",
    type: "коворкинг",
    desc: "Предпринимательский класс"
  },
  {
    id: 880,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-506",
    type: "коворкинг",
    desc: ""
  },
  {
    id: 881,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-509",
    type: "кабинет",
    desc: ""
  },
  {
    id: 882,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "В-507",
    type: "кабинет",
    desc: ""
  },
  {
    id: 883,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1101",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 884,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1102",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 885,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1103",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 886,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1104",
    type: "Лаборатория",
    desc: 'Лаборатория ЭФХО, кафедра "Технологии и оборудование машиностроения"'
  },
  {
    id: 887,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1104А",
    type: "Лаборатория",
    desc: 'Лаборатория оборудования с ЧПУ и инструментального обеспечения, кафедра "Технологии и оборудование машиностроения"'
  },
  {
    id: 888,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1105",
    type: "Лаборатория",
    desc: 'Лаборатория промышленных роботов и средств автоматизации, кафедра "Технологии и оборудование машиностроения"'
  },
  {
    id: 889,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1107",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 890,
    campus: "АВ",
    corpus: "1",
    floor: "1",
    number: "1108/1",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 891,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1201",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 892,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1202",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 893,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1203",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 894,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1204",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 895,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1205",
    type: "Аудитория",
    desc: 'Кафедра "Металлургия"'
  },
  {
    id: 896,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1206",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 897,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1206А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 898,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1207",
    type: "Центр довузовского образования",
    desc: ""
  },
  {
    id: 899,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1208",
    type: "Центр довузовского образования",
    desc: ""
  },
  {
    id: 900,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1209",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 901,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1210",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 902,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1211",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 903,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1212",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 904,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1213",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 905,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1214",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 906,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1215",
    type: "Профессорская",
    desc: 'Кафедра "Информатика и вычислительная техника"'
  },
  {
    id: 907,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1216",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 908,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1217",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 909,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1218",
    type: "Учебный центр",
    desc: 'Ресурсный центр "Технологии XXI века", учебный центр "Heidenhain"'
  },
  {
    id: 910,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "1220",
    type: "Диспетчерская по лифтам",
    desc: ""
  },
  {
    id: 911,
    campus: "АВ",
    corpus: "1",
    floor: "2",
    number: "-",
    type: "Столовая",
    desc: ""
  },
  {
    id: 912,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1301",
    type: "Учебный центр",
    desc: 'Центр коллективного пользования "Наукоёмкие технологии в машиностроении"'
  },
  {
    id: 913,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1302",
    type: "Лаборатория",
    desc: 'Лаборатория термической обработки, центр коллективного пользования "Наукоёмкие технологии в машиностроении"'
  },
  {
    id: 914,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1303",
    type: "Лаборатория",
    desc: 'Лаборатория материаловедения, центр коллективного пользования "Наукоёмкие технологии в машиностроении"'
  },
  {
    id: 915,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1304",
    type: "Лаборатория",
    desc: 'Металлографическая лаборатория, кафедра "Материаловедение"'
  },
  {
    id: 916,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1305",
    type: "Заведующий кафедрой",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 917,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1306",
    type: "Заведующий лабораторией",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 918,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1307",
    type: "Лаборатория",
    desc: 'Термическая лаборатория, кафедра "Материаловедение"'
  },
  {
    id: 919,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1308",
    type: "Преподавательская",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 920,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1309",
    type: "Преподавательская",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 921,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1310",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 922,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1311",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 923,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1312",
    type: "Преподавательская",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 924,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1312А",
    type: "Преподавательская",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 925,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1313",
    type: "Лаборатория",
    desc: 'Металлографическая лаборатория , кафедра "Материаловедение"'
  },
  {
    id: 926,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1314",
    type: "Преподавательская",
    desc: 'Кафедра "Материаловедение"'
  },
  {
    id: 927,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1315",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 928,
    campus: "АВ",
    corpus: "1",
    floor: "3",
    number: "1316",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 929,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1401",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 930,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1402",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 931,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1403",
    type: "Преподавательская",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 932,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1404",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 933,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1405",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 934,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1406",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 935,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1407",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 936,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1408",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 937,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1409",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 938,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1410",
    type: "Аудитория",
    desc: "Лекционная"
  },
  {
    id: 939,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1410А",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 940,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1411",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 941,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1412",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 942,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1413",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 943,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1414",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 944,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1415",
    type: "Лаборатория",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 945,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1416",
    type: "Преподавательская",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 946,
    campus: "АВ",
    corpus: "1",
    floor: "4",
    number: "1417",
    type: "Заведующий кафедрой",
    desc: 'Кафедра "Электротехника"'
  },
  {
    id: 947,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1501",
    type: "Аудитория",
    desc: 'Кафедра "Технология машиностроения"'
  },
  {
    id: 948,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1502",
    type: "Аудитория",
    desc: 'Учебный класс ЭФХО, кафедра "Технология машиностроения"'
  },
  {
    id: 949,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1503",
    type: "Лаборатория",
    desc: 'Лаборатория технологическая оснасткаб "Технология машиностроения"'
  },
  {
    id: 950,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1504",
    type: "Преподавательская",
    desc: 'Кафедра "Технология машиностроения"'
  },
  {
    id: 951,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1505",
    type: "Заведующий кафедрой",
    desc: 'Кафедра "Технология машиностроения"'
  },
  {
    id: 952,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1506",
    type: "Преподавательская",
    desc: 'Кафедра "Технология машиностроения"'
  },
  {
    id: 953,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1507",
    type: "Преподавательская",
    desc: 'Кафедра "Технология машиностроения"'
  },
  {
    id: 954,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1508",
    type: "Лаборатория",
    desc: 'Лаборатория "Автоматизации производственных процессов", кафедра "Технологиямашиностроения"'
  },
  {
    id: 955,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1509",
    type: "Преподавательская",
    desc: 'Кафедра "Технологиямашиностроения"'
  },
  {
    id: 956,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1510",
    type: "Аудитория",
    desc: 'Лекционная, кафедра "Технологиямашиностроения"'
  },
  {
    id: 957,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1511",
    type: "Лаборатория",
    desc: 'Лаборатория компьютерного моделирования литейных процессов, кафедра "Машины итехнологии литейного производства"'
  },
  {
    id: 958,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1512",
    type: "Заведующий кафедрой",
    desc: 'Кафедра "Машины итехнологии литейного производства"'
  },
  {
    id: 959,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1513",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 960,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1514",
    type: "Преподавательская",
    desc: 'Кафедра "Машины итехнологии литейного производства"'
  },
  {
    id: 961,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1515",
    type: "Аудитория",
    desc: 'Кафедра "Машины и технологии литейного производства"'
  },
  {
    id: 962,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1516",
    type: "Аудитория",
    desc: 'Класс художественных дисциплин, кафедра "Машины и технологии литейного производства"'
  },
  {
    id: 963,
    campus: "АВ",
    corpus: "1",
    floor: "5",
    number: "1517",
    type: "Лаборатория",
    desc: 'Лаборатория САПР ТП, кафедра "Технологиямашиностроения"'
  },
  {
    id: 964,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1601",
    type: "Отдел интеллектуальной промышленной собственности",
    desc: ""
  },
  {
    id: 965,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1602-1603",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 966,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1604",
    type: "Директор центра",
    desc: "Центр по обеспечению научных исследований"
  },
  {
    id: 967,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1605-1606",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 968,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1607",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 969,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1608-1609",
    type: "Декан факультета",
    desc: "Факультет урабнистики и городского хозяйства"
  },
  {
    id: 970,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1610-1611",
    type: "Декан факультета",
    desc: "Факультет химической технологии и биотехнологии"
  },
  {
    id: 971,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1612",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 972,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1613",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 973,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1617",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 974,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1618-1619",
    type: "Декан факультета",
    desc: "Факультет машиностроения"
  },
  {
    id: 975,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1620",
    type: "Заместитель декана по учебной работе",
    desc: "Факультет машиностроения"
  },
  {
    id: 976,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1621",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 977,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1622",
    type: "Начальник управления",
    desc: "Управление по административно-технической хозяйственной работе и безопасности"
  },
  {
    id: 978,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1623",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 979,
    campus: "АВ",
    corpus: "1",
    floor: "6",
    number: "1624",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 980,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1701",
    type: "-",
    desc: "Приём сотрудников и посетителей с 14:00 до 17:00"
  },
  {
    id: 981,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1702",
    type: "Преподавательская",
    desc: 'Кафедра "Техника и технология полимерных материалов"'
  },
  {
    id: 982,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1703",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 983,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1704",
    type: "Лаборатория",
    desc: 'Кафедра "Техника и технология полимерных материалов"'
  },
  {
    id: 984,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1705",
    type: "Заместитель декана",
    desc: "Факультет химической технологии и биотехнологии"
  },
  {
    id: 985,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1706",
    type: "Лаборатория",
    desc: 'Лаборатория технических измерений, кафедра "СМиС"'
  },
  {
    id: 986,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1707",
    type: "Лаборатория",
    desc: "Лаборатория аддитивных технологий"
  },
  {
    id: 987,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1708",
    type: "Заведующий кафедрой",
    desc: 'Кафедра "Техника и технология полимерных материалов"'
  },
  {
    id: 988,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1709",
    type: "Лаборатория",
    desc: 'Лаборатория электрических измерений, кафедра "СМиС"'
  },
  {
    id: 989,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1710",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 990,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1711",
    type: "Центр мониторинга научной инфраструктуры",
    desc: ""
  },
  {
    id: 991,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1712",
    type: "Заместитель директора",
    desc: "Центр мониторинга научной инфраструктуры"
  },
  {
    id: 992,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1712А",
    type: "Центр мониторинга научной инфраструктуры",
    desc: ""
  },
  {
    id: 993,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1713",
    type: "Лаборатория",
    desc: 'Лаборатория высокоточных измерений, кафедра "СМиС"'
  },
  {
    id: 994,
    campus: "АВ",
    corpus: "1",
    floor: "7",
    number: "1714",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 995,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1801",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 996,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1802",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 997,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1803",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 998,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1804",
    type: "Зал учёного совета",
    desc: ""
  },
  {
    id: 999,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1805",
    type: "Аудитория",
    desc: ""
  },
  {
    id: 1e3,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1805А",
    type: "-",
    desc: ""
  },
  {
    id: 1001,
    campus: "АВ",
    corpus: "1",
    floor: "8",
    number: "1810",
    type: "-",
    desc: ""
  },
  {
    id: 1002,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "-",
    type: "Коворкинг",
    desc: ""
  },
  {
    id: 1003,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4101А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1004,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4102А",
    type: "-",
    desc: "-"
  },
  {
    id: 1005,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4103А",
    type: "-",
    desc: "-"
  },
  {
    id: 1006,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4104А",
    type: "Лаборатория",
    desc: 'Кафедра "Термодинамика и неравновесные процессы переноса"'
  },
  {
    id: 1007,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4105А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1008,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4106А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1009,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4107А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1010,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4108А",
    type: "Лаборатория",
    desc: 'Кафедра "Термодинамика и неравновесные процессы переноса"'
  },
  {
    id: 1011,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4109А",
    type: "Лаборатория",
    desc: "Центр технологической поддержки образования (ЦТПО) Лаборатория аддитивных технологий и Science-Art"
  },
  {
    id: 1012,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4111А",
    type: "Туалет",
    desc: "Мужской"
  },
  {
    id: 1013,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4112А",
    type: "Туалет",
    desc: "Женский"
  },
  {
    id: 1014,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4113А",
    type: "Туалет",
    desc: "Мужской"
  },
  {
    id: 1015,
    campus: "АВ",
    corpus: "6",
    floor: "1",
    number: "4114А",
    type: "Туалет",
    desc: "Женский"
  },
  {
    id: 1016,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "Переход А-2",
    type: "Переход",
    desc: "Переход между 4 и 6(пристройкой 4) корпусами"
  },
  {
    id: 1017,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4201А",
    type: "Аудитория",
    desc: "(Центр досугового образования и подготовки к ЕГЭ переехал в 1207!!!)"
  },
  {
    id: 1018,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4202А-Л",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1019,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4202А-П",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1020,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4203А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1021,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4204А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1022,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4205А",
    type: "Лаборатория",
    desc: "Центр технологической поддержки образования (ЦТПО) Лаборатория робототехники и Science-Art"
  },
  {
    id: 1023,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4206А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1024,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4207А",
    type: "Лаборатория",
    desc: 'Лаборатория "Полезные ископаемые"'
  },
  {
    id: 1025,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4208А",
    type: "Аудитория",
    desc: 'Минералогический музей, кафедра "Техника и технология горного и нефтегазового производства"'
  },
  {
    id: 1026,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4209А",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1027,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4210А",
    type: "Аудитория",
    desc: 'Кафедра "Экологическая безопасность технических систем"'
  },
  {
    id: 1028,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4211А-1",
    type: "Аудитория",
    desc: "Аудитория имени Леонида Аркадьевича Костандова"
  },
  {
    id: 1029,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4211А-2",
    type: "Аудитория",
    desc: "-"
  },
  {
    id: 1030,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4212А",
    type: "Лаборатория",
    desc: 'Лаборатория "Минералогия, петрография и полезные ископаемые", кафедра "Техника и технология горного и нефтегазового производства"'
  },
  {
    id: 1031,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4213А",
    type: "Выход на лестницу",
    desc: "-"
  },
  {
    id: 1032,
    campus: "АВ",
    corpus: "6",
    floor: "2",
    number: "4214А",
    type: "Выход на лестницу",
    desc: "-"
  },
  {
    id: 1033,
    campus: "",
    corpus: "6",
    floor: "3",
    number: "-",
    type: "АРТ Политех",
    desc: "Из-за отсутствия администратора вход на 3 этаж закрыт"
  },
  {
    id: 1034,
    campus: "",
    corpus: "6",
    floor: "3",
    number: "4304А",
    type: "Выход на лестницу",
    desc: ""
  },
  {
    id: 1035,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "Зал",
    desc: "Зал единоборств"
  },
  {
    id: 1036,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "Кабинет",
    desc: "Кабинет преподавателей"
  },
  {
    id: 1037,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "-",
    desc: "Зав.кафедрой физ. Подготовки"
  },
  {
    id: 1038,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "-",
    desc: "Раздевалка преподавателей"
  },
  {
    id: 1039,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "Кабинет",
    desc: "Методический кабинет"
  },
  {
    id: 1040,
    campus: "М",
    corpus: "",
    floor: "1",
    number: "-",
    type: "Кабинет",
    desc: "Медицинский кабинет"
  },
  {
    id: 1041,
    campus: "М",
    corpus: "",
    floor: "-1",
    number: "-",
    type: "Зал",
    desc: "Зал настольного тенниса"
  },
  {
    id: 1042,
    campus: "М",
    corpus: "",
    floor: "-1",
    number: "-",
    type: "Зал",
    desc: "Тренажерный зал"
  },
  {
    id: 1043,
    campus: "М",
    corpus: "",
    floor: "2",
    number: "-",
    type: "Зал",
    desc: "Большой зал"
  },
  {
    id: 1044,
    campus: "М",
    corpus: "",
    floor: "2",
    number: "-",
    type: "-",
    desc: "Мужская раздевалка"
  },
  {
    id: 1045,
    campus: "М",
    corpus: "",
    floor: "2",
    number: "-",
    type: "-",
    desc: "Женская раздевалка"
  },
  {
    id: 1046,
    campus: "М",
    corpus: "",
    floor: "3",
    number: "-",
    type: "Зал",
    desc: "Зал фехтования"
  },
  {
    id: 1047,
    campus: "М",
    corpus: "",
    floor: "3",
    number: "-",
    type: "-",
    desc: "Шахматный клуб"
  },
  {
    id: 1048,
    campus: "М",
    corpus: "",
    floor: "3",
    number: "-",
    type: "-",
    desc: "Спортивный клуб"
  },
  {
    id: 1049,
    campus: "М",
    corpus: "",
    floor: "3",
    number: "-",
    type: "Зал",
    desc: "Зал физической реабилитации"
  },
  {
    id: 1050,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1011",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1051,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1012",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1052,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1013",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1053,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1014",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1054,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1039",
    type: "издательство",
    desc: "редакционно-издательский отдел"
  },
  {
    id: 1055,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1039а",
    type: "издательство",
    desc: "редакционно-издательский отдел"
  },
  {
    id: 1056,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1039б",
    type: "издательство",
    desc: "редакционно-издательский отдел"
  },
  {
    id: 1057,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1040",
    type: "издательство",
    desc: "редакционно-издательский отдел"
  },
  {
    id: 1058,
    campus: "ПР",
    corpus: "1",
    floor: "0",
    number: "1044",
    type: "издательство",
    desc: "редакционно-издательский отдел"
  },
  {
    id: 1059,
    campus: "",
    corpus: "1",
    floor: "",
    number: "",
    type: "",
    desc: ""
  },
  {
    id: 1060,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1201",
    type: "предоподовательская",
    desc: "кафедра инновационных материалов принтмедиаиндустрии"
  },
  {
    id: 1061,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1202",
    type: "лаборатория",
    desc: "материаоловедения и технологии материалов"
  },
  {
    id: 1062,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1203",
    type: "лаборатория",
    desc: "материаловедения"
  },
  {
    id: 1063,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1204",
    type: "препараторская",
    desc: ""
  },
  {
    id: 1064,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1205",
    type: "",
    desc: "заведующий кафедрой инновационных материалов принтмедиаиндустрии"
  },
  {
    id: 1065,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1206",
    type: "лаборатория",
    desc: "НИР"
  },
  {
    id: 1066,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1207",
    type: "актовый зал",
    desc: ""
  },
  {
    id: 1067,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1208",
    type: "лаборатория",
    desc: "материаоловедения и технологии материалов"
  },
  {
    id: 1068,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1209",
    type: "лаборатория",
    desc: "материаоловедения и технологии материалов"
  },
  {
    id: 1069,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1211",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1070,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1212",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1071,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1213",
    type: "",
    desc: "отдел итоговой аттестации"
  },
  {
    id: 1072,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1215",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1073,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1216",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1074,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1217",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1075,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1219",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1076,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1221",
    type: "",
    desc: "архив"
  },
  {
    id: 1077,
    campus: "ПР",
    corpus: "1",
    floor: "2",
    number: "1222",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1078,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1301",
    type: "преподавательская",
    desc: "кафедра инновационных материалов принтмедиаиндустрии"
  },
  {
    id: 1079,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1302",
    type: "препараторская",
    desc: ""
  },
  {
    id: 1080,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1303",
    type: "лаборатория физико-химических методов анализа",
    desc: ""
  },
  {
    id: 1081,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1304",
    type: "",
    desc: "заведующий лабораторией химии"
  },
  {
    id: 1082,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1305",
    type: "аудитория",
    desc: "кабинет самостоятельной работы"
  },
  {
    id: 1083,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1306",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1084,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1307",
    type: "лаборатория",
    desc: "химии"
  },
  {
    id: 1085,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1308",
    type: "лаборатория",
    desc: "физической химии"
  },
  {
    id: 1086,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1309",
    type: "лаборатория",
    desc: "коллоидной химии и экологии"
  },
  {
    id: 1087,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1311",
    type: "",
    desc: "многофункциональный центр"
  },
  {
    id: 1088,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1312",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1089,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1313",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1090,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1314",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1091,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1315",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1092,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1316",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1093,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1317",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1094,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1318",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1095,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1319",
    type: "кафедра",
    desc: "кафедра информатика и информационные технологии"
  },
  {
    id: 1096,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1320",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1097,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1326",
    type: "",
    desc: "(по всем вопросам в 1311)"
  },
  {
    id: 1098,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1328",
    type: "",
    desc: 'редакция журнала "Высшее образование в России"'
  },
  {
    id: 1099,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1329",
    type: "",
    desc: 'редакция журнала "Высшее образование в России"'
  },
  {
    id: 1100,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1330",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1101,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1331",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1102,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1332",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1103,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1333",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1104,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1334",
    type: "",
    desc: "организационный сектор"
  },
  {
    id: 1105,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1335",
    type: "",
    desc: "Назаров Виктор Сергеевич ученый секретарь ученого совета МОСКОВСКОГО ПОЛИТЕХА"
  },
  {
    id: 1106,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1336",
    type: "",
    desc: "профком"
  },
  {
    id: 1107,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1338",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1108,
    campus: "ПР",
    corpus: "1",
    floor: "3",
    number: "1339",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1109,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1401",
    type: "",
    desc: "психолог"
  },
  {
    id: 1110,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1402",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1111,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1403",
    type: "",
    desc: "(название кабинета закрыто)"
  },
  {
    id: 1112,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1406",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1113,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1407",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1114,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1408",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1115,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1409",
    type: "лаборатория",
    desc: "экологии и органической химии"
  },
  {
    id: 1116,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1411",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1117,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1412",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1118,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1413",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1119,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1414",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1120,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1417",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1121,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1418",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1122,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1419",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1123,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1420",
    type: "",
    desc: "компьютерный класс №4"
  },
  {
    id: 1124,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1422",
    type: "",
    desc: "кабинет асинхронного обучения и дистанционных образовательных технологий"
  },
  {
    id: 1125,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1423",
    type: "кафедра",
    desc: 'кафедра "Иностранные языки"'
  },
  {
    id: 1126,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1424",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1127,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1425",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1128,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1426",
    type: "аудитория",
    desc: "аудитория 142 (так написано я без понятия что это значит)"
  },
  {
    id: 1129,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1427",
    type: "",
    desc: "институт принтмедиа и информационных технологий - дирекция"
  },
  {
    id: 1130,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1428",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1131,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1429",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1132,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1430",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1133,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1431",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1134,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1432",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1135,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1433",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1136,
    campus: "ПР",
    corpus: "1",
    floor: "4",
    number: "1434",
    type: "",
    desc: "дирекция Института коммуникаций и медиабизнеса"
  },
  {
    id: 1137,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "216",
    type: "",
    desc: ""
  },
  {
    id: 1138,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "215",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1139,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "216А",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1140,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "214",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1141,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "214А",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1142,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "210",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1143,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "209",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1144,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "209А",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1145,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "211А",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1146,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "212",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1147,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "213",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1148,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "211",
    type: "нтц",
    desc: ""
  },
  {
    id: 1149,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "208А",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1150,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "208",
    type: "",
    desc: ""
  },
  {
    id: 1151,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "207",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1152,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "207А",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1153,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "204",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1154,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "203",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1155,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "206",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1156,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "205А",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1157,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "205",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1158,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "202",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1159,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "201",
    type: "нтц",
    desc: ""
  },
  {
    id: 1160,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "218",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1161,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "217",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1162,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "219",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1163,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "220",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1164,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "221",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1165,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "222",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1166,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "223",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1167,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "224",
    type: "кафедра",
    desc: ""
  },
  {
    id: 1168,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "228",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1169,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "229",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1170,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "230",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1171,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "235",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1172,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "234",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1173,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "231",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1174,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "233",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1175,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "232",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1176,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "236",
    type: "подсобное помещение",
    desc: ""
  },
  {
    id: 1177,
    campus: "БС",
    corpus: "",
    floor: "2",
    number: "237",
    type: "подсобное помещение",
    desc: ""
  },
  {
    id: 1178,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "316",
    type: "",
    desc: ""
  },
  {
    id: 1179,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "327",
    type: "",
    desc: ""
  },
  {
    id: 1180,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "317",
    type: "",
    desc: ""
  },
  {
    id: 1181,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "326",
    type: "",
    desc: ""
  },
  {
    id: 1182,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "325",
    type: "ноц",
    desc: ""
  },
  {
    id: 1183,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "324",
    type: "ноц",
    desc: ""
  },
  {
    id: 1184,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "323",
    type: "ноц",
    desc: ""
  },
  {
    id: 1185,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "310",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1186,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "312",
    type: "управление по международной интеграции",
    desc: ""
  },
  {
    id: 1187,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "313",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1188,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "315",
    type: "отдел по работе с иностранными обучающимся",
    desc: ""
  },
  {
    id: 1189,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "314",
    type: "управление по международной интеграции",
    desc: ""
  },
  {
    id: 1190,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "309",
    type: "",
    desc: ""
  },
  {
    id: 1191,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "308",
    type: "",
    desc: ""
  },
  {
    id: 1192,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "303А",
    type: "",
    desc: ""
  },
  {
    id: 1193,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "304",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1194,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "306",
    type: "",
    desc: ""
  },
  {
    id: 1195,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "303Б",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1196,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "305",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1197,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "307",
    type: "",
    desc: ""
  },
  {
    id: 1198,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "302",
    type: "центр компетенций",
    desc: ""
  },
  {
    id: 1199,
    campus: "БС",
    corpus: "",
    floor: "3",
    number: "301",
    type: "экспертно-аналитический центр",
    desc: ""
  },
  {
    id: 1200,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "402",
    type: "волонтерский центр",
    desc: ""
  },
  {
    id: 1201,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "406",
    type: "",
    desc: ""
  },
  {
    id: 1202,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "408",
    type: "приемная комиссия",
    desc: ""
  },
  {
    id: 1203,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "409",
    type: "приемная комиссия",
    desc: ""
  },
  {
    id: 1204,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "407",
    type: "приемная комиссия",
    desc: ""
  },
  {
    id: 1205,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "418",
    type: "",
    desc: ""
  },
  {
    id: 1206,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "419",
    type: "",
    desc: ""
  },
  {
    id: 1207,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "410",
    type: "ответственный за пожарную безопасность",
    desc: ""
  },
  {
    id: 1208,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "411",
    type: "ответственный за пожарную безопасность",
    desc: ""
  },
  {
    id: 1209,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "415",
    type: "контакт-центр",
    desc: ""
  },
  {
    id: 1210,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "416",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1211,
    campus: "БС",
    corpus: "",
    floor: "4",
    number: "416А",
    type: "",
    desc: ""
  },
  {
    id: 1212,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "518",
    type: "центр разработки и поддержки информационных систем",
    desc: ""
  },
  {
    id: 1213,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "519",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1214,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "512",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1215,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "517",
    type: "мобилизационный отдел",
    desc: ""
  },
  {
    id: 1216,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "513",
    type: "центр конгрессно-выставочной деятельности",
    desc: ""
  },
  {
    id: 1217,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "516",
    type: "инфраструктурный центр",
    desc: ""
  },
  {
    id: 1218,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "514",
    type: "бюро пропусков",
    desc: ""
  },
  {
    id: 1219,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "515",
    type: "штаб ГО и ЧС",
    desc: ""
  },
  {
    id: 1220,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "502",
    type: "сектор технического обеспечения культурно-массовой работы",
    desc: ""
  },
  {
    id: 1221,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "504",
    type: "центр эксплуатации социальных объектов",
    desc: ""
  },
  {
    id: 1222,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "503",
    type: "центр эксплуатации социальных объектов",
    desc: ""
  },
  {
    id: 1223,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "510",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1224,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "509",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1225,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "505",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1226,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "508",
    type: "диспетчерская",
    desc: ""
  },
  {
    id: 1227,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "507",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1228,
    campus: "БС",
    corpus: "",
    floor: "5",
    number: "506",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1229,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "106",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1230,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "105",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1231,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "103",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1232,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "103к",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1233,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "104",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1234,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "101",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1235,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "114",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1236,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "112",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1237,
    campus: "БС",
    corpus: "",
    floor: "1",
    number: "113",
    type: "лаборатория",
    desc: ""
  },
  {
    id: 1238,
    campus: "БС",
    corpus: "",
    floor: "-1",
    number: "1б",
    type: "аудитория",
    desc: ""
  },
  {
    id: 1239,
    campus: "БС",
    corpus: "",
    floor: "-1",
    number: "1а",
    type: "центр подготовки водителей",
    desc: ""
  },
  {
    id: 1240,
    campus: "БС",
    corpus: "",
    floor: "-1",
    number: "1",
    type: "управление по развитию и эксплуатации социальных объектов",
    desc: ""
  },
  {
    id: 1241,
    campus: "БС",
    corpus: "",
    floor: "-1",
    number: "",
    type: "",
    desc: ""
  }
];
export {
  infoData as i
};
//# sourceMappingURL=aud_info-52558608.js.map
