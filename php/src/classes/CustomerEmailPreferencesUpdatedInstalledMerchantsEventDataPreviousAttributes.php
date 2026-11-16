<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $checkout_reminders
 * @property-read string|null $customer_id
 * @property-read string|null $email
 * @property-read bool|null $shipping_updates
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerEmailPreferencesUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'checkout_reminders'?: mixed, 'customer_id'?: mixed, 'email'?: mixed, 'shipping_updates'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferencesUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. anyOf[1] (Value): boolean. A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCheckoutReminders(): bool|null { return $this->get('checkout_reminders'); }
    public function hasCheckoutReminders(): bool { return $this->has('checkout_reminders'); }
    /** ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. anyOf[1] (Value): string. ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. anyOf[1] (Value): string. The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. anyOf[1] (Value): boolean. Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShippingUpdates(): bool|null { return $this->get('shipping_updates'); }
    public function hasShippingUpdates(): bool { return $this->has('shipping_updates'); }
    /** The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. anyOf[1] (Value): integer. The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
