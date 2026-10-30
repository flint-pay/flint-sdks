<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ?string $description
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason extends Model {
    /** @param array{'code': string, 'description'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason')); }
    /** Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction", "other".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
}
