<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnPreviewsCreateResponse200DataResolutionEligibility $eligibility
 * @property-read string $mode
 * @property-read ReturnPreviewsCreateResponse200DataResolutionResolution $resolution
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataResolution extends Model {
    /** @param array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataResolution')); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibility}. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.
     * @return ?ReturnPreviewsCreateResponse200DataResolutionEligibility
     */
    public function getEligibility(): ?ReturnPreviewsCreateResponse200DataResolutionEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.  Value enum: "resolution".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionResolution}. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
     * @return ReturnPreviewsCreateResponse200DataResolutionResolution
     */
    public function getResolution(): ReturnPreviewsCreateResponse200DataResolutionResolution { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
