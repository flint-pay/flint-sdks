[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformReservePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `percent` | Optional | number or null | Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. `percent`: [declared alternatives](../models/PartnerAppPlatformReservePreviousAttributes.md#partnerappplatformreservepreviousattributespercent). |
| `release_delay_seconds` | Optional | integer or null | How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. `release_delay_seconds`: [declared alternatives](../models/PartnerAppPlatformReservePreviousAttributes.md#partnerappplatformreservepreviousattributesrelease_delay_seconds). |

### PartnerAppPlatformReservePreviousAttributes.percent

### PartnerAppPlatformReservePreviousAttributes.percent variant 1

anyOf variant 1: Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%..

- Value shape: number. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### PartnerAppPlatformReservePreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. 

### PartnerAppPlatformReservePreviousAttributes.release_delay_seconds

### PartnerAppPlatformReservePreviousAttributes.release_delay_seconds variant 1

anyOf variant 1: How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days..

- Value shape: integer. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: `int64`. minimum: `0`. 

### PartnerAppPlatformReservePreviousAttributes.release_delay_seconds variant 2

anyOf variant 2.

- Value shape: null. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. 

