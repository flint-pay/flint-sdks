[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. `billing_anchor_day`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputbilling_anchor_day). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel instead of renewing. `cancel_at_period_end`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputcancel_at_period_end). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputcustomer_id). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputnext_billing_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputstatus). |
| `subscription_id` | Optional | string or null | Unique identifier for this subscription, prefixed `sub_`. `subscription_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputsubscription_id). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. `subscription_plan_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputsubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputsupported_actions). |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinputterms_type). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### ExpandedSubscriptionSummaryPreviousAttributesInput.billing_anchor_day

### ExpandedSubscriptionSummaryPreviousAttributesInput.billing_anchor_day variant 1

anyOf variant 1: Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set..

- Value shape: integer. Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: `int32`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.cancel_at_period_end

### ExpandedSubscriptionSummaryPreviousAttributesInput.cancel_at_period_end variant 1

anyOf variant 1: True when the subscription is scheduled to cancel instead of renewing..

- Value shape: boolean. True when the subscription is scheduled to cancel instead of renewing. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.cancel_at_period_end variant 2

anyOf variant 2.

- Value shape: null. True when the subscription is scheduled to cancel instead of renewing. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributesInput.current_period_end_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributesInput.current_period_start_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributesInput.customer_id

### ExpandedSubscriptionSummaryPreviousAttributesInput.customer_id variant 1

anyOf variant 1: The customer this subscription bills..

- Value shape: string. The customer this subscription bills. The customer this subscription bills. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer this subscription bills. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.next_billing_at

### ExpandedSubscriptionSummaryPreviousAttributesInput.next_billing_at variant 1

anyOf variant 1: When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule..

- Value shape: string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.next_billing_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.status

### ExpandedSubscriptionSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Where the subscription is in its lifecycle. Each value says what it means..

- Value shape: string. Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`.

### ExpandedSubscriptionSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where the subscription is in its lifecycle. Each value says what it means. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_id

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_id variant 1

anyOf variant 1: Unique identifier for this subscription, prefixed `sub_`..

- Value shape: string. Unique identifier for this subscription, prefixed `sub_`. Unique identifier for this subscription, prefixed `sub_`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription, prefixed `sub_`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_plan_id

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`..

- Value shape: string. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.supported_actions

### ExpandedSubscriptionSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials..

- Value shape: Array of string. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`.

### ExpandedSubscriptionSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.terms_type

### ExpandedSubscriptionSummaryPreviousAttributesInput.terms_type variant 1

anyOf variant 1: Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id..

- Value shape: string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`.

### ExpandedSubscriptionSummaryPreviousAttributesInput.terms_type variant 2

anyOf variant 2.

- Value shape: null. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. 

### ExpandedSubscriptionSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

