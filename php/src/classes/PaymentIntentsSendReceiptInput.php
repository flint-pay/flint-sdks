<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_intent_id
 * @property-read array{'email'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsSendReceiptInput extends Model {
    /** @param array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'body'?: array{'email'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsSendReceiptInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Send a payment receipt.
     * @return array{'email'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
