<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $footer_text
 * @property-read string $header_text
 * @property-read bool $is_auto_email_enabled
 * @property-read bool $is_itemized
 * Presence-aware response; omitted fields throw when accessed. */
final class ReceiptSettings extends Model {
    /** @param array{'footer_text'?: string, 'header_text'?: string, 'is_auto_email_enabled'?: bool, 'is_itemized'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReceiptSettings')); }
    /** @return string
     * @throws SdkError When footer_text is omitted; use hasFooterText() or valueOrDefault().
     */
    public function getFooterText(): string { return $this->get('footer_text'); }
    public function hasFooterText(): bool { return $this->has('footer_text'); }
    /** @return string
     * @throws SdkError When header_text is omitted; use hasHeaderText() or valueOrDefault().
     */
    public function getHeaderText(): string { return $this->get('header_text'); }
    public function hasHeaderText(): bool { return $this->has('header_text'); }
    /** @return bool
     * @throws SdkError When is_auto_email_enabled is omitted; use hasIsAutoEmailEnabled() or valueOrDefault().
     */
    public function getIsAutoEmailEnabled(): bool { return $this->get('is_auto_email_enabled'); }
    public function hasIsAutoEmailEnabled(): bool { return $this->has('is_auto_email_enabled'); }
    /** @return bool
     * @throws SdkError When is_itemized is omitted; use hasIsItemized() or valueOrDefault().
     */
    public function getIsItemized(): bool { return $this->get('is_itemized'); }
    public function hasIsItemized(): bool { return $this->has('is_itemized'); }
}
