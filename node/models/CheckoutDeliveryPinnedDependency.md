[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDeliveryPinnedDependency

A delivery dependency pinned to a checkout, such as the assigned method, eligibility, or pricing callback, with the revision it was pinned at.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_dependency_role` | Required | string | Values: `"assigned_method"`, `"eligibility"`, `"method_origin"`, `"pickup_collection"`, `"pricing_callback"`, `"origin"`. |
| `dependency` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | `dependency`: [declared alternatives](../models/CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency). |
| `location_geography_version` | Optional | integer string | Version of the Location geography used by this assignment or dependency. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `revision_id` | Optional | string |  |

### CheckoutDeliveryPinnedDependency.dependency

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Conditional | string | Public Flint ID of the referenced resource. |
| `resource_type` | Conditional | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [135 declared values](APIKey.md#apikeycreated_by-resource_type-values). |

### CheckoutDeliveryPinnedDependency.dependency variant 1

anyOf variant 1: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### CheckoutDeliveryPinnedDependency.dependency variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null.  

