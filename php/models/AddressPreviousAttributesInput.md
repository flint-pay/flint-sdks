[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddressPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string or null | City or locality of the address. `city`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcity). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcountry). |
| `line1` | Optional | string or null | Street address, including the building number. `line1`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputline1). |
| `line2` | Optional | string or null | Apartment, suite, floor, or other address details. `line2`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputline2). |
| `postal_code` | Optional | string or null | Postal or ZIP code of the address. `postal_code`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputpostal_code). |
| `state` | Optional | string or null | State, province, or region of the address. `state`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputstate). |

### AddressPreviousAttributesInput.city

### AddressPreviousAttributesInput.city variant 1

anyOf variant 1: City or locality of the address..

- Value shape: string. City or locality of the address. 

### AddressPreviousAttributesInput.city variant 2

anyOf variant 2.

- Value shape: null. City or locality of the address. 

### AddressPreviousAttributesInput.country

### AddressPreviousAttributesInput.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### AddressPreviousAttributesInput.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### AddressPreviousAttributesInput.line1

### AddressPreviousAttributesInput.line1 variant 1

anyOf variant 1: Street address, including the building number..

- Value shape: string. Street address, including the building number. 

### AddressPreviousAttributesInput.line1 variant 2

anyOf variant 2.

- Value shape: null. Street address, including the building number. 

### AddressPreviousAttributesInput.line2

### AddressPreviousAttributesInput.line2 variant 1

anyOf variant 1: Apartment, suite, floor, or other address details..

- Value shape: string. Apartment, suite, floor, or other address details. 

### AddressPreviousAttributesInput.line2 variant 2

anyOf variant 2.

- Value shape: null. Apartment, suite, floor, or other address details. 

### AddressPreviousAttributesInput.postal_code

### AddressPreviousAttributesInput.postal_code variant 1

anyOf variant 1: Postal or ZIP code of the address..

- Value shape: string. Postal or ZIP code of the address. 

### AddressPreviousAttributesInput.postal_code variant 2

anyOf variant 2.

- Value shape: null. Postal or ZIP code of the address. 

### AddressPreviousAttributesInput.state

### AddressPreviousAttributesInput.state variant 1

anyOf variant 1: State, province, or region of the address..

- Value shape: string. State, province, or region of the address. 

### AddressPreviousAttributesInput.state variant 2

anyOf variant 2.

- Value shape: null. State, province, or region of the address. 

