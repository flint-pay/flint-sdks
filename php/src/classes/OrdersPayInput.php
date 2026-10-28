<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'setup_payment_source': mixed}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersPayInput extends Model {
    /** @param array{'order_id': string, 'Flint-Buyer-Device'?: string, 'Idempotency-Key'?: string, 'body': array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'setup_payment_source': mixed}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersPayInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
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
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Pay order.
     * @return array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_source'?: mixed, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'accepted_gift_card_allocation'?: mixed, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'payment_intents': list<mixed>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'expected_version'?: string, 'setup_payment_source': mixed}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: mixed, 'order_payment_attempt_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
