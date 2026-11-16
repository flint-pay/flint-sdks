<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $seller_terms_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPaymentSplitsPreviousAttributes extends Model {
    /** @param array{'seller_terms_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPaymentSplitsPreviousAttributes')); }
    /** The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. anyOf[1] (Value): string. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: uri. maxLength: 2048. pattern: ^https://. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSellerTermsUrl(): string|null { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
