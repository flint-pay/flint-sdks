<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $text
 * Presence-aware response; omitted optional fields return null. */
final class TaxDisclosureStatementPreviousAttributes extends Model {
    /** @param array{'text'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxDisclosureStatementPreviousAttributes')); }
    /** Text to show the seller verbatim. anyOf[1] (Value): string. Text to show the seller verbatim. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getText(): string|null { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
