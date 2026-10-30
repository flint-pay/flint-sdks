<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsGetParams')); }
    /** Supported expansions: order, packages. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=order&expand=packages, or pass one comma-separated value. [] enum: "order", "packages". Value enum: "order", "packages". anyOf[1] (Value): Array of string.  [] enum: "order", "packages". anyOf[1][] (Value): string.  Value enum: "order", "packages". anyOf[2] (Value): string.  Value enum: "order", "packages".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
