[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileConfigurationInputManual

The `manual` variant of `DeliveryProfileConfigurationInputRequired`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Required | Array of string | Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. minItems: `1`. uniqueItems: `true`. Items values: `"digital"`, `"service"`. |
| `combination_policy` | Optional | string | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [DeliveryProfileOriginPolicyRequest](../models/DeliveryProfileOriginPolicyRequest.md#deliveryprofileoriginpolicyrequest) | Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method. |
| `requirement` | Required | string | Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"required"`. |
| `resolution_mode` | Required | string | Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"manual"`. |
| `splitting_policy` | Optional | string | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

