<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $seller_terms_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPaymentSplitsPreviousAttributesInput extends Model {
    /** @param array{'seller_terms_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPaymentSplitsPreviousAttributesInput')); }
    /** The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. anyOf[1] (Value): string. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: uri. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When seller_terms_url is omitted; use hasSellerTermsUrl() or valueOrDefault().
     */
    public function getSellerTermsUrl(): mixed { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
