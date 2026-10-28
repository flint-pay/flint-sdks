<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_intent_id
 * @property-read array{'credential_type': string, 'expected_version'?: string, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsConfirmInput extends Model {
    /** @param array{'payment_intent_id': string, 'Flint-Buyer-Device'?: string, 'Idempotency-Key'?: string, 'body': array{'credential_type': string, 'expected_version'?: string, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsConfirmInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. pattern: ^[a-f0-9]{32}$.
     * @return string
     * @throws SdkError When Flint-Buyer-Device is omitted; use hasFlintBuyerDevice() or valueOrDefault().
     */
    public function getFlintBuyerDevice(): string { return $this->get('Flint-Buyer-Device'); }
    public function hasFlintBuyerDevice(): bool { return $this->has('Flint-Buyer-Device'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Confirm payment intent.
     * @return array{'credential_type': string, 'expected_version'?: string, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: string, 'save_payment_method'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
