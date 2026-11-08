[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLinkInput

The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldInput](../models/PaymentLinkCustomFieldInput.md#paymentlinkcustomfieldinput) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. |
| `custom_text` | Optional | [CheckoutCustomTextConfigInput](../models/CheckoutCustomTextConfigInput.md#checkoutcustomtextconfiginput) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amounts a donation link offers as one-tap choices. |
| `event_config` | Optional | [PaymentLinkEventConfigInput](../models/PaymentLinkEventConfigInput.md#paymentlinkeventconfiginput) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Image shown to buyers with the link. An image with its URL, size, and alt text. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `legal` | Optional | [CheckoutLegalConfigInput](../models/CheckoutLegalConfigInput.md#checkoutlegalconfiginput) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. |
| `line_items` | Optional | Array of [PaymentLinkLineItemInput](../models/PaymentLinkLineItemInput.md#paymentlinklineiteminput) | What the link sells. |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | ID of the payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfigInput](../models/CheckoutPaymentConfigInput.md#checkoutpaymentconfiginput) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan the link sells. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `theme` | Optional | [ThemeConfigInput](../models/ThemeConfigInput.md#themeconfiginput) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

