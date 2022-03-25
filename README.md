# Verteilte Systeme
Portfolioprüfung 2022 <br>
Sophia Sturm, Lisa Ackermann und Philipp Lehnet

## Beschreibung
Wir bauen eine API, welche die Informationen aus einer Datenbank ausgibt. Die Endpoints geben jeweils Angaben zu den Herstellern, Modellen und Fahrzeugen aus und können diese auch bearbeiten.

## Endpoint 1

- URI: /vehicle/car/ 
- Beispiel: /vehicle/car/?car_id=1 
- Parameter (GET): car_id (int)
- Response-Type: application/json 
- Response-Content: <br>
{ <br>
"vendor": "Audi", <br>
"model":"A4", <br>
"power":123, <br>
"new":false <br>
} <br>
- Parameter (POST): vendor (string), model (string), power (int), new (bool)
- Response-Type: application/json 
- Response-Content: <br>
{ <br>
"car_id": 123, <br>
"success": true <br>
} <br>

## Endpoint 2
- URI: /vehicle/vendor/ 
- Beispiel: /vehicle/vendor/?q=Audi 
- Parameter: q (String) 
- Method: GET
- Response-Type: application/json 
- Response-Content: <br>
{ <br> 
"vendor": "Audi", <br>
"vehicle-count":12, <br> 
"new":3 <br>
} <br>

## Endpoint 3
- URI: /vehicle/model/ 
- Beispiel: /vehicle/model/?q=A4 
- Parameter: q (String) 
- Method: GET
- Response-Type: application/json 
- Response-Content: <br>
{ <br> 
"model": "Audi A4", <br>
"vehicle-count":3, <br>
"new":0 <br> 
} <br>
