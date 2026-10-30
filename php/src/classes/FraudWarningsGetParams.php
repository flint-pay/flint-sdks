<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningsGetParams')); }
    /** Supported expansions: dispute, payment_intent. Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value. [] enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.  Value enum: "dispute", "payment_intent". anyOf[2] (Value): string.  Value enum: "dispute", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
