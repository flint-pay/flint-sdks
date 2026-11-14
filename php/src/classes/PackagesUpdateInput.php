<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesUpdateInput extends Model {
    /** @param array{'package_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesUpdateInput')); }
    /** Flint package ID. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
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
    /** The request body for: Update package. minProperties: 1. Example: {"expected_delivery_at":"2026-05-16T18:00:00Z","expected_version":1,"metadata":{"box":"small","packed_by":"warehouse-a"},"tracking_number":"1Z999AA10987654321","tracking_url":"https://track.example.com/1Z999AA10987654321"}.
     * @return array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
