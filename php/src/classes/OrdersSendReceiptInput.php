<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read array{'email'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersSendReceiptInput extends Model {
    /** @param array{'order_id': string, 'body'?: array{'email'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersSendReceiptInput')); }
    /** Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The request body for: Send an order receipt.
     * @return array{'email'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
