<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_id
 * @property-read string $handle
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem extends Model {
    /** @param array{'category_id': string, 'handle': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem')); }
    /** Stable identifier of the category.
     * @return string
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Immutable handle of the referenced category. Read the category resource for its current name.
     * @return string
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
}
