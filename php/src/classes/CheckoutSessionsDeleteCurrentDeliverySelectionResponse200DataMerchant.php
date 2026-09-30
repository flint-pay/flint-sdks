<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read CheckoutSession $checkout_session
 * @property-read DeliverySelection $delivery_selection
 * @property-read DeliveryInventoryReservationSummary $inventory_reservation
 * @property-read Order $order
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSessionsDeleteCurrentDeliverySelectionResponse200DataMerchant extends Model {
    /** @param array{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsDeleteCurrentDeliverySelectionResponse200DataMerchant')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return CheckoutSession
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** @return DeliverySelection
     * @throws SdkError When delivery_selection is omitted; use hasDeliverySelection() or valueOrDefault().
     */
    public function getDeliverySelection(): DeliverySelection { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** @return DeliveryInventoryReservationSummary
     * @throws SdkError When inventory_reservation is omitted; use hasInventoryReservation() or valueOrDefault().
     */
    public function getInventoryReservation(): DeliveryInventoryReservationSummary { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
    /** @return Order
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
}
