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
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutThemePreviousAttributesInput extends Model {
    /** @param array{'accent_color'?: string|null, 'background_color'?: string|null, 'corner_radius'?: int|null, 'font_family'?: string|null, 'primary_color'?: string|null, 'text_color'?: string|null, 'title'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutThemePreviousAttributesInput')); }
    /** Accent color, from the session or link theme, or from branding settings. anyOf[1] (Value): string. Accent color, from the session or link theme, or from branding settings. maxLength: 50. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When accent_color is omitted; use hasAccentColor() or valueOrDefault().
     */
    public function getAccentColor(): mixed { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Page background color from branding settings, as a six-digit hex value such as `#ffffff`. anyOf[1] (Value): string. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: ^#[0-9a-fA-F]{6}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When background_color is omitted; use hasBackgroundColor() or valueOrDefault().
     */
    public function getBackgroundColor(): mixed { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. anyOf[1] (Value): integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0. maximum: 32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When corner_radius is omitted; use hasCornerRadius() or valueOrDefault().
     */
    public function getCornerRadius(): mixed { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** Font family from branding settings. New values may be added. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace". anyOf[1] (Value): string. Font family from branding settings. New values may be added. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When font_family is omitted; use hasFontFamily() or valueOrDefault().
     */
    public function getFontFamily(): mixed { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** Primary color, from the session or link theme, or from branding settings. anyOf[1] (Value): string. Primary color, from the session or link theme, or from branding settings. maxLength: 50. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When primary_color is omitted; use hasPrimaryColor() or valueOrDefault().
     */
    public function getPrimaryColor(): mixed { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Text color from branding settings, as a six-digit hex value. anyOf[1] (Value): string. Text color from branding settings, as a six-digit hex value. pattern: ^#[0-9a-fA-F]{6}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When text_color is omitted; use hasTextColor() or valueOrDefault().
     */
    public function getTextColor(): mixed { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
    /** Title shown in place of the merchant's business name. anyOf[1] (Value): string. Title shown in place of the merchant's business name. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): mixed { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
