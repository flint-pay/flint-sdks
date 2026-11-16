<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $description
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundAdjustmentReasonPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'description'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundAdjustmentReasonPreviousAttributesInput')); }
    /** Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction", "other". anyOf[1] (Value): string. Why the adjustment was made. Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. anyOf[1] (Value): string. Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
}
