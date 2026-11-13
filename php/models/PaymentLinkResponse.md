[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkResponse

A response containing `PaymentLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentLink](../models/PaymentLink.md#paymentlink) | Resource, collection, or operation result returned by this request. A reusable link that opens checkout. `data`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkResponse.data

Resource, collection, or operation result returned by this request. A reusable link that opens checkout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields[]`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Image shown to buyers with the link. An image attached to a resource, with its display properties and attachment metadata. `image`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataimage). |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | The inventory location or routing policy that supplies stock for the link's catalog lines. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatainventory_routing_source). |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | What the link sells. `line_items[]`: [declared alternatives](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items). |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. `redirects`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. `sales_summary`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatasales_summary). |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan). |
| `subscription_plan_id` | Optional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | URL buyers open to use the link. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### PaymentLinkResponse.data.custom_fields[]

A custom field on a payment link that collects an answer from the buyer.

Field definitions: [shared fields](PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput).

### PaymentLinkResponse.data.event_config

Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.

Field definitions: [shared fields](PaymentLinkEventConfigInput.md#paymentlinkeventconfiginput).

### PaymentLinkResponse.data.image

Image shown to buyers with the link. An image attached to a resource, with its display properties and attachment metadata.

Field definitions: [shared fields](ImageAttachmentInput.md#imageattachmentinput).

### PaymentLinkResponse.data.inventory_routing_source

The inventory location or routing policy that supplies stock for the link's catalog lines. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](InventoryRoutingSourceInput.md#inventoryroutingsourceinput).

### PaymentLinkResponse.data.line_items[]

A line item on a payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether the buyer can change the quantity in checkout. |
| `allow_unit_price_adjustment` | Conditional | boolean | Whether the buyer sets the unit price. Only `custom_variable` lines allow it. |
| `bundle_id` | Conditional | string | ID of the catalog bundle a `bundle` line sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `default_variant_id` | Optional | string | Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `description` | Optional | string | Description of an ad hoc line item. |
| `is_catalog_item_unavailable` | Required | boolean | True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Conditional | string | Name of an ad hoc line item. Catalog lines take the catalog name. |
| `payment_link_line_item_id` | Required | string | Unique identifier for this payment link line item, prefixed `plli_`. Example: `"plli_01KEZF7C004V7GVCCNMYYCBAJS"`. |
| `product_id` | Optional | string | Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) | Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit prices offered as one-tap choices when the buyer sets the price. |
| `tax` | Optional | object | Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_itemstax). |
| `type` | Required | string | How the line item is defined. Values: `"variant"`, `"bundle"`, `"custom_fixed"`, `"custom_variable"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | ID of the catalog variant a `variant` line sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `variant_ids` | Conditional | Array of string | Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: `1`. maxItems: `100`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkResponse.data.line_items[] variant 1: `type` = `"variant"`

oneOf with type: "variant": A line item on a payment link.; anyOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_ids`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkResponse.data.line_items[] variant 2: `type` = `"variant"`

oneOf with type: "variant": A line item on a payment link.; anyOf variant 2.

- Condition: not (at least one(present(`bundle_id`); present(`variant_id`, `variant_ids`))).
- Required: `variant_ids`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"variant"`.

### PaymentLinkResponse.data.line_items[] variant 3: `type` = `"bundle"`

oneOf with type: "bundle": A line item on a payment link..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `type`: Values: `"bundle"`.

### PaymentLinkResponse.data.line_items[] variant 4: `allow_unit_price_adjustment` = `false`, `type` = `"custom_fixed"`

oneOf with type: "custom_fixed": A line item on a payment link..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `false`.
- Constraints for `type`: Values: `"custom_fixed"`.

### PaymentLinkResponse.data.line_items[] variant 5: `allow_unit_price_adjustment` = `true`, `type` = `"custom_variable"`

oneOf with type: "custom_variable": A line item on a payment link..

- Condition: not (at least one(present(`variant_id`); present(`variant_ids`); present(`default_variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`, `variant_ids`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.
- Constraints for `type`: Values: `"custom_variable"`.

### PaymentLinkResponse.data.line_items[].tax

Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#paymentlinkresponsedataline_itemstax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. |

#### PaymentLinkResponse.data.line_items[].tax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### PaymentLinkResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### PaymentLinkResponse.data.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.

Field definitions: [shared fields](CheckoutRedirectsInput.md#checkoutredirectsinput).

### PaymentLinkResponse.data.sales_summary

Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checked_in_ticket_count` | Required | integer | Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: `int32`. minimum: `0`. |
| `computed_at` | Required | string | UTC time at which the summary was computed, at second precision. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `paid_order_count` | Required | integer | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: `int64`. |
| `paid_totals` | Required | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. |
| `refunded_totals` | Required | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. |

### PaymentLinkResponse.data.subscription_plan

Declared alternatives: [SubscriptionResponse.data.subscription_plan](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan).

### PaymentLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

