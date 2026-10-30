<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $text
 * Presence-aware response; omitted optional fields return null. */
final class TaxDisclosureStatement extends Model {
    /** @param array{'text': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxDisclosureStatement')); }
    /** Text to show the seller verbatim.
     * @return string
     */
    public function getText(): string { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
