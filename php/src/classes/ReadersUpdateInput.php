<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $reader_id
 * @property-read array{'device_id'?: string|null, 'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadersUpdateInput extends Model {
    /** @param array{'reader_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'device_id'?: string|null, 'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadersUpdateInput')); }
    /** Flint reader ID. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * @return string
     * @throws SdkError When reader_id is omitted; use hasReaderId() or valueOrDefault().
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
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
    /** A sparse reader update. A reader's type and location never change. minProperties: 1. Example: {"expected_version":1,"name":"Back counter"}.
     * @return array{'device_id'?: string|null, 'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
