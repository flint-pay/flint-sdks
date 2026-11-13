[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentLinkRequest

The request body for: Create payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldRequest](../models/PaymentLinkCustomFieldRequest.md#paymentlinkcustomfieldrequest) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. maxItems: `20`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown on a payment link's checkout, such as the order summary message and shipping address label. `custom_text`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestcustom_text). |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. Create, activation, and edits to items, delivery methods, or inventory routing require explicit methods or checkout defaults to cover the items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is returned. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings you supply when creating an event payment link. `event_config`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) | Image shown to buyers with the link. An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Routing source for tracked demand. Create, activation, and sellability edits require at least one active routing location with inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links checkouts started from this link show the buyer. Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. `legal`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItemRequest](../models/PaymentLinkLineItemRequest.md#paymentlinklineitemrequest) | What the link sells. |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. At most 44 pairs, because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either limit. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. maxProperties: `50`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. Map values: minLength: `1`. maxLength: `4096`. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. At most 44 pairs, because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either limit. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. Map values: minLength: `1`. maxLength: `4096`. maxProperties: `50`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. |
| `name` | Required | string | Name of the payment link. minLength: `1`. maxLength: `255`. |
| `payment_link_type` | Optional | string | Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: `"standard"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings on a payment link: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_plan_id` | Optional | string | minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Theme settings for a payment link's checkout: accent color, primary color, and title. `theme`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequesttip). |

### CreatePaymentLinkRequest.buyer_fields

Field definitions: [CreateCheckoutSessionOrder.buyer_fields](../models/CreateCheckoutSessionOrder.md#createcheckoutsessionorderbuyer_fields).

### CreatePaymentLinkRequest.custom_text

Custom text for checkouts started from this link. Custom text shown on a payment link's checkout, such as the order summary message and shipping address label.

Field definitions: [shared fields](PaymentLinkCustomTextConfigInput.md#paymentlinkcustomtextconfiginput).

### CreatePaymentLinkRequest.donation_max_amount_money

Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreatePaymentLinkRequest.donation_min_amount_money

Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CreatePaymentLinkRequest.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### CreatePaymentLinkRequest.event_config

Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings you supply when creating an event payment link.

Field definitions: [shared fields](PaymentLinkEventConfigRequestInput.md#paymentlinkeventconfigrequestinput).

### CreatePaymentLinkRequest.legal

The terms and policy links checkouts started from this link show the buyer. Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.

Field definitions: [shared fields](PaymentLinkLegalConfigInput.md#paymentlinklegalconfiginput).

### CreatePaymentLinkRequest.payments

Payment options for checkouts started from this link. Payment settings on a payment link: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](PaymentLinkPaymentConfigInput.md#paymentlinkpaymentconfiginput).

### CreatePaymentLinkRequest.promotion_config

Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Field definitions: [shared fields](CheckoutPromotionConfig.md#checkoutpromotionconfig).

### CreatePaymentLinkRequest.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput).

### CreatePaymentLinkRequest.tax

Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link.

Field definitions: [shared fields](CreateCheckoutSessionQuickPay.md#createcheckoutsessionquickpaytax).

### CreatePaymentLinkRequest.tax.calculation

Field definitions: [CheckoutTaxConfig variant 2.calculation](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-2calculation).

### CreatePaymentLinkRequest.theme

The title and colors for checkouts started from this link, over your branding settings. Theme settings for a payment link's checkout: accent color, primary color, and title.

Field definitions: [shared fields](PaymentLinkThemeConfigInput.md#paymentlinkthemeconfiginput).

### CreatePaymentLinkRequest.tip

Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.

Field definitions: [shared fields](CheckoutTipConfig.md#checkouttipconfig).

### CreatePaymentLinkRequest.tip.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### CreatePaymentLinkRequest.tip.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

