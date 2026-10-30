<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $accent_color
 * @property-read ?string $background_color
 * @property-read ?int $corner_radius
 * @property-read ?string $font_family
 * @property-read ?string $primary_color
 * @property-read ?string $text_color
 * Presence-aware response; omitted optional fields return null. */
final class BrandingSettings extends Model {
    /** @param array{'accent_color'?: string, 'background_color'?: string, 'corner_radius'?: int, 'font_family'?: string, 'primary_color'?: string, 'text_color'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BrandingSettings')); }
    /** A hex color in the form #RRGGBB, such as #1A73E8.
     * @return ?string
     */
    public function getAccentColor(): ?string { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** A hex color in the form #RRGGBB, such as #1A73E8.
     * @return ?string
     */
    public function getBackgroundColor(): ?string { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32.
     * @return ?int
     */
    public function getCornerRadius(): ?int { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** Value enum: "instrument_sans", "system_sans", "system_serif", "monospace".
     * @return ?string
     */
    public function getFontFamily(): ?string { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** A hex color in the form #RRGGBB, such as #1A73E8.
     * @return ?string
     */
    public function getPrimaryColor(): ?string { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** A hex color in the form #RRGGBB, such as #1A73E8.
     * @return ?string
     */
    public function getTextColor(): ?string { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
}
