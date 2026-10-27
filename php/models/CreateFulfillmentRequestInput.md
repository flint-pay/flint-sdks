[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFulfillmentRequestInput

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | minLength: `1`. |
| `device_id` | Optional | string | minLength: `1`. |
| `digital_details` | Optional | [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput) | Digital fulfillment details you supply when creating a fulfillment: the delivery URL. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput) | minItems: `1`. |
| `local_delivery_details` | Optional | [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput) | Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking. |
| `location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `pickup_details` | Optional | [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput) | Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput) | Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. |
| `service_details` | Optional | [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput) | Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes. |
| `shipment` | Optional | [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput) | Creates one outbound shipment and one package atomically with the fulfillment. packaging must be single_package. The package receives the full quantities of only the submitted line_items. Requires type shipment. Omission creates no shipment or package. Set package.status to shipped to report handoff in the same call. Creates one outbound shipment and one package with a shipment fulfillment. Requires `packaging: single_package` and `package`; external reference and metadata are optional. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |

### CreateFulfillmentRequestInput variant 1: `type` = `"shipment"`

oneOf variant 1: Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"shipment"`.

### CreateFulfillmentRequestInput variant 2: `type` = `"pickup"`

oneOf variant 2: Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"pickup"`.

### CreateFulfillmentRequestInput variant 3: `type` = `"local_delivery"`

oneOf variant 3: Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`digital_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"local_delivery"`.

### CreateFulfillmentRequestInput variant 4: `type` = `"digital"`

oneOf variant 4: Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`service_details`)).
- Constraints for `type`: Values: `"digital"`.

### CreateFulfillmentRequestInput variant 5: `type` = `"service"`

oneOf variant 5: Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages..

- Condition: not (present(`shipment`)).
- Condition: not (present(`pickup_details`)).
- Condition: not (present(`local_delivery_details`)).
- Condition: not (present(`digital_details`)).
- Constraints for `type`: Values: `"service"`.

