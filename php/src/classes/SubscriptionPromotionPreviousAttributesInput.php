<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $first_cycle
 * @property-read string|null $name
 * @property-read string|null|null $promotion_code_id
 * @property-read string|null $promotion_id
 * @property-read PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurrence
 * @property-read int|null|null $remaining_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPromotionPreviousAttributesInput extends Model {
    /** @param array{'first_cycle'?: int|null, 'name'?: string|null, 'promotion_code_id'?: string|null|null, 'promotion_id'?: string|null, 'recurrence'?: PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'remaining_cycles'?: int|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotionPreviousAttributesInput')); }
    /** First charged cycle eligible for this promotion. anyOf[1] (Value): integer. First charged cycle eligible for this promotion. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When first_cycle is omitted; use hasFirstCycle() or valueOrDefault().
     */
    public function getFirstCycle(): mixed { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. anyOf[1] (Value): string. Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the promotion code used to attach the promotion. Null when no promotion code was used. anyOf[1] (Value): string or null. ID of the promotion code used to attach the promotion. Null when no promotion code was used. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): mixed { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** ID of the promotion attached to the subscription. anyOf[1] (Value): string. ID of the promotion attached to the subscription. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): mixed { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** How often the promotion's discount repeats, frozen when the promotion was attached. anyOf[1] (Value): {@see PromotionRecurrencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. anyOf[1] (Value): integer or null. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: int64. anyOf[2] (Value): null.
     * @return int|null|null
     * @throws SdkError When remaining_cycles is omitted; use hasRemainingCycles() or valueOrDefault().
     */
    public function getRemainingCycles(): mixed { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
}
