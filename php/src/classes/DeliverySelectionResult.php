<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSession $checkout_session
 * @property-read DeliverySelection $delivery_selection
 * @property-read ?DeliveryInventoryReservationSummary $inventory_reservation
 * @property-read Order $order
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionResult extends Model {
    /** @param array{'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionResult')); }
    /** Shape $ (Value): {@see CheckoutSession}. A session in which a buyer completes an order's payment.
     * @return CheckoutSession
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** Shape $ (Value): {@see DeliverySelection}. The delivery choice selected for a checkout or order.
     * @return DeliverySelection
     */
    public function getDeliverySelection(): DeliverySelection { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** Shape $ (Value): {@see DeliveryInventoryReservationSummary}. The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required.
     * @return ?DeliveryInventoryReservationSummary
     */
    public function getInventoryReservation(): ?DeliveryInventoryReservationSummary { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
    /** Shape $ (Value): {@see Order}. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
}
