[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLinkResponse

A response containing `PublicPaymentLinkResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PublicPaymentLinkResult](../models/PublicPaymentLinkResult.md#publicpaymentlinkresult) | Resource, collection, or operation result returned by this request. The result of resolving a public payment link: the link, merchant branding, availability, resolved line items, and a resolution context for starting checkout. `data`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PublicPaymentLinkResponse.data

Resource, collection, or operation result returned by this request. The result of resolving a public payment link: the link, merchant branding, availability, resolved line items, and a resolution context for starting checkout.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_start_due_at` | Required | string | Start a new checkout before this instant. At or after it, read the public payment link again for a new resolution_context; its credential expiry is resolution_context_expires_at. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `is_past_sales_end` | Required | boolean | True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. |
| `is_sold_out` | Required | boolean | True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | The merchant's icon. An image with its URL, size, and alt text. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | The merchant's logo. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | The merchant's name. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Omitted when the merchant set none. The merchant's support contact. Each field is omitted when the merchant has not set it. `merchant_support`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedatamerchant_support). |
| `payment_link` | Required | [PublicPaymentLink](../models/PublicPaymentLink.md#publicpaymentlink) | The payment link that was resolved. The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status. `payment_link`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedatapayment_link). |
| `remaining_quantity` | Optional | integer | Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | Private resolution context for this payment link. Send it unchanged to resolve the same link before checkout_start_due_at. The credential expires at resolution_context_expires_at. Keep the context private and do not cache this response; it is returned with Cache-Control: private, no-store. |
| `resolution_context_expires_at` | Required | string | RFC3339 timestamp when the resolution_context credential expires. The earlier checkout_start_due_at governs starting new checkouts; committed replay remains available until this expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resolved_line_items` | Optional | Array of [PublicResolvedLineItemInfo](../models/PublicResolvedLineItemInfo.md#publicresolvedlineiteminfo) | The link's line items with their current catalog values. `resolved_line_items[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_items). |
| `show_flint_mark` | Required | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. |
| `subscription_preview` | Optional | [PaymentLinkSubscriptionPreview](../models/PaymentLinkSubscriptionPreview.md#paymentlinksubscriptionpreview) | Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session. `subscription_preview`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedatasubscription_preview). |

### PublicPaymentLinkResponse.data.merchant_support

How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Omitted when the merchant set none. The merchant's support contact. Each field is omitted when the merchant has not set it.

Field definitions: [shared fields](CheckoutMerchantSupportInput.md#checkoutmerchantsupportinput).

### PublicPaymentLinkResponse.data.payment_link

The payment link that was resolved. The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields[]`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config). |
| `image` | Optional | [Image](../models/Image.md#image) | Image shown to buyers with the link. An image with its URL, size, and alt text. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `legal` | Optional | [CheckoutLegalConfig](../models/CheckoutLegalConfig.md#checkoutlegalconfig) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of (object and Alternative shapes (see declared variants)) | What the link sells. `line_items[]`: [declared alternatives](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items). |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | ID of the payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan the link sells. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### PublicPaymentLinkResponse.data.payment_link.custom_fields[]

Field definitions: [PaymentLinkResponse.data.custom_fields[]](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields).

### PublicPaymentLinkResponse.data.payment_link.event_config

Field definitions: [PaymentLinkResponse.data.event_config](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config).

### PublicPaymentLinkResponse.data.payment_link.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PublicPaymentLinkResponse.data.resolved_line_items[]

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups the buyer can choose from for this item. `available_modifiers[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers). |
| `available_variants` | Optional | Array of [PaymentLinkAvailableVariant](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariant) | Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. `available_variants[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_variants). |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) | The components of the bundle. Present for a bundle line item. `bundle_components[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle this line item sells. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `catalog_object_type` | Optional | string | What the line item sells. Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the variant or bundle. An image with its URL, size, and alt text. |
| `is_inventory_tracked` | Optional | boolean | Whether Flint tracks stock for the item. |
| `is_sold_out` | Required | boolean | True when the fixed variant or bundle components cannot be bought at the line minimum quantity from the link inventory_routing_source. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock. |
| `key` | Required | string | Key of the payment link line item this entry describes. |
| `product_id` | Optional | string | ID of the product the variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_options` | Optional | Array of [PaymentLinkProductOption](../models/PaymentLinkProductOption.md#paymentlinkproductoption) | Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. `product_options[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_options). |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad hoc lines. Each offered variant on a variant choice line has its own schedule in available_variants. |
| `resolved_description` | Optional | string | Current catalog description of the variant or bundle, as of this read. |
| `resolved_name` | Optional | string | Current catalog name of the variant or bundle, as of this read. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `variant_id` | Optional | string | ID of the variant this line item sells. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[]

A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean |  |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer | Format: `int32`. |
| `max_total_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer | Format: `int32`. |
| `modifier_group_id` | Required | string | Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `modifier_group_type` | Required | string | Values: `"list"`, `"text"`. |
| `name` | Required | string |  |
| `options` | Optional | Array of [PublicResolvedModifierOption](../models/PublicResolvedModifierOption.md#publicresolvedmodifieroption) | `options[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiersoptions). |
| `position` | Optional | integer | Format: `int32`. |
| `pricing_scope` | Optional | string | Values: `"per_item"`. |
| `show_on_fulfillment` | Optional | boolean |  |
| `show_on_receipt` | Optional | boolean |  |
| `text` | Optional | [PublicResolvedTextModifier](../models/PublicResolvedTextModifier.md#publicresolvedtextmodifier) | Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits. |

### PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[].options[]

One selectable option in a resolved modifier group, with its price change, tax category, and whether it is available.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean | Whether the choice can be selected now. |
| `default_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiersoptions-line_item_tax_category-values). |
| `modifier_id` | Required | string | ID of the modifier this choice selects. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `name` | Required | string | Name of the choice. |
| `position` | Optional | integer | Position of the choice within its group. Format: `int32`. |
| `selected_by_default` | Optional | boolean | Whether the choice is selected when the buyer adds the item without choosing modifiers. |
| `show_on_fulfillment` | Optional | boolean | Whether the choice appears on fulfillment documents. |
| `show_on_receipt` | Optional | boolean | Whether the choice appears on receipts. |
| `taxable` | Optional | boolean | Whether the choice's price is subject to tax. |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the choice adds to the item's unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[].options[] line_item_tax_category values

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

### PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[]

A listed payment link variant that can be sold in the line currency, with its current price, options, image, modifiers, and advisory stock state.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups available for this variant's effective modifier set. Omitted when the variant has none. `available_modifiers[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers). |
| `image` | Optional | [Image](../models/Image.md#image) | Effective primary variant image, inherited from the product when the variant has none. Omitted when neither has an image. An image with its URL, size, and alt text. |
| `is_sold_out` | Required | boolean | True when tracked inventory cannot supply the line's starting quantity through the payment link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise quantity. Always false for untracked variants. Advisory only: no stock is held at read or resolve time, and no stock counts are published. |
| `name` | Required | string | Order line name for this variant: the product name plus the variant label. |
| `product_id` | Required | string | Identifier of the product the offered variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default variant quantity breaks. Use the largest minimum_quantity not above this line's own quantity; an empty array uses the base price. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The variant's product option values, in product option position order. Empty when the product has no options. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog base unit price in the line currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string | ID of the offered product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[].available_modifiers[]

Field definitions: [PublicPaymentLinkResponse.data.resolved_line_items[].available_modifiers[]](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsavailable_modifiers).

### PublicPaymentLinkResponse.data.resolved_line_items[].available_variants[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[]

One component of a bundle on a resolved payment link line item, with its variant and quantity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `position` | Required | integer | Position of the component within the bundle. Format: `int32`. |
| `product_id` | Optional | string | ID of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [PublicResolvedBundleVariantSummary](../models/PublicResolvedBundleVariantSummary.md#publicresolvedbundlevariantsummary) | Summary of the component's variant. A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale. `variant`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsbundle_componentsvariant). |
| `variant_id` | Required | string | ID of the component's variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[].variant

Summary of the component's variant. A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the variant can be sold now. |
| `name` | Optional | string | Name of the variant. |
| `product_id` | Required | string | Identifier of the product this resolved bundle component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options the variant selects, such as size or color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the variant. |
| `variant_id` | Required | string | ID of the variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PublicPaymentLinkResponse.data.resolved_line_items[].bundle_components[].variant.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### PublicPaymentLinkResponse.data.resolved_line_items[].product_options[]

An active product option offered on a payment link, with values used by its available variants.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `values` | Required | Array of [PaymentLinkProductOptionValue](../models/PaymentLinkProductOptionValue.md#paymentlinkproductoptionvalue) | Values used by at least one available variant, in product option value position order. `values[]`: [field definitions](../models/PublicPaymentLinkResponse.md#publicpaymentlinkresponsedataresolved_line_itemsproduct_optionsvalues). |

### PublicPaymentLinkResponse.data.resolved_line_items[].product_options[].values[]

A product option value used by an available payment link variant.

Field definitions: [shared fields](PaymentLinkProductOptionValueInput.md#paymentlinkproductoptionvalueinput).

### PublicPaymentLinkResponse.data.resolved_line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### PublicPaymentLinkResponse.data.subscription_preview

Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Billing intervals the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `billing_interval_options`. maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `delivery_required` | Required | boolean | True when the plan has a line that ships or is delivered, so each renewal adds a shipping or delivery charge chosen at checkout. The amount is not known until the buyer enters an address and chooses a method. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of object | Identified plan lines with buyer quantity permissions and bounds. The checkout freezes the terms when it is created. `line_items[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_termsline_items). |
| `plan_image` | Optional | [Image](../models/Image.md#image) | Plan image shown to the buyer, when configured. An image with its URL, size, and alt text. |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity_options` | Required | Array of integer | Quantities the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `quantity_options`. maxItems: `10`. uniqueItems: `true`. Items: Format: `int32`. minimum: `1`. maximum: `100`. |
| `recurring_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Recurring total for one billing interval, including line quantities and resolved modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Setup fee added to the first amount due, when configured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `trial_period_days` | Optional | integer | Number of trial days before the first recurring charge, when configured. Format: `int32`. |

### PublicPaymentLinkResponse.data.subscription_preview.line_items[]

Field definitions: [CheckoutSessionResponse.data.subscription_terms.line_items[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_termsline_items).

### PublicPaymentLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

