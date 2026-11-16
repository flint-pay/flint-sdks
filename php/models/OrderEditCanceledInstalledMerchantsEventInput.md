[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditCanceledInstalledMerchantsEventInput

The `order_edit.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"order_edit.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### OrderEditCanceledInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookOrderEditInput](../models/WebhookOrderEditInput.md#webhookordereditinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`. `object`: [field definitions](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributes). |

### OrderEditCanceledInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`.

Field definitions: [shared fields](WebhookOrderEditInput.md#webhookordereditinput).

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Optional | Array of [OrderEditLineAdditionInput](../models/OrderEditLineAdditionInput.md#ordereditlineadditioninput) or null | Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. `add_line_items`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesadd_line_items). |
| `added_total_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. |
| `amount_due_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | What the added lines cost beyond the removed value and released charges, tax included, frozen when the edit was created. Zero when the edit had no balance. |
| `canceled_at` | Optional | string or null or null | When the edit was canceled. `null` when the edit is not canceled. `canceled_at`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributescanceled_at). |
| `cancellation_reason` | Optional | string or null or null | Why the edit was canceled. `null` when the edit is not canceled. Values: `"merchant_request"`, `"expired"`, `"payment_disputed"`, `"payment_returned"`, `null`. `cancellation_reason`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason). |
| `charge_refunds` | Optional | Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput) or null | Charges released by this edit, frozen at creation. Empty when no charges were released. `charge_refunds`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributescharge_refunds). |
| `completed_at` | Optional | string or null or null | When the item changes were applied to the order. `null` when the edit is pending or canceled. `completed_at`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributescompleted_at). |
| `created_at` | Optional | string or null | When the edit was created. `created_at`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null or null | When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. `expires_at`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesexpires_at). |
| `order_edit_id` | Optional | string or null | Stable ID of this order edit. `order_edit_id`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesorder_edit_id). |
| `order_id` | Optional | string or null | The order this edit belongs to. `order_id`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `payment_intent_id` | Optional | string or null or null | The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. `payment_intent_id`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributespayment_intent_id). |
| `reason` | Optional | string or null | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). `reason`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesreason). |
| `refund_ids` | Optional | Array of string or null | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. `refund_ids`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesrefund_ids). |
| `refund_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. |
| `remove_line_items` | Optional | Array of [OrderEditLineRemovalInput](../models/OrderEditLineRemovalInput.md#ordereditlineremovalinput) or null | Removed units and their refund amounts frozen at creation. `remove_line_items`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesremove_line_items). |
| `removed_total_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | The value of the removed units: the sum of remove_line_items[].total_money. |
| `status` | Optional | string or null | Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Values: `"pending"`, `"completed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `unrefunded_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. |
| `version` | Optional | integer or null | The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. `version`: [declared alternatives](../models/OrderEditCanceledInstalledMerchantsEventInput.md#ordereditcanceledinstalledmerchantseventinputdataprevious_attributesversion). |

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.add_line_items

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.add_line_items variant 1

anyOf variant 1: Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing..

- Value shape: Array of [OrderEditLineAdditionInput](../models/OrderEditLineAdditionInput.md#ordereditlineadditioninput). Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.add_line_items variant 2

anyOf variant 2.

- Value shape: null. Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.canceled_at

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.canceled_at variant 1

anyOf variant 1: When the edit was canceled. `null` when the edit is not canceled..

- Value shape: (string or null). When the edit was canceled. `null` when the edit is not canceled. When the edit was canceled. `null` when the edit is not canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.canceled_at variant 2

anyOf variant 2.

- Value shape: null. When the edit was canceled. `null` when the edit is not canceled. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Why the edit was canceled. `null` when the edit is not canceled..

- Value shape: (string or null). Why the edit was canceled. `null` when the edit is not canceled. Values: `"merchant_request"`, `"expired"`, `"payment_disputed"`, `"payment_returned"`, `null`.

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the edit was canceled. `null` when the edit is not canceled. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.charge_refunds

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.charge_refunds variant 1

anyOf variant 1: Charges released by this edit, frozen at creation. Empty when no charges were released..

- Value shape: Array of [OrderEditChargeRefundInput](../models/OrderEditChargeRefundInput.md#ordereditchargerefundinput). Charges released by this edit, frozen at creation. Empty when no charges were released. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.charge_refunds variant 2

anyOf variant 2.

- Value shape: null. Charges released by this edit, frozen at creation. Empty when no charges were released. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at variant 1

anyOf variant 1: When the item changes were applied to the order. `null` when the edit is pending or canceled..

- Value shape: (string or null). When the item changes were applied to the order. `null` when the edit is pending or canceled. When the item changes were applied to the order. `null` when the edit is pending or canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the item changes were applied to the order. `null` when the edit is pending or canceled. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the edit was created..

- Value shape: string. When the edit was created. When the edit was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the edit was created. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.expires_at

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 1

anyOf variant 1: When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance..

- Value shape: (string or null). When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 1

anyOf variant 1: Stable ID of this order edit..

- Value shape: string. Stable ID of this order edit. Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. Stable ID of this order edit. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: The order this edit belongs to..

- Value shape: string. The order this edit belongs to. The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this edit belongs to. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it..

- Value shape: (string or null). The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.reason

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.reason variant 1

anyOf variant 1: Reason for the edit and its refund..

- Value shape: string. Reason for the edit and its refund. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`.

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Reason for the edit and its refund. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_ids

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 1

anyOf variant 1: Refunds created for this edit. Empty when no refund is needed or processing has not created it yet..

- Value shape: Array of string. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.remove_line_items

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.remove_line_items variant 1

anyOf variant 1: Removed units and their refund amounts frozen at creation..

- Value shape: Array of [OrderEditLineRemovalInput](../models/OrderEditLineRemovalInput.md#ordereditlineremovalinput). Removed units and their refund amounts frozen at creation. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.remove_line_items variant 2

anyOf variant 2.

- Value shape: null. Removed units and their refund amounts frozen at creation. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.status

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund..

- Value shape: string. Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Values: `"pending"`, `"completed"`, `"canceled"`.

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions..

- Value shape: Array of string. Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"cancel"`, `"retry"`.

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.version

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change..

- Value shape: integer. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: `uint64`. minimum: `1`. 

### OrderEditCanceledInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. 

### OrderEditCanceledInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

