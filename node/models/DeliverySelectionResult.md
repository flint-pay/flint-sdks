[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResult

Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. |
| `delivery_selection` | Required | [DeliverySelection](../models/DeliverySelection.md#deliveryselection) | The delivery choice selected for a checkout or order. |
| `inventory_reservation` | Optional | [DeliveryInventoryReservationSummary](../models/DeliveryInventoryReservationSummary.md#deliveryinventoryreservationsummary) | The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required. |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. |

