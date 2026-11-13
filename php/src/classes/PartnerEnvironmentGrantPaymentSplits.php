<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $approved_at
 * @property-read string $seller_terms_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerEnvironmentGrantPaymentSplits extends Model {
    /** @param array{'approved_at': string, 'seller_terms_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantPaymentSplits')); }
    /** When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: date-time.
     * @return string
     */
    public function getApprovedAt(): string { return $this->get('approved_at'); }
    public function hasApprovedAt(): bool { return $this->has('approved_at'); }
    /** The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri. maxLength: 2048. pattern: ^https://.
     * @return string
     */
    public function getSellerTermsUrl(): string { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
