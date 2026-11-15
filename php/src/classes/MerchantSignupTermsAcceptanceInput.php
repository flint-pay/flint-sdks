<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $accepted_at
 * @property-read string $merchant_terms_version
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupTermsAcceptanceInput extends Model {
    /** @param array{'accepted_at': string|\DateTimeInterface, 'merchant_terms_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupTermsAcceptanceInput')); }
    /** When the owner accepted the terms. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): string|\DateTimeInterface { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The terms version accepted.
     * @return string
     * @throws SdkError When merchant_terms_version is omitted; use hasMerchantTermsVersion() or valueOrDefault().
     */
    public function getMerchantTermsVersion(): string { return $this->get('merchant_terms_version'); }
    public function hasMerchantTermsVersion(): bool { return $this->has('merchant_terms_version'); }
}
