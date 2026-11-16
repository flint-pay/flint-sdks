[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approved_at` | Optional | string or null | When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. `approved_at`: [declared alternatives](../models/PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.md#partnerenvironmentgrantpaymentsplitspreviousattributesinputapproved_at). |
| `seller_terms_url` | Optional | string or null | The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. `seller_terms_url`: [declared alternatives](../models/PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.md#partnerenvironmentgrantpaymentsplitspreviousattributesinputseller_terms_url). |

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.approved_at

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.approved_at variant 1

anyOf variant 1: When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one..

- Value shape: string. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.approved_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.seller_terms_url

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.seller_terms_url variant 1

anyOf variant 1: The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it..

- Value shape: string. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput.seller_terms_url variant 2

anyOf variant 2.

- Value shape: null. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. 

