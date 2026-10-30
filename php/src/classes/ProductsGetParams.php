<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsGetParams')); }
    /** Supported expansions: modifier_set. Expand the attached modifier set. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value enum: "modifier_set". anyOf[1] (Value): Array of string.  [] enum: "modifier_set". anyOf[1][] (Value): string.  Value enum: "modifier_set". anyOf[2] (Value): string.  Value enum: "modifier_set".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
