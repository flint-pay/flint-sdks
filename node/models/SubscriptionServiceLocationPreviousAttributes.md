[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null |  |
| `customer_address_id` | Optional | string or null | `customer_address_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_address_id), [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributesservice_location-variant-1customer_address_id). |
| `customer_id` | Optional | string or null | `customer_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_id), [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributesservice_location-variant-1customer_id). |

### SubscriptionServiceLocationPreviousAttributes variant 1

anyOf variant 1: Declared schema SubscriptionDeliveryDestinationPreviousAttributes. .

- Constraints for `address`: Resolved delivery address used by future shipments. `null` when the saved destination has no address.
- Constraints for `customer_address_id`: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination.
- Constraints for `customer_id`: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address.

### SubscriptionServiceLocationPreviousAttributes variant 2

anyOf variant 2: Declared schema SubscriptionServiceLocationPreviousAttributes. .

- Constraints for `address`: The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it.
- Constraints for `customer_address_id`: ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address.
- Constraints for `customer_id`: Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection.

### SubscriptionServiceLocationPreviousAttributes variant 1.customer_address_id

Declared alternatives: [SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_address_id](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_address_id).

### SubscriptionServiceLocationPreviousAttributes variant 1.customer_id

Declared alternatives: [SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_id](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_id).

### SubscriptionServiceLocationPreviousAttributes variant 2.customer_address_id

Declared alternatives: [SubscriptionActivatedInstalledMerchantsEvent.data.previous_attributes.service_location variant 1.customer_address_id](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributesservice_location-variant-1customer_address_id).

### SubscriptionServiceLocationPreviousAttributes variant 2.customer_id

Declared alternatives: [SubscriptionActivatedInstalledMerchantsEvent.data.previous_attributes.service_location variant 1.customer_id](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributesservice_location-variant-1customer_id).

