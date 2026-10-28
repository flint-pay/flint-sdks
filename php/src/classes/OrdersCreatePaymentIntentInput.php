<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'amount_money'?: mixed, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreatePaymentIntentInput extends Model {
    /** @param array{'order_id': string, 'Idempotency-Key'?: string, 'body': array{'amount_money'?: mixed, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreatePaymentIntentInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create order payment intent.
     * @return array{'amount_money'?: mixed, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
