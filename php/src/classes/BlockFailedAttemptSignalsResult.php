<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $block_list_item_types
 * @property-read string $payment_attempt_id
 * @property-read string $payment_intent_id
 * Presence-aware response; omitted optional fields return null. */
final class BlockFailedAttemptSignalsResult extends Model {
    /** @param array{'block_list_item_types': list<string>, 'payment_attempt_id': string, 'payment_intent_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BlockFailedAttemptSignalsResult')); }
    /** Types of signals now on the default lists, including existing entries. Empty if the attempt carried no blockable signals. [] (Value): string.
     * @return list<string>
     */
    public function getBlockListItemTypes(): array { return $this->get('block_list_item_types'); }
    public function hasBlockListItemTypes(): bool { return $this->has('block_list_item_types'); }
    /** The attempt whose retained signals were used.
     * @return string
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
    /** The payment intent that owns the attempt.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
