[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFulfillmentRequestInput

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `device_id` | Optional | string | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. minLength: `1`. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Optional | [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput) | Details of a `digital` fulfillment, such as the download link. Digital fulfillment details you supply when creating a fulfillment: the delivery URL. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `line_items` | Required | Array of [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput) | Order line items, with the quantity of each, that this fulfillment covers. minItems: `1`. |
| `local_delivery_details` | Optional | [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput) | Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking. |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | Paid order whose quantities this fulfillment delivers. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pickup_details` | Optional | [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput) | Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput) | Who receives the fulfillment. Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. |
| `service_details` | Optional | [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput) | Details of a `service` fulfillment. Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes. |
| `shipment` | Optional | [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput) | Creates an outbound shipment and packages atomically with a shipment fulfillment. single_package assigns every submitted line quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in the same call. Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`. External reference and metadata are optional. |
| `type` | Required | string | The kind of fulfillment. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |

### CreateFulfillmentRequestInput variant 1: `type` = `"shipment"`

oneOf with type: "shipment": Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"shipment"`.

### CreateFulfillmentRequestInput variant 2: `type` = `"pickup"`

oneOf with type: "pickup": Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"pickup"`.

### CreateFulfillmentRequestInput variant 3: `type` = `"local_delivery"`

oneOf with type: "local_delivery": Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"local_delivery"`.

### CreateFulfillmentRequestInput variant 4: `type` = `"digital"`

oneOf with type: "digital": Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"digital"`.

### CreateFulfillmentRequestInput variant 5: `type` = `"service"`

oneOf with type: "service": Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Constraints for `type`: Values: `"service"`.

