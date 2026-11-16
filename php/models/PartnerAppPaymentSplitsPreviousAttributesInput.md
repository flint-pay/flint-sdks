[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPaymentSplitsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Optional | string or null | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. `seller_terms_url`: [declared alternatives](../models/PartnerAppPaymentSplitsPreviousAttributesInput.md#partnerapppaymentsplitspreviousattributesinputseller_terms_url). |

### PartnerAppPaymentSplitsPreviousAttributesInput.seller_terms_url

### PartnerAppPaymentSplitsPreviousAttributesInput.seller_terms_url variant 1

anyOf variant 1: The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it..

- Value shape: string. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### PartnerAppPaymentSplitsPreviousAttributesInput.seller_terms_url variant 2

anyOf variant 2.

- Value shape: null. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. 

