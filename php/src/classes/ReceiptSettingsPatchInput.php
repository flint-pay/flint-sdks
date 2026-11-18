<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $footer_text
 * Presence-aware input; omitted fields throw when accessed. */
final class ReceiptSettingsPatchInput extends Model {
    /** @param array{'footer_text'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettingsPatchInput')); }
    /** Optional merchant-provided plain text shown on payment receipt emails and PDFs, including manual resends and downloads. Up to 500 Unicode code points. Send null to remove the text. Omit to keep it. Flint does not verify the statement or assert nonprofit status. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When footer_text is omitted; use hasFooterText() or valueOrDefault().
     */
    public function getFooterText(): string|null { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
}
