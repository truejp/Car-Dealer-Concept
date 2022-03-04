# VerteilteSysteme
Portfolioprüfung

## API Endpoint 1

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

## API Endpoint 2
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
