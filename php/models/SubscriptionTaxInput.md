[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxInput

The tax the subscription's renewal, setup fee and plan change orders use. Returned only to merchant credentials; omitted for buyer credentials.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [SubscriptionTaxCalculationInput](../models/SubscriptionTaxCalculationInput.md#subscriptiontaxcalculationinput) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. |
| `enabled` | Required | boolean | Whether the subscription's orders calculate tax. |

