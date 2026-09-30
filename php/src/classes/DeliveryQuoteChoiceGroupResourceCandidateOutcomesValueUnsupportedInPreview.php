<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryAddressAdvisoryResource> $address_advisories
 * @property-read string $failure_category
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read DeliveryOptionProjection $option
 * @property-read bool $retryable
 * @property-read string $type
 * @property-read string $unavailable_reason
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnsupportedInPreview extends Model {
    /** @param array{'address_advisories'?: list<mixed>, 'failure_category'?: string, 'input_requirements'?: list<mixed>, 'option'?: mixed, 'retryable'?: bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnsupportedInPreview')); }
    /** @return list<DeliveryAddressAdvisoryResource>
     * @throws SdkError When address_advisories is omitted; use hasAddressAdvisories() or valueOrDefault().
     */
    public function getAddressAdvisories(): array { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** @return list<DeliveryInputRequirement>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return DeliveryOptionProjection
     * @throws SdkError When option is omitted; use hasOption() or valueOrDefault().
     */
    public function getOption(): DeliveryOptionProjection { return $this->get('option'); }
    public function hasOption(): bool { return $this->has('option'); }
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
