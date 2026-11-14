<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionInput|array<array-key, mixed>|\stdClass $checkout_session
 * @property-read DeliverySelectionInput|array<array-key, mixed>|\stdClass $delivery_selection
 * @property-read DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass $inventory_reservation
 * @property-read DeliverySelectionOrderInput|array<array-key, mixed>|\stdClass $order
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionResultInput extends Model {
    /** @param array{'checkout_session': CheckoutSessionInput|array<array-key, mixed>|\stdClass, 'delivery_selection': DeliverySelectionInput|array<array-key, mixed>|\stdClass, 'inventory_reservation'?: DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass, 'order': DeliverySelectionOrderInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionResultInput')); }
    /** The checkout session after the selection. A session in which a buyer completes an order's payment.
     * @return CheckoutSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): mixed { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** The selection now on the checkout. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status.
     * @return DeliverySelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_selection is omitted; use hasDeliverySelection() or valueOrDefault().
     */
    public function getDeliverySelection(): mixed { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** The stock held for this selection. Omitted when the order holds no stock reservation, and for checkout credentials. The inventory reservation held for a delivery selection: its owner, status, and expiry.
     * @return DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_reservation is omitted; use hasInventoryReservation() or valueOrDefault().
     */
    public function getInventoryReservation(): mixed { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
    /** The order after the selection, with delivery charges applied and tax recalculated. Render totals from it instead of reading the order again. When tax still needs input, order.tax.status says so. The complete order returned with a delivery selection. Credential-specific fields are omitted as annotated.
     * @return DeliverySelectionOrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
}
