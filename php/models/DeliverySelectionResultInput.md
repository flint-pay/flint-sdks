[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResultInput

Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session` | Required | [CheckoutSessionInput](../models/CheckoutSessionInput.md#checkoutsessioninput) | The checkout session after the selection. A session in which a buyer completes an order's payment. |
| `delivery_selection` | Required | [DeliverySelectionInput](../models/DeliverySelectionInput.md#deliveryselectioninput) | The selection now on the checkout. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status. |
| `inventory_reservation` | Optional | [DeliveryInventoryReservationSummaryInput](../models/DeliveryInventoryReservationSummaryInput.md#deliveryinventoryreservationsummaryinput) | The stock held for this selection. Omitted when the order holds no stock reservation, and for checkout credentials. The inventory reservation held for a delivery selection: its owner, status, and expiry. |
| `order` | Required | [DeliverySelectionOrderInput](../models/DeliverySelectionOrderInput.md#deliveryselectionorderinput) | The order after the selection, with delivery charges applied and tax recalculated. Render totals from it instead of reading the order again. When tax still needs input, order.tax.status says so. The complete order returned with a delivery selection. Credential-specific fields are omitted as annotated. |

