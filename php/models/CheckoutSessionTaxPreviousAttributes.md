[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTaxPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null | The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. |
| `enabled` | Optional | boolean or null | Whether the session collects tax, as set when it was created. `enabled`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributesenabled). |
| `location_fixed_by_merchant` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. `location_fixed_by_merchant`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributeslocation_fixed_by_merchant). |

### CheckoutSessionTaxPreviousAttributes.enabled

### CheckoutSessionTaxPreviousAttributes.enabled variant 1

anyOf variant 1: Whether the session collects tax, as set when it was created..

- Value shape: boolean. Whether the session collects tax, as set when it was created. 

### CheckoutSessionTaxPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the session collects tax, as set when it was created. 

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant

The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. 

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutSessionTaxPreviousAttributes.location_fixed_by_merchant variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

