[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTax

The tax the subscription's renewal, setup fee and plan change orders use. Returned only to merchant credentials; omitted for buyer credentials.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [SubscriptionTaxCalculation](../models/SubscriptionTaxCalculation.md#subscriptiontaxcalculation) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. |
| `enabled` | Required | boolean | Whether the subscription's orders calculate tax. |

