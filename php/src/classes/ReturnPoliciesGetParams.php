<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesGetParams')); }
    /** Supported expansions: current_revision. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. Pass expand=current_revision. [] enum: "current_revision". Value enum: "current_revision". anyOf[1] (Value): Array of string.  [] enum: "current_revision". anyOf[1][] (Value): string.  Value enum: "current_revision". anyOf[2] (Value): string.  Value enum: "current_revision".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
