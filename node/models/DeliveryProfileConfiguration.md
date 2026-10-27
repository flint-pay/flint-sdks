[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileConfiguration

Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and dimensions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `combination_policy` | Optional | string | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [DeliveryProfileOriginPolicy](../models/DeliveryProfileOriginPolicy.md#deliveryprofileoriginpolicy) | Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. Where items under a delivery profile ship or leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method. |
| `requirement` | Required | string | Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

