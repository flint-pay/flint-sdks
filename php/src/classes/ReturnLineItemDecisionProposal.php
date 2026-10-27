<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read ?string $automatic_resolution_type
 * @property-read string $based_on_quantity
 * @property-read bool $is_inspection_required
 * @property-read ?string $receiving_location_id
 * @property-read ?string $release_timing
 * @property-read string $return_required_quantity
 * Presence-aware response; omitted optional fields return null. */
final class ReturnLineItemDecisionProposal extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'automatic_resolution_type'?: string, 'based_on_quantity': string, 'is_inspection_required': bool, 'receiving_location_id'?: string, 'release_timing'?: string, 'return_required_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemDecisionProposal')); }
    /** Shape $ (Value): Array of string.  [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Shape $ (Value): string. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Value enum: "refund", "store_credit", "no_monetary_action".
     * @return ?string
     */
    public function getAutomaticResolutionType(): ?string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getBasedOnQuantity(): string { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReceivingLocationId(): ?string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): string. The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return ?string
     */
    public function getReleaseTiming(): ?string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReturnRequiredQuantity(): string { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
}
