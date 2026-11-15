[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxRequestInput

Replaced as a whole: send every field you want to keep.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [SubscriptionTaxCalculationRequestInput](../models/SubscriptionTaxCalculationRequestInput.md#subscriptiontaxcalculationrequestinput) or null | How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send `null`, to use `tax.default_calculation` from your settings, where a `provided` default means automatic. Not allowed while `enabled` is `false`. |
| `enabled` | Required | boolean | Whether the subscription's orders calculate tax. |

