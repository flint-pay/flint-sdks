<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSession $checkout_session
 * @property-read DeliverySelection $delivery_selection
 * @property-read ?DeliveryInventoryReservationSummary $inventory_reservation
 * @property-read DeliverySelectionOrder $order
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionResult extends Model {
    /** @param array{'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionResult')); }
    /** The checkout session after the selection. A session in which a buyer completes an order's payment.
     * @return CheckoutSession
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** The selection now on the checkout. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status.
     * @return DeliverySelection
     */
    public function getDeliverySelection(): DeliverySelection { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** The stock held for this selection. Omitted when the order holds no stock reservation, and for checkout credentials. The inventory reservation held for a delivery selection: its owner, status, and expiry.
     * @return ?DeliveryInventoryReservationSummary
     */
    public function getInventoryReservation(): ?DeliveryInventoryReservationSummary { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
    /** The order after the selection, with delivery charges applied and tax recalculated. Render totals from it instead of reading the order again. When tax still needs input, order.tax.status says so. The complete order returned with a delivery selection. Credential-specific fields are omitted as annotated.
     * @return DeliverySelectionOrder
     */
    public function getOrder(): DeliverySelectionOrder { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
}
