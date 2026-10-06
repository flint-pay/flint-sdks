<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'setup_payment_source': array{'token': string}|object}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersPayInput extends Model {
    /** @param array{'order_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'X-Request-Id'?: string, 'Flint-Buyer-Device'?: string, 'Flint-Version'?: string, 'body': array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'setup_payment_source': array{'token': string}|object}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersPayInput')); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-ID is omitted; use hasXCheckoutSessionId() or valueOrDefault().
     */
    public function getXCheckoutSessionId(): string { return $this->get('X-Checkout-Session-ID'); }
    public function hasXCheckoutSessionId(): bool { return $this->has('X-Checkout-Session-ID'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-Secret is omitted; use hasXCheckoutSessionSecret() or valueOrDefault().
     */
    public function getXCheckoutSessionSecret(): string { return $this->get('X-Checkout-Session-Secret'); }
    public function hasXCheckoutSessionSecret(): bool { return $this->has('X-Checkout-Session-Secret'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Buyer-Device is omitted; use hasFlintBuyerDevice() or valueOrDefault().
     */
    public function getFlintBuyerDevice(): string { return $this->get('Flint-Buyer-Device'); }
    public function hasFlintBuyerDevice(): bool { return $this->has('Flint-Buyer-Device'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'setup_payment_source': array{'token': string}|object}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
