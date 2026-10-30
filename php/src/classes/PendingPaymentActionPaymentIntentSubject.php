<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_intent_id
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionPaymentIntentSubject extends Model {
    /** @param array{'payment_intent_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionPaymentIntentSubject')); }
    /** payment_intent_id
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
