[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResultInput

Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session` | Required | [CheckoutSessionInput](../models/CheckoutSessionInput.md#checkoutsessioninput) | A session in which a buyer completes an order's payment. |
| `delivery_selection` | Required | [DeliverySelectionInput](../models/DeliverySelectionInput.md#deliveryselectioninput) | The delivery choice selected for a checkout or order. |
| `inventory_reservation` | Optional | [DeliveryInventoryReservationSummaryInput](../models/DeliveryInventoryReservationSummaryInput.md#deliveryinventoryreservationsummaryinput) | The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required. |
| `order` | Required | [OrderInput](../models/OrderInput.md#orderinput) | A customer's purchase and its payment and fulfillment progress. |

