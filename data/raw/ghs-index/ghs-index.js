// below text is copied from GHS Index / Overall Score (starting at page 20)
// (https://www.ghsindex.org/wp-content/uploads/2020/04/2019-Global-Health-Security-Index.pdf#page=26)
// each row below is the copied column of one page; AVERAGE is removed manually

const rawGHSIndex = `
1United States83.52United Kingdom77.93Netherlands75.64Australia75.55Canada75.36Thailand73.27Sweden72.18Denmark70.49South Korea70.210Finland68.711France68.212Slovenia67.213Switzerland67.014Germany66.015Spain65.916Norway64.617Latvia62.918Malaysia62.219Belgium61.020Portugal60.321Japan59.822Brazil59.723Ireland59.024Singapore58.725Argentina58.626Austria58.527Chile58.328Mexico57.629Estonia57.030Indonesia56.631Italy56.232Poland55.433Lithuania55.034South Africa54.835Hungary54.035New Zealand54.037Greece53.838Croatia53.339Albania52.940Turkey52.4
41Serbia52.342Czech Republic52.042Georgia52.044Armenia50.245Ecuador50.146Mongolia49.547Kyrgyz Republic49.347Saudi Arabia49.349Peru49.250Vietnam49.151China48.252Slovakia47.953Philippines47.654Israel47.355Kenya47.156United Arab Emirates46.757India46.558Iceland46.359Kuwait46.160Romania45.861Bulgaria45.662Costa Rica45.163Russia44.363Uganda44.365Colombia44.265El Salvador44.267Luxembourg43.868Montenegro43.768Morocco43.768Panama43.771Liechtenstein43.572Myanmar43.473Laos43.173Lebanon43.173Nicaragua43.173Oman43.177Cyprus43.078Moldova42.979Bosnia and  Herzegovina42.880Jordan42.1
81Uruguay41.382Qatar41.283Kazakhstan40.784Ethiopia40.685Bhutan40.386Madagascar40.187Egypt39.988Bahrain39.489Cambodia39.290North  Macedonia39.191Dominican  Republic38.392Sierra Leone38.292Zimbabwe38.294Ukraine38.095Senegal37.996Nigeria37.897Iran37.798Malta37.399Trinidad and Tobago36.6100Suriname36.5101Tanzania36.4102Bolivia35.8103Paraguay35.7104Namibia35.6105Côte d'Ivoire35.5105Ghana35.5105Pakistan35.5108Belarus35.3108St. Lucia35.3110Cuba35.2111Liberia35.1111Nepal35.1113Bangladesh35.0114Mauritius34.9115Cameroon34.4116Uzbekistan34.3117Azerbaijan34.2
117Gambia34.2117Rwanda34.2120Sri Lanka33.9121Maldives33.8122Tunisia33.7123St. Vincent and The Grenadines33.0124Micronesia32.8125Guatemala32.7125Guinea32.7125Monaco32.7128Brunei32.6129Togo32.5130Afghanistan32.3130Tajikistan32.3132Niger32.2133Barbados31.9133Seychelles31.9135Belize31.8135Turkmenistan31.8137Guyana31.7138Haiti31.5139Botswana31.1139San Marino31.1139Eswatini  (Swaziland)31.1142Bahamas30.6143Andorra30.5144Lesotho30.2145Burkina Faso30.1146Cabo Verde29.3147Antigua and Barbuda29.0147Jamaica29.0147Mali29.0150Benin28.8150Chad28.8152Zambia28.7153Mozambique28.1154Malawi28.0155Papua New Guinea27.8156Honduras27.6
157Grenada27.5157Mauritania27.5159Central African Republic27.3160Comoros27.2161Congo  (Democratic Republic)26.5162Samoa26.4163St. Kitts and Nevis26.2163Sudan26.2165Vanuatu26.1166Timor-Leste26.0167Iraq25.8168Fiji25.7168Libya25.7170Angola25.2171Tonga25.1172Dominica24.0173Algeria23.6173Congo (Brazzaville)23.6175Djibouti23.2176Venezuela23.0177Burundi22.8178Eritrea22.4179Palau21.9180South Sudan21.7181Tuvalu21.6182Nauru20.8183Solomon Islands20.7184Niue20.5185Cook Islands20.4186Gabon20.0186Guinea-Bissau20.0188Syria19.9189Kiribati19.2190Yemen18.5191Marshall Islands18.2192São Tomé and Príncipe17.7193North Korea17.5194Somalia16.6195Equatorial Guinea16.2
`; //AVERAGE40.2

const fs = require("fs");

const ghsIndexOverallScore = [];
async function main() {
  const isoCodeMap = readFile("./countryList.json");
  extractIndexForEachCountry();
  mapCountryISOCodes(JSON.parse(await isoCodeMap));
  saveToCSV();
}
main();

function extractIndexForEachCountry() {
  const r = /(\d{1,3})([^\d]+)(\d{1,2}\.\d)/g; // 1-3 numbers for the rank [no space] Name of the Country [no space] score (one decimal place)
  while (true) {
    const match = r.exec(rawGHSIndex);
    if (!match) {
      break;
    }
    ghsIndexOverallScore.push({
      rank: match[1],
      country: mapCountryName(match[2]),
      score: match[3],
    });
  }
}

function mapCountryName(country) {
  country = country.replace(/\s+/g, " ");
  const map = {
    "Kyrgyz Republic": "Kyrgyzstan",
    "North Macedonia": "Macedonia",
    "Côte d'Ivoire": "Cote d'Ivoire",
    "St. Lucia": "Saint Lucia",
    "St. Vincent and The Grenadines": "Saint Vincent and the Grenadines",
    "Eswatini (Swaziland)": "Swaziland",
    "Cabo Verde": "Cape Verde",
    "Congo (Democratic Republic)": "Democratic Republic of Congo",
    "St. Kitts and Nevis": "Saint Kitts and Nevis",
    "Congo (Brazzaville)": "Congo",
    "São Tomé and Príncipe": "Sao Tome and Principe",
    "Timor-Leste": "Timor",
  };
  if (country in map) {
    return map[country];
  }
  return country;
}

function mapCountryISOCodes(map) {
  const invertedIsoCodeMap = invertObject(map);
  ghsIndexOverallScore.forEach((element) => {
    element.isoCode = invertedIsoCodeMap[element.country];
  });
}

async function saveToCSV() {
  const template = `{iso},{country},{ghs_score}\n`;
  let csv = template.replace(/{/g, "").replace(/}/g, "");
  let i = 0;
  for (const element of ghsIndexOverallScore) {
    if (element.isoCode) {
      csv += template
        .replace("{iso}", element.isoCode)
        .replace("{country}", element.country)
        .replace("{ghs_score}", element.score);
    i++;
    }
  }
  await writeFile("./Global Health Security Index (Overall Score).csv", csv);
  console.log(`saved GHS score for ${i} countries`);
}

function invertObject(obj) {
  const inverted = {};
  for (const key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}

async function readFile(filepath) {
  return new Promise(async function (resolve, reject) {
    fs.readFile(filepath, "utf8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function writeFile(filepath, content) {
  return new Promise(async function (resolve, reject) {
    fs.writeFile(filepath, content, "utf8", function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
