[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionRequest

The request body for: Create subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequest](../models/SubscriptionBillingScheduleRequest.md#subscriptionbillingschedulerequest) | Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequest](../models/SubscriptionBillingStartRequest.md#subscriptionbillingstartrequest) | How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | minLength: `1`. |
| `delivery` | Optional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. `service_location`: [declared alternatives](../models/CreateSubscriptionRequest.md#createsubscriptionrequestservice_location). |
| `terms` | Required | [SubscriptionTermsRequest](../models/SubscriptionTermsRequest.md#subscriptiontermsrequest) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

### CreateSubscriptionRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateSubscriptionRequest.service_location

Where a subscription's service is delivered: a saved customer address by ID, or a new address.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### CreateSubscriptionRequest.service_location variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### CreateSubscriptionRequest.service_location variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionServiceLocationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

