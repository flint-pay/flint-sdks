<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantRequestInput|array<array-key, mixed>|\stdClass $variant
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateProductVariantRequestInput extends Model {
    /** @param array{'variant': ProductVariantRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateProductVariantRequestInput')); }
    /** @return ProductVariantRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When variant is omitted; use hasVariant() or valueOrDefault().
     */
    public function getVariant(): mixed { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
}
