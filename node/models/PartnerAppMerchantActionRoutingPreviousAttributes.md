[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantActionRoutingPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string or null | When routing switches to the current merchant_action_url. `expires_at`: [declared alternatives](../models/PartnerAppMerchantActionRoutingPreviousAttributes.md#partnerappmerchantactionroutingpreviousattributesexpires_at). |
| `url` | Optional | string or null | The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. `url`: [declared alternatives](../models/PartnerAppMerchantActionRoutingPreviousAttributes.md#partnerappmerchantactionroutingpreviousattributesurl). |

### PartnerAppMerchantActionRoutingPreviousAttributes.expires_at

### PartnerAppMerchantActionRoutingPreviousAttributes.expires_at variant 1

anyOf variant 1: When routing switches to the current merchant_action_url..

- Value shape: string. When routing switches to the current merchant_action_url. When routing switches to the current merchant_action_url. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppMerchantActionRoutingPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When routing switches to the current merchant_action_url. 

### PartnerAppMerchantActionRoutingPreviousAttributes.url

### PartnerAppMerchantActionRoutingPreviousAttributes.url variant 1

anyOf variant 1: The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page..

- Value shape: string. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

### PartnerAppMerchantActionRoutingPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

