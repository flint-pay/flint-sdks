[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DigitalFulfillmentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string or null | When the digital goods were delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/DigitalFulfillmentDetailsPreviousAttributesInput.md#digitalfulfillmentdetailspreviousattributesinputdelivered_at). |
| `delivery_url` | Optional | string or null | URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. `delivery_url`: [declared alternatives](../models/DigitalFulfillmentDetailsPreviousAttributesInput.md#digitalfulfillmentdetailspreviousattributesinputdelivery_url). |

### DigitalFulfillmentDetailsPreviousAttributesInput.delivered_at

### DigitalFulfillmentDetailsPreviousAttributesInput.delivered_at variant 1

anyOf variant 1: When the digital goods were delivered, in RFC3339 format..

- Value shape: string. When the digital goods were delivered, in RFC3339 format. When the digital goods were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DigitalFulfillmentDetailsPreviousAttributesInput.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the digital goods were delivered, in RFC3339 format. 

### DigitalFulfillmentDetailsPreviousAttributesInput.delivery_url

### DigitalFulfillmentDetailsPreviousAttributesInput.delivery_url variant 1

anyOf variant 1: URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded..

- Value shape: string. URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. 

### DigitalFulfillmentDetailsPreviousAttributesInput.delivery_url variant 2

anyOf variant 2.

- Value shape: null. URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. 

