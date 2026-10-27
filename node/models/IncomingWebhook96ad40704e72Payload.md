[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook96ad40704e72Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook96ad40704e72Payload.md#incomingwebhook96ad40704e72payloaddata). |
| `event_type` | Required | string | Values: `"return_resolution.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook96ad40704e72Payload variant 1: `event_type` = `"return_resolution.created"`

oneOf variant 1: The `return_resolution.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"return_resolution.created"`.

### IncomingWebhook96ad40704e72Payload variant 2: `event_type` = `"return_resolution.created"`

oneOf variant 2: The `return_resolution.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"return_resolution.created"`.

### IncomingWebhook96ad40704e72Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnResolution](../models/ReturnResolution.md#returnresolution) | The refund, exchange, or other outcome of a return. `object`: [field definitions](../models/IncomingWebhook96ad40704e72Payload.md#incomingwebhook96ad40704e72payloaddataobject). |

### IncomingWebhook96ad40704e72Payload.data.object

The refund, exchange, or other outcome of a return.

Field definitions: [shared fields](ReturnResolution.md#returnresolution).

### IncomingWebhook96ad40704e72Payload.data.object.buyer_payment_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook96ad40704e72Payload.data.object.buyer_refund_amount_money

Field definitions: [BuyerReturnResolution.buyer_refund_amount_money](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_refund_amount_money).

### IncomingWebhook96ad40704e72Payload.data.object.credit_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook96ad40704e72Payload.data.object.deduction_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook96ad40704e72Payload.data.object.replacement_total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook96ad40704e72Payload.data.object.returned_total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook96ad40704e72Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook96ad40704e72Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

