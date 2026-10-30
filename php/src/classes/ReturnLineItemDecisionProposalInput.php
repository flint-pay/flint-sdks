<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $automatic_resolution_type
 * @property-read int $based_on_quantity
 * @property-read bool $is_inspection_required
 * @property-read string $receiving_location_id
 * @property-read string $release_timing
 * @property-read int $return_required_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemDecisionProposalInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'automatic_resolution_type'?: string, 'based_on_quantity': int, 'is_inspection_required': bool, 'receiving_location_id'?: string, 'release_timing'?: string, 'return_required_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemDecisionProposalInput')); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     * @return string
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When based_on_quantity is omitted; use hasBasedOnQuantity() or valueOrDefault().
     */
    public function getBasedOnQuantity(): int { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** is_inspection_required
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** receiving_location_id
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): int { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
}
