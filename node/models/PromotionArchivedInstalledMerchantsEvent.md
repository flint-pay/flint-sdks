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
| `application_method` | Optional | [PromotionApplicationMethod](../models/PromotionApplicationMethod.md#promotionapplicationmethod) or null | Discount effect and how it applies to eligible items or charges. |
| `available` | Optional | boolean or null | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. `available`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesavailable). |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) or null | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. |
| `combines_with` | Optional | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) or null | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. |
| `created_at` | Optional | string or null | When the promotion was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the promotion for your own records. `description`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdescription). |
| `discount_class` | Optional | string or null | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdiscount_class). |
| `display_name` | Optional | string or null | Buyer-facing promotion name shown in checkout and order discount surfaces. `display_name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesdisplay_name). |
| `eligibility_rules` | Optional | [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup) or null | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. `eligibility_rules`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) or null | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. `max_uses`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmax_uses). |
| `max_uses_per_customer` | Optional | integer or null or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. `max_uses_per_customer`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmax_uses_per_customer). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion. `merchant_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Key-value data you attach to the promotion. `metadata`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Internal promotion name for dashboards, searching, and reporting. `name`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesname). |
| `promotion_id` | Optional | string or null | Unique identifier for the promotion. `promotion_id`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributespromotion_id). |
| `redemption_type` | Optional | string or null | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. `redemption_type`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesredemption_type). |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) or null | Optional start and end times that limit when the promotion can apply. `schedule`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributesschedule). |
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

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules

Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all). |

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1

anyOf PromotionRuleGroup: Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.; oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 2

anyOf PromotionRuleGroup: Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.; oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-2all). |

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2

oneOf PromotionRuleGroup; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 3

oneOf PromotionRuleGroup; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[]

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[] variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[] variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[] variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[] variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [field definitions](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all). |

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 2

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 3

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 1.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 1.values[]

Declared alternatives: [PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 1.values[]](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-1values).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 2.all[]

Field definitions: [PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[]](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[] variant 3.any[]

Field definitions: [PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[]](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 3.any[]

Declared alternatives: [PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[] variant 2.all[]](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all-variant-2all).

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 2.any[]

Declared alternatives: [PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.eligibility_rules variant 1.all[]](../models/PromotionArchivedInstalledMerchantsEvent.md#promotionarchivedinstalledmerchantseventdataprevious_attributeseligibility_rules-variant-1all).

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

- Value shape: (integer or null). Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. 

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

anyOf MetadataMap: Key-value data you attach to the promotion..

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

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.schedule

Optional start and end times that limit when the promotion can apply.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Conditional | string | Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `starts_at` | Conditional | string | Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Conditional | string | IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. minLength: `1`. maxLength: `255`. |

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.schedule variant 1

anyOf PromotionSchedule: Optional start and end times that limit when the promotion can apply..

- Optional: `ends_at`, `starts_at`, `timezone`.

### PromotionArchivedInstalledMerchantsEvent.data.previous_attributes.schedule variant 2

anyOf variant 2.

- Undeclared: `ends_at`, `starts_at`, `timezone`.
- Value shape: null. Optional start and end times that limit when the promotion can apply. 

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

