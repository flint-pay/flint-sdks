<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_intent_id
 * @property-read array{'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsConfirmInput extends Model {
    /** @param array{'payment_intent_id': string, 'Flint-Buyer-Device'?: string, 'body': array{'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsConfirmInput')); }
    /** Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** An optional stable random device identifier, independent of the payment intent. Keep it for subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     * @return string
     * @throws SdkError When Flint-Buyer-Device is omitted; use hasFlintBuyerDevice() or valueOrDefault().
     */
    public function getFlintBuyerDevice(): string { return $this->get('Flint-Buyer-Device'); }
    public function hasFlintBuyerDevice(): bool { return $this->has('Flint-Buyer-Device'); }
    /** The request body for: Confirm payment intent. Example: {"credential_type":"stripe_confirmation_token","save_payment_method":true,"stripe":{"confirmation_token":"ctoken_123"}}.
     * @return array{'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
