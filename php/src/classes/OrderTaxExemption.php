<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $customer_id
 * @property-read ?string $source
 * @property-read bool $tax_exempt
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxExemption extends Model {
    /** @param array{'customer_id'?: string, 'source'?: string, 'tax_exempt': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxExemption')); }
    /** ID of the customer the exemption was assessed from.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The source of the tax exemption assessment. Omitted when the source has not been established. Value enum: "none", "customer", "order".
     * @return ?string
     */
    public function getSource(): ?string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Whether the customer is tax-exempt. When `true`, every tax row has zero tax with the reason `customer_exempt`.
     * @return bool
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
}
