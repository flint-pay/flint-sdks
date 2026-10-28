[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentLinkRequest

The request body for: Create payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldRequest](../models/PaymentLinkCustomFieldRequest.md#paymentlinkcustomfieldrequest) | maxItems: `20`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text shown on a payment link's checkout, such as the order summary message and shipping address label. `custom_text`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestcustom_text). |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `donation_suggested_amount_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event settings you supply when creating an event payment link. `event_config`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) | An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inactive_message` | Optional | string | minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. `legal`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItemRequest](../models/PaymentLinkLineItemRequest.md#paymentlinklineitemrequest) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. maxProperties: `50`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. Map values: minLength: `1`. maxLength: `4096`. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. Map values: minLength: `1`. maxLength: `4096`. maxProperties: `50`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `payment_link_type` | Optional | string | Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: `"standard"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings on a payment link: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. minLength: `1`. |
| `subscription_plan_id` | Optional | string | minLength: `1`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Theme settings for a payment link's checkout: accent color, primary color, and title. `theme`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip). |

### CreatePaymentLinkRequest.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### CreatePaymentLinkRequest.custom_text

Custom text shown on a payment link's checkout, such as the order summary message and shipping address label.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `shipping_address_label` | Optional | string | minLength: `1`. maxLength: `255`. |

### CreatePaymentLinkRequest.donation_max_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CreatePaymentLinkRequest.donation_min_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CreatePaymentLinkRequest.donation_suggested_amount_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CreatePaymentLinkRequest.event_config

Event settings you supply when creating an event payment link.

Field definitions: [shared fields](PaymentLinkEventConfigRequestInput.md#paymentlinkeventconfigrequestinput).

### CreatePaymentLinkRequest.legal

Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Field definitions: [shared fields](PaymentLinkLegalConfigInput.md#paymentlinklegalconfiginput).

### CreatePaymentLinkRequest.payments

Payment settings on a payment link: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](PaymentLinkPaymentConfigInput.md#paymentlinkpaymentconfiginput).

### CreatePaymentLinkRequest.promotion_config

Field definitions: [CreateCheckoutSessionOrder.promotion_config](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderpromotion_config).

### CreatePaymentLinkRequest.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput).

### CreatePaymentLinkRequest.tax

Whether tax is collected for a checkout session or payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean |  |

### CreatePaymentLinkRequest.theme

Theme settings for a payment link's checkout: accent color, primary color, and title.

Field definitions: [shared fields](PaymentLinkThemeConfigInput.md#paymentlinkthemeconfiginput).

### CreatePaymentLinkRequest.tip

Field definitions: [CreateCheckoutSessionOrder.tip](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionordertip).

