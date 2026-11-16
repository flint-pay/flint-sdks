<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $text
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxDisclosureStatementPreviousAttributesInput extends Model {
    /** @param array{'text'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxDisclosureStatementPreviousAttributesInput')); }
    /** Text to show the seller verbatim. anyOf[1] (Value): string. Text to show the seller verbatim. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
