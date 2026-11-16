[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeArchivedInstalledMerchantsEventInput

The `promotion_code.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"promotion_code.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PromotionCodeArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookPromotionCodeInput](../models/WebhookPromotionCodeInput.md#webhookpromotioncodeinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. `object`: [field definitions](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributes). |

### PromotionCodeArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `promotion`.

Field definitions: [shared fields](WebhookPromotionCodeInput.md#webhookpromotioncodeinput).

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Optional | boolean or null | Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. `available`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesavailable). |
| `code` | Optional | string or null | Code a buyer enters to redeem the promotion. `code`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributescode). |
| `created_at` | Optional | string or null | When the promotion code was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. `customer_id`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `expires_at` | Optional | string or null | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. `expires_at`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesexpires_at). |
| `max_uses` | Optional | integer or null | Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. `max_uses`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesmax_uses). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion code. `merchant_id`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Key-value data you attach to the promotion code. |
| `promotion_code_id` | Optional | string or null | Unique identifier for the promotion code. `promotion_code_id`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributespromotion_code_id). |
| `promotion_id` | Optional | string or null | Identifier of the promotion this code redeems. `promotion_id`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributespromotion_id). |
| `status` | Optional | string or null | Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `timezone` | Optional | string or null | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. `timezone`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributestimezone). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. `unavailable_reason`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion code was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times this code has been redeemed. `uses_count`: [declared alternatives](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataprevious_attributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEventInput.md#categoryupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.available

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.available variant 1

anyOf variant 1: Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available..

- Value shape: boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.code

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.code variant 1

anyOf variant 1: Code a buyer enters to redeem the promotion..

- Value shape: string. Code a buyer enters to redeem the promotion. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.code variant 2

anyOf variant 2.

- Value shape: null. Code a buyer enters to redeem the promotion. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the promotion code was created, as an RFC3339 timestamp..

- Value shape: string. When the promotion code was created, as an RFC3339 timestamp. When the promotion code was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion code was created, as an RFC3339 timestamp. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_id

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound..

- Value shape: (string or null). Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.expires_at

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 1

anyOf variant 1: When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire..

- Value shape: string. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses variant 1

anyOf variant 1: Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit..

- Value shape: integer. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Format: `int64`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses variant 2

anyOf variant 2.

- Value shape: null. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns the promotion code..

- Value shape: string. Identifier of the merchant that owns the promotion code. Identifier of the merchant that owns the promotion code. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns the promotion code. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_code_id

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_code_id variant 1

anyOf variant 1: Unique identifier for the promotion code..

- Value shape: string. Unique identifier for the promotion code. Unique identifier for the promotion code. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_code_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the promotion code. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id variant 1

anyOf variant 1: Identifier of the promotion this code redeems..

- Value shape: string. Identifier of the promotion this code redeems. Identifier of the promotion this code redeems. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the promotion this code redeems. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available..

- Value shape: string. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`.

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.timezone

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.timezone variant 1

anyOf variant 1: IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires..

- Value shape: string. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason variant 1

anyOf variant 1: Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not..

- Value shape: string. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`.

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the promotion code was last updated, as an RFC3339 timestamp..

- Value shape: string. When the promotion code was last updated, as an RFC3339 timestamp. When the promotion code was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion code was last updated, as an RFC3339 timestamp. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count variant 1

anyOf variant 1: Number of times this code has been redeemed..

- Value shape: integer. Number of times this code has been redeemed. Number of times this code has been redeemed. Format: `int64`. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count variant 2

anyOf variant 2.

- Value shape: null. Number of times this code has been redeemed. 

### PromotionCodeArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [CategoryUpdatedInstalledMerchantsEventInput.data.previous_attributes.version](../models/CategoryUpdatedInstalledMerchantsEventInput.md#categoryupdatedinstalledmerchantseventinputdataprevious_attributesversion).

### PromotionCodeArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

