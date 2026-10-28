[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkInput

A reusable link that opens checkout.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldInput](../models/PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfigInput](../models/CheckoutCustomTextConfigInput.md#checkoutcustomtextconfiginput) | Custom text shown in checkout: an order summary message and a shipping address label. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `event_config` | Optional | [PaymentLinkEventConfigInput](../models/PaymentLinkEventConfigInput.md#paymentlinkeventconfiginput) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `image` | Optional | [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | An image attached to a resource, with its display properties and attachment metadata. |
| `inactive_message` | Optional | string |  |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of [PaymentLinkLineItemInput](../models/PaymentLinkLineItemInput.md#paymentlinklineiteminput) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfigInput](../models/CheckoutPaymentConfigInput.md#checkoutpaymentconfiginput) | Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsInput](../models/CheckoutRedirectsInput.md#checkoutredirectsinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummaryInput](../models/PaymentLinkSalesSummaryInput.md#paymentlinksalessummaryinput) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryInput](../models/ExpandedSubscriptionPlanSummaryInput.md#expandedsubscriptionplansummaryinput) or null |  |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfigInput](../models/ThemeConfigInput.md#themeconfiginput) | Colors and title applied to a payment link's checkout page. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string |  |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

