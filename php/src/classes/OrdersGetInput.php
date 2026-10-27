<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersGetInput extends Model {
    /** @param array{'order_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". Shape $[] (Value): string.  Value enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
