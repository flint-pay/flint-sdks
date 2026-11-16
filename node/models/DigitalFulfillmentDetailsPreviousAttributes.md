[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DigitalFulfillmentDetailsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string or null | When the digital goods were delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributesdelivered_at). |
| `delivery_url` | Optional | string or null | URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. `delivery_url`: [declared alternatives](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributesdelivery_url). |

### DigitalFulfillmentDetailsPreviousAttributes.delivered_at

### DigitalFulfillmentDetailsPreviousAttributes.delivered_at variant 1

anyOf variant 1: When the digital goods were delivered, in RFC3339 format..

- Value shape: string. When the digital goods were delivered, in RFC3339 format. When the digital goods were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DigitalFulfillmentDetailsPreviousAttributes.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the digital goods were delivered, in RFC3339 format. 

### DigitalFulfillmentDetailsPreviousAttributes.delivery_url

### DigitalFulfillmentDetailsPreviousAttributes.delivery_url variant 1

anyOf variant 1: URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded..

- Value shape: string. URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. 

### DigitalFulfillmentDetailsPreviousAttributes.delivery_url variant 2

anyOf variant 2.

- Value shape: null. URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. 

