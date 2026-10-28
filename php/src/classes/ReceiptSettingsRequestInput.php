<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $auto_email_enabled
 * @property-read string|null $footer_text
 * @property-read string|null $header_text
 * @property-read bool $is_itemized
 * Presence-aware input; omitted fields throw when accessed. */
final class ReceiptSettingsRequestInput extends Model {
    /** @param array{'auto_email_enabled'?: bool, 'footer_text'?: string|null, 'header_text'?: string|null, 'is_itemized'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettingsRequestInput')); }
    /** Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful payment.
     * @return bool
     * @throws SdkError When auto_email_enabled is omitted; use hasAutoEmailEnabled() or valueOrDefault().
     */
    public function getAutoEmailEnabled(): bool { return $this->get('auto_email_enabled'); }
    public function hasAutoEmailEnabled(): bool { return $this->has('auto_email_enabled'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When footer_text is omitted; use hasFooterText() or valueOrDefault().
     */
    public function getFooterText(): string|null { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When header_text is omitted; use hasHeaderText() or valueOrDefault().
     */
    public function getHeaderText(): string|null { return $this->get('header_text'); }
    public function hasHeaderText(): bool { return $this->has('header_text'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_itemized is omitted; use hasIsItemized() or valueOrDefault().
     */
    public function getIsItemized(): bool { return $this->get('is_itemized'); }
    public function hasIsItemized(): bool { return $this->has('is_itemized'); }
}
