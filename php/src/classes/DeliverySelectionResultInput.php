<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionInput|array<array-key, mixed>|\stdClass $checkout_session
 * @property-read DeliverySelectionInput|array<array-key, mixed>|\stdClass $delivery_selection
 * @property-read DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass $inventory_reservation
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionResultInput extends Model {
    /** @param array{'checkout_session': CheckoutSessionInput|array<array-key, mixed>|\stdClass, 'delivery_selection': DeliverySelectionInput|array<array-key, mixed>|\stdClass, 'inventory_reservation'?: DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass, 'order': OrderInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionResultInput')); }
    /** Shape $ (Value): {@see CheckoutSessionInput}. A session in which a buyer completes an order's payment.
     * @return CheckoutSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): mixed { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** Shape $ (Value): {@see DeliverySelectionInput}. The delivery choice selected for a checkout or order.
     * @return DeliverySelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_selection is omitted; use hasDeliverySelection() or valueOrDefault().
     */
    public function getDeliverySelection(): mixed { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** Shape $ (Value): {@see DeliveryInventoryReservationSummaryInput}. The inventory reservation held for a delivery selection: its owner, status, expiry, and the next action required.
     * @return DeliveryInventoryReservationSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_reservation is omitted; use hasInventoryReservation() or valueOrDefault().
     */
    public function getInventoryReservation(): mixed { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
    /** Shape $ (Value): {@see OrderInput}. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
}
