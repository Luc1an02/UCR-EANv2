const cursos = [
  {
    "codigo": "DN-0101",
    "nombre": "Introducción a la administración",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-0001",
    "nombre": "Precálculo",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-1021",
    "nombre": "Cálculo para ciencias económicas I",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": [
      "MA-0001"
    ]
  },
  {
    "codigo": "EG-",
    "nombre": "Curso de Arte",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "RP-",
    "nombre": "Repertorio",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "EG-1",
    "nombre": "Curso Integrado de Humanidades I",
    "anio": 1,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "PC-0200",
    "nombre": "Contabilidad Básica ",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0101"
    ]
  },
  {
    "codigo": "DN-0102",
    "nombre": "Aplicaciones Ofimáticas para la toma de decisiones",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "MA-1022",
    "nombre": "Cálculo para ciencias económicas II",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "MA-1021"
    ]
  },
  {
    "codigo": "EF-",
    "nombre": "Actividad deportiva",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": []
  },
  {
    "codigo": "EG-2",
    "nombre": "Curso Integrado de Humanidades II",
    "anio": 1,
    "ciclo": 2,
    "prerrequisitos": [
      "EG-1"
    ]
  },
  {
    "codigo": "PC-0202",
    "nombre": "Contabilidad Intermedia I",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "PC-0200"
    ]
  },
  {
    "codigo": "DN-0103",
    "nombre": "Administración de proyectos y herramientas para el análisis de datos",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0102"
    ]
  },
  {
    "codigo": "PC-0240",
    "nombre": "Matemática financiera",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0102",
      "MA-1022"
    ]
  },
  {
    "codigo": "XS-0276",
    "nombre": "Estadística general I",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": [
      "MA-1021"
    ]
  },
  {
    "codigo": "XE-0156",
    "nombre": "Introducción a la economía",
    "anio": 2,
    "ciclo": 1,
    "prerrequisitos": []
  },
  {
    "codigo": "PC-0304",
    "nombre": "Contabilidad Intermedia II",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "PC-0202",
      "PC-0240"
    ]
  },
  {
    "codigo": "DN-0104",
    "nombre": "Elementos fundamentales de la legislación empresarial",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0101"
    ]
  },
  {
    "codigo": "DN-0340",
    "nombre": "Administración financiera I",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "PC-0240"
    ]
  },
  {
    "codigo": "XS-0277",
    "nombre": "Estadística General II",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "XS-0276",
      "MA-1022"
    ]
  },
  {
    "codigo": "DN-0123",
    "nombre": "Metodología de la investigación",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "XS-0276"
    ]
  },
  {
    "codigo": "SR-I",
    "nombre": "Seminario de realidad nacional I",
    "anio": 2,
    "ciclo": 2,
    "prerrequisitos": [
      "EG-2"
    ]
  },
  {
    "codigo": "DN-0320",
    "nombre": "Principios de mercadeo",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0340"
    ]
  },
  {
    "codigo": "PC-0261",
    "nombre": "Legislación comercial, bancaria y financiera",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0104"
    ]
  },
  {
    "codigo": "DN-0341",
    "nombre": "Administración financiera II",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0340"
    ]
  },
  {
    "codigo": "DN-0105",
    "nombre": "Métodos cuantitativos para la toma de decisiones I",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0340",
      "XS-0277"
    ]
  },
  {
    "codigo": "DN-0127",
    "nombre": "Principios de gerencia",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0340"
    ]
  },
  {
    "codigo": "SR-II",
    "nombre": "Seminario de realidad nacional II",
    "anio": 3,
    "ciclo": 1,
    "prerrequisitos": [
      "SR-I"
    ]
  },
  {
    "codigo": "DN-0321",
    "nombre": "Publicidad y promoción",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0320"
    ]
  },
  {
    "codigo": "PC-0260",
    "nombre": "Legislación laboral",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "PC-0261"
    ]
  },
  {
    "codigo": "DN-0442",
    "nombre": "Administración financiera III",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0341"
    ]
  },
  {
    "codigo": "DN-0110",
    "nombre": "Métodos cuantitativos para la toma de decisiones II",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0105"
    ]
  },
  {
    "codigo": "DN-0106",
    "nombre": "Gestión del talento y conocimiento humano",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0202"
    ]
  },
  {
    "codigo": "DN-0107",
    "nombre": "Economía y comercio internacional",
    "anio": 3,
    "ciclo": 2,
    "prerrequisitos": [
      "XE-0156"
    ]
  },
{
    "codigo": "DN-0423",
    "nombre": "Investigación de mercados",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0321"
    ]
  },
  {
    "codigo": "PC-0462",
    "nombre": "Legislación tributaria y aduanera",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "PC-0260",
      "PC-0304"
    ]
  },
  {
    "codigo": "PC-0344 ",
    "nombre": "Formulación y evaluación de proyectos I",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0341"
    ]
  },
  {
    "codigo": "DN-0496",
    "nombre": "Gerencia de Operaciones",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0110"
    ]
  },
  {
    "codigo": "DN-0405",
    "nombre": "Emprendimiento y creación de empresas",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0106"
    ]
  },
  {
    "codigo": "DN-0304",
    "nombre": "Liderazgo gerencial",
    "anio": 4,
    "ciclo": 1,
    "prerrequisitos": [
      "DN-0106"
    ]
  },
  {
    "codigo": "DN-0322",
    "nombre": "Ventas y distribución",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0423"
    ]
  },
  {
    "codigo": "DN-0109",
    "nombre": "Principios de auditoría financiera",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "PC-0304",
      "DN-0442"
    ]
  },
  {
    "codigo": "DN-0108",
    "nombre": "Mercados bursátiles",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0442",
      "PC-0344"
    ]
  },
  {
    "codigo": "DN-0112",
    "nombre": "Gerencia de calidad",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0496"
    ]
  },
  {
    "codigo": "DN-0111",
    "nombre": "Gestión de la innovación y Estrategia competitiva",
    "anio": 4,
    "ciclo": 2,
    "prerrequisitos": [
      "DN-0106"
    ]
  },
  {
    "codigo": "OPT-01",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-02",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-03",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-04",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-05",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-06",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-07",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 1,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-08",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-09",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-10",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-11",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-12",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  },
  {
    "codigo": "OPT-13",
    "nombre": "Curso optativo",
    "anio": 5,
    "ciclo": 2,
    "prerrequisitos": [],
    "optativo": true
  }
];
