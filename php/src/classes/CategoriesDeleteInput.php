<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $category_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoriesDeleteInput extends Model {
    /** @param array{'category_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoriesDeleteInput')); }
    /** Flint category ID. Example: "ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
