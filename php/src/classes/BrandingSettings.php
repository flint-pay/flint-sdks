<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accent_color
 * @property-read string $background_color
 * @property-read int $corner_radius
 * @property-read string $font_family
 * @property-read string $primary_color
 * @property-read string $text_color
 * Presence-aware response; omitted fields throw when accessed. */
final class BrandingSettings extends Model {
    /** @param array{'accent_color'?: string, 'background_color'?: string, 'corner_radius'?: int, 'font_family'?: string, 'primary_color'?: string, 'text_color'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BrandingSettings')); }
    /** @return string
     * @throws SdkError When accent_color is omitted; use hasAccentColor() or valueOrDefault().
     */
    public function getAccentColor(): string { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** @return string
     * @throws SdkError When background_color is omitted; use hasBackgroundColor() or valueOrDefault().
     */
    public function getBackgroundColor(): string { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** @return int
     * @throws SdkError When corner_radius is omitted; use hasCornerRadius() or valueOrDefault().
     */
    public function getCornerRadius(): int { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** @return string
     * @throws SdkError When font_family is omitted; use hasFontFamily() or valueOrDefault().
     */
    public function getFontFamily(): string { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** @return string
     * @throws SdkError When primary_color is omitted; use hasPrimaryColor() or valueOrDefault().
     */
    public function getPrimaryColor(): string { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** @return string
     * @throws SdkError When text_color is omitted; use hasTextColor() or valueOrDefault().
     */
    public function getTextColor(): string { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
}
