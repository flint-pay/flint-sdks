<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PromotionUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'application_method': mixed, 'available': bool, 'codes'?: list<mixed>, 'codes_summary'?: mixed, 'combines_with': mixed, 'created_at'?: string, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: int, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: mixed, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string, 'uses_count': int, 'version': int}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionUpdatedInstalledMerchantsEventData')); }
    /** Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.
     * @return PromotionUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PromotionUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
