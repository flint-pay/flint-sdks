<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionApplicationMethodPatchInput|array<array-key, mixed>|\stdClass $application_method
 * @property-read PromotionCombinesWithPatchInput|array<array-key, mixed>|\stdClass $combines_with
 * @property-read string|null $description
 * @property-read string $discount_class
 * @property-read string $display_name
 * @property-read array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null $eligibility_rules
 * @property-read array{'group'?: string, 'priority'?: int}|object|null $exclusivity
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read int|null $max_uses
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null $schedule
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePromotionRequestInput extends Model {
    /** @param array{'application_method'?: PromotionApplicationMethodPatchInput|array<array-key, mixed>|\stdClass, 'combines_with'?: PromotionCombinesWithPatchInput|array<array-key, mixed>|\stdClass, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePromotionRequestInput')); }
    /** Fields of the discount effect to change. Omitted fields keep their stored values. Send only application_method fields to change. Omitted fields keep their stored values. Sending a different type replaces the effect with the supplied effect fields; allocation, calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
     * @return PromotionApplicationMethodPatchInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When application_method is omitted; use hasApplicationMethod() or valueOrDefault().
     */
    public function getApplicationMethod(): mixed { return $this->get('application_method'); }
    public function hasApplicationMethod(): bool { return $this->has('application_method'); }
    /** Send only the classes to change. Omitted classes keep their current value. null, an empty object, and null classes are invalid. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values. minProperties: 1.
     * @return PromotionCombinesWithPatchInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When combines_with is omitted; use hasCombinesWith() or valueOrDefault().
     */
    public function getCombinesWith(): mixed { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** Description of the promotion for your own records. Send null to clear it. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Promotion discount class. Value enum: "order", "line_item", "service_charge".
     * @return string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When display_name is omitted; use hasDisplayName() or valueOrDefault().
     */
    public function getDisplayName(): string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions. anyOf[1] (Value): {@see PromotionRuleGroupRequestInput}. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value): null.
     * @return array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null
     * @throws SdkError When eligibility_rules is omitted; use hasEligibilityRules() or valueOrDefault().
     */
    public function getEligibilityRules(): mixed { return $this->get('eligibility_rules'); }
    public function hasEligibilityRules(): bool { return $this->has('eligibility_rules'); }
    /** Fields of the exclusivity group and priority to change. Send null to remove the promotion from its exclusivity group. anyOf[1] (Value): {@see PromotionExclusivityPatchInput}. Send only fields to change. Omitted fields keep their stored values. Send priority 0 to reset it. An empty object is invalid. minProperties: 1. anyOf[2] (Value): null.
     * @return array{'group'?: string, 'priority'?: int}|object|null
     * @throws SdkError When exclusivity is omitted; use hasExclusivity() or valueOrDefault().
     */
    public function getExclusivity(): mixed { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Resource version last read by the caller. Required when application_method or eligibility_rules is present, including an empty collection or a supported null clear. Optional for scalar updates. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum number of redemptions across all codes and automatic applications. Send null to remove the redemption limit. Format: int64.
     * @return int|null
     * @throws SdkError When max_uses is omitted; use hasMaxUses() or valueOrDefault().
     */
    public function getMaxUses(): int|null { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Internal promotion name for dashboards, searching, and reporting. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Fields of the promotion schedule to change. Send null to remove the schedule. anyOf[1] (Value): {@see PromotionSchedulePatchInput}. Send only fields to change. Omitted fields keep their stored values. null clears nullable subfields. An empty object is invalid. minProperties: 1. anyOf[2] (Value): null.
     * @return array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null
     * @throws SdkError When schedule is omitted; use hasSchedule() or valueOrDefault().
     */
    public function getSchedule(): mixed { return $this->get('schedule'); }
    public function hasSchedule(): bool { return $this->has('schedule'); }
    /** Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
