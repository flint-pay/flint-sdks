[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLinkResult

The result of resolving a public payment link: the link, merchant branding, availability, resolved line items, and a resolution context for starting checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_start_due_at` | Required | string | Start a new checkout before this instant. At or after it, read the public payment link again for a new resolution_context; its credential expiry is resolution_context_expires_at. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_theme` | Optional | [CheckoutTheme](../models/CheckoutTheme.md#checkouttheme) | The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings. |
| `is_past_sales_end` | Required | boolean | True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. |
| `is_sold_out` | Required | boolean | True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read. |
| `merchant_icon` | Optional | [Image](../models/Image.md#image) | The merchant's icon. An image with its URL, size, and alt text. |
| `merchant_logo` | Optional | [Image](../models/Image.md#image) | The merchant's logo. An image with its URL, size, and alt text. |
| `merchant_name` | Optional | string | The merchant's name. |
| `merchant_support` | Optional | [CheckoutMerchantSupport](../models/CheckoutMerchantSupport.md#checkoutmerchantsupport) | How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Omitted when the merchant set none. The merchant's support contact. Each field is omitted when the merchant has not set it. |
| `payment_link` | Required | [PublicPaymentLink](../models/PublicPaymentLink.md#publicpaymentlink) | The payment link that was resolved. The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status. |
| `remaining_quantity` | Optional | integer | Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | Private resolution context for this payment link. Send it unchanged to resolve the same link before checkout_start_due_at. The credential expires at resolution_context_expires_at. Keep the context private and do not cache this response; it is returned with Cache-Control: private, no-store. |
| `resolution_context_expires_at` | Required | string | RFC3339 timestamp when the resolution_context credential expires. The earlier checkout_start_due_at governs starting new checkouts; committed replay remains available until this expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resolved_line_items` | Optional | Array of [PublicResolvedLineItemInfo](../models/PublicResolvedLineItemInfo.md#publicresolvedlineiteminfo) | The link's line items with their current catalog values. |
| `show_flint_mark` | Required | boolean | Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. |
| `subscription_preview` | Optional | [PaymentLinkSubscriptionPreview](../models/PaymentLinkSubscriptionPreview.md#paymentlinksubscriptionpreview) | Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session. |

