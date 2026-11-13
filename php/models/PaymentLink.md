[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLink

A reusable link that opens checkout.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields[]`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Image shown to buyers with the link. An image attached to a resource, with its display properties and attachment metadata. `image`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataimage). |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | The inventory location or routing policy that supplies stock for the link's catalog lines. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatainventory_routing_source). |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | What the link sells. `line_items[]`: [declared alternatives](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items). |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | Unique identifier for this payment link, prefixed `pl_`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. `sales_summary`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatasales_summary). |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string | URL buyers open to use the link. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### PaymentLink.custom_fields[]

Field definitions: [PaymentLinkResponse.data.custom_fields[]](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields).

### PaymentLink.event_config

Field definitions: [PaymentLinkResponse.data.event_config](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config).

### PaymentLink.image

Field definitions: [PaymentLinkResponse.data.image](../models/PaymentLinkResponse.md#paymentlinkresponsedataimage).

### PaymentLink.inventory_routing_source

Field definitions: [PaymentLinkResponse.data.inventory_routing_source](../models/PaymentLinkResponse.md#paymentlinkresponsedatainventory_routing_source).

### PaymentLink.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLink.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### PaymentLink.redirects

Field definitions: [PaymentLinkResponse.data.redirects](../models/PaymentLinkResponse.md#paymentlinkresponsedataredirects).

### PaymentLink.sales_summary

Field definitions: [PaymentLinkResponse.data.sales_summary](../models/PaymentLinkResponse.md#paymentlinkresponsedatasales_summary).

