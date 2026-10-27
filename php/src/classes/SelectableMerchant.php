<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string $merchant_id
 * Presence-aware response; omitted optional fields return null. */
final class SelectableMerchant extends Model {
    /** @param array{'business_name': string, 'merchant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectableMerchant')); }
    /** Shape $ (Value): string. Merchant business name. Empty when no business name is available.
     * @return string
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Shape $ (Value): string. Flint merchant ID available for selection.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
}
