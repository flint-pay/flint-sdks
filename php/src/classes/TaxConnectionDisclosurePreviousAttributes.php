<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxDisclosureStatementPreviousAttributes>|null $statements
 * @property-read string|null $version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionDisclosurePreviousAttributes extends Model {
    /** @param array{'statements'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisclosurePreviousAttributes')); }
    /** Statements in display order. The seller must agree to every statement. anyOf[1] (Value): Array of {@see TaxDisclosureStatementPreviousAttributes}. Statements in display order. The seller must agree to every statement. anyOf[1][] (Value): {@see TaxDisclosureStatementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxDisclosureStatementPreviousAttributes>|null
     */
    public function getStatements(): array|null { return $this->get('statements'); }
    public function hasStatements(): bool { return $this->has('statements'); }
    /** Opaque version of the exact rendered statements. Do not parse it. anyOf[1] (Value): string. Opaque version of the exact rendered statements. Do not parse it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVersion(): string|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
