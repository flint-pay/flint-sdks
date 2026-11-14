[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCapRequestInput

The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fixed part of the cap per payment, keyed by currency code, added to the percentage part: 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to the same currency's maximum, and a currency needs a maximum to have one; otherwise INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency. Only USD today. |
| `maximum_fee_currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today. minProperties: `1`. |
| `percent` | Required | number | The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places. 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency without one. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

