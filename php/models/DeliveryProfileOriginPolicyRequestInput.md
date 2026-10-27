[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicyRequestInput

Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string | Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

### DeliveryProfileOriginPolicyRequestInput variant 1: `type` = `"fixed_location"`

oneOf variant 1: The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`..

- Required: `location_id`.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryProfileOriginPolicyRequestInput variant 2: `type` = `"inventory_routing"`

oneOf variant 2: The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`..

- Condition: not (at least one(present(`location_id`))).
- Optional: `location_id`.
- Constraints for `type`: Values: `"inventory_routing"`.

### DeliveryProfileOriginPolicyRequestInput variant 3: `type` = `"method_origin"`

oneOf variant 3: The `method_origin` variant of `DeliveryProfileOriginPolicyInput`..

- Condition: not (at least one(present(`location_id`))).
- Optional: `location_id`.
- Constraints for `type`: Values: `"method_origin"`.

