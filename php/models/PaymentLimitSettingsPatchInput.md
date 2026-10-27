[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettingsPatchInput

Changes to a merchant's payment amount limits. Each map replaces the existing one, and null clears it.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_amounts` | Optional | Map of object or null | Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: `1`. `max_amounts{}`: [field definitions](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinputmax_amounts). |
| `min_amounts` | Optional | Map of object or null | Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: `1`. `min_amounts{}`: [field definitions](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinputmax_amounts). |

### PaymentLimitSettingsPatchInput.max_amounts{}

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Required | string | minLength: `1`. Values: `"USD"`. |

### PaymentLimitSettingsPatchInput.min_amounts{}

Field definitions: [PaymentLimitSettingsPatchInput.max_amounts{}](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinputmax_amounts).

