[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLink

A reusable link that opens checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text). |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `donation_suggested_amount_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | An image attached to a resource, with its display properties and attachment metadata. |
| `inactive_message` | Optional | string |  |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddataobjectinventory_routing_source). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null |  |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Colors and title applied to a payment link's checkout page. `theme`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjecttheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string |  |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### PaymentLink.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### PaymentLink.donation_max_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLink.donation_min_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLink.donation_suggested_amount_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLink.event_config

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.event_config](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectevent_config).

### PaymentLink.inventory_routing_source

Field definitions: [IncomingWebhook0452cf0e91f7Payload.data.object.inventory_routing_source](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddataobjectinventory_routing_source).

### PaymentLink.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### PaymentLink.payments

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.payments](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectpayments).

### PaymentLink.redirects

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.redirects](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectredirects).

### PaymentLink.tax

Field definitions: [CreatePaymentLinkRequest.tax](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax).

### PaymentLink.theme

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.theme](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjecttheme).

