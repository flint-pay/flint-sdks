<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accepted_at
 * @property-read string $merchant_terms_version
 * Presence-aware response; omitted optional fields return null. */
final class MerchantSignupTermsAcceptance extends Model {
    /** @param array{'accepted_at': string, 'merchant_terms_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupTermsAcceptance')); }
    /** When the owner accepted the terms. Format: date-time.
     * @return string
     */
    public function getAcceptedAt(): string { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The terms version accepted.
     * @return string
     */
    public function getMerchantTermsVersion(): string { return $this->get('merchant_terms_version'); }
    public function hasMerchantTermsVersion(): bool { return $this->has('merchant_terms_version'); }
}
