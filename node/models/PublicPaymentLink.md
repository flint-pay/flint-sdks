[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLink

The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text for checkouts started from this link. Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/PaymentLink.md#paymentlinkcustom_text). |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/PaymentLink.md#paymentlinkevent_config). |
| `image` | Optional | [Image](../models/Image.md#image) | Image shown to buyers with the link. An image with its URL, size, and alt text. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | The terms and policy links checkouts started from this link show the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/PaymentLink.md#paymentlinklegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) | What the link sells. |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | ID of the payment link. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment options for checkouts started from this link. Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/PaymentLink.md#paymentlinkpayments). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan the link sells. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | The title and colors for checkouts started from this link, over your branding settings. Colors and title applied to a payment link's checkout page. `theme`: [field definitions](../models/PaymentLink.md#paymentlinktheme). |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### PublicPaymentLink.custom_text

Field definitions: [PaymentLink.custom_text](../models/PaymentLink.md#paymentlinkcustom_text).

### PublicPaymentLink.donation_max_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_max_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money).

### PublicPaymentLink.donation_min_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_min_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money).

### PublicPaymentLink.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PublicPaymentLink.event_config

Field definitions: [PaymentLink.event_config](../models/PaymentLink.md#paymentlinkevent_config).

### PublicPaymentLink.legal

Field definitions: [PaymentLink.legal](../models/PaymentLink.md#paymentlinklegal).

### PublicPaymentLink.payments

Field definitions: [PaymentLink.payments](../models/PaymentLink.md#paymentlinkpayments).

### PublicPaymentLink.theme

Field definitions: [PaymentLink.theme](../models/PaymentLink.md#paymentlinktheme).

