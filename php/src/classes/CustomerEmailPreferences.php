<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $checkout_reminders
 * @property-read string $customer_id
 * @property-read bool $shipping_updates
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerEmailPreferences extends Model {
    /** @param array{'checkout_reminders': bool, 'customer_id': string, 'shipping_updates': bool, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferences')); }
    /** A reminder after leaving checkout without paying.
     * @return bool
     */
    public function getCheckoutReminders(): bool { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** Flint customer ID fixed by the customer session.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Emails about shipments and deliveries, such as shipped, out for delivery, and delivered.
     * @return bool
     */
    public function getShippingUpdates(): bool { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
    /** Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
