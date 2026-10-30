<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateReturnPreviewResponseDataEligibilityEligibility $eligibility
 * @property-read string $mode
 * @property-read ?CreateReturnPreviewResponseDataEligibilityResolution $resolution
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataEligibility extends Model {
    /** @param array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataEligibility')); }
    /** The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.
     * @return CreateReturnPreviewResponseDataEligibilityEligibility
     */
    public function getEligibility(): CreateReturnPreviewResponseDataEligibilityEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Value enum: "eligibility".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
     * @return ?CreateReturnPreviewResponseDataEligibilityResolution
     */
    public function getResolution(): ?CreateReturnPreviewResponseDataEligibilityResolution { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
