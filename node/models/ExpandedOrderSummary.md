[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedOrderSummary

An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. Buyer contact supplied with payment or saved during checkout. |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Optional | string | When the order was created, in RFC3339 format. Format: `date-time`. |
| `customer_id` | Optional | string | Customer associated with the order, when one is set. |
| `fulfillment_status` | Optional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `governing_delivery_selection_id` | Required | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. |
| `order_id` | Required | string | Stable identifier of the expanded order. |
| `order_number` | Optional | string | Human-readable order number for receipts and merchant reference. |
| `payment_intent_ids` | Optional | Array of string | Payment intents associated with the order. |
| `payment_status` | Required | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_status` | Required | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `settlement_amounts` | Required | [SettlementAmounts](../models/SettlementAmounts.md#settlementamounts) | Payments, refunds, credits, and amounts still owed for the order. How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain. |
| `status` | Required | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `updated_at` | Optional | string | When the order was last updated, in RFC3339 format. Format: `date-time`. |

