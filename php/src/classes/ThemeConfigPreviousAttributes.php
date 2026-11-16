<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accent_color
 * @property-read string|null $primary_color
 * @property-read string|null $title
 * Presence-aware response; omitted optional fields return null. */
final class ThemeConfigPreviousAttributes extends Model {
    /** @param array{'accent_color'?: mixed, 'primary_color'?: mixed, 'title'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ThemeConfigPreviousAttributes')); }
    /** Accent color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Accent color of the checkout, such as #1A73E8. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAccentColor(): string|null { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Primary color of the checkout, such as #1A73E8. anyOf[1] (Value): string. Primary color of the checkout, such as #1A73E8. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPrimaryColor(): string|null { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Title shown in place of the merchant's business name. anyOf[1] (Value): string. Title shown in place of the merchant's business name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTitle(): string|null { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
