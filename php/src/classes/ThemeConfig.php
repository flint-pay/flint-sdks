<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $accent_color
 * @property-read ?string $primary_color
 * @property-read ?string $title
 * Presence-aware response; omitted optional fields return null. */
final class ThemeConfig extends Model {
    /** @param array{'accent_color'?: string, 'primary_color'?: string, 'title'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ThemeConfig')); }
    /** Accent color of the checkout, such as #1A73E8.
     * @return ?string
     */
    public function getAccentColor(): ?string { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** Primary color of the checkout, such as #1A73E8.
     * @return ?string
     */
    public function getPrimaryColor(): ?string { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** Title shown in place of the merchant's business name.
     * @return ?string
     */
    public function getTitle(): ?string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
