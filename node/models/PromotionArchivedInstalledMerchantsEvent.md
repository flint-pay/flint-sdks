[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedInstalledMerchantsEvent

The `promotion.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"promotion.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PromotionArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object and [WebhookPromotion](../models/WebhookPromotion.md#webhookpromotion) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`. `object`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributes). |

### PromotionArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.

Field definitions: [shared fields](WebhookPromotion.md#webhookpromotion).

### PromotionArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Promotion.metadata](../models/Promotion.md#promotionmetadata).

### PromotionArchivedInstalledMerchantsEvent.data.object.schedule

Field definitions: [Promotion.schedule fields 1](../models/Promotion.md#promotionschedule-fields-1).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | [PromotionApplicationMethodPreviousAttributes](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes) or null | Discount effect and how it applies to eligible items or charges. |
| `available` | Optional | boolean or null | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. `available`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesavailable). |
| `codes_summary` | Optional | [PromotionCodesSummaryPreviousAttributes](../models/PromotionCodesSummaryPreviousAttributes.md#promotioncodessummarypreviousattributes) or null | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. |
| `combines_with` | Optional | [PromotionCombinesWithPreviousAttributes](../models/PromotionCombinesWithPreviousAttributes.md#promotioncombineswithpreviousattributes) or null | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. |
| `created_at` | Optional | string or null | When the promotion was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the promotion for your own records. `description`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdescription). |
| `discount_class` | Optional | string or null | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdiscount_class). |
| `display_name` | Optional | string or null | Buyer-facing promotion name shown in checkout and order discount surfaces. `display_name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdisplay_name). |
| `eligibility_rules` | Optional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. |
| `exclusivity` | Optional | [PromotionExclusivityPreviousAttributes](../models/PromotionExclusivityPreviousAttributes.md#promotionexclusivitypreviousattributes) or null | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. `max_uses`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmax_uses). |
| `max_uses_per_customer` | Optional | integer or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. `max_uses_per_customer`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmax_uses_per_customer). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion. `merchant_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Key-value data you attach to the promotion. `metadata`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Internal promotion name for dashboards, searching, and reporting. `name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesname). |
| `promotion_id` | Optional | string or null | Unique identifier for the promotion. `promotion_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributespromotion_id). |
| `redemption_type` | Optional | string or null | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. `redemption_type`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesredemption_type). |
| `schedule` | Optional | [PromotionSchedulePreviousAttributes](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributes) or null | Optional start and end times that limit when the promotion can apply. |
| `status` | Optional | string or null | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. `unavailable_reason`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times the promotion has been redeemed. `uses_count`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesversion). |

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.available

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.available variant 1

anyOf variant 1: Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code..

- Value shape: boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the promotion was created, as an RFC3339 timestamp..

- Value shape: string. When the promotion was created, as an RFC3339 timestamp. When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was created, as an RFC3339 timestamp. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.description

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Optional description of the promotion for your own records..

- Value shape: string. Optional description of the promotion for your own records. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the promotion for your own records. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.discount_class

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.discount_class variant 1

anyOf variant 1: Whether the promotion discounts the order, individual line items, or service charges..

- Value shape: string. Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion discounts the order, individual line items, or service charges. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.display_name

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.display_name variant 1

anyOf variant 1: Buyer-facing promotion name shown in checkout and order discount surfaces..

- Value shape: string. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.display_name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses variant 1

anyOf variant 1: Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit..

- Value shape: integer. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: `int64`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses variant 2

anyOf variant 2.

- Value shape: null. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses_per_customer

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses_per_customer variant 1

anyOf variant 1: Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit..

- Value shape: integer. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.max_uses_per_customer variant 2

anyOf variant 2.

- Value shape: null. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns the promotion..

- Value shape: string. Identifier of the merchant that owns the promotion. Identifier of the merchant that owns the promotion. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns the promotion. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Key-value data you attach to the promotion. Map values: maxLength: `4096`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Key-value data you attach to the promotion. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.name

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Internal promotion name for dashboards, searching, and reporting..

- Value shape: string. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.promotion_id

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.promotion_id variant 1

anyOf variant 1: Unique identifier for the promotion..

- Value shape: string. Unique identifier for the promotion. Unique identifier for the promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the promotion. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.redemption_type

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.redemption_type variant 1

anyOf variant 1: Whether the promotion applies automatically when its rules match or requires a promotion code..

- Value shape: string. Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.redemption_type variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion applies automatically when its rules match or requires a promotion code. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.status

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available..

- Value shape: string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.unavailable_reason

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.unavailable_reason variant 1

anyOf variant 1: Why available is false. Present only when available is false..

- Value shape: string. Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why available is false. Present only when available is false. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the promotion was last updated, as an RFC3339 timestamp..

- Value shape: string. When the promotion was last updated, as an RFC3339 timestamp. When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was last updated, as an RFC3339 timestamp. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.uses_count

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.uses_count variant 1

anyOf variant 1: Number of times the promotion has been redeemed..

- Value shape: integer. Number of times the promotion has been redeemed. Number of times the promotion has been redeemed. Format: `int64`. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.uses_count variant 2

anyOf variant 2.

- Value shape: null. Number of times the promotion has been redeemed. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.version](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesversion).

### PromotionArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

