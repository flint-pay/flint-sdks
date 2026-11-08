<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approval_mode
 * @property-read string $automatic_resolution_type
 * @property-read string $completion_mode
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $effective_at
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
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * @property-read ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass $return_shipping
 * @property-read ReturnWindowInput|array<array-key, mixed>|\stdClass $return_window
 * @property-read ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass $scope
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyRevisionInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'effective_at'?: string|\DateTimeInterface, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'release_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass, 'return_window'?: ReturnWindowInput|array<array-key, mixed>|\stdClass, 'scope': ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyRevisionInput')); }
    /** Resolution types a request can use under this policy. A value can't repeat. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
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
    /** Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund", "store_credit", "no_monetary_action".
     * @return string
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** Whether Flint completes a Return judged under this policy when its last completion blocker clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When this revision started judging requests: when it became current on an active policy, or when its policy was first activated. Absent if it was never current while the policy was active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When effective_at is omitted; use hasEffectiveAt() or valueOrDefault().
     */
    public function getEffectiveAt(): string|\DateTimeInterface { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** What the policy decides for items it covers. Value enum: "eligible", "ineligible", "review_required".
     * @return string
     * @throws SdkError When eligibility_result is omitted; use hasEligibilityResult() or valueOrDefault().
     */
    public function getEligibilityResult(): string { return $this->get('eligibility_result'); }
    public function hasEligibilityResult(): bool { return $this->has('eligibility_result'); }
    /** Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return string
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Whether returned merchandise must be inspected. Leave out when no merchandise has to come back.
     * @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money.
     * @return bool
     * @throws SdkError When is_merchandise_return_required is omitted; use hasIsMerchandiseReturnRequired() or valueOrDefault().
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: int32.
     * @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When receipt_disposition_mode is omitted; use hasReceiptDispositionMode() or valueOrDefault().
     */
    public function getReceiptDispositionMode(): string { return $this->get('receipt_disposition_mode'); }
    public function hasReceiptDispositionMode(): bool { return $this->has('receipt_disposition_mode'); }
    /** ID of the Location buyers send the merchandise to. Required when merchandise has to come back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     * @return string
     * @throws SdkError When release_timing is omitted; use hasReleaseTiming() or valueOrDefault().
     */
    public function getReleaseTiming(): string { return $this->get('release_timing'); }
    public function hasReleaseTiming(): bool { return $this->has('release_timing'); }
    /** Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you (`manual`). Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested".
     * @return string
     * @throws SdkError When resolution_selection_mode is omitted; use hasResolutionSelectionMode() or valueOrDefault().
     */
    public function getResolutionSelectionMode(): string { return $this->get('resolution_selection_mode'); }
    public function hasResolutionSelectionMode(): bool { return $this->has('resolution_selection_mode'); }
    /** Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return policy, charged as a flat amount or a percent.
     * @return ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When restocking_fee is omitted; use hasRestockingFee() or valueOrDefault().
     */
    public function getRestockingFee(): mixed { return $this->get('restocking_fee'); }
    public function hasRestockingFee(): bool { return $this->has('restocking_fee'); }
    /** ID of the policy this revision belongs to. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     * @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Unique identifier for this return policy revision, prefixed `rpolv_`. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     * @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer.
     * @return ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_shipping is omitted; use hasReturnShipping() or valueOrDefault().
     */
    public function getReturnShipping(): mixed { return $this->get('return_shipping'); }
    public function hasReturnShipping(): bool { return $this->has('return_shipping'); }
    /** How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.
     * @return ReturnWindowInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_window is omitted; use hasReturnWindow() or valueOrDefault().
     */
    public function getReturnWindow(): mixed { return $this->get('return_window'); }
    public function hasReturnWindow(): bool { return $this->has('return_window'); }
    /** Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.
     * @return ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): mixed { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
}
