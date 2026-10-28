<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $checkout_reminders
 * @property-read string $expected_version
 * @property-read bool $shipping_updates
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCustomerEmailPreferencesRequestInput extends Model {
    /** @param array{'checkout_reminders'?: bool, 'expected_version'?: string, 'shipping_updates'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCustomerEmailPreferencesRequestInput')); }
    /** Shape $ (Value): boolean. A reminder after leaving checkout without paying.
     * @return bool
     * @throws SdkError When checkout_reminders is omitted; use hasCheckoutReminders() or valueOrDefault().
     */
    public function getCheckoutReminders(): bool { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): boolean. Emails about shipments and deliveries, such as shipped, out for delivery, and delivered.
     * @return bool
     * @throws SdkError When shipping_updates is omitted; use hasShippingUpdates() or valueOrDefault().
     */
    public function getShippingUpdates(): bool { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
}
