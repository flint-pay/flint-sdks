[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLinkResultInput

The result of resolving a public payment link: the link, merchant branding, availability, resolved line items, and a resolution context for starting checkout.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_theme` | Optional | [CheckoutThemeInput](../models/CheckoutThemeInput.md#checkoutthemeinput) | The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `is_sold_out` | Required | boolean | True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read. |
| `merchant_icon` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `merchant_logo` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `merchant_name` | Optional | string |  |
| `payment_link` | Required | [PublicPaymentLinkInput](../models/PublicPaymentLinkInput.md#publicpaymentlinkinput) | The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status. |
| `remaining_quantity` | Optional | integer | Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string |  |
| `resolution_context_expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `resolution_context_start_deadline_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `resolved_line_items` | Optional | Array of [PublicResolvedLineItemInfoInput](../models/PublicResolvedLineItemInfoInput.md#publicresolvedlineiteminfoinput) |  |
| `sales_ended` | Required | boolean | True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then returns PAYMENT_LINK_SALES_ENDED. |
| `show_flint_mark` | Required | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. |
| `subscription_preview` | Optional | [PaymentLinkSubscriptionPreviewInput](../models/PaymentLinkSubscriptionPreviewInput.md#paymentlinksubscriptionpreviewinput) | Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session. |

