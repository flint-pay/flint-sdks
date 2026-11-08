[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePriceListPriceRequestInput

Change one price or its quantity schedule. Omitted fields remain unchanged.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version of this child price last read. Required when quantity_price_breaks is present. A mismatch returns VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakRequestInput](../models/QuantityPriceBreakRequestInput.md#quantitypricebreakrequestinput) | Replace the complete quantity schedule. Omit to preserve it; send [] to clear it. The resulting complete schedule must remain valid. Include expected_version whenever quantity_price_breaks is supplied. maxItems: `10`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | New positive base net unit price in the list's currency. The resulting complete schedule must remain valid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

