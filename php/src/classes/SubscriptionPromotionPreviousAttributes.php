<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $first_cycle
 * @property-read string|null $name
 * @property-read mixed $promotion_code_id
 * @property-read string|null $promotion_id
 * @property-read mixed $recurrence
 * @property-read mixed $remaining_cycles
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPromotionPreviousAttributes extends Model {
    /** @param array{'first_cycle'?: mixed, 'name'?: mixed, 'promotion_code_id'?: mixed, 'promotion_id'?: mixed, 'recurrence'?: mixed, 'remaining_cycles'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotionPreviousAttributes')); }
    /** First charged cycle eligible for this promotion. anyOf[1] (Value): integer. First charged cycle eligible for this promotion. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getFirstCycle(): int|null { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. anyOf[1] (Value): string. Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the promotion code used to attach the promotion. Null when no promotion code was used. anyOf[1] (Value): string or null. ID of the promotion code used to attach the promotion. Null when no promotion code was used. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPromotionCodeId(): mixed { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** ID of the promotion attached to the subscription. anyOf[1] (Value): string. ID of the promotion attached to the subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** How often the promotion's discount repeats, frozen when the promotion was attached. anyOf[1] (Value): {@see PromotionRecurrencePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. anyOf[1] (Value): integer or null. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: int64. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRemainingCycles(): mixed { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
}
