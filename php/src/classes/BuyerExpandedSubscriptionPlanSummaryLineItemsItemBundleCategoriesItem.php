<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $category_id
 * @property-read string $handle
 * @property-read string $name
 * Presence-aware response; omitted optional fields return null. */
final class BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem extends Model {
    /** @param array{'category_id': string, 'handle': string, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem')); }
    /** Stable identifier of the category.
     * @return string
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Category handle recorded with this reference.
     * @return string
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Category name recorded with this reference.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
