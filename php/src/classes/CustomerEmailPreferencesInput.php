<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $checkout_reminders
 * @property-read string|null $customer_id
 * @property-read string $email
 * @property-read bool $shipping_updates
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerEmailPreferencesInput extends Model {
    /** @param array{'checkout_reminders': bool, 'customer_id': string|null, 'email': string, 'shipping_updates': bool, 'version': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferencesInput')); }
    /** A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either.
     * @return bool
     * @throws SdkError When checkout_reminders is omitted; use hasCheckoutReminders() or valueOrDefault().
     */
    public function getCheckoutReminders(): bool { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either.
     * @return bool
     * @throws SdkError When shipping_updates is omitted; use hasShippingUpdates() or valueOrDefault().
     */
    public function getShippingUpdates(): bool { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
    /** The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. Format: uint64. minimum: 1.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
