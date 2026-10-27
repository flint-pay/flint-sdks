<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionApplicationMethodRequestInput|array<array-key, mixed>|\stdClass $application_method
 * @property-read list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass> $codes
 * @property-read PromotionCombinesWithRequestInput|array<array-key, mixed>|\stdClass $combines_with
 * @property-read string $description
 * @property-read string $discount_class
 * @property-read string $display_name
 * @property-read PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass $eligibility_rules
 * @property-read PromotionExclusivityRequestInput|array<array-key, mixed>|\stdClass $exclusivity
 * @property-read string $external_reference_id
 * @property-read string $max_uses
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $redemption_type
 * @property-read PromotionScheduleInput|array<array-key, mixed>|\stdClass $schedule
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePromotionRequestInput extends Model {
    /** @param array{'application_method': PromotionApplicationMethodRequestInput|array<array-key, mixed>|\stdClass, 'codes'?: list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass>, 'combines_with'?: PromotionCombinesWithRequestInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'redemption_type'?: string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePromotionRequestInput')); }
    /** Shape $ (Value): {@see PromotionApplicationMethodRequestInput}. Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields.
     * @return PromotionApplicationMethodRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When application_method is omitted; use hasApplicationMethod() or valueOrDefault().
     */
    public function getApplicationMethod(): mixed { return $this->get('application_method'); }
    public function hasApplicationMethod(): bool { return $this->has('application_method'); }
    /** Shape $ (Value): Array of {@see CreatePromotionCodeRequestInput}. Codes to create with a code-gated promotion, at most 100. The create response returns them in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: 100. Shape $[] (Value): {@see CreatePromotionCodeRequestInput}. The request body for: Create promotion code.
     * @return list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When codes is omitted; use hasCodes() or valueOrDefault().
     */
    public function getCodes(): array { return $this->get('codes'); }
    public function hasCodes(): bool { return $this->has('codes'); }
    /** Shape $ (Value): {@see PromotionCombinesWithRequestInput}. Which discount classes this promotion can combine with. Omitted classes default to true. Which promotion discount classes this promotion can combine with. Omitted classes default to true.
     * @return PromotionCombinesWithRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When combines_with is omitted; use hasCombinesWith() or valueOrDefault().
     */
    public function getCombinesWith(): mixed { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** Shape $ (Value): string. Optional description of the promotion for your own records. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Defaults to order when omitted. Default: "order". Value enum: "order", "line_item", "service_charge".
     * @return string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name when omitted. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When display_name is omitted; use hasDisplayName() or valueOrDefault().
     */
    public function getDisplayName(): string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Shape $ (Value): {@see PromotionRuleGroupRequestInput}. Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility_rules is omitted; use hasEligibilityRules() or valueOrDefault().
     */
    public function getEligibilityRules(): mixed { return $this->get('eligibility_rules'); }
    public function hasEligibilityRules(): bool { return $this->has('eligibility_rules'); }
    /** Shape $ (Value): {@see PromotionExclusivityRequestInput}. Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order.
     * @return PromotionExclusivityRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exclusivity is omitted; use hasExclusivity() or valueOrDefault().
     */
    public function getExclusivity(): mixed { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer string. Maximum number of redemptions across all codes and automatic applications. Omit for no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When max_uses is omitted; use hasMaxUses() or valueOrDefault().
     */
    public function getMaxUses(): string { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting. This is not intended for buyer-facing checkout or receipt copy. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Whether the promotion applies automatically when its rules match or requires a promotion code. Value enum: "automatic", "code".
     * @return string
     * @throws SdkError When redemption_type is omitted; use hasRedemptionType() or valueOrDefault().
     */
    public function getRedemptionType(): string { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** Shape $ (Value): {@see PromotionScheduleInput}. Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in.
     * @return PromotionScheduleInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When schedule is omitted; use hasSchedule() or valueOrDefault().
     */
    public function getSchedule(): mixed { return $this->get('schedule'); }
    public function hasSchedule(): bool { return $this->has('schedule'); }
    /** Shape $ (Value): string. Lifecycle status. Defaults to active; send inactive to create a promotion that is switched off. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
