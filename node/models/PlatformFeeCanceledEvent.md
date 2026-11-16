[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCanceledEvent

The `platform_fee.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"platform_fee.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PlatformFeeCanceledEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributes). |

### PlatformFeeCanceledEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PlatformFee.md#platformfee).

### PlatformFeeCanceledEvent.data.object.amount_money

Field definitions: [PlatformFee.amount_money](../models/PlatformFee.md#platformfeeamount_money).

### PlatformFeeCanceledEvent.data.object.refunded_money

Field definitions: [PlatformFee.refunded_money](../models/PlatformFee.md#platformfeerefunded_money).

### PlatformFeeCanceledEvent.data.object.requested_amount_money

Field definitions: [PlatformFee.requested_amount_money](../models/PlatformFee.md#platformfeerequested_amount_money).

### PlatformFeeCanceledEvent.data.object.reserve_hold_money

Field definitions: [PlatformFee.reserve_hold_money](../models/PlatformFee.md#platformfeereserve_hold_money).

### PlatformFeeCanceledEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. `amount_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesamount_money). |
| `canceled_reason` | Optional | string or null | Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"platform_capability_inactive"`, `"uncollectible"`. `canceled_reason`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributescanceled_reason). |
| `checkout_session_id` | Optional | string or null | The checkout session the payment came from. Absent when the fee was sent with the payment itself. `checkout_session_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributescheckout_session_id). |
| `collected_at` | Optional | string or null | When Flint collected the fee with the payment. Absent unless status is succeeded. `collected_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributescollected_at). |
| `created_at` | Optional | string or null | When the payment's create recorded the fee. `created_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributescreated_at). |
| `merchant_id` | Optional | string or null | The installed merchant charged the fee, as on the install. `merchant_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesmerchant_id). |
| `partner_app_id` | Optional | string or null | The partner app that charged the fee. `partner_app_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | The install whose partner app token created the payment. `partner_app_install_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributespartner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. `payment_intent_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributespayment_intent_id). |
| `platform_fee_id` | Optional | string or null | Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. `platform_fee_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesplatform_fee_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. `refunded_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesrefunded_money). |
| `requested_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee the request asked for. `requested_amount_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesrequested_amount_money). |
| `reserve_available_at` | Optional | string or null | When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. `reserve_available_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesreserve_available_at). |
| `reserve_hold_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. `reserve_hold_money`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesreserve_hold_money). |
| `status` | Optional | string or null | Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When the fee last changed. `updated_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### PlatformFeeCanceledEvent.data.previous_attributes.amount_money

The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PlatformFeeCanceledEvent.data.previous_attributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data.previous_attributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. 

### PlatformFeeCanceledEvent.data.previous_attributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PlatformFeeCanceledEvent.data.previous_attributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PlatformFeeCanceledEvent.data.previous_attributes.canceled_reason

### PlatformFeeCanceledEvent.data.previous_attributes.canceled_reason variant 1

anyOf variant 1: Why Flint collected no fee. Present only when status is canceled. Can gain values..

- Value shape: string. Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"platform_capability_inactive"`, `"uncollectible"`.

### PlatformFeeCanceledEvent.data.previous_attributes.canceled_reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint collected no fee. Present only when status is canceled. Can gain values. 

### PlatformFeeCanceledEvent.data.previous_attributes.checkout_session_id

### PlatformFeeCanceledEvent.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: The checkout session the payment came from. Absent when the fee was sent with the payment itself..

- Value shape: string. The checkout session the payment came from. Absent when the fee was sent with the payment itself. The checkout session the payment came from. Absent when the fee was sent with the payment itself. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. The checkout session the payment came from. Absent when the fee was sent with the payment itself. 

### PlatformFeeCanceledEvent.data.previous_attributes.collected_at

### PlatformFeeCanceledEvent.data.previous_attributes.collected_at variant 1

anyOf variant 1: When Flint collected the fee with the payment. Absent unless status is succeeded..

- Value shape: string. When Flint collected the fee with the payment. Absent unless status is succeeded. When Flint collected the fee with the payment. Absent unless status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.collected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint collected the fee with the payment. Absent unless status is succeeded. 

### PlatformFeeCanceledEvent.data.previous_attributes.created_at

### PlatformFeeCanceledEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the payment's create recorded the fee..

- Value shape: string. When the payment's create recorded the fee. When the payment's create recorded the fee. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the fee. 

### PlatformFeeCanceledEvent.data.previous_attributes.merchant_id

### PlatformFeeCanceledEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: The installed merchant charged the fee, as on the install..

- Value shape: string. The installed merchant charged the fee, as on the install. The installed merchant charged the fee, as on the install. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. The installed merchant charged the fee, as on the install. 

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_id

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: The partner app that charged the fee..

- Value shape: string. The partner app that charged the fee. The partner app that charged the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app that charged the fee. 

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_install_id

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The install whose partner app token created the payment..

- Value shape: string. The install whose partner app token created the payment. The install whose partner app token created the payment. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The install whose partner app token created the payment. 

### PlatformFeeCanceledEvent.data.previous_attributes.payment_intent_id

### PlatformFeeCanceledEvent.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves..

- Value shape: string. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. 

### PlatformFeeCanceledEvent.data.previous_attributes.platform_fee_id

### PlatformFeeCanceledEvent.data.previous_attributes.platform_fee_id variant 1

anyOf variant 1: Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id..

- Value shape: string. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. Example: `"pfee_01KEZF7C00JHAZN19B3MMW0R3A"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.platform_fee_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. 

### PlatformFeeCanceledEvent.data.previous_attributes.refunded_money

The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PlatformFeeCanceledEvent.data.previous_attributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data.previous_attributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. 

### PlatformFeeCanceledEvent.data.previous_attributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PlatformFeeCanceledEvent.data.previous_attributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PlatformFeeCanceledEvent.data.previous_attributes.requested_amount_money

The fee the request asked for.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PlatformFeeCanceledEvent.data.previous_attributes.requested_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data.previous_attributes.requested_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee the request asked for. 

### PlatformFeeCanceledEvent.data.previous_attributes.requested_amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PlatformFeeCanceledEvent.data.previous_attributes.requested_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_available_at

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_available_at variant 1

anyOf variant 1: When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event..

- Value shape: string. When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_available_at variant 2

anyOf variant 2.

- Value shape: null. When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. 

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_hold_money

The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_hold_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_hold_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. 

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_hold_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PlatformFeeCanceledEvent.data.previous_attributes.reserve_hold_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PlatformFeeCanceledEvent.data.previous_attributes.status

### PlatformFeeCanceledEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the fee stands. canceled is final..

- Value shape: string. Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PlatformFeeCanceledEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the fee stands. canceled is final. 

### PlatformFeeCanceledEvent.data.previous_attributes.updated_at

### PlatformFeeCanceledEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the fee last changed..

- Value shape: string. When the fee last changed. When the fee last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeeCanceledEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fee last changed. 

### PlatformFeeCanceledEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### PlatformFeeCanceledEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

