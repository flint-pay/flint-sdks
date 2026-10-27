<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $description
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundAdjustmentReasonInput extends Model {
    /** @param array{'code': string, 'description'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundAdjustmentReasonInput')); }
    /** Shape $ (Value): string.  Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction", "other".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
}
