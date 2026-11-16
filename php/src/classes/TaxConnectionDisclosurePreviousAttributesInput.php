<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxDisclosureStatementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $statements
 * @property-read string|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionDisclosurePreviousAttributesInput extends Model {
    /** @param array{'statements'?: list<TaxDisclosureStatementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'version'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisclosurePreviousAttributesInput')); }
    /** Statements in display order. The seller must agree to every statement. anyOf[1] (Value): Array of {@see TaxDisclosureStatementPreviousAttributesInput}. Statements in display order. The seller must agree to every statement. anyOf[1][] (Value): {@see TaxDisclosureStatementPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxDisclosureStatementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When statements is omitted; use hasStatements() or valueOrDefault().
     */
    public function getStatements(): mixed { return $this->get('statements'); }
    public function hasStatements(): bool { return $this->has('statements'); }
    /** Opaque version of the exact rendered statements. Do not parse it. anyOf[1] (Value): string. Opaque version of the exact rendered statements. Do not parse it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
