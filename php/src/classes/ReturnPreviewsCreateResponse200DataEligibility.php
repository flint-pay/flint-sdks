<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityEligibility $eligibility
 * @property-read string $mode
 * @property-read ?ReturnPreviewsCreateResponse200DataEligibilityResolution $resolution
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataEligibility extends Model {
    /** @param array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataEligibility')); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityEligibility}. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.
     * @return ReturnPreviewsCreateResponse200DataEligibilityEligibility
     */
    public function getEligibility(): ReturnPreviewsCreateResponse200DataEligibilityEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.  Value enum: "eligibility".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolution}. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
     * @return ?ReturnPreviewsCreateResponse200DataEligibilityResolution
     */
    public function getResolution(): ?ReturnPreviewsCreateResponse200DataEligibilityResolution { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
