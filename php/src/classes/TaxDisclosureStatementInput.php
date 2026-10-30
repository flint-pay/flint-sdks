<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $text
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxDisclosureStatementInput extends Model {
    /** @param array{'text': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxDisclosureStatementInput')); }
    /** Text to show the seller verbatim.
     * @return string
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): string { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
