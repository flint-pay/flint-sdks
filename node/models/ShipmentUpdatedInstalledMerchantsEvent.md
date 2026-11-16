[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentUpdatedInstalledMerchantsEvent

The `shipment.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"shipment.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ShipmentUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ShipmentCreatedInstalledMerchantsEvent.md#shipmentcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributes). |

### ShipmentUpdatedInstalledMerchantsEvent.data.object

Field definitions: [ShipmentCreatedInstalledMerchantsEvent.data.object](../models/ShipmentCreatedInstalledMerchantsEvent.md#shipmentcreatedinstalledmerchantseventdataobject).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | Creation timestamp. `created_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributescreated_at). |
| `delivered_at` | Optional | string or null | When the shipment was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at). |
| `direction` | Optional | string or null | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. `direction`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. `external_reference_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. `external_system`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesexternal_system). |
| `fulfillment_id` | Optional | string or null | Fulfillment associated with this shipment. `fulfillment_id`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id). |
| `handed_off_at` | Optional | string or null | Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. `handed_off_at`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributeshanded_off_at). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned key-value metadata associated with the shipment. `metadata`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | ([ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items are transported by the shipment. `order_id`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesorder_id). |
| `package_count` | Optional | integer or null | Total number of packages attached to the shipment, including voided packages. `package_count`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count). |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. `packages`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributespackages). |
| `return_id` | Optional | string or null | Return associated with this shipment, when its direction is return. `return_id`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesreturn_id). |
| `return_line_items` | Optional | Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes) or null | Return lines and quantities allocated to this return shipment. `return_line_items`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items). |
| `shipment_id` | Optional | string or null | Stable identifier of the shipment. `shipment_id`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesshipment_id). |
| `shipped_at` | Optional | string or null | When the shipment was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at). |
| `status` | Optional | string or null | Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Items values: `"void"`. `supported_actions`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Monotonic shipment version for expected_version checks. `version`: [declared alternatives](../models/ShipmentUpdatedInstalledMerchantsEvent.md#shipmentupdatedinstalledmerchantseventdataprevious_attributesversion). |

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributescreated_at).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.delivered_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.delivered_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.direction

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.direction](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.external_system

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.external_system](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesexternal_system).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.fulfillment_id

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.fulfillment_id](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.handed_off_at

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.handed_off_at variant 1

anyOf variant 1: Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items..

- Value shape: string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.handed_off_at variant 2

anyOf variant 2.

- Value shape: null. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned key-value metadata associated with the shipment. Map values: maxLength: `4096`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the shipment. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: Order whose items are transported by the shipment..

- Value shape: string. Order whose items are transported by the shipment. Order whose items are transported by the shipment. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items are transported by the shipment. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.package_count

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.package_count](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.packages

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.packages variant 1

anyOf variant 1: Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages..

- Value shape: Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes). Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.packages variant 2

anyOf variant 2.

- Value shape: null. Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_id

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_id variant 1

anyOf variant 1: Return associated with this shipment, when its direction is return..

- Value shape: string. Return associated with this shipment, when its direction is return. Return associated with this shipment, when its direction is return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return associated with this shipment, when its direction is return. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1

anyOf variant 1: Return lines and quantities allocated to this return shipment..

- Value shape: Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes). Return lines and quantities allocated to this return shipment. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and quantities allocated to this return shipment. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1

Field definitions: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.shipment_id

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.shipment_id variant 1

anyOf variant 1: Stable identifier of the shipment..

- Value shape: string. Stable identifier of the shipment. Stable identifier of the shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the shipment. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.shipped_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.shipped_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft.
- `created`: The shipment leg exists but has not been packed or handed off.
- `packed`: The shipment leg is packed and awaiting carrier handoff.
- `shipped`: The shipment leg was handed to the carrier.
- `in_transit`: The carrier is moving the shipment through its network.
- `out_for_delivery`: The shipment is on its final delivery route.
- `delivered`: The carrier reported successful delivery.
- `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery.
- `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue.
- `returned`: The shipment was returned toward or to its origin.
- `voided`: The shipment was voided and will not continue through delivery..

- Value shape: string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Items values: `"void"`.

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesupdated_at).

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.version

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Monotonic shipment version for expected_version checks..

- Value shape: integer. Monotonic shipment version for expected_version checks. Monotonic shipment version for expected_version checks. Format: `uint64`. minimum: `1`. 

### ShipmentUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic shipment version for expected_version checks. 

### ShipmentUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

