<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsGetParams')); }
    /** Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order, return_dispositions, return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped per path: at 100 related objects for return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments; at 20 for line_items.fulfillment and line_items.return_reason. Repeat expand, for example expand=customer&expand=line_items.fulfillment, or pass one comma-separated value. [] enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1] (Value): Array of string.  [] enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1][] (Value): string.  Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[2] (Value): string.  Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
