[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantActionRoutingPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string or null | When routing switches to the current merchant_action_url. `expires_at`: [declared alternatives](../models/PartnerAppMerchantActionRoutingPreviousAttributesInput.md#partnerappmerchantactionroutingpreviousattributesinputexpires_at). |
| `url` | Optional | string or null | The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. `url`: [declared alternatives](../models/PartnerAppMerchantActionRoutingPreviousAttributesInput.md#partnerappmerchantactionroutingpreviousattributesinputurl). |

### PartnerAppMerchantActionRoutingPreviousAttributesInput.expires_at

### PartnerAppMerchantActionRoutingPreviousAttributesInput.expires_at variant 1

anyOf variant 1: When routing switches to the current merchant_action_url..

- Value shape: string. When routing switches to the current merchant_action_url. When routing switches to the current merchant_action_url. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppMerchantActionRoutingPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. When routing switches to the current merchant_action_url. 

### PartnerAppMerchantActionRoutingPreviousAttributesInput.url

### PartnerAppMerchantActionRoutingPreviousAttributesInput.url variant 1

anyOf variant 1: The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page..

- Value shape: string. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

### PartnerAppMerchantActionRoutingPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

