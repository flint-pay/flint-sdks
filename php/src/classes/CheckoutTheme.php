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
 * @property-read ?string $title
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTheme extends Model {
    /** @param array{'accent_color'?: string, 'background_color'?: string, 'corner_radius'?: int, 'font_family'?: string, 'primary_color'?: string, 'text_color'?: string, 'title'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTheme')); }
    /** Shape $ (Value): string. Accent color, from the session or link theme, or from branding settings. maxLength: 50.
     * @return ?string
     */
    public function getAccentColor(): ?string { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Shape $ (Value): string. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: ^#[0-9a-fA-F]{6}$.
     * @return ?string
     */
    public function getBackgroundColor(): ?string { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** Shape $ (Value): integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0. maximum: 32.
     * @return ?int
     */
    public function getCornerRadius(): ?int { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** Shape $ (Value): string. Font family from branding settings. New values may be added. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace".
     * @return ?string
     */
    public function getFontFamily(): ?string { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** Shape $ (Value): string. Primary color, from the session or link theme, or from branding settings. maxLength: 50.
     * @return ?string
     */
    public function getPrimaryColor(): ?string { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Shape $ (Value): string. Text color from branding settings, as a six-digit hex value. pattern: ^#[0-9a-fA-F]{6}$.
     * @return ?string
     */
    public function getTextColor(): ?string { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
    /** Shape $ (Value): string. Title shown in place of the merchant's business name. maxLength: 255.
     * @return ?string
     */
    public function getTitle(): ?string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
