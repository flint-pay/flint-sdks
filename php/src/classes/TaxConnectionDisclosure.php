<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxDisclosureStatement> $statements
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionDisclosure extends Model {
    /** @param array{'statements': list<mixed>, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisclosure')); }
    /** Statements in display order. The seller must agree to every statement. [] (Value): {@see TaxDisclosureStatement}. One statement of the seller disclosure.
     * @return list<TaxDisclosureStatement>
     */
    public function getStatements(): array { return $this->get('statements'); }
    public function hasStatements(): bool { return $this->has('statements'); }
    /** Opaque version of the exact rendered statements. Do not parse it.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
