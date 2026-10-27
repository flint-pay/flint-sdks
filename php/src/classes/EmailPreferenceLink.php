<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_id
 * @property-read string $email
 * @property-read string $email_preference
 * @property-read bool $enabled
 * Presence-aware response; omitted optional fields return null. */
final class EmailPreferenceLink extends Model {
    /** @param array{'customer_id': string|null, 'email': string, 'email_preference': string, 'enabled': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLink')); }
    /** Shape $ (Value): string or null. Flint customer ID when the email belongs to an active customer in this merchant environment. Null for a guest email.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string.  Value enum: "shipping_updates", "checkout_reminders", "other".
     * @return string
     */
    public function getEmailPreference(): string { return $this->get('email_preference'); }
    public function hasEmailPreference(): bool { return $this->has('email_preference'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
