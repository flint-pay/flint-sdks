<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approval_mode
 * @property-read ?string $automatic_resolution_type
 * @property-read ?string $completion_mode
 * @property-read string $created_at
 * @property-read ?string $effective_at
 * @property-read string $eligibility_result
 * @property-read ?string $ineligibility_reason
 * @property-read ?bool $is_inspection_required
 * @property-read bool $is_merchandise_return_required
 * @property-read int $priority
 * @property-read string $receipt_disposition_mode
 * @property-read ?string $receiving_location_id
 * @property-read ?string $release_timing
 * @property-read ?string $resolution_mode
 * @property-read ?string $resolution_selection_mode
 * @property-read ?ReturnRestockingFeePolicy $restocking_fee
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * @property-read ?ReturnShippingPolicy $return_shipping
 * @property-read ?ReturnWindow $return_window
 * @property-read \stdClass $scope
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyRevision extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string, 'effective_at'?: string, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'release_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: mixed, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: mixed, 'return_window'?: mixed, 'scope': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyRevision')); }
    /** Shape $ (Value): Array of string.  [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". Shape $[] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     * @return string
     */
    public function getApprovalMode(): string { return $this->get('approval_mode'); }
    public function hasApprovalMode(): bool { return $this->has('approval_mode'); }
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action".
     * @return ?string
     */
    public function getAutomaticResolutionType(): ?string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Shape $ (Value): string.  Value enum: "manual", "automatic".
     * @return ?string
     */
    public function getCompletionMode(): ?string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getEffectiveAt(): ?string { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getEligibilityResult(): string { return $this->get('eligibility_result'); }
    public function hasEligibilityResult(): bool { return $this->has('eligibility_result'); }
    /** Shape $ (Value): string.  Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return ?string
     */
    public function getIneligibilityReason(): ?string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getIsInspectionRequired(): ?bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a successful sellable disposition at the receiving location. For tracked merchandise, it also creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If the Return line requires inspection, creation waits for an accepted inspection. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     * @return string
     */
    public function getReceiptDispositionMode(): string { return $this->get('receipt_disposition_mode'); }
    public function hasReceiptDispositionMode(): bool { return $this->has('receipt_disposition_mode'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReceivingLocationId(): ?string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return ?string
     */
    public function getReleaseTiming(): ?string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Shape $ (Value): string.  Value enum: "automatic", "manual".
     * @return ?string
     */
    public function getResolutionMode(): ?string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested".
     * @return ?string
     */
    public function getResolutionSelectionMode(): ?string { return $this->get('resolution_selection_mode'); }
    public function hasResolutionSelectionMode(): bool { return $this->has('resolution_selection_mode'); }
    /** Shape $ (Value): {@see ReturnRestockingFeePolicy}. A restocking fee in a return policy, charged as a flat amount or a percent.
     * @return ?ReturnRestockingFeePolicy
     */
    public function getRestockingFee(): ?ReturnRestockingFeePolicy { return $this->get('restocking_fee'); }
    public function hasRestockingFee(): bool { return $this->has('restocking_fee'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Shape $ (Value): {@see ReturnShippingPolicy}. Who pays for return shipping in a return policy: the merchant or the buyer.
     * @return ?ReturnShippingPolicy
     */
    public function getReturnShipping(): ?ReturnShippingPolicy { return $this->get('return_shipping'); }
    public function hasReturnShipping(): bool { return $this->has('return_shipping'); }
    /** Shape $ (Value): {@see ReturnWindow}. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.
     * @return ?ReturnWindow
     */
    public function getReturnWindow(): ?ReturnWindow { return $this->get('return_window'); }
    public function hasReturnWindow(): bool { return $this->has('return_window'); }
    /** Shape $ (Value): {@see ReturnPolicyScope}. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.
     * @return \stdClass
     */
    public function getScope(): \stdClass { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
}
