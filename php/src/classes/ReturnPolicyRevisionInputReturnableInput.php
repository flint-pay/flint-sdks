<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approval_mode
 * @property-read string $automatic_resolution_type
 * @property-read string $completion_mode
 * @property-read string $eligibility_result
 * @property-read string $ineligibility_reason
 * @property-read bool $is_inspection_required
 * @property-read bool $is_merchandise_return_required
 * @property-read int $priority
 * @property-read string $receipt_disposition_mode
 * @property-read string $receiving_location_id
 * @property-read string $release_timing
 * @property-read string $resolution_mode
 * @property-read string $resolution_selection_mode
 * @property-read ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass $restocking_fee
 * @property-read ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass $return_shipping
 * @property-read ReturnWindowInput|array<array-key, mixed>|\stdClass $return_window
 * @property-read ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass $scope
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyRevisionInputReturnableInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyRevisionInputReturnableInput')); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When approval_mode is omitted; use hasApprovalMode() or valueOrDefault().
     */
    public function getApprovalMode(): string { return $this->get('approval_mode'); }
    public function hasApprovalMode(): bool { return $this->has('approval_mode'); }
    /** Value enum: "refund", "store_credit", "no_monetary_action".
     * @return string
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible", "review_required".
     * @return string
     * @throws SdkError When eligibility_result is omitted; use hasEligibilityResult() or valueOrDefault().
     */
    public function getEligibilityResult(): string { return $this->get('eligibility_result'); }
    public function hasEligibilityResult(): bool { return $this->has('eligibility_result'); }
    /** Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return string
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** is_inspection_required
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** is_merchandise_return_required
     * @return bool
     * @throws SdkError When is_merchandise_return_required is omitted; use hasIsMerchandiseReturnRequired() or valueOrDefault().
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** Controls verified merchandise after receipt. automatic creates a successful sellable disposition at the receiving location. For tracked merchandise, it also creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If the Return line requires inspection, creation waits for an accepted inspection. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When receipt_disposition_mode is omitted; use hasReceiptDispositionMode() or valueOrDefault().
     */
    public function getReceiptDispositionMode(): string { return $this->get('receipt_disposition_mode'); }
    public function hasReceiptDispositionMode(): bool { return $this->has('receipt_disposition_mode'); }
    /** Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: 1.
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Required whenever allowed_resolution_types contains refund or store_credit. For other types, an omitted timing defaults to after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required. after_handoff and after_receipt require is_merchandise_return_required, and after_inspection also requires is_inspection_required. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Value enum: "policy_default", "buyer_requested".
     * @return string
     * @throws SdkError When resolution_selection_mode is omitted; use hasResolutionSelectionMode() or valueOrDefault().
     */
    public function getResolutionSelectionMode(): string { return $this->get('resolution_selection_mode'); }
    public function hasResolutionSelectionMode(): bool { return $this->has('resolution_selection_mode'); }
    /** A restocking fee in a return policy, charged as a flat amount or a percent.
     * @return ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When restocking_fee is omitted; use hasRestockingFee() or valueOrDefault().
     */
    public function getRestockingFee(): mixed { return $this->get('restocking_fee'); }
    public function hasRestockingFee(): bool { return $this->has('restocking_fee'); }
    /** Who pays for return shipping in a return policy: the merchant or the buyer.
     * @return ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_shipping is omitted; use hasReturnShipping() or valueOrDefault().
     */
    public function getReturnShipping(): mixed { return $this->get('return_shipping'); }
    public function hasReturnShipping(): bool { return $this->has('return_shipping'); }
    /** How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.
     * @return ReturnWindowInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_window is omitted; use hasReturnWindow() or valueOrDefault().
     */
    public function getReturnWindow(): mixed { return $this->get('return_window'); }
    public function hasReturnWindow(): bool { return $this->has('return_window'); }
    /** The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.
     * @return ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): mixed { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
}
