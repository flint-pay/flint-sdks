<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $consumed_cycles
 * @property-read int $first_cycle
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPromotionRequestInput extends Model {
    /** @param array{'consumed_cycles'?: int, 'first_cycle'?: int, 'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotionRequestInput')); }
    /** Cycles already discounted on the previous system. Accepted only when billing_start.type is imported, even when 0; omit it otherwise. Defaults to 0. Must be less than period_count for repeating promotions and 0 for once and forever. Flint applies the remaining discounted cycles. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When consumed_cycles is omitted; use hasConsumedCycles() or valueOrDefault().
     */
    public function getConsumedCycles(): int { return $this->get('consumed_cycles'); }
    public function hasConsumedCycles(): bool { return $this->has('consumed_cycles'); }
    /** First charged cycle eligible for this promotion. Defaults to 1; for billing_start.type imported, defaults to billing_start.completed_cycles + 1 and cannot be earlier. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When first_cycle is omitted; use hasFirstCycle() or valueOrDefault().
     */
    public function getFirstCycle(): int { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** Promotion to attach, identified by exactly one of promotion_id or promotion_code. Its current terms are frozen when attached. Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return PromotionRefRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
}
