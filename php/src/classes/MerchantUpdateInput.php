<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_api_version'?: string, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'timezone'?: string, 'website_url'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantUpdateInput extends Model {
    /** @param array{'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_api_version'?: string, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'timezone'?: string, 'website_url'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdateInput')); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
    /** The request body for: Update merchant. minProperties: 1. Example: {"business_name":"Flint Events LLC","metadata":{"segment":"festivals"},"phone":"+14155550000","support_email":"help@example.com"}.
     * @return array{'address'?: mixed, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_api_version'?: string, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'timezone'?: string, 'website_url'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
