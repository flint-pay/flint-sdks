[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLinkInput

The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Format: `int32`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldInput](../models/PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfigInput](../models/CheckoutCustomTextConfigInput.md#checkoutcustomtextconfiginput) | Custom text shown in checkout: an order summary message and a shipping address label. |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) |  |
| `event_config` | Optional | [PaymentLinkEventConfigInput](../models/PaymentLinkEventConfigInput.md#paymentlinkeventconfiginput) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inactive_message` | Optional | string |  |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of [PaymentLinkLineItemInput](../models/PaymentLinkLineItemInput.md#paymentlinklineiteminput) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfigInput](../models/CheckoutPaymentConfigInput.md#checkoutpaymentconfiginput) | Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string |  |
| `theme` | Optional | [ThemeConfigInput](../models/ThemeConfigInput.md#themeconfiginput) | Colors and title applied to a payment link's checkout page. |
| `version` | Required | integer | Format: `int64`. |

