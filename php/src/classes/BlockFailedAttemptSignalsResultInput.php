<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $block_list_item_types
 * @property-read string $payment_attempt_id
 * @property-read string $payment_intent_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BlockFailedAttemptSignalsResultInput extends Model {
    /** @param array{'block_list_item_types': list<string>, 'payment_attempt_id': string, 'payment_intent_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BlockFailedAttemptSignalsResultInput')); }
    /** Types of signals now on the default lists, including existing entries. Empty if the attempt carried no blockable signals. [] (Value): string.
     * @return list<string>
     * @throws SdkError When block_list_item_types is omitted; use hasBlockListItemTypes() or valueOrDefault().
     */
    public function getBlockListItemTypes(): array { return $this->get('block_list_item_types'); }
    public function hasBlockListItemTypes(): bool { return $this->has('block_list_item_types'); }
    /** The attempt whose retained signals were used. Example: "pia_01KEZF7C00CGGHWWR7KPCGNJRM".
     * @return string
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
    /** The payment intent that owns the attempt. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
}
