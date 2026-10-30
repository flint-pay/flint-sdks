<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $alt
 * @property-read int $height
 * @property-read string $url
 * @property-read int $width
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemImage extends Model {
    /** @param array{'alt'?: string, 'height': int, 'url': string, 'width': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItemImage')); }
    /** Alternative text describing the image for accessibility.
     * @return ?string
     */
    public function getAlt(): ?string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Image height in pixels, when known. Format: int32.
     * @return int
     */
    public function getHeight(): int { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** URL of the image.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Image width in pixels, when known. Format: int32.
     * @return int
     */
    public function getWidth(): int { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
