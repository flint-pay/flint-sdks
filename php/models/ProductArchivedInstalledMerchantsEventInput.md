[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedInstalledMerchantsEventInput

The `product.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"product.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ProductArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object and [WebhookProductInput](../models/WebhookProductInput.md#webhookproductinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`. `object`: [field definitions](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributes). |

### ProductArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.

Field definitions: [shared fields](WebhookProductInput.md#webhookproductinput).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer or null | Number of active variants belonging to the product. `active_variant_count`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesactive_variant_count). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescategories). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `default_variant` | Optional | [ProductVariantPreviousAttributesInput](../models/ProductVariantPreviousAttributesInput.md#productvariantpreviousattributesinput) or null | The product's default variant, when one is set. |
| `default_variant_id` | Optional | string or null | Identifier of the variant chosen as this product's default, when one is set. `default_variant_id`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesdefault_variant_id). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the product shown to buyers. `description`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the product is active and has at least one active variant. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this resource. |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the product. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Product name shown to buyers. `name`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `option_count` | Optional | integer or null | Number of active options belonging to the product. `option_count`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesoption_count). |
| `options` | Optional | Array of [ProductOptionPreviousAttributesInput](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinput) or null | Product options and their non-archived values. Empty when the product has no options. `options`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesoptions). |
| `price_range` | Optional | [ProductPriceRangePreviousAttributesInput](../models/ProductPriceRangePreviousAttributesInput.md#productpricerangepreviousattributesinput) or null | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. |
| `product_id` | Optional | string or null | Stable identifier of the product. `product_id`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesproduct_id). |
| `product_type` | Optional | string or null | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. `product_type`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesproduct_type). |
| `status` | Optional | string or null | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `variant_count` | Optional | integer or null | Number of non-archived variants belonging to the product. `variant_count`: [declared alternatives](../models/ProductArchivedInstalledMerchantsEventInput.md#productarchivedinstalledmerchantseventinputdataprevious_attributesvariant_count). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.active_variant_count

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.active_variant_count variant 1

anyOf variant 1: Number of active variants belonging to the product..

- Value shape: integer. Number of active variants belonging to the product. Number of active variants belonging to the product. Format: `int32`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.active_variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of active variants belonging to the product. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.categories

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.categories](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescategories).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.default_variant_id

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.default_variant_id variant 1

anyOf variant 1: Identifier of the variant chosen as this product's default, when one is set..

- Value shape: string. Identifier of the variant chosen as this product's default, when one is set. Identifier of the variant chosen as this product's default, when one is set. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.default_variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the variant chosen as this product's default, when one is set. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the product's non-archived variants..

- Value shape: string. Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the product's non-archived variants. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.description

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Description of the product shown to buyers..

- Value shape: string. Description of the product shown to buyers. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the product shown to buyers. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.images

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.images](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesimages).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 1

anyOf variant 1: Whether the product is active and has at least one active variant..

- Value shape: boolean. Whether the product is active and has at least one active variant. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the product is active and has at least one active variant. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the product. `null` when no modifier set is attached..

- Value shape: string. ID of the modifier set attached to the product. `null` when no modifier set is attached. ID of the modifier set attached to the product. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the product. `null` when no modifier set is attached. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Product name shown to buyers..

- Value shape: string. Product name shown to buyers. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Product name shown to buyers. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.option_count

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.option_count variant 1

anyOf variant 1: Number of active options belonging to the product..

- Value shape: integer. Number of active options belonging to the product. Number of active options belonging to the product. Format: `int32`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.option_count variant 2

anyOf variant 2.

- Value shape: null. Number of active options belonging to the product. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.options

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.options variant 1

anyOf variant 1: Product options and their non-archived values. Empty when the product has no options..

- Value shape: Array of [ProductOptionPreviousAttributesInput](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinput). Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.options variant 2

anyOf variant 2.

- Value shape: null. Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 1

anyOf variant 1: Stable identifier of the product..

- Value shape: string. Stable identifier of the product. Stable identifier of the product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_type

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_type variant 1

anyOf variant 1: Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved..

- Value shape: string. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`.

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.product_type variant 2

anyOf variant 2.

- Value shape: null. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Product lifecycle status. Archived products remain readable and cannot be edited..

- Value shape: string. Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Product lifecycle status. Archived products remain readable and cannot be edited. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_count

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_count variant 1

anyOf variant 1: Number of non-archived variants belonging to the product..

- Value shape: integer. Number of non-archived variants belonging to the product. Number of non-archived variants belonging to the product. Format: `int32`. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of non-archived variants belonging to the product. 

### ProductArchivedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion).

### ProductArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

