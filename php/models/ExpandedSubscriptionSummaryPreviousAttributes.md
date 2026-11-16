[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. `billing_anchor_day`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesbilling_anchor_day). |
| `cancel_at_period_end` | Optional | boolean or null | True when the subscription is scheduled to cancel instead of renewing. `cancel_at_period_end`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescancel_at_period_end). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_end_at` | Optional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_period_start_at` | Optional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescustomer_id). |
| `next_billing_at` | Optional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesnext_billing_at). |
| `status` | Optional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus). |
| `subscription_id` | Optional | string or null | Unique identifier for this subscription, prefixed `sub_`. `subscription_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributessubscription_id). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. `subscription_plan_id`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributessupported_actions). |
| `terms_type` | Optional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### ExpandedSubscriptionSummaryPreviousAttributes.billing_anchor_day

### ExpandedSubscriptionSummaryPreviousAttributes.billing_anchor_day variant 1

anyOf variant 1: UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set..

- Value shape: integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: `int32`. 

### ExpandedSubscriptionSummaryPreviousAttributes.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. 

### ExpandedSubscriptionSummaryPreviousAttributes.cancel_at_period_end

### ExpandedSubscriptionSummaryPreviousAttributes.cancel_at_period_end variant 1

anyOf variant 1: True when the subscription is scheduled to cancel instead of renewing..

- Value shape: boolean. True when the subscription is scheduled to cancel instead of renewing. 

### ExpandedSubscriptionSummaryPreviousAttributes.cancel_at_period_end variant 2

anyOf variant 2.

- Value shape: null. True when the subscription is scheduled to cancel instead of renewing. 

### ExpandedSubscriptionSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributes.current_period_end_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributes.current_period_start_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedSubscriptionSummaryPreviousAttributes.customer_id

### ExpandedSubscriptionSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer this subscription bills..

- Value shape: string. The customer this subscription bills. 

### ExpandedSubscriptionSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer this subscription bills. 

### ExpandedSubscriptionSummaryPreviousAttributes.next_billing_at

### ExpandedSubscriptionSummaryPreviousAttributes.next_billing_at variant 1

anyOf variant 1: When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule..

- Value shape: string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. 

### ExpandedSubscriptionSummaryPreviousAttributes.next_billing_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. 

### ExpandedSubscriptionSummaryPreviousAttributes.status

### ExpandedSubscriptionSummaryPreviousAttributes.status variant 1

anyOf variant 1: Where the subscription is in its lifecycle. Each value says what it means..

- Value shape: string. Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`.

### ExpandedSubscriptionSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the subscription is in its lifecycle. Each value says what it means. 

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_id

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_id variant 1

anyOf variant 1: Unique identifier for this subscription, prefixed `sub_`..

- Value shape: string. Unique identifier for this subscription, prefixed `sub_`. 

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription, prefixed `sub_`. 

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_plan_id

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`..

- Value shape: string. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. 

### ExpandedSubscriptionSummaryPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. 

### ExpandedSubscriptionSummaryPreviousAttributes.supported_actions

### ExpandedSubscriptionSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials..

- Value shape: Array of string. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`.

### ExpandedSubscriptionSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. 

### ExpandedSubscriptionSummaryPreviousAttributes.terms_type

### ExpandedSubscriptionSummaryPreviousAttributes.terms_type variant 1

anyOf variant 1: Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id..

- Value shape: string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`.

### ExpandedSubscriptionSummaryPreviousAttributes.terms_type variant 2

anyOf variant 2.

- Value shape: null. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. 

### ExpandedSubscriptionSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

