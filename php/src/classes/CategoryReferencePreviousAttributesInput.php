<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $category_id
 * @property-read string|null $handle
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoryReferencePreviousAttributesInput extends Model {
    /** @param array{'category_id'?: string|null, 'handle'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryReferencePreviousAttributesInput')); }
    /** Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): mixed { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Immutable handle of the referenced category. Read the category resource for its current name. anyOf[1] (Value): string. Immutable handle of the referenced category. Read the category resource for its current name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): mixed { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
}
