[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCanceledEventInput

The `platform_fee.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"platform_fee.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PlatformFeeCanceledEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributes). |

### PlatformFeeCanceledEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PlatformFeeInput.md#platformfeeinput).

### PlatformFeeCanceledEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. |
| `canceled_reason` | Optional | string or null | Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"install_revoked_by_app"`, `"platform_capability_inactive"`, `"uncollectible"`. `canceled_reason`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributescanceled_reason). |
| `checkout_session_id` | Optional | string or null | The checkout session the payment came from. Absent when the fee was sent with the payment itself. `checkout_session_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributescheckout_session_id). |
| `collected_at` | Optional | string or null | When Flint collected the fee with the payment. Absent unless status is succeeded. `collected_at`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributescollected_at). |
| `created_at` | Optional | string or null | When the payment's create recorded the fee. `created_at`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributescreated_at). |
| `merchant_id` | Optional | string or null | The installed merchant charged the fee, as on the install. `merchant_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributesmerchant_id). |
| `partner_app_id` | Optional | string or null | The partner app that charged the fee. `partner_app_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | The install whose partner app token created the payment. `partner_app_install_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributespartner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. `payment_intent_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributespayment_intent_id). |
| `platform_fee_id` | Optional | string or null | Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. `platform_fee_id`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributesplatform_fee_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. |
| `requested_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fee the request asked for. |
| `reserve_available_at` | Optional | string or null | The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. `reserve_available_at`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributesreserve_available_at). |
| `reserve_hold_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. The original collection snapshot: refunds release their proportional share early, and loss coverage draws on the reserve as a whole. Read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. |
| `status` | Optional | string or null | Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When the fee last changed. `updated_at`: [declared alternatives](../models/PlatformFeeCanceledEventInput.md#platformfeecanceledeventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

### PlatformFeeCanceledEventInput.data.previous_attributes.canceled_reason

### PlatformFeeCanceledEventInput.data.previous_attributes.canceled_reason variant 1

anyOf variant 1: Why Flint collected no fee. Present only when status is canceled. Can gain values..

- Value shape: string. Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"install_revoked_by_app"`, `"platform_capability_inactive"`, `"uncollectible"`.

### PlatformFeeCanceledEventInput.data.previous_attributes.canceled_reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint collected no fee. Present only when status is canceled. Can gain values. 

### PlatformFeeCanceledEventInput.data.previous_attributes.checkout_session_id

### PlatformFeeCanceledEventInput.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: The checkout session the payment came from. Absent when the fee was sent with the payment itself..

- Value shape: string. The checkout session the payment came from. Absent when the fee was sent with the payment itself. The checkout session the payment came from. Absent when the fee was sent with the payment itself. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. The checkout session the payment came from. Absent when the fee was sent with the payment itself. 

### PlatformFeeCanceledEventInput.data.previous_attributes.collected_at

### PlatformFeeCanceledEventInput.data.previous_attributes.collected_at variant 1

anyOf variant 1: When Flint collected the fee with the payment. Absent unless status is succeeded..

- Value shape: string. When Flint collected the fee with the payment. Absent unless status is succeeded. When Flint collected the fee with the payment. Absent unless status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.collected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint collected the fee with the payment. Absent unless status is succeeded. 

### PlatformFeeCanceledEventInput.data.previous_attributes.created_at

### PlatformFeeCanceledEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the payment's create recorded the fee..

- Value shape: string. When the payment's create recorded the fee. When the payment's create recorded the fee. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the fee. 

### PlatformFeeCanceledEventInput.data.previous_attributes.merchant_id

### PlatformFeeCanceledEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: The installed merchant charged the fee, as on the install..

- Value shape: string. The installed merchant charged the fee, as on the install. The installed merchant charged the fee, as on the install. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. The installed merchant charged the fee, as on the install. 

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_id

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: The partner app that charged the fee..

- Value shape: string. The partner app that charged the fee. The partner app that charged the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charged the fee. 

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_install_id

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The install whose partner app token created the payment..

- Value shape: string. The install whose partner app token created the payment. The install whose partner app token created the payment. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The install whose partner app token created the payment. 

### PlatformFeeCanceledEventInput.data.previous_attributes.payment_intent_id

### PlatformFeeCanceledEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves..

- Value shape: string. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. 

### PlatformFeeCanceledEventInput.data.previous_attributes.platform_fee_id

### PlatformFeeCanceledEventInput.data.previous_attributes.platform_fee_id variant 1

anyOf variant 1: Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id..

- Value shape: string. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. 

### PlatformFeeCanceledEventInput.data.previous_attributes.reserve_available_at

### PlatformFeeCanceledEventInput.data.previous_attributes.reserve_available_at variant 1

anyOf variant 1: The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event..

- Value shape: string. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.reserve_available_at variant 2

anyOf variant 2.

- Value shape: null. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. 

### PlatformFeeCanceledEventInput.data.previous_attributes.status

### PlatformFeeCanceledEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the fee stands. canceled is final..

- Value shape: string. Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PlatformFeeCanceledEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the fee stands. canceled is final. 

### PlatformFeeCanceledEventInput.data.previous_attributes.updated_at

### PlatformFeeCanceledEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the fee last changed..

- Value shape: string. When the fee last changed. When the fee last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fee last changed. 

### PlatformFeeCanceledEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### PlatformFeeCanceledEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

