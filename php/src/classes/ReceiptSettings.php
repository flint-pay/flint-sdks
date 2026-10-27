<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $auto_email_enabled
 * @property-read ?string $footer_text
 * @property-read ?string $header_text
 * @property-read ?bool $is_itemized
 * Presence-aware response; omitted optional fields return null. */
final class ReceiptSettings extends Model {
    /** @param array{'auto_email_enabled'?: bool, 'footer_text'?: string, 'header_text'?: string, 'is_itemized'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettings')); }
    /** Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful payment.
     * @return ?bool
     */
    public function getAutoEmailEnabled(): ?bool { return $this->get('auto_email_enabled'); }
    public function hasAutoEmailEnabled(): bool { return $this->has('auto_email_enabled'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFooterText(): ?string { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getHeaderText(): ?string { return $this->get('header_text'); }
    public function hasHeaderText(): bool { return $this->has('header_text'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getIsItemized(): ?bool { return $this->get('is_itemized'); }
    public function hasIsItemized(): bool { return $this->has('is_itemized'); }
}
