<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionsGetParams')); }
    /** Supported expansions: payment_intents, refunds, replacement_order. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=payment_intents&expand=refunds, or pass one comma-separated value. [] enum: "payment_intents", "refunds", "replacement_order". Value enum: "payment_intents", "refunds", "replacement_order". anyOf[1] (Value): Array of string.  [] enum: "payment_intents", "refunds", "replacement_order". anyOf[1][] (Value): string.  Value enum: "payment_intents", "refunds", "replacement_order". anyOf[2] (Value): string.  Value enum: "payment_intents", "refunds", "replacement_order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
