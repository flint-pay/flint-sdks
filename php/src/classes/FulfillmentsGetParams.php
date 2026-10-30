<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsGetParams')); }
    /** Supported expansions: order, packages, shipments. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. [] enum: "order", "packages", "shipments". Value enum: "order", "packages", "shipments". anyOf[1] (Value): Array of string.  [] enum: "order", "packages", "shipments". anyOf[1][] (Value): string.  Value enum: "order", "packages", "shipments". anyOf[2] (Value): string.  Value enum: "order", "packages", "shipments".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
