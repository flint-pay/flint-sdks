<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DiscountPreviewInput|array<array-key, mixed>|\stdClass $discount_preview
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewDataInput extends Model {
    /** @param array{'discount_preview': DiscountPreviewInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewDataInput')); }
    /** @return DiscountPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_preview is omitted; use hasDiscountPreview() or valueOrDefault().
     */
    public function getDiscountPreview(): mixed { return $this->get('discount_preview'); }
    public function hasDiscountPreview(): bool { return $this->has('discount_preview'); }
}
