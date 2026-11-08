[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedInstalledMerchantsEvent

The `payment_link.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentLinkCreatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### PaymentLinkCreatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentLink.md#paymentlink).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.custom_text

Field definitions: [PaymentLink.custom_text](../models/PaymentLink.md#paymentlinkcustom_text).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_max_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_max_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_max_amount_money).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_min_amount_money

Field definitions: [CreatePaymentLinkRequest.donation_min_amount_money](../models/CreatePaymentLinkRequest.md#createpaymentlinkrequestdonation_min_amount_money).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.event_config

Field definitions: [PaymentLink.event_config](../models/PaymentLink.md#paymentlinkevent_config).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.inventory_routing_source

Field definitions: [PaymentLink.inventory_routing_source](../models/PaymentLink.md#paymentlinkinventory_routing_source).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.legal

Field definitions: [PaymentLink.legal](../models/PaymentLink.md#paymentlinklegal).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.payments

Field definitions: [PaymentLink.payments](../models/PaymentLink.md#paymentlinkpayments).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.promotion_config

Field definitions: [PaymentLink.promotion_config](../models/PaymentLink.md#paymentlinkpromotion_config).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.redirects

Field definitions: [PaymentLink.redirects](../models/PaymentLink.md#paymentlinkredirects).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.tax

Field definitions: [PaymentLink.tax](../models/PaymentLink.md#paymentlinktax).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.theme

Field definitions: [PaymentLink.theme](../models/PaymentLink.md#paymentlinktheme).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.tip

Field definitions: [PaymentLink.tip](../models/PaymentLink.md#paymentlinktip).

### PaymentLinkCreatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

