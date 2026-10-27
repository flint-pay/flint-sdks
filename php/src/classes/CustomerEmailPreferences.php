<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $checkout_reminders
 * @property-read string $customer_id
 * @property-read bool $shipping_updates
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerEmailPreferences extends Model {
    /** @param array{'checkout_reminders': bool, 'customer_id': string, 'shipping_updates': bool, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferences')); }
    /** Shape $ (Value): boolean. A reminder after leaving checkout without paying.
     * @return bool
     */
    public function getCheckoutReminders(): bool { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** Shape $ (Value): string. Flint customer ID fixed by the customer session.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): boolean. Emails about shipments and deliveries, such as shipped, out for delivery, and delivered.
     * @return bool
     */
    public function getShippingUpdates(): bool { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
