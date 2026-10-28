<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxDisclosureStatementInput|array<array-key, mixed>|\stdClass> $statements
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionDisclosureInput extends Model {
    /** @param array{'statements': list<TaxDisclosureStatementInput|array<array-key, mixed>|\stdClass>, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisclosureInput')); }
    /** Shape $ (Value): Array of {@see TaxDisclosureStatementInput}. Statements in display order. The seller must agree to every statement. Shape $[] (Value): {@see TaxDisclosureStatementInput}. One statement of the seller disclosure.
     * @return list<TaxDisclosureStatementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When statements is omitted; use hasStatements() or valueOrDefault().
     */
    public function getStatements(): array { return $this->get('statements'); }
    public function hasStatements(): bool { return $this->has('statements'); }
    /** Shape $ (Value): string. Opaque version of the exact rendered statements. Do not parse it.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
