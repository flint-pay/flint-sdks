<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionApplicationMethodPercentOff|PromotionApplicationMethodAmountOff|PromotionApplicationMethodBuyXGetY|\stdClass $application_method
 * @property-read bool $available
 * @property-read ?list<PromotionCode> $codes
 * @property-read ?PromotionCodesSummary $codes_summary
 * @property-read PromotionCombinesWith $combines_with
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read string $discount_class
 * @property-read string $display_name
 * @property-read mixed $eligibility_rules
 * @property-read ?PromotionExclusivity $exclusivity
 * @property-read ?string $external_reference_id
 * @property-read ?string $max_uses
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $promotion_id
 * @property-read string $redemption_type
 * @property-read ?PromotionSchedule $schedule
 * @property-read string $status
 * @property-read ?string $unavailable_reason
 * @property-read ?string $updated_at
 * @property-read string $uses_count
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Promotion extends Model {
    /** @param array{'application_method': mixed, 'available': bool, 'codes'?: list<mixed>, 'codes_summary'?: mixed, 'combines_with': mixed, 'created_at'?: string, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: \stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: mixed, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string, 'uses_count': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Promotion')); }
    /** Shape $ (Value): {@see PromotionApplicationMethod}. Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields.
     * @return PromotionApplicationMethodPercentOff|PromotionApplicationMethodAmountOff|PromotionApplicationMethodBuyXGetY|\stdClass
     */
    public function getApplicationMethod(): PromotionApplicationMethodPercentOff|PromotionApplicationMethodAmountOff|PromotionApplicationMethodBuyXGetY|\stdClass { return $this->get('application_method'); }
    public function hasApplicationMethod(): bool { return $this->has('application_method'); }
    /** Shape $ (Value): boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code.
     * @return bool
     */
    public function getAvailable(): bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Shape $ (Value): Array of {@see PromotionCode}. The codes this request created, in request order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. Shape $[] (Value): {@see PromotionCode}. A code a buyer enters to claim a promotion.
     * @return ?list<PromotionCode>
     */
    public function getCodes(): ?array { return $this->get('codes'); }
    public function hasCodes(): bool { return $this->has('codes'); }
    /** Shape $ (Value): {@see PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code.
     * @return ?PromotionCodesSummary
     */
    public function getCodesSummary(): ?PromotionCodesSummary { return $this->get('codes_summary'); }
    public function hasCodesSummary(): bool { return $this->has('codes_summary'); }
    /** Shape $ (Value): {@see PromotionCombinesWith}. Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts.
     * @return PromotionCombinesWith
     */
    public function getCombinesWith(): PromotionCombinesWith { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** Shape $ (Value): string. When the promotion was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Optional description of the promotion for your own records.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Whether the promotion discounts the order, individual line items, or service charges. Value enum: "order", "line_item", "service_charge".
     * @return string
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount surfaces.
     * @return string
     */
    public function getDisplayName(): string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Shape $ (Value): {@see PromotionRuleGroup}. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return mixed
     */
    public function getEligibilityRules(): mixed { return $this->get('eligibility_rules'); }
    public function hasEligibilityRules(): bool { return $this->has('eligibility_rules'); }
    /** Shape $ (Value): {@see PromotionExclusivity}. Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order.
     * @return ?PromotionExclusivity
     */
    public function getExclusivity(): ?PromotionExclusivity { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer string. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getMaxUses(): ?string { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Key-value data you attach to the promotion. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Unique identifier for the promotion.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): string. Whether the promotion applies automatically when its rules match or requires a promotion code. Value enum: "automatic", "code".
     * @return string
     */
    public function getRedemptionType(): string { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** Shape $ (Value): {@see PromotionSchedule}. Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in.
     * @return ?PromotionSchedule
     */
    public function getSchedule(): ?PromotionSchedule { return $this->get('schedule'); }
    public function hasSchedule(): bool { return $this->has('schedule'); }
    /** Shape $ (Value): string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Why available is false. Present only when available is false. Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** Shape $ (Value): string. When the promotion was last updated, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Number of times the promotion has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getUsesCount(): string { return $this->get('uses_count'); }
    public function hasUsesCount(): bool { return $this->has('uses_count'); }
    /** Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
