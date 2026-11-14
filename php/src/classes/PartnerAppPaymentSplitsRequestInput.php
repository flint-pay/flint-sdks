<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $seller_terms_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPaymentSplitsRequestInput extends Model {
    /** @param array{'seller_terms_url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPaymentSplitsRequestInput')); }
    /** The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When seller_terms_url is omitted; use hasSellerTermsUrl() or valueOrDefault().
     */
    public function getSellerTermsUrl(): string { return $this->get('seller_terms_url'); }
    public function hasSellerTermsUrl(): bool { return $this->has('seller_terms_url'); }
}
