<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $calculation_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $flat_money
 * @property-read TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $jurisdiction
 * @property-read int|float|null $percent
 * @property-read string|null $tax_type
 * @property-read string|null $taxability_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxComponentRequestPreviousAttributesInput extends Model {
    /** @param array{'calculation_type'?: string|null, 'flat_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'jurisdiction'?: TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'percent'?: int|float|null, 'tax_type'?: string|null, 'taxability_reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxComponentRequestPreviousAttributesInput')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "percentage". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "percentage". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): mixed { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** The taxing jurisdiction this component's tax is owed to. anyOf[1] (Value): {@see TaxJurisdictionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. anyOf[1] (Value): number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst", "hst", "pst", "qst". anyOf[1] (Value): string. The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst", "hst", "pst", "qst". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): mixed { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum: "reverse_charge". anyOf[1] (Value): string. Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum: "reverse_charge". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): mixed { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
}
