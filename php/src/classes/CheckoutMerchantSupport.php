<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $email
 * @property-read ?string $phone
 * @property-read ?string $url
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutMerchantSupport extends Model {
    /** @param array{'email'?: string, 'phone'?: string, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutMerchantSupport')); }
    /** Support email address. Format: email.
     * @return ?string
     */
    public function getEmail(): ?string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Support phone number.
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Support page, as an absolute http or https URL. Format: uri.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
