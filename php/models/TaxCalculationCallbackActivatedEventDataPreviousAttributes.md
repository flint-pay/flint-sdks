[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackActivatedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Optional | integer or null | Consecutive failed requests to the endpoint for the current revision. A valid response resets it. `circuit_failure_count`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescircuit_failure_count). |
| `circuit_state` | Optional | string or null | Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Values: `"closed"`, `"open"`, `"half_open"`. `circuit_state`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescircuit_state). |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPreviousAttributes](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributes) or null | The endpoint URL and request limits. `configuration`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_tax_calculation_callback_revision_id` | Optional | string or null | ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. `current_tax_calculation_callback_revision_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescurrent_tax_calculation_callback_revision_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `key_id` | Optional | string or null | ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. `key_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributeskey_id). |
| `name` | Optional | string or null | Your label for the callback. `name`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesname). |
| `secret` | Optional | string or null | Initial HMAC shared secret, returned once when hmac is included in signing_methods. `secret`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributessecret). |
| `signing_methods` | Optional | Array of string or null | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Items values: `"jwt"`, `"hmac"`. `signing_methods`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributessigning_methods). |
| `status` | Optional | string or null | Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Values: `"inactive"`, `"active"`, `"archived"`. `status`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesstatus). |
| `tax_calculation_callback_id` | Optional | string or null | Unique identifier for this tax calculation callback, prefixed `tcb_`. `tax_calculation_callback_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributestax_calculation_callback_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. `version`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesversion). |

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.circuit_failure_count

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_failure_count](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescircuit_failure_count).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.circuit_state

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_state](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescircuit_state).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.configuration

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.current_tax_calculation_callback_revision_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.current_tax_calculation_callback_revision_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributescurrent_tax_calculation_callback_revision_id).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.key_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.key_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributeskey_id).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.name

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.name](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesname).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.secret

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.secret](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributessecret).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.signing_methods

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.signing_methods](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributessigning_methods).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.status

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.status](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesstatus).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.tax_calculation_callback_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.tax_calculation_callback_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributestax_calculation_callback_id).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TaxCalculationCallbackActivatedEventDataPreviousAttributes.version

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.version](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesversion).

