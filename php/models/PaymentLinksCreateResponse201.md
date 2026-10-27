[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinksCreateResponse201

A response containing `PaymentLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentLink](../models/PaymentLink.md#paymentlink) | A reusable link that opens checkout. `data`: [field definitions](../models/PaymentLinksCreateResponse201.md#paymentlinkscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinksCreateResponse201.data

A reusable link that opens checkout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text shown in checkout: an order summary message and a shipping address label. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | An image attached to a resource, with its display properties and attachment metadata. |
| `inactive_message` | Optional | string |  |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/PaymentLinksCreateResponse201.md#paymentlinkscreateresponse201dataline_items). |
| `max_completions` | Optional | integer | Format: `int32`. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | `subscription_plan`: [declared alternatives](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan). |
| `subscription_plan_id` | Optional | string |  |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Colors and title applied to a payment link's checkout page. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string |  |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### PaymentLinksCreateResponse201.data.line_items[]

A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Conditional | boolean |  |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `is_catalog_item_unavailable` | Required | boolean | True when this line item references a variant or bundle that is missing, deleted, or inactive, so it cannot be sold right now. Always false on ad-hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Conditional | string |  |
| `payment_link_line_item_id` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `tax` | Optional | object | A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemstax). |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string |  |

### PaymentLinksCreateResponse201.data.line_items[] variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`.

### PaymentLinksCreateResponse201.data.line_items[] variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`.

### PaymentLinksCreateResponse201.data.line_items[] variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`.

### PaymentLinksCreateResponse201.data.line_items[] variant 4: `allow_unit_price_adjustment` = `true`

oneOf variant 4.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.

### PaymentLinksCreateResponse201.data.line_items[].tax

Field definitions: [OrdersApplyDiscountResponse200.data.subscription_plan variant 1.line_items[].tax](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan-variant-1line_itemstax).

### PaymentLinksCreateResponse201.data.subscription_plan

Declared alternatives: [OrdersApplyDiscountResponse200.data.subscription_plan](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan).

