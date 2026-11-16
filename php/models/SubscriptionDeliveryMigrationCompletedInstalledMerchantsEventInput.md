[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput

The `subscription_delivery_migration.completed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription_delivery_migration.completed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributes). |

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](SubscriptionDeliveryMigrationInput.md#subscriptiondeliverymigrationinput).

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `failed_count` | Optional | integer or null | Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. `failed_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesfailed_count). |
| `failure_reason_counts` | Optional | Array of [SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributesinput) or null | Failed subscriptions grouped by reason. Empty when none failed. `failure_reason_counts`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesfailure_reason_counts). |
| `from_delivery_method_id` | Optional | string or null | ID of the delivery method the subscriptions moved away from. `from_delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesfrom_delivery_method_id). |
| `moved_count` | Optional | integer or null | Subscriptions now using the new method. `moved_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesmoved_count). |
| `pending_count` | Optional | integer or null | Subscriptions not yet moved or failed, including ones Flint is retrying. `pending_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributespending_count). |
| `status` | Optional | string or null | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. `status`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `subscription_delivery_migration_id` | Optional | string or null | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. `subscription_delivery_migration_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributessubscription_delivery_migration_id). |
| `subscription_plan_id` | Optional | string or null | Plan the migration was limited to. Omitted when it covered every plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributessubscription_plan_id). |
| `to_delivery_method_id` | Optional | string or null | ID of the delivery method the subscriptions move to. `to_delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributesto_delivery_method_id). |
| `total_count` | Optional | integer or null | Number of active, paused, and past due subscriptions on the original method when the migration started. `total_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.md#subscriptiondeliverymigrationcompletedinstalledmerchantseventinputdataprevious_attributestotal_count). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failed_count

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failed_count variant 1

anyOf variant 1: Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription..

- Value shape: integer. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failed_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failure_reason_counts

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failure_reason_counts variant 1

anyOf variant 1: Failed subscriptions grouped by reason. Empty when none failed..

- Value shape: Array of [SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributesinput). Failed subscriptions grouped by reason. Empty when none failed. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.failure_reason_counts variant 2

anyOf variant 2.

- Value shape: null. Failed subscriptions grouped by reason. Empty when none failed. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.from_delivery_method_id

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.from_delivery_method_id variant 1

anyOf variant 1: ID of the delivery method the subscriptions moved away from..

- Value shape: string. ID of the delivery method the subscriptions moved away from. ID of the delivery method the subscriptions moved away from. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.from_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method the subscriptions moved away from. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.moved_count

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.moved_count variant 1

anyOf variant 1: Subscriptions now using the new method..

- Value shape: integer. Subscriptions now using the new method. Subscriptions now using the new method. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.moved_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions now using the new method. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.pending_count

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.pending_count variant 1

anyOf variant 1: Subscriptions not yet moved or failed, including ones Flint is retrying..

- Value shape: integer. Subscriptions not yet moved or failed, including ones Flint is retrying. Subscriptions not yet moved or failed, including ones Flint is retrying. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.pending_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions not yet moved or failed, including ones Flint is retrying. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.status

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Progress of the delivery method migration across its subscriptions..

- Value shape: string. Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`.

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Progress of the delivery method migration across its subscriptions. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_migration_id

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_migration_id variant 1

anyOf variant 1: Unique identifier for this subscription delivery migration, prefixed `sdmig_`..

- Value shape: string. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. Example: `"sdmig_01KEZF7C00H8KGVKXANJWJVDH7"`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_migration_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: Plan the migration was limited to. Omitted when it covered every plan..

- Value shape: string. Plan the migration was limited to. Omitted when it covered every plan. Plan the migration was limited to. Omitted when it covered every plan. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Plan the migration was limited to. Omitted when it covered every plan. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.to_delivery_method_id

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.to_delivery_method_id variant 1

anyOf variant 1: ID of the delivery method the subscriptions move to..

- Value shape: string. ID of the delivery method the subscriptions move to. ID of the delivery method the subscriptions move to. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.to_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method the subscriptions move to. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.total_count

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.total_count variant 1

anyOf variant 1: Number of active, paused, and past due subscriptions on the original method when the migration started..

- Value shape: integer. Number of active, paused, and past due subscriptions on the original method when the migration started. Number of active, paused, and past due subscriptions on the original method when the migration started. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.total_count variant 2

anyOf variant 2.

- Value shape: null. Number of active, paused, and past due subscriptions on the original method when the migration started. 

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

