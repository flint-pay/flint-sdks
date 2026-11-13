[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionShipment

Shipment details. Set only when `type` is `shipment`.

Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-facing instructions for this delivery service. |
| `service_level` | Optional | string | Merchant's service-level label. Flint does not enforce the timing implied by the label. |

