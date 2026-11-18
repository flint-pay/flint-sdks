<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $footer_text
 * Presence-aware input; omitted fields throw when accessed. */
final class ReceiptSettingsInput extends Model {
    /** @param array{'footer_text': string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettingsInput')); }
    /** Merchant-provided plain text on payment receipt emails and PDFs. Null when no text is set. maxLength: 500.
     * @return string|null
     * @throws SdkError When footer_text is omitted; use hasFooterText() or valueOrDefault().
     */
    public function getFooterText(): string|null { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
}
