[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderEditResult

The completed edit, current order, and refunds created so far.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | The order after the edit. A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/CreateOrderEditResult.md#createordereditresultorder). |
| `order_edit` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | The committed edit, even when refund processing is pending. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds. `order_edit`: [field definitions](../models/CreateOrderEditResult.md#createordereditresultorder_edit). |
| `refunds` | Required | Array of [Refund](../models/Refund.md#refund) | Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. `refunds[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds). |

### CreateOrderEditResult.order

The order after the edit. A customer's purchase and its payment and fulfillment progress.

Field definitions: [shared fields](OrderResponse.md#orderresponsedata).

### CreateOrderEditResult.order.active_payment_attempt

Field definitions: [OrderResponse.data.active_payment_attempt](../models/OrderResponse.md#orderresponsedataactive_payment_attempt).

### CreateOrderEditResult.order.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### CreateOrderEditResult.order.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### CreateOrderEditResult.order.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### CreateOrderEditResult.order.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### CreateOrderEditResult.order.customer

Declared alternatives: [OrderResponse.data.customer](../models/OrderResponse.md#orderresponsedatacustomer).

### CreateOrderEditResult.order.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### CreateOrderEditResult.order.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### CreateOrderEditResult.order.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### CreateOrderEditResult.order.fulfillments[]

Field definitions: [OrderResponse.data.fulfillments[]](../models/OrderResponse.md#orderresponsedatafulfillments).

### CreateOrderEditResult.order.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### CreateOrderEditResult.order.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### CreateOrderEditResult.order.inventory_routing_source

Field definitions: [OrderResponse.data.inventory_routing_source](../models/OrderResponse.md#orderresponsedatainventory_routing_source).

### CreateOrderEditResult.order.line_items[]

Field definitions: [OrderResponse.data.line_items[]](../models/OrderResponse.md#orderresponsedataline_items).

### CreateOrderEditResult.order.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CreateOrderEditResult.order.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CreateOrderEditResult.order.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### CreateOrderEditResult.order.subscription

Declared alternatives: [OrderResponse.data.subscription](../models/OrderResponse.md#orderresponsedatasubscription).

### CreateOrderEditResult.order.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

### CreateOrderEditResult.order.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### CreateOrderEditResult.order.tips[]

Field definitions: [OrderResponse.data.tips[]](../models/OrderResponse.md#orderresponsedatatips).

### CreateOrderEditResult.order_edit

The committed edit, even when refund processing is pending. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.

Field definitions: [shared fields](OrderEditResponse.md#ordereditresponsedata).

### CreateOrderEditResult.order_edit.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### CreateOrderEditResult.order_edit.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

### CreateOrderEditResult.refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

