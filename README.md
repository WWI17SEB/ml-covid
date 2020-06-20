# ml-covid

> Coronafallzahlenvorhersage je Land aufgrund anderer potenzieller Einflussfaktoren

## Idee

Die Idee des Projektes ist die Berechnung/Vorhersage von Fallzahlen zu Covid-19 für Länder, die keine oder klar ersichtlich falsche Zahlen veröffentlichen.
Dazu sollen mehrere Faktoren betrachtet werden, wie etwa die wirtschaftlichen Gegebenheiten eines gewissen Landes und die daraus resultierende medizinische Versorgung.
Zu diesen wirtschaftlichen Daten sollen ebenfalls Informationen zur Bevölkerung, also dem Alter oder der Bevölkerungsdichte, verwendet werden, um eine potentiell verlässliche Vorhersage treffen zu können.

Zur Berechnung dieser Zahlen soll das _Supervised Learning_ zum Einsatz kommen, während Länder mit verlässlichen Zahlen (siehe Quellen) als Trainingsdaten verwendet werden sollen.

Zuvor jedoch soll mit Hilfe des _Unsupervised Learning_ eine Klassifikation der verschiedenen Länder erfolgen, um potentielle Trainings-Länder zu finden.

## Aufbau Repository

Alle verwendeten Daten werden im `/data`-Ordner untergebracht.
Dabei werden diese zunächst als Rohdaten in `/data/raw` gespeichert und anschließend aufbereitet.

## Datenquellen

| Name     | Quelle                                                                            |
| -------- | --------------------------------------------------------------------------------- |
| COVID-19 | [Johns Hopkins University & Medicine](https://github.com/CSSEGISandData/COVID-19) |

Um die als _Submodule_ eingebundenen Daten zu laden/aktualisieren, muss der Befehl `git submodule update` ausgeführt werden.
Beim erstmaligen clonen des Repositories ist zuvor noch `git submodule init` auszuführen.
