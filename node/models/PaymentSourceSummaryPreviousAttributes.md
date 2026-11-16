[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Optional | [PaymentSourceAchDebitSummaryPreviousAttributes](../models/PaymentSourceAchDebitSummaryPreviousAttributes.md#paymentsourceachdebitsummarypreviousattributes) or null | Bank account details. Present when type is ach_debit. |
| `card` | Optional | [PaymentSourceCardSummaryPreviousAttributes](../models/PaymentSourceCardSummaryPreviousAttributes.md#paymentsourcecardsummarypreviousattributes) or null | Card details. Present when type is card. |
| `type` | Optional | string or null | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. `type`: [declared alternatives](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributestype). |

### PaymentSourceSummaryPreviousAttributes.type

### PaymentSourceSummaryPreviousAttributes.type variant 1

anyOf variant 1: Funding-method family. Wallet payment options use card because their underlying funding source is a card..

- Value shape: string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`.

### PaymentSourceSummaryPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Funding-method family. Wallet payment options use card because their underlying funding source is a card. 

