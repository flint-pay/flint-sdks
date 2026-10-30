<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $buyer_note
 * @property-read int $expected_version
 * @property-read int $requested_quantity
 * @property-read string|null $requested_resolution_type
 * @property-read string $return_reason_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsUpdateLineItemParams extends Model {
    /** @param array{'buyer_note'?: string|null, 'expected_version'?: int, 'requested_quantity'?: int, 'requested_resolution_type'?: string|null, 'return_reason_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsUpdateLineItemParams')); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Send null to clear it. Value enum: "refund", "exchange", "replacement", "no_monetary_action", null.
     * @return string|null
     * @throws SdkError When requested_resolution_type is omitted; use hasRequestedResolutionType() or valueOrDefault().
     */
    public function getRequestedResolutionType(): string|null { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** minLength: 1. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
}
