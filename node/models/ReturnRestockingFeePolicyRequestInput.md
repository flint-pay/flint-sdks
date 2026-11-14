[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRestockingFeePolicyRequestInput

Request input. Response: [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy).

A restocking fee in a return policy, charged as a flat amount or a percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | How the fee is worked out. Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed fee proposed for each line, whatever the quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Percentage points of the returned units' subtotal. For eligible and review_required revisions with calculation_type `percent`, must be from 1 through 100 with up to four decimal places. `10` means 10%. On an ineligible revision, the fee is stored but ignored; this range is not enforced, but the four-decimal precision limit still applies. Format: `double`. multipleOf: `0.0001`. |

