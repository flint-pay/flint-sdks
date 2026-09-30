<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accent_color
 * @property-read string $primary_color
 * @property-read string $title
 * Presence-aware response; omitted fields throw when accessed. */
final class ThemeConfig extends Model {
    /** @param array{'accent_color'?: string, 'primary_color'?: string, 'title'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ThemeConfig')); }
    /** @return string
     * @throws SdkError When accent_color is omitted; use hasAccentColor() or valueOrDefault().
     */
    public function getAccentColor(): string { return $this->get('accent_color'); }
    public function hasAccentColor(): bool { return $this->has('accent_color'); }
    /** @return string
     * @throws SdkError When primary_color is omitted; use hasPrimaryColor() or valueOrDefault().
     */
    public function getPrimaryColor(): string { return $this->get('primary_color'); }
    public function hasPrimaryColor(): bool { return $this->has('primary_color'); }
    /** @return string
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
