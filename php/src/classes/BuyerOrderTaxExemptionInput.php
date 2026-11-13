<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $certificate_number
 * @property-read CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass $coverage
 * @property-read string $customer_id
 * @property-read string $customer_tax_exemption_id
 * @property-read string $end_date
 * @property-read string $reason
 * @property-read string $source
 * @property-read string $start_date
 * @property-read bool $tax_exempt
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerOrderTaxExemptionInput extends Model {
    /** @param array{'certificate_number'?: string, 'coverage'?: CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass, 'customer_id'?: string, 'customer_tax_exemption_id'?: string, 'end_date'?: string, 'reason'?: string, 'source'?: string, 'start_date'?: string, 'tax_exempt': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderTaxExemptionInput')); }
    /** Certificate number recorded at assessment. Omitted when none was recorded.
     * @return string
     * @throws SdkError When certificate_number is omitted; use hasCertificateNumber() or valueOrDefault().
     */
    public function getCertificateNumber(): string { return $this->get('certificate_number'); }
    public function hasCertificateNumber(): bool { return $this->has('certificate_number'); }
    /** Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.
     * @return CustomerTaxExemptionCoverageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coverage is omitted; use hasCoverage() or valueOrDefault().
     */
    public function getCoverage(): mixed { return $this->get('coverage'); }
    public function hasCoverage(): bool { return $this->has('coverage'); }
    /** ID of the customer the exemption was assessed from, when one was linked. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     * @return string
     * @throws SdkError When customer_tax_exemption_id is omitted; use hasCustomerTaxExemptionId() or valueOrDefault().
     */
    public function getCustomerTaxExemptionId(): string { return $this->get('customer_tax_exemption_id'); }
    public function hasCustomerTaxExemptionId(): bool { return $this->has('customer_tax_exemption_id'); }
    /** Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When end_date is omitted; use hasEndDate() or valueOrDefault().
     */
    public function getEndDate(): string { return $this->get('end_date'); }
    public function hasEndDate(): bool { return $this->has('end_date'); }
    /** Exemption reason recorded at assessment. Omitted when no reason was recorded. Value enum: "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat", "charitable_organization", "religious_organization", "educational_organization", "resale", "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The source of the tax exemption assessment. Omitted when the source has not been established. Value enum: "none", "customer", "order".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When start_date is omitted; use hasStartDate() or valueOrDefault().
     */
    public function getStartDate(): string { return $this->get('start_date'); }
    public function hasStartDate(): bool { return $this->has('start_date'); }
    /** Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt.
     * @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
}
