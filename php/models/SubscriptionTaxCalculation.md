[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxCalculation

Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components.

Response model.

Fields, types, descriptions and enum values: [SubscriptionTaxCalculationInput](../models/SubscriptionTaxCalculationInput.md#subscriptiontaxcalculationinput).

