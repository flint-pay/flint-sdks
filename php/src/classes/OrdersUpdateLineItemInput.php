<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read array{'description'?: string|null, 'expected_version'?: string, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: string, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateLineItemInput extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'Idempotency-Key'?: string, 'body': array{'description'?: string|null, 'expected_version'?: string, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: string, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateLineItemInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update line item.
     * @return array{'description'?: string|null, 'expected_version'?: string, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: string, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
