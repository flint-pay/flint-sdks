<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $fulfillment_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsGetInput extends Model {
    /** @param array{'fulfillment_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsGetInput')); }
    /** Flint fulfillment ID. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. [] enum: "order", "packages", "shipments". Value enum: "order", "packages", "shipments". anyOf[1] (Value): Array of string.  [] enum: "order", "packages", "shipments". anyOf[1][] (Value): string.  Value enum: "order", "packages", "shipments". anyOf[2] (Value): string.  Value enum: "order", "packages", "shipments".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
