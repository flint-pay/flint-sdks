<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_id
 * @property-read string $email
 * @property-read string $email_preference
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailPreferenceLinkInput extends Model {
    /** @param array{'customer_id': string|null, 'email': string, 'email_preference': string, 'enabled': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLinkInput')); }
    /** @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return string
     * @throws SdkError When email_preference is omitted; use hasEmailPreference() or valueOrDefault().
     */
    public function getEmailPreference(): string { return $this->get('email_preference'); }
    public function hasEmailPreference(): bool { return $this->has('email_preference'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
