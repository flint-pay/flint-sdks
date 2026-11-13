[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxCalculation







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string | Values: `"callback"`. |
| `mode` | Required | string | Values: `"automatic"`, `"external"`. |

### CheckoutTaxCalculation variant 1: `components_source` = `"callback"`

anyOf variant 1: Declared schema CheckoutTaxCalculation. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here..

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculation variant 2: `components_source` = `"callback"`

anyOf variant 2: Declared schema CheckoutTaxCalculationRequest. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here..

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculation variant 3: `components_source` = `"callback"`

anyOf variant 3: Declared schema SubscriptionTaxCalculation. Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components..

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculation variant 4: `components_source` = `"callback"`

anyOf variant 4: Declared schema SubscriptionTaxCalculationRequest. Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components..

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

