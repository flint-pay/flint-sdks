<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $category_id
 * @property-read string|null $handle
 * Presence-aware response; omitted optional fields return null. */
final class CategoryReferencePreviousAttributes extends Model {
    /** @param array{'category_id'?: mixed, 'handle'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryReferencePreviousAttributes')); }
    /** Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of the category. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCategoryId(): string|null { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Immutable handle of the referenced category. Read the category resource for its current name. anyOf[1] (Value): string. Immutable handle of the referenced category. Read the category resource for its current name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHandle(): string|null { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
}
