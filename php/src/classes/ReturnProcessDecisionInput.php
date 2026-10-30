<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read int $approved_quantity
 * @property-read string|null $automatic_resolution_type
 * @property-read string $decline_reason
 * @property-read string $decline_reason_message
 * @property-read bool $is_inspection_required
 * @property-read string $override_reason
 * @property-read string $override_reason_message
 * @property-read string $receiving_location_id
 * @property-read string $release_timing
 * @property-read int $return_required_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessDecisionInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessDecisionInput')); }
    /** Optional replacement for the entire starting list. Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in that order, independent of the original payment's refundability. The resulting list must be valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Required whole-number quantity from zero through the line's requested_quantity; fractional quantities are not supported. When approved_quantity is below requested_quantity, send decline_reason; decline_reason_message is optional. Both decline fields are forbidden when all requested quantity is approved. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When approved_quantity is omitted; use hasApprovedQuantity() or valueOrDefault().
     */
    public function getApprovedQuantity(): int { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** Optional refund, store_credit, or no_monetary_action that Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the absent value from no-policy defaults. Send null to resolve the line manually; clearing a policy proposal's automatic value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit", "no_monetary_action", null.
     * @return string|null
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string|null { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     * @return string
     * @throws SdkError When decline_reason is omitted; use hasDeclineReason() or valueOrDefault().
     */
    public function getDeclineReason(): string { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code points), counted before normalization. Requires decline_reason and is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When decline_reason_message is omitted; use hasDeclineReasonMessage() or valueOrDefault().
     */
    public function getDeclineReasonMessage(): string { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** Optional inspection requirement. Defaults to the buildable pinned policy proposal or false when no proposal can be built. The resulting requirement must be reachable with the merged merchandise quantity and release timing.
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Required when a decision differs from a buildable pinned policy proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. The release timing fill also applies to the proposal and does not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value enum: "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion", "other".
     * @return string
     * @throws SdkError When override_reason is omitted; use hasOverrideReason() or valueOrDefault().
     */
    public function getOverrideReason(): string { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** Optional explanation accompanying override_reason. Requires override_reason and is forbidden without a pinned policy. minLength: 1.
     * @return string
     * @throws SdkError When override_reason_message is omitted; use hasOverrideReasonMessage() or valueOrDefault().
     */
    public function getOverrideReasonMessage(): string { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
    /** Optional receiving Location with a postal address. Defaults to the buildable pinned policy proposal or no location when no proposal can be built. Required when the resulting return_required_quantity is above zero and there is no starting location. A process receipt does not supply the decision's location. minLength: 1.
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Optional gate for every resolution type. Defaults to the policy proposal's timing when set. After merging supplied fields, an unset timing becomes after_inspection when return_required_quantity is above zero and inspection is required, after_receipt when return_required_quantity is above zero without inspection, or after_approval when return_required_quantity is zero. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): int { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
}
