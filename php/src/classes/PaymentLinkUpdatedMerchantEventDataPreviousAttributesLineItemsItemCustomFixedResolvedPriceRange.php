<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMaxUnitPriceMoney $max_unit_price_money
 * @property-read PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMinUnitPriceMoney $min_unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRange extends Model {
    /** @param array{'max_unit_price_money': mixed, 'min_unit_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRange')); }
    /** Highest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMaxUnitPriceMoney
     */
    public function getMaxUnitPriceMoney(): PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMaxUnitPriceMoney { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Lowest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMinUnitPriceMoney
     */
    public function getMinUnitPriceMoney(): PaymentLinkUpdatedMerchantEventDataPreviousAttributesLineItemsItemCustomFixedResolvedPriceRangeMinUnitPriceMoney { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
}
