<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $location_id
 * @property-read array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationsUpdateInput extends Model {
    /** @param array{'location_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationsUpdateInput')); }
    /** Flint Location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
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
    /** Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change. minProperties: 1. Example: {"expected_version":4,"inventory_allocation_enabled":true,"name":"Brooklyn warehouse (Kent Ave)","timezone":"America/New_York"}.
     * @return array{'address'?: mixed, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
