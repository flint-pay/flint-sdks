[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDeliveryPinnedDependency

A delivery dependency pinned to a checkout, such as the assigned method, eligibility, or pricing callback, with the revision it was pinned at.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_dependency_role` | Required | string | Values: `"assigned_method"`, `"eligibility"`, `"method_origin"`, `"pickup_collection"`, `"pricing_callback"`, `"origin"`. |
| `dependency` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null |  |
| `location_geography_version` | Optional | integer string | Version of the Location geography used by this assignment or dependency. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `revision_id` | Optional | string |  |

