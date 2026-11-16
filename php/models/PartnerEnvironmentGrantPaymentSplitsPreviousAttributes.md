[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantPaymentSplitsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approved_at` | Optional | string or null | When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. `approved_at`: [declared alternatives](../models/PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.md#partnerenvironmentgrantpaymentsplitspreviousattributesapproved_at). |
| `seller_terms_url` | Optional | string or null | The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. `seller_terms_url`: [declared alternatives](../models/PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.md#partnerenvironmentgrantpaymentsplitspreviousattributesseller_terms_url). |

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.approved_at

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.approved_at variant 1

anyOf variant 1: When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one..

- Value shape: string. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: `date-time`. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.approved_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.seller_terms_url

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.seller_terms_url variant 1

anyOf variant 1: The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it..

- Value shape: string. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. 

### PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.seller_terms_url variant 2

anyOf variant 2.

- Value shape: null. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. 

