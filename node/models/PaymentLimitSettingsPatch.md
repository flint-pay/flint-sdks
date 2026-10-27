[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLimitSettingsPatch

Changes to a merchant's payment amount limits. Each map replaces the existing one, and null clears it. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_amounts` | Optional | Map of object or null | Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: `1`. `max_amounts{}`: [field definitions](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatchmax_amounts). |
| `min_amounts` | Optional | Map of object or null | Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: `1`. `min_amounts{}`: [field definitions](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatchmax_amounts). |

### PaymentLimitSettingsPatch.max_amounts{}

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Required | string | minLength: `1`. Values: `"USD"`. |

### PaymentLimitSettingsPatch.min_amounts{}

Field definitions: [PaymentLimitSettingsPatch.max_amounts{}](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatchmax_amounts).

