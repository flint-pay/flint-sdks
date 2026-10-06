<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string $merchant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SelectableMerchantInput extends Model {
    /** @param array{'business_name': string, 'merchant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectableMerchantInput')); }
    /** @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
}
