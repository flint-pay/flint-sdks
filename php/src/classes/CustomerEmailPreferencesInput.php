<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $checkout_reminders
 * @property-read string $customer_id
 * @property-read bool $shipping_updates
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerEmailPreferencesInput extends Model {
    /** @param array{'checkout_reminders': bool, 'customer_id': string, 'shipping_updates': bool, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferencesInput')); }
    /** Shape $ (Value): boolean. A reminder after leaving checkout without paying.
     * @return bool
     * @throws SdkError When checkout_reminders is omitted; use hasCheckoutReminders() or valueOrDefault().
     */
    public function getCheckoutReminders(): bool { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** Shape $ (Value): string. Flint customer ID fixed by the customer session.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): boolean. Emails about shipments and deliveries, such as shipped, out for delivery, and delivered.
     * @return bool
     * @throws SdkError When shipping_updates is omitted; use hasShippingUpdates() or valueOrDefault().
     */
    public function getShippingUpdates(): bool { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
