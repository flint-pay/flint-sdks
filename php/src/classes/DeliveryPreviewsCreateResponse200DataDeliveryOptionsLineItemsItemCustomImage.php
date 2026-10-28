<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $alt
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomImage extends Model {
    /** @param array{'alt'?: string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomImage')); }
    /** Shape $ (Value): string. Alternative text describing the image for accessibility. minLength: 1.
     * @return ?string
     */
    public function getAlt(): ?string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Shape $ (Value): string. URL of the image. minLength: 1.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
