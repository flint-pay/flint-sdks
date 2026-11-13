<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $approved_at
 * @property-read string $seller_terms_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerEnvironmentGrantPaymentSplitsInput extends Model {
    /** @param array{'approved_at': string|\DateTimeInterface, 'seller_terms_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantPaymentSplitsInput')); }
    /** When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When approved_at is omitted; use hasApprovedAt() or valueOrDefault().
     */
    public function getApprovedAt(): string|\DateTimeInterface { return $this->get('approved_at'); }
    public function hasApprovedAt(): bool { return $this->has('approved_at'); }
    /** The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When seller_terms_url is omitted; use hasSellerTermsUrl() or valueOrDefault().
     */
    public function getSellerTermsUrl(): string { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
