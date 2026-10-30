<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesGetParams')); }
    /** Supported expansions: invoice. Include the source invoice summary with expand=invoice. Requires commerce.credit_notes.read and commerce.invoices.read. Limits: at most 10 unique expand paths per request. Pass expand=invoice. [] enum: "invoice". Value enum: "invoice". anyOf[1] (Value): Array of string.  [] enum: "invoice". anyOf[1][] (Value): string.  Value enum: "invoice". anyOf[2] (Value): string.  Value enum: "invoice".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
