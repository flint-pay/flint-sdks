<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $seller_terms_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPaymentSplits extends Model {
    /** @param array{'seller_terms_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPaymentSplits')); }
    /** The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: uri. maxLength: 2048. pattern: ^https://.
     * @return string
     */
    public function getSellerTermsUrl(): string { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
