<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accent_color
 * @property-read string|null $primary_color
 * @property-read string|null $title
 * Presence-aware input; omitted fields throw when accessed. */
final class ThemeConfigPreviousAttributesInput extends Model {
    /** @param array{'accent_color'?: string|null, 'primary_color'?: string|null, 'title'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ThemeConfigPreviousAttributesInput')); }
    /** Accent color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Accent color of the checkout, such as #1A73E8. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When accent_color is omitted; use hasAccentColor() or valueOrDefault().
     */
    public function getAccentColor(): mixed { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Primary color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Primary color of the checkout, such as #1A73E8. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When primary_color is omitted; use hasPrimaryColor() or valueOrDefault().
     */
    public function getPrimaryColor(): mixed { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Title shown in place of the merchant's business name. anyOf[1] (Value): string. Title shown in place of the merchant's business name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): mixed { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
