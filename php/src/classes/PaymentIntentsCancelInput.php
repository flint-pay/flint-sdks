<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_intent_id
 * @property-read array{'cancellation_reason'?: string, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsCancelInput extends Model {
    /** @param array{'payment_intent_id': string, 'body'?: array{'cancellation_reason'?: string, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsCancelInput')); }
    /** Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The request body for: Cancel payment intent. Example: {"cancellation_reason":"requested_by_customer"}.
     * @return array{'cancellation_reason'?: string, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
