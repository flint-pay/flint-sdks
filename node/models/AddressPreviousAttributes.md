[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddressPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string or null | City or locality of the address. `city`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescity). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescountry). |
| `line1` | Optional | string or null | Street address, including the building number. `line1`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributesline1). |
| `line2` | Optional | string or null | Apartment, suite, floor, or other address details. `line2`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributesline2). |
| `postal_code` | Optional | string or null | Postal or ZIP code of the address. `postal_code`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributespostal_code). |
| `state` | Optional | string or null | State, province, or region of the address. `state`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributesstate). |

### AddressPreviousAttributes.city

### AddressPreviousAttributes.city variant 1

anyOf variant 1: City or locality of the address..

- Value shape: string. City or locality of the address. 

### AddressPreviousAttributes.city variant 2

anyOf variant 2.

- Value shape: null. City or locality of the address. 

### AddressPreviousAttributes.country

### AddressPreviousAttributes.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### AddressPreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### AddressPreviousAttributes.line1

### AddressPreviousAttributes.line1 variant 1

anyOf variant 1: Street address, including the building number..

- Value shape: string. Street address, including the building number. 

### AddressPreviousAttributes.line1 variant 2

anyOf variant 2.

- Value shape: null. Street address, including the building number. 

### AddressPreviousAttributes.line2

### AddressPreviousAttributes.line2 variant 1

anyOf variant 1: Apartment, suite, floor, or other address details..

- Value shape: string. Apartment, suite, floor, or other address details. 

### AddressPreviousAttributes.line2 variant 2

anyOf variant 2.

- Value shape: null. Apartment, suite, floor, or other address details. 

### AddressPreviousAttributes.postal_code

### AddressPreviousAttributes.postal_code variant 1

anyOf variant 1: Postal or ZIP code of the address..

- Value shape: string. Postal or ZIP code of the address. 

### AddressPreviousAttributes.postal_code variant 2

anyOf variant 2.

- Value shape: null. Postal or ZIP code of the address. 

### AddressPreviousAttributes.state

### AddressPreviousAttributes.state variant 1

anyOf variant 1: State, province, or region of the address..

- Value shape: string. State, province, or region of the address. 

### AddressPreviousAttributes.state variant 2

anyOf variant 2.

- Value shape: null. State, province, or region of the address. 

