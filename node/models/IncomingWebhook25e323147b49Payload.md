[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook25e323147b49Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddata). |
| `event_type` | Required | string | Values: `"promotion.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook25e323147b49Payload variant 1: `event_type` = `"promotion.created"`

oneOf variant 1: The `promotion.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"promotion.created"`.

### IncomingWebhook25e323147b49Payload variant 2: `event_type` = `"promotion.created"`

oneOf variant 2: The `promotion.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"promotion.created"`.

### IncomingWebhook25e323147b49Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Promotion](../models/Promotion.md#promotion) | Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. `object`: [field definitions](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddataobject). |

### IncomingWebhook25e323147b49Payload.data.object

Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

Field definitions: [shared fields](Promotion.md#promotion).

### IncomingWebhook25e323147b49Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook25e323147b49Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

