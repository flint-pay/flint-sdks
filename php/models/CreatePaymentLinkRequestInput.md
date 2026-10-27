[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentLinkRequestInput

The request body for: Create payment link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsInput](../models/CheckoutBuyerFieldsInput.md#checkoutbuyerfieldsinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldRequestInput](../models/PaymentLinkCustomFieldRequestInput.md#paymentlinkcustomfieldrequestinput) | maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextConfigInput](../models/PaymentLinkCustomTextConfigInput.md#paymentlinkcustomtextconfiginput) | Custom text shown on a payment link's checkout, such as the order summary message and shipping address label. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `event_config` | Optional | [PaymentLinkEventConfigRequestInput](../models/PaymentLinkEventConfigRequestInput.md#paymentlinkeventconfigrequestinput) | Event settings you supply when creating an event payment link. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inactive_message` | Optional | string | minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [PaymentLinkLegalConfigInput](../models/PaymentLinkLegalConfigInput.md#paymentlinklegalconfiginput) | Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `line_items` | Optional | Array of [PaymentLinkLineItemRequestInput](../models/PaymentLinkLineItemRequestInput.md#paymentlinklineitemrequestinput) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `payment_link_type` | Optional | string | Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: `"standard"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [PaymentLinkPaymentConfigInput](../models/PaymentLinkPaymentConfigInput.md#paymentlinkpaymentconfiginput) | Payment settings on a payment link: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfigInput](../models/CheckoutPromotionConfigInput.md#checkoutpromotionconfiginput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. minLength: `1`. |
| `subscription_plan_id` | Optional | string | minLength: `1`. |
| `tax` | Optional | [CheckoutTaxConfigInput](../models/CheckoutTaxConfigInput.md#checkouttaxconfiginput) | Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [PaymentLinkThemeConfigInput](../models/PaymentLinkThemeConfigInput.md#paymentlinkthemeconfiginput) | Theme settings for a payment link's checkout: accent color, primary color, and title. |
| `tip` | Optional | [CheckoutTipConfigInput](../models/CheckoutTipConfigInput.md#checkouttipconfiginput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

