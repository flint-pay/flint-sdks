[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook271f2a73e897PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook271f2a73e897PayloadInput.md#incomingwebhook271f2a73e897payloadinputdata). |
| `event_type` | Required | string | Values: `"bundle.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook271f2a73e897PayloadInput variant 1: `event_type` = `"bundle.created"`

oneOf variant 1: The `bundle.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"bundle.created"`.

### IncomingWebhook271f2a73e897PayloadInput variant 2: `event_type` = `"bundle.created"`

oneOf variant 2: The `bundle.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"bundle.created"`.

### IncomingWebhook271f2a73e897PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BundleInput](../models/BundleInput.md#bundleinput) | A group of items sold together. `object`: [field definitions](../models/IncomingWebhook271f2a73e897PayloadInput.md#incomingwebhook271f2a73e897payloadinputdataobject). |

### IncomingWebhook271f2a73e897PayloadInput.data.object

A group of items sold together.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean | Whether the bundle is currently eligible for sale. |
| `barcode` | Optional | string | Barcode assigned to this sellable item. |
| `bundle_id` | Required | string | Stable identifier of the bundle. |
| `categories` | Required | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) | Always present. Empty collections are returned as []. |
| `component_count` | Required | integer | Number of components in the bundle. Format: `int32`. |
| `components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. |
| `created_at` | Optional | string | When this resource was created, as an RFC3339 timestamp. Format: `date-time`. |
| `delivery_configuration_status` | Required | string | Delivery readiness aggregated across the bundle's components. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `description` | Optional | string | Description of the bundle shown to buyers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `images` | Required | Array of [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | Images attached to this resource, in display order. The first image is primary. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#incomingwebhook271f2a73e897payloadinputdataobject-line_item_tax_category-values). |
| `merchant_id` | Optional | string | Identifier of the merchant that owns this resource. |
| `metadata` | Optional | Map of string | Caller-owned metadata stored on this resource. |
| `modifier_set` | Optional | [ModifierSetInput](../models/ModifierSetInput.md#modifiersetinput) or null | Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. |
| `modifier_set_id` | Required | string or null | Attached modifier set. Send null on update to remove it. |
| `name` | Required | string | Bundle name shown to buyers. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. |
| `status` | Required | string | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. |
| `taxable` | Optional | boolean | Whether this item is subject to tax. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Optional | string | When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Current resource version. Send it as expected_version to reject a write if the resource has changed. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

#### IncomingWebhook271f2a73e897PayloadInput.data.object line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### IncomingWebhook271f2a73e897PayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook271f2a73e897PayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

