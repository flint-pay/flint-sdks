[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicPaymentLink

The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Format: `int32`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) |  |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) | Custom text shown in checkout: an order summary message and a shipping address label. `custom_text`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text). |
| `description` | Optional | string |  |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_max_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `donation_min_amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `donation_suggested_amount_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) | Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails. `event_config`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectevent_config). |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inactive_message` | Optional | string |  |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) | Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. `legal`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) | Payment settings for a checkout: the enabled payment options and a note shown with payment. `payments`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectpayments). |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string |  |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) | Colors and title applied to a payment link's checkout page. `theme`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjecttheme). |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### PublicPaymentLink.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### PublicPaymentLink.donation_max_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PublicPaymentLink.donation_min_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PublicPaymentLink.donation_suggested_amount_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PublicPaymentLink.event_config

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.event_config](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectevent_config).

### PublicPaymentLink.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### PublicPaymentLink.payments

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.payments](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjectpayments).

### PublicPaymentLink.theme

Field definitions: [IncomingWebhookbd61ef55b477Payload.data.object.theme](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobjecttheme).

