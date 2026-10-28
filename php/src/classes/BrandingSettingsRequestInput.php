<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accent_color
 * @property-read string|null $background_color
 * @property-read int $corner_radius
 * @property-read string|null $font_family
 * @property-read string|null $primary_color
 * @property-read string|null $text_color
 * Presence-aware input; omitted fields throw when accessed. */
final class BrandingSettingsRequestInput extends Model {
    /** @param array{'accent_color'?: string|null, 'background_color'?: string|null, 'corner_radius'?: int, 'font_family'?: string|null, 'primary_color'?: string|null, 'text_color'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BrandingSettingsRequestInput')); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When accent_color is omitted; use hasAccentColor() or valueOrDefault().
     */
    public function getAccentColor(): string|null { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When background_color is omitted; use hasBackgroundColor() or valueOrDefault().
     */
    public function getBackgroundColor(): string|null { return $this->get('background_color'); }
    public function hasBackgroundColor(): bool { return $this->has('background_color'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When corner_radius is omitted; use hasCornerRadius() or valueOrDefault().
     */
    public function getCornerRadius(): int { return $this->get('corner_radius'); }
    public function hasCornerRadius(): bool { return $this->has('corner_radius'); }
    /** Shape $ (Value): string or null. Send null to clear it. Value enum: "instrument_sans", "system_sans", "system_serif", "monospace", null.
     * @return string|null
     * @throws SdkError When font_family is omitted; use hasFontFamily() or valueOrDefault().
     */
    public function getFontFamily(): string|null { return $this->get('font_family'); }
    public function hasFontFamily(): bool { return $this->has('font_family'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When primary_color is omitted; use hasPrimaryColor() or valueOrDefault().
     */
    public function getPrimaryColor(): string|null { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When text_color is omitted; use hasTextColor() or valueOrDefault().
     */
    public function getTextColor(): string|null { return $this->get('text_color'); }
    public function hasTextColor(): bool { return $this->has('text_color'); }
}
