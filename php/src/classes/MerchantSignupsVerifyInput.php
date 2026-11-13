<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $merchant_signup_id
 * @property-read array{'expected_version'?: int, 'terms_acceptance': mixed, 'verification_code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupsVerifyInput extends Model {
    /** @param array{'merchant_signup_id': string, 'body': array{'expected_version'?: int, 'terms_acceptance': mixed, 'verification_code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupsVerifyInput')); }
    /** ID of the merchant signup. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     * @return string
     * @throws SdkError When merchant_signup_id is omitted; use hasMerchantSignupId() or valueOrDefault().
     */
    public function getMerchantSignupId(): string { return $this->get('merchant_signup_id'); }
    public function hasMerchantSignupId(): bool { return $this->has('merchant_signup_id'); }
    /** The request body for: Verify a merchant signup. Example: {"expected_version":1,"terms_acceptance":{"ip_address":"203.0.113.7","merchant_terms_version":"2026-10-01","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/605.1.15"},"verification_code":"K7QM-4TXD"}.
     * @return array{'expected_version'?: int, 'terms_acceptance': mixed, 'verification_code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
