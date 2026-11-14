[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryMethodRequestInput

The request body for: Update delivery method.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Conditional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Conditional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Conditional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Conditional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Conditional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

### UpdateDeliveryMethodRequestInput variant 1

anyOf variant 1.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `name`.
- Optional: `configuration`, `description`, `display_position`, `external_reference_id`, `metadata`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 2

anyOf variant 2.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `external_reference_id`.
- Optional: `configuration`, `description`, `display_position`, `metadata`, `name`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 3

anyOf variant 3.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `configuration`.
- Optional: `description`, `display_position`, `external_reference_id`, `metadata`, `name`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 4

anyOf variant 4.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `metadata`.
- Optional: `configuration`, `description`, `display_position`, `external_reference_id`, `name`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 5

anyOf variant 5.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `description`.
- Optional: `configuration`, `display_position`, `external_reference_id`, `metadata`, `name`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 6

anyOf variant 6.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `display_position`.
- Optional: `configuration`, `description`, `external_reference_id`, `metadata`, `name`, `recommendation_priority`, `status`.

### UpdateDeliveryMethodRequestInput variant 7

anyOf variant 7.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `recommendation_priority`.
- Optional: `configuration`, `description`, `display_position`, `external_reference_id`, `metadata`, `name`, `status`.

### UpdateDeliveryMethodRequestInput variant 8

anyOf variant 8.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`metadata`); present(`description`); present(`display_position`); present(`recommendation_priority`))).
- Required: `status`.
- Optional: `configuration`, `description`, `display_position`, `external_reference_id`, `metadata`, `name`, `recommendation_priority`.

