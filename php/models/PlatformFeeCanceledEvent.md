[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCanceledEvent

The `platform_fee.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PlatformFeeCanceledEventData](../models/PlatformFeeCanceledEventData.md#platformfeecanceledeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"platform_fee.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PlatformFeeCanceledEventRequest](../models/PlatformFeeCanceledEventRequest.md#platformfeecanceledeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PlatformFeeCanceledEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributes). |

### PlatformFeeCanceledEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PlatformFeeCanceledEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PlatformFee.md#platformfee).

### PlatformFeeCanceledEvent.data fields 1.object.platform_fee_rule

Field definitions: [PlatformFeeResponse.data.platform_fee_rule](../models/PlatformFeeResponse.md#platformfeeresponsedataplatform_fee_rule).

### PlatformFeeCanceledEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PlatformFeeCanceledEventDataPreviousAttributes.md#platformfeecanceledeventdatapreviousattributes).

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.canceled_reason

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.canceled_reason variant 1

anyOf variant 1: Why Flint collected no fee. Present only when status is canceled. Can gain values..

- Value shape: string. Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"install_revoked_by_app"`, `"platform_capability_inactive"`, `"uncollectible"`.

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.canceled_reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint collected no fee. Present only when status is canceled. Can gain values. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.checkout_session_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.checkout_session_id variant 1

anyOf variant 1: The checkout session the payment came from. Absent when the fee was sent with the payment itself..

- Value shape: string. The checkout session the payment came from. Absent when the fee was sent with the payment itself. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. The checkout session the payment came from. Absent when the fee was sent with the payment itself. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.collected_at

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.collected_at variant 1

anyOf variant 1: When Flint collected the fee with the payment. Absent unless status is succeeded..

- Value shape: string. When Flint collected the fee with the payment. Absent unless status is succeeded. When Flint collected the fee with the payment. Absent unless status is succeeded. Format: `date-time`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.collected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint collected the fee with the payment. Absent unless status is succeeded. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.created_at

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When the payment's create recorded the fee..

- Value shape: string. When the payment's create recorded the fee. When the payment's create recorded the fee. Format: `date-time`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the fee. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.invoice_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice the payment collected..

- Value shape: string. The invoice the payment collected. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice the payment collected. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.merchant_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.merchant_id variant 1

anyOf variant 1: The installed merchant charged the fee, as on the install..

- Value shape: string. The installed merchant charged the fee, as on the install. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. The installed merchant charged the fee, as on the install. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: The partner app that charged the fee..

- Value shape: string. The partner app that charged the fee. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charged the fee. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_install_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The install whose partner app token created the payment..

- Value shape: string. The install whose partner app token created the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The install whose partner app token created the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_intent_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves..

- Value shape: string. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_link_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_link_id variant 1

anyOf variant 1: The payment link whose checkout made the payment..

- Value shape: string. The payment link whose checkout made the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. The payment link whose checkout made the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_id variant 1

anyOf variant 1: Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id..

- Value shape: string. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule

The rule that priced this fee, as it stood when the payment was created.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Conditional | object and [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed amount per payment. `fixed_fee_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money). |
| `maximum_fee_money` | Conditional | object and [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The maximum fee per payment, at least the fixed amount. `maximum_fee_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1maximum_fee_money). |
| `partner_app_id` | Conditional | string or null | The partner app whose install set the rule. `partner_app_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1partner_app_id). |
| `percent` | Conditional | number or null | Percent of the amount collected. Zero requires fixed_fee_money. `percent`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1percent). |

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1

anyOf PlatformFeeRulePreviousAttributes.

- Optional: `fixed_fee_money`, `maximum_fee_money`, `partner_app_id`, `percent`.

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 2

anyOf variant 2.

- Undeclared: `fixed_fee_money`, `maximum_fee_money`, `partner_app_id`, `percent`.
- Value shape: null. The rule that priced this fee, as it stood when the payment was created. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money

The fixed amount per payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | (integer string or null) | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1amount). |
| `currency` | Conditional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency). |

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1

anyOf variant 1.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fixed amount per payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount variant 1

anyOf group 1 variant 1.

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Amount in the currency's minor unit, such as cents for USD. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount variant 3

anyOf group 2 variant 1: Amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Amount in the currency's minor unit, such as cents for USD. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency variant 1

anyOf variant 1: Three-letter uppercase ISO 4217 currency code for this amount, such as USD..

- Value shape: string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency variant 2

anyOf variant 2.

- Value shape: null. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.maximum_fee_money

The maximum fee per payment, at least the fixed amount.

Field definitions: [shared fields](#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money).

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.maximum_fee_money variant 1

anyOf variant 1.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.maximum_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The maximum fee per payment, at least the fixed amount. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.maximum_fee_money variant 1.amount

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1amount).

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.maximum_fee_money variant 1.currency

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency).

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.partner_app_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.partner_app_id variant 1

anyOf variant 1: The partner app whose install set the rule..

- Value shape: string. The partner app whose install set the rule. The partner app whose install set the rule. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app whose install set the rule. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.percent

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.percent variant 1

anyOf variant 1: Percent of the amount collected. Zero requires fixed_fee_money..

- Value shape: number. Percent of the amount collected. Zero requires fixed_fee_money. Percent of the amount collected. Zero requires fixed_fee_money. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.percent variant 2

anyOf variant 2.

- Value shape: null. Percent of the amount collected. Zero requires fixed_fee_money. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.reserve_available_at

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.reserve_available_at variant 1

anyOf variant 1: The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event..

- Value shape: string. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: `date-time`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.reserve_available_at variant 2

anyOf variant 2.

- Value shape: null. The original scheduled release date of the held share. Refunds can release their proportional share early. Absent until the fee posts, and when nothing was held. Setting it sends no event. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.status

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the fee stands. canceled is final..

- Value shape: string. Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the fee stands. canceled is final. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.subscription_id

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.subscription_id variant 1

anyOf variant 1: The subscription associated with the payment..

- Value shape: string. The subscription associated with the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription associated with the payment. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.updated_at

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the fee last changed..

- Value shape: string. When the fee last changed. When the fee last changed. Format: `date-time`. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fee last changed. 

### PlatformFeeCanceledEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

