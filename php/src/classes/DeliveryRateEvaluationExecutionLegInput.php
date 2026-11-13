<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryRateEvaluationAllocationInput|array<array-key, mixed>|\stdClass> $allocations
 * @property-read string $delivery_execution_leg_id
 * @property-read string $fingerprint
 * @property-read int $origin_geography_version
 * @property-read string $origin_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationExecutionLegInput extends Model {
    /** @param array{'allocations': list<DeliveryRateEvaluationAllocationInput|array<array-key, mixed>|\stdClass>, 'delivery_execution_leg_id': string, 'fingerprint': string, 'origin_geography_version': int, 'origin_location_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationExecutionLegInput')); }
    /** The order lines this leg ships, with their quantities and merchandise values. [] (Value): {@see DeliveryRateEvaluationAllocationInput}. Units of one order line that an execution leg ships.
     * @return list<DeliveryRateEvaluationAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When allocations is omitted; use hasAllocations() or valueOrDefault().
     */
    public function getAllocations(): array { return $this->get('allocations'); }
    public function hasAllocations(): bool { return $this->has('allocations'); }
    /** Flint's ID for this leg. It can differ between requests for the same plan; compare legs by fingerprint. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * @return string
     * @throws SdkError When delivery_execution_leg_id is omitted; use hasDeliveryExecutionLegId() or valueOrDefault().
     */
    public function getDeliveryExecutionLegId(): string { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** Opaque fingerprint of the leg's origin and allocations. Equal fingerprints mean the same leg.
     * @return string
     * @throws SdkError When fingerprint is omitted; use hasFingerprint() or valueOrDefault().
     */
    public function getFingerprint(): string { return $this->get('fingerprint'); }
    public function hasFingerprint(): bool { return $this->has('fingerprint'); }
    /** The recorded geography version of origin_location_id that Flint used, as in a location_geography revocation target. Format: int64.
     * @return int
     * @throws SdkError When origin_geography_version is omitted; use hasOriginGeographyVersion() or valueOrDefault().
     */
    public function getOriginGeographyVersion(): int { return $this->get('origin_geography_version'); }
    public function hasOriginGeographyVersion(): bool { return $this->has('origin_geography_version'); }
    /** The Location the items leave from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
