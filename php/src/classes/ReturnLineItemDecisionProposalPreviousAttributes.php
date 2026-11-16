<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read string|null $automatic_resolution_type
 * @property-read int|null $based_on_quantity
 * @property-read bool|null $is_inspection_required
 * @property-read string|null $receiving_location_id
 * @property-read string|null $release_timing
 * @property-read int|null $return_required_quantity
 * Presence-aware response; omitted optional fields return null. */
final class ReturnLineItemDecisionProposalPreviousAttributes extends Model {
    /** @param array{'allowed_resolution_types'?: mixed, 'automatic_resolution_type'?: mixed, 'based_on_quantity'?: mixed, 'is_inspection_required'?: mixed, 'receiving_location_id'?: mixed, 'release_timing'?: mixed, 'return_required_quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemDecisionProposalPreviousAttributes')); }
    /** Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedResolutionTypes(): array|null { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Value enum: "refund", "store_credit", "no_monetary_action". anyOf[1] (Value): string. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Value enum: "refund", "store_credit", "no_monetary_action". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAutomaticResolutionType(): string|null { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBasedOnQuantity(): int|null { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** Whether the proposal requires inspection of the returned units. anyOf[1] (Value): boolean. Whether the proposal requires inspection of the returned units. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsInspectionRequired(): bool|null { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** ID of the Location the proposal sends returned merchandise to. anyOf[1] (Value): string. ID of the Location the proposal sends returned merchandise to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivingLocationId(): string|null { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleaseTiming(): string|null { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReturnRequiredQuantity(): int|null { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
}
