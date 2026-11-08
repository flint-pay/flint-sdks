<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_id
 * @property-read string $handle
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoryReferenceInput extends Model {
    /** @param array{'category_id': string, 'handle': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryReferenceInput')); }
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q".
     * @return string
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Immutable handle of the referenced category. Read the category resource for its current name.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
}
