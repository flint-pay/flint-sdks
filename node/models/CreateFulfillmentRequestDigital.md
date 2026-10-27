[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFulfillmentRequestDigital

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | minLength: `1`. |
| `device_id` | Optional | string | minLength: `1`. |
| `digital_details` | Optional | [CreateDigitalFulfillmentDetails](../models/CreateDigitalFulfillmentDetails.md#createdigitalfulfillmentdetails) | Digital fulfillment details you supply when creating a fulfillment: the delivery URL. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [FulfillmentLineItemRequest](../models/FulfillmentLineItemRequest.md#fulfillmentlineitemrequest) | minItems: `1`. |
| `local_delivery_details` | Optional | [CreateDeliveryFulfillmentDetails](../models/CreateDeliveryFulfillmentDetails.md#createdeliveryfulfillmentdetails) | Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking. |
| `location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `pickup_details` | Optional | [CreatePickupFulfillmentDetails](../models/CreatePickupFulfillmentDetails.md#createpickupfulfillmentdetails) | Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details. |
| `recipient` | Optional | [FulfillmentRecipientRequest](../models/FulfillmentRecipientRequest.md#fulfillmentrecipientrequest) | Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. |
| `service_details` | Optional | [CreateServiceFulfillmentDetails](../models/CreateServiceFulfillmentDetails.md#createservicefulfillmentdetails) | Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes. |
| `shipment` | Optional | [FulfillmentPackagingRequest](../models/FulfillmentPackagingRequest.md#fulfillmentpackagingrequest) | Creates one outbound shipment and one package atomically with the fulfillment. packaging must be single_package. The package receives the full quantities of only the submitted line_items. Requires type shipment. Omission creates no shipment or package. Set package.status to shipped to report handoff in the same call. Creates one outbound shipment and one package with a shipment fulfillment. Requires `packaging: single_package` and `package`; external reference and metadata are optional. |
| `type` | Required | string | Values: `"digital"`. |

