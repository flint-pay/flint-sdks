<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $footer_text
 * Presence-aware response; omitted optional fields return null. */
final class ReceiptSettings extends Model {
    /** @param array{'footer_text': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettings')); }
    /** Merchant-provided plain text on payment receipt emails and PDFs. Null when no text is set. maxLength: 500.
     * @return string|null
     */
    public function getFooterText(): string|null { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
}
