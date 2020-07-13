# Quellen

## Datenquellen

| Name                                                     | Quelle                                                                                                                                         |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| COVID-19                                                 | [Johns Hopkins University & Medicine](https://github.com/CSSEGISandData/COVID-19) + [Our World In Data](https://github.com/owid/covid-19-data) |
| Medical doctors (per 10,000)                             | [WHO](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/medical-doctors-(per-10-000-population))                              |
| Population with basic handwashing facilities at home (%) | [WHO](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/population-with-basic-handwashing-facilities-at-home-(-))             |
| Government expenditure on education, total (% of GDP)    | [World Bank](https://data.worldbank.org/indicator/SE.XPD.TOTL.GD.ZS)                                                                           |
| Current health expenditure (% of GDP)                    | [World Bank](https://data.worldbank.org/indicator/SH.XPD.CHEX.GD.ZS)                                                                           |
| Human Development Index                                  | [United Nations Development Programme](hdr.undp.org/en/indicators/137506)                                                                      |
| BIP pro Kopf // allgemeine ökonomische Faktoren          | [World Development Indicators](http://wdi.worldbank.org/table/WV.1)                                                                            |
| Democracy Index                                          | [Democracy Index](https://en.wikipedia.org/wiki/Democracy_Index)                                                                               |
| Haushaltsgröße                                           | [UN](https://population.un.org/Household/index.html)                                                                                           |
| Ernährungsdaten                                          | [Unicef](https://www.kaggle.com/ruchi798/malnutrition-across-the-globe)                                                                        |
| Lockdown (Typ und Datum (verallgemeinert))               | [Multiple Sources](https://www.kaggle.com/jcyzag/covid19-lockdown-dates-by-country)                                                            |
| Reiseverhalten                                           | [World Development Indicators](http://wdi.worldbank.org/table/6.14)                                                                            |
| Sterberate (allgemein)                                   | [World Development Indicators - Mortality](http://wdi.worldbank.org/table/2.18)                                                                |

Um die als _Submodule_ eingebundenen Daten zu laden/aktualisieren, muss der Befehl `git submodule update` ausgeführt werden.
Beim erstmaligen Clonen des Repositories ist zuvor noch `git submodule init` auszuführen.
Je nachdem, ob man git mit HTTPS oder SSH verwendet, muss gegebenenfalls der Inhalt von `.gitmodules` angepasst werden.

## Ideen für Features

| Allgemeine Kennzahlen                           | Quelle                                                                                                                                                    |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BIP pro Kopf // allgemeine ökonomische Faktoren | [World Development Indicators](http://wdi.worldbank.org/table/WV.1)                                                                                       |
| Einwohnerzahl                                   | [Population by Country - 2020](https://www.kaggle.com/tanuprabhu/population-by-country-2020) + [Our World In Data](https://github.com/owid/covid-19-data) |
| Tests                                           | [WorldOMeters - Coronavirus](https://www.worldometers.info/coronavirus/#ctabs-row) + [Our World In Data](https://github.com/owid/covid-19-data)           |
| Lockdown                                        | [COVID-19 Lockdown dates by country](https://www.kaggle.com/jcyzag/covid19-lockdown-dates-by-country)                                                     |
| Frauen und Entwicklung                          | [World Development Indicators](http://wdi.worldbank.org/table/WV.5)                                                                                       |
| Democracy Index                                 | [Democracy Index](https://en.wikipedia.org/wiki/Democracy_Index) / [EIU](https://www.eiu.com/public/topical_report.aspx?campaignid=democracyindex2019)    |
| Armutszahlen                                    | [World Development Indicators](http://wdi.worldbank.org/table/1.1) + [World Development Indicators](http://wdi.worldbank.org/table/1.2)                   |


| Features, die mit Fallzahlen korrelieren könnten                      | Quelle                                                                                                                                                                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reiseverhalten                                                        | [World Development Indicators](http://wdi.worldbank.org/table/6.14)                                                                                                                                             |
| Hygiene (-> Population with basic handwashing facilities at home (%)) | [WHO](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/population-with-basic-handwashing-facilities-at-home-(-)) + [Our World In Data](https://github.com/owid/covid-19-data)                 |
| Durchschnittl. Haushaltsgröße                                         | [Diercke Weltaltlas](https://diercke.westermann.de/content/haushaltsgr%C3%B6%C3%9Fen-und-kulturerdteile-nach-kolb-und-j-newig-978-3-14-100700-8-254-1-0) + [UN](https://population.un.org/Household/index.html) |


| Features, die mit Todeszahlen korrelieren könnten | Quelle                                                                                                                                                                             |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| div. Faktoren Gesundheitssystem                   | [World Development Indicators by Countries](https://www.kaggle.com/hn4ever/world-development-indicators-by-countries) + [Our World In Data](https://github.com/owid/covid-19-data) |
| Human Development Index                           | [United Nations Development Programme](hdr.undp.org/en/indicators/137506)                                                                                                          |
| Altersstruktur                                    | [Our World In Data](https://github.com/owid/covid-19-data)                                                                                                                         |
| Anzahl Ärzte                                      | [WHO](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/medical-doctors-(per-10-000-population))                                                                  |
| Ernährungsdaten (Über-/Untergewicht)              | [Malnutrition across the globe](https://www.kaggle.com/ruchi798/malnutrition-across-the-globe)                                                                                     |
| Allgemeine Sterblichkeitsrate                     | [World Development Indicators - Mortality](http://wdi.worldbank.org/table/2.18)                                                                                                    |
