# Verteilte Systeme
Portfolioprüfung 2022
Sophia Sturm, Lisa Ackermann und Philipp Lehnet

## Beschreibung
Wir bauen eine API, welche die Informationen aus einer Datenbank ausgibt. Die Endpoints geben jeweils Angaben zu den Herstellern, Modellen und Fahrzeugen aus und können diese auch bearbeiten.

## Endpoint 1

- URI: /vehicle/car/ 
- Beispiel: /vehicle/car/?car_id=1 
- Parameter: car_id (int) 
- Response-Type: application/json 
- Response-Content: 
{ 
"vendor": "Audi",
"model":"A4",
"power":123,
"new":false
}

## Endpoint 2
- URI: /vehicle/vendor/ 
- Beispiel: /vehicle/vendor/?q=Audi 
- Parameter: q (String) 
- Response-Type: application/json 
- Response-Content: 
{ 
"vendor": "Audi",
"vehicle-count":12,
"new":3
}

## API Endpoint 3
- URI: /vehicle/model/ 
- Beispiel: /vehicle/model/?q=A4 
- Parameter: q (String) 
- Response-Type: application/json 
- Response-Content: 
{ 
"model": "Audi A4",
"vehicle-count":3,
"new":0
}
