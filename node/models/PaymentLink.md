[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLink

A reusable link that opens checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/PaymentLink.md#paymentlinkcustom_text). |
| `delivery_method_ids` | Required | Array of string | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLink.md#paymentlinkevent_config). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | Image shown to buyers with the link. An image attached to a resource, with its display properties and attachment metadata. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | The inventory location or routing policy that supplies stock for the link's catalog lines. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/PaymentLink.md#paymentlinkinventory_routing_source). |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/PaymentLink.md#paymentlinklegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) | What the link sells. |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/PaymentLink.md#paymentlinkpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. `promotion_config`: [field definitions](../models/PaymentLink.md#paymentlinkpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. `redirects`: [field definitions](../models/PaymentLink.md#paymentlinkredirects). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. `tax`: [field definitions](../models/PaymentLink.md#paymentlinktax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. `theme`: [field definitions](../models/PaymentLink.md#paymentlinktheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. `tip`: [field definitions](../models/PaymentLink.md#paymentlinktip). |
| `total_quantity_sold` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | URL buyers open to use the link. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### PaymentLink.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### PaymentLink.custom_text

Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label.

Field definitions: [shared fields](CheckoutCustomTextConfig.md#checkoutcustomtextconfig).

### PaymentLink.donation_max_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_max_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money).

### PaymentLink.donation_min_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_min_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money).

### PaymentLink.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLink.event_config

Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Optional | boolean | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean | Whether Flint emails tickets to buyers after they pay. |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. |
| `timezone` | Optional | string | IANA time zone of the event venue, used to show `event_at` as venue time. |
| `venue` | Optional | string | Where the event takes place. maxLength: `500`. |

### PaymentLink.inventory_routing_source

The inventory location or routing policy that supplies stock for the link's catalog lines. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](DeliverySelectionOrder.md#deliveryselectionorderinventory_routing_source).

### PaymentLink.legal

The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### PaymentLink.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### PaymentLink.payments

Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### PaymentLink.promotion_config

Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.

Field definitions: [shared fields](CheckoutPromotionConfig.md#checkoutpromotionconfig).

### PaymentLink.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### PaymentLink.tax

Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether Flint calculates automatic tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

### PaymentLink.theme

The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page.

Field definitions: [shared fields](ThemeConfig.md#themeconfig).

### PaymentLink.tip

Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.

Field definitions: [shared fields](CheckoutTipConfig.md#checkouttipconfig).

### PaymentLink.tip.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### PaymentLink.tip.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

