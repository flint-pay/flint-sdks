<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accent_color
 * @property-read string|null $background_color
 * @property-read int|null $corner_radius
 * @property-read string|null $font_family
 * @property-read string|null $primary_color
 * @property-read string|null $text_color
 * @property-read string|null $title
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutThemePreviousAttributes extends Model {
    /** @param array{'accent_color'?: mixed, 'background_color'?: mixed, 'corner_radius'?: mixed, 'font_family'?: mixed, 'primary_color'?: mixed, 'text_color'?: mixed, 'title'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutThemePreviousAttributes')); }
    /** Accent color, from the session or link theme, or from branding settings. anyOf[1] (Value): string. Accent color, from the session or link theme, or from branding settings. maxLength: 50. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAccentColor(): string|null { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Page background color from branding settings, as a six-digit hex value such as `#ffffff`. anyOf[1] (Value): string. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: ^#[0-9a-fA-F]{6}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBackgroundColor(): string|null { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. anyOf[1] (Value): integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0. maximum: 32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCornerRadius(): int|null { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** Font family from branding settings. New values may be added. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace". anyOf[1] (Value): string. Font family from branding settings. New values may be added. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFontFamily(): string|null { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** Primary color, from the session or link theme, or from branding settings. anyOf[1] (Value): string. Primary color, from the session or link theme, or from branding settings. maxLength: 50. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPrimaryColor(): string|null { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Text color from branding settings, as a six-digit hex value. anyOf[1] (Value): string. Text color from branding settings, as a six-digit hex value. pattern: ^#[0-9a-fA-F]{6}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTextColor(): string|null { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
    /** Title shown in place of the merchant's business name. anyOf[1] (Value): string. Title shown in place of the merchant's business name. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTitle(): string|null { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
