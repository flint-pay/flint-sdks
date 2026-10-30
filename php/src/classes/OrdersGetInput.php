<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersGetInput extends Model {
    /** @param array{'order_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersGetInput')); }
    /** Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Supported expansions: customer, fulfillments.packages, fulfillments.shipments, payment_intents, subscription, subscription_plan. Expansion requires the base order read scope plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=fulfillments.packages, or pass one comma-separated value. [] enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". Value enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1] (Value): Array of string.  [] enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1][] (Value): string.  Value enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[2] (Value): string.  Value enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
