[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedInstalledMerchantsEventInput

The `promotion.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"promotion.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PromotionArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookPromotionInput](../models/WebhookPromotionInput.md#webhookpromotioninput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`. `object`: [field definitions](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributes). |

### PromotionArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`.

Field definitions: [shared fields](WebhookPromotionInput.md#webhookpromotioninput).

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | [PromotionApplicationMethodPreviousAttributesInput](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput) or null | Discount effect and how it applies to eligible items or charges. |
| `available` | Optional | boolean or null | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. `available`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesavailable). |
| `codes_summary` | Optional | [PromotionCodesSummaryPreviousAttributesInput](../models/PromotionCodesSummaryPreviousAttributesInput.md#promotioncodessummarypreviousattributesinput) or null | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. |
| `combines_with` | Optional | [PromotionCombinesWithPreviousAttributesInput](../models/PromotionCombinesWithPreviousAttributesInput.md#promotioncombineswithpreviousattributesinput) or null | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. |
| `created_at` | Optional | string or null | When the promotion was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the promotion for your own records. `description`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `discount_class` | Optional | string or null | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesdiscount_class). |
| `display_name` | Optional | string or null | Buyer-facing promotion name shown in checkout and order discount surfaces. `display_name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesdisplay_name). |
| `eligibility_rules` | Optional | [PromotionRuleGroupPreviousAttributesInput](../models/PromotionRuleGroupPreviousAttributesInput.md#promotionrulegrouppreviousattributesinput) or null | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. |
| `exclusivity` | Optional | [PromotionExclusivityPreviousAttributesInput](../models/PromotionExclusivityPreviousAttributesInput.md#promotionexclusivitypreviousattributesinput) or null | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. `max_uses`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesmax_uses). |
| `max_uses_per_customer` | Optional | integer or null or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. `max_uses_per_customer`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesmax_uses_per_customer). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion. `merchant_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Key-value data you attach to the promotion. |
| `name` | Optional | string or null | Internal promotion name for dashboards, searching, and reporting. `name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `promotion_id` | Optional | string or null | Unique identifier for the promotion. `promotion_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributespromotion_id). |
| `redemption_type` | Optional | string or null | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. `redemption_type`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesredemption_type). |
| `schedule` | Optional | [PromotionSchedulePreviousAttributesInput](../models/PromotionSchedulePreviousAttributesInput.md#promotionschedulepreviousattributesinput) or null | Optional start and end times that limit when the promotion can apply. |
| `status` | Optional | string or null | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. `unavailable_reason`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times the promotion has been redeemed. `uses_count`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEventInput.md#promotionarchivedinstalledmerchantseventinputdataprevious_attributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEventInput.md#categoryupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.available

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.available variant 1

anyOf variant 1: Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code..

- Value shape: boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the promotion was created, as an RFC3339 timestamp..

- Value shape: string. When the promotion was created, as an RFC3339 timestamp. When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was created, as an RFC3339 timestamp. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.description

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Optional description of the promotion for your own records..

- Value shape: string. Optional description of the promotion for your own records. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the promotion for your own records. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.discount_class

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.discount_class variant 1

anyOf variant 1: Whether the promotion discounts the order, individual line items, or service charges..

- Value shape: string. Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`.

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion discounts the order, individual line items, or service charges. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.display_name

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.display_name variant 1

anyOf variant 1: Buyer-facing promotion name shown in checkout and order discount surfaces..

- Value shape: string. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.display_name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses variant 1

anyOf variant 1: Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit..

- Value shape: integer. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: `int64`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses variant 2

anyOf variant 2.

- Value shape: null. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses_per_customer

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses_per_customer variant 1

anyOf variant 1: Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit..

- Value shape: (integer or null). Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.max_uses_per_customer variant 2

anyOf variant 2.

- Value shape: null. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns the promotion..

- Value shape: string. Identifier of the merchant that owns the promotion. Identifier of the merchant that owns the promotion. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns the promotion. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Internal promotion name for dashboards, searching, and reporting..

- Value shape: string. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id variant 1

anyOf variant 1: Unique identifier for the promotion..

- Value shape: string. Unique identifier for the promotion. Unique identifier for the promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the promotion. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.redemption_type

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.redemption_type variant 1

anyOf variant 1: Whether the promotion applies automatically when its rules match or requires a promotion code..

- Value shape: string. Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`.

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.redemption_type variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion applies automatically when its rules match or requires a promotion code. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available..

- Value shape: string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`.

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason variant 1

anyOf variant 1: Why available is false. Present only when available is false..

- Value shape: string. Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`.

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why available is false. Present only when available is false. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the promotion was last updated, as an RFC3339 timestamp..

- Value shape: string. When the promotion was last updated, as an RFC3339 timestamp. When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was last updated, as an RFC3339 timestamp. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count variant 1

anyOf variant 1: Number of times the promotion has been redeemed..

- Value shape: integer. Number of times the promotion has been redeemed. Number of times the promotion has been redeemed. Format: `int64`. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.uses_count variant 2

anyOf variant 2.

- Value shape: null. Number of times the promotion has been redeemed. 

### PromotionArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [CategoryUpdatedInstalledMerchantsEventInput.data.previous_attributes.version](../models/CategoryUpdatedInstalledMerchantsEventInput.md#categoryupdatedinstalledmerchantseventinputdataprevious_attributesversion).

### PromotionArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

