[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeGetOrderResponse200

A response containing `BuyerOrder` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | A customer's purchase and its payment and fulfillment progress. `data`: [field definitions](../models/MeGetOrderResponse200.md#megetorderresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeGetOrderResponse200.data

A customer's purchase and its payment and fulfillment progress.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) | An attempt to pay an order. |
| `authorization_amounts` | Optional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) | The amounts authorized and still capturable on an order's payments, with the authorization expiry. |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty list. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: `[]`. |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. |
| `buyer_note` | Optional | string |  |
| `charges` | Required | Array of [BuyerOrderCharge](../models/BuyerOrderCharge.md#buyerordercharge) |  |
| `checkout_session_ids` | Required | Array of string |  |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Optional | string |  |
| `delivery_destination` | Optional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. |
| `discounts` | Required | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) |  |
| `fulfillment_status` | Optional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `fulfillments` | Required | Array of [BuyerFulfillment](../models/BuyerFulfillment.md#buyerfulfillment) |  |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimate](../models/OrderGiftCardEstimate.md#ordergiftcardestimate) | An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it. |
| `gift_card_settlements` | Required | Array of [OrderGiftCardSettlement](../models/OrderGiftCardSettlement.md#ordergiftcardsettlement) |  |
| `gift_card_tender_enabled` | Required | boolean |  |
| `gift_cards` | Required | Array of [OrderGiftCardSelection](../models/OrderGiftCardSelection.md#ordergiftcardselection) |  |
| `governing_delivery_selection_id` | Optional | string | ID of the delivery selection that governs this order, including pickup choices without a delivery destination. Read with GET /v1/orders/{order_id}; other order responses may omit this field. While present, change the destination through the delivery selection. Omitted when no selection governs the order. |
| `line_items` | Required | Array of [BuyerOrderLineItem](../models/BuyerOrderLineItem.md#buyerorderlineitem) |  |
| `merchant_id` | Optional | string |  |
| `order_id` | Required | string |  |
| `order_number` | Optional | string |  |
| `origin` | Optional | string | Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `payment_collection` | Optional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `payment_intent_ids` | Required | Array of string |  |
| `payment_link_id` | Optional | string | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. |
| `payment_status` | Required | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Required | Array of string |  |
| `refund_status` | Required | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `return_credit_settlements` | Required | Array of [OrderReturnCreditSettlement](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlement) | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. |
| `return_resolution_id` | Optional | string | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. |
| `settlement_amounts` | Required | [SettlementAmounts](../models/SettlementAmounts.md#settlementamounts) | How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain. |
| `setup_collection` | Optional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `status` | Required | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `subscription_cycle` | Optional | integer string | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Optional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. |
| `subscription_id` | Optional | string |  |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Required | [BuyerOrderTax](../models/BuyerOrderTax.md#buyerordertax) | Tax details on a buyer's order: whether tax is enabled, its mode and status, location, exemption, and tax breakdowns. |
| `ticketed_event` | Optional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. |
| `tips` | Required | Array of [BuyerTip](../models/BuyerTip.md#buyertip) |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

