[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ach_debit` | Optional | [PaymentSourceAchDebitSummaryPreviousAttributesInput](../models/PaymentSourceAchDebitSummaryPreviousAttributesInput.md#paymentsourceachdebitsummarypreviousattributesinput) or null | Bank account details. Present when type is ach_debit. |
| `card` | Optional | [PaymentSourceCardSummaryPreviousAttributesInput](../models/PaymentSourceCardSummaryPreviousAttributesInput.md#paymentsourcecardsummarypreviousattributesinput) or null | Card details. Present when type is card. |
| `type` | Optional | string or null | Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`. `type`: [declared alternatives](../models/PaymentSourceSummaryPreviousAttributesInput.md#paymentsourcesummarypreviousattributesinputtype). |

### PaymentSourceSummaryPreviousAttributesInput.type

### PaymentSourceSummaryPreviousAttributesInput.type variant 1

anyOf variant 1: Funding-method family. Wallet payment options use card because their underlying funding source is a card..

- Value shape: string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Values: `"card"`, `"ach_debit"`, `"affirm"`.

### PaymentSourceSummaryPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Funding-method family. Wallet payment options use card because their underlying funding source is a card. 

