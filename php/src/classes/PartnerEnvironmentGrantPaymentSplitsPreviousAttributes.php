<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $approved_at
 * @property-read string|null $seller_terms_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerEnvironmentGrantPaymentSplitsPreviousAttributes extends Model {
    /** @param array{'approved_at'?: mixed, 'seller_terms_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantPaymentSplitsPreviousAttributes')); }
    /** When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. anyOf[1] (Value): string. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApprovedAt(): string|null { return $this->get('approved_at'); }
    public function hasApprovedAt(): bool { return $this->has('approved_at'); }
    /** The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. anyOf[1] (Value): string. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri. maxLength: 2048. pattern: ^https://. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSellerTermsUrl(): string|null { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
