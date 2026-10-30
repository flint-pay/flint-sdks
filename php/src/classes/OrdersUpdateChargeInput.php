<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read string $order_charge_id
 * @property-read array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateChargeInput extends Model {
    /** @param array{'order_id': string, 'order_charge_id': string, 'body': array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateChargeInput')); }
    /** Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Flint order charge ID. Example: "och_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** The request body for: Update order charge.
     * @return array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
