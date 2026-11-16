[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedInstalledMerchantsEventInput

The `delivery_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_method.activated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliveryMethodActivatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributes). |

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryMethodInput.md#deliverymethodinput).

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPreviousAttributesInput](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinput) or null | Current eligibility, pricing, origin, estimate, and tax configuration. |
| `created_at` | Optional | string or null | Time the method was created. `created_at`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `current_delivery_method_revision_id` | Optional | string or null | Immutable revision currently used for new quotes. `current_delivery_method_revision_id`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributescurrent_delivery_method_revision_id). |
| `delivery_method_id` | Optional | string or null | Stable delivery method ID. `delivery_method_id`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdelivery_method_id). |
| `delivery_revocation_id` | Optional | string or null or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. `delivery_revocation_id`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdelivery_revocation_id). |
| `description` | Optional | string or null | Optional buyer-facing description. `description`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `display_position` | Optional | integer or null | Ascending display order among methods. `display_position`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdisplay_position). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. |
| `name` | Optional | string or null | Merchant-facing method name. `name`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesname). |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. `recommendation_priority`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesrecommendation_priority). |
| `status` | Optional | string or null | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `subscription_counts` | Optional | [SubscriptionCountsPreviousAttributesInput](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinput) or null | How many subscriptions use this method, by status. |
| `type` | Optional | string or null | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributestype). |
| `updated_at` | Optional | string or null | Time the method last changed. `updated_at`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for method writes. `version`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesversion). |

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: Time the method was created..

- Value shape: string. Time the method was created. Time the method was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the method was created. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_method_revision_id

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_method_revision_id variant 1

anyOf variant 1: Immutable revision currently used for new quotes..

- Value shape: string. Immutable revision currently used for new quotes. Immutable revision currently used for new quotes. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision currently used for new quotes. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id variant 1

anyOf variant 1: Stable delivery method ID..

- Value shape: string. Stable delivery method ID. Stable delivery method ID. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery method ID. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_revocation_id

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_revocation_id variant 1

anyOf variant 1: The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it..

- Value shape: (string or null). The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_revocation_id variant 2

anyOf variant 2.

- Value shape: null. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.description

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Optional buyer-facing description..

- Value shape: string. Optional buyer-facing description. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional buyer-facing description. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.display_position

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.display_position variant 1

anyOf variant 1: Ascending display order among methods..

- Value shape: integer. Ascending display order among methods. Ascending display order among methods. Format: `int32`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.display_position variant 2

anyOf variant 2.

- Value shape: null. Ascending display order among methods. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.name

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Merchant-facing method name..

- Value shape: string. Merchant-facing method name. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing method name. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.recommendation_priority

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.recommendation_priority variant 1

anyOf variant 1: Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method..

- Value shape: integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.recommendation_priority variant 2

anyOf variant 2.

- Value shape: null. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Current method lifecycle status..

- Value shape: string. Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`.

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current method lifecycle status. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.type

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.type variant 1

anyOf variant 1: Delivery mode this method offers..

- Value shape: string. Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`.

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. Delivery mode this method offers. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: Time the method last changed..

- Value shape: string. Time the method last changed. Time the method last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the method last changed. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.version

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for method writes..

- Value shape: integer. Optimistic-concurrency version for method writes. Optimistic-concurrency version for method writes. Format: `uint64`. minimum: `1`. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for method writes. 

### DeliveryMethodActivatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

