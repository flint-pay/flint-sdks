<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DiscountPreview $discount_preview
 * Presence-aware response; omitted fields throw when accessed. */
final class DiscountPreviewData extends Model {
    /** @param array{'discount_preview': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewData')); }
    /** @return DiscountPreview
     * @throws SdkError When discount_preview is omitted; use hasDiscountPreview() or valueOrDefault().
     */
    public function getDiscountPreview(): DiscountPreview { return $this->get('discount_preview'); }
    public function hasDiscountPreview(): bool { return $this->has('discount_preview'); }
}
