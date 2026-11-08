[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateFulfillmentRequest

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. A supplied detail field must match the stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count toward exclusivity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | Completion evidence timestamp. Use only to correct completion evidence on an already completed fulfillment; complete pending fulfillments with POST /v1/fulfillments/{fulfillment_id}/complete. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string or null | Send null to clear it. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `device_id` | Optional | string or null | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. Send null to clear it. minLength: `1`. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Optional | [UpdateDigitalFulfillmentDetails](../models/UpdateDigitalFulfillmentDetails.md#updatedigitalfulfillmentdetails) or null | Details of a `digital` fulfillment, such as the download link. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `local_delivery_details` | Optional | [UpdateDeliveryFulfillmentDetails](../models/UpdateDeliveryFulfillmentDetails.md#updatedeliveryfulfillmentdetails) or null | Details of a `local_delivery` fulfillment, such as the courier's tracking link. |
| `location_id` | Optional | string or null | Send null to clear it. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `pickup_details` | Optional | [UpdatePickupFulfillmentDetails](../models/UpdatePickupFulfillmentDetails.md#updatepickupfulfillmentdetails) or null | Details of a `pickup` fulfillment. |
| `recipient` | Optional | [FulfillmentRecipientRequest](../models/FulfillmentRecipientRequest.md#fulfillmentrecipientrequest) or null | Who receives the fulfillment. |
| `service_details` | Optional | [UpdateServiceFulfillmentDetails](../models/UpdateServiceFulfillmentDetails.md#updateservicefulfillmentdetails) or null | Details of a `service` fulfillment. |

