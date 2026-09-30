<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePackageItemRequestInput extends Model {
    /** @param array{'metadata'?: array<array-key, string|null>|\stdClass|null, 'quantity'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePackageItemRequestInput')); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
