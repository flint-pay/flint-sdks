[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTax

The tax the subscription's renewal, setup fee and plan change orders use. Returned only to merchant credentials; omitted for buyer credentials.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [CheckoutTaxCalculation](../models/CheckoutTaxCalculation.md#checkouttaxcalculation) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. `calculation`: [declared alternatives](../models/SubscriptionTax.md#subscriptiontaxcalculation). |
| `enabled` | Required | boolean | Whether the subscription's orders calculate tax. |

### SubscriptionTax.calculation

How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Conditional | string | Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. |
| `mode` | Conditional | string | How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`. |

### SubscriptionTax.calculation variant 1: `components_source` = `"callback"`

anyOf SubscriptionTaxCalculation: Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components..

- Required: `mode`.
- Optional: `components_source`.

### SubscriptionTax.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. 

