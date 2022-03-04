# Verteilte Systeme
Portfolioprüfung 2022
Sophia Sturm, Lisa Ackermann und Philipp Lehnet

## Beschreibung
Wir bauen eine API, welche die Informationen aus einer Datenbank ausgibt. Die Endpoints geben jeweils Angaben zu den Herstellern, Modellen und Fahrzeugen aus und können diese auch bearbeiten.

## Endpoint 1

URI: /vehicle/car/ 
Beispiel: /vehicle/car/?car_id=1 
Parameter: car_id (int) 
Response-Type: application/json 
Response: 
{ 
  "vendor": "Audi", 
  "model":"A4", 
  "power":123, 
  "new":false 
} 

## Endpoint 2
URI: /vehicle/vendor/ 
Beispiel: /vehicle/vendor/?vendor=Audi 
Parameter: car_id (int) 
Response-Type: application/json 
Response: 
{ 
  "vendor": "Audi", 
  "model":"A4", 
  "power":123, 
  "new":false 
} 

## API Endpoint 3
/vehicle/model/?model=A4 
