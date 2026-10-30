[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLink

A reusable link that opens checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text). |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `donation_suggested_amount_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLink.md#paymentlinkevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | An image attached to a resource, with its display properties and attachment metadata. |
| `inactive_message` | Optional | string |  |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/InventoryReservation.md#inventoryreservationinventory_routing_source). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/BuyerRefund.md#buyerrefundmetadata). |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/PaymentLink.md#paymentlinkpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/PaymentLink.md#paymentlinkredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/PaymentLink.md#paymentlinktax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Colors and title applied to a payment link's checkout page. `theme`: [field definitions](../models/PaymentLink.md#paymentlinktheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip). |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string |  |
| `version` | Required | integer | Format: `int64`. |

### PaymentLink.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### PaymentLink.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### PaymentLink.donation_max_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLink.donation_min_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLink.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLink.event_config

Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. Absent means no limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean |  |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. |
| `timezone` | Optional | string |  |
| `venue` | Optional | string | maxLength: `500`. |

### PaymentLink.inventory_routing_source

Field definitions: [InventoryReservation.inventory_routing_source](../models/InventoryReservation.md#inventoryreservationinventory_routing_source).

### PaymentLink.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### PaymentLink.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### PaymentLink.payments

Payment settings for a checkout: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### PaymentLink.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### PaymentLink.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### PaymentLink.tax

Whether tax is collected for a checkout session or payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean |  |

### PaymentLink.theme

Colors and title applied to a payment link's checkout page.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string |  |
| `primary_color` | Optional | string |  |
| `title` | Optional | string |  |

### PaymentLink.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

