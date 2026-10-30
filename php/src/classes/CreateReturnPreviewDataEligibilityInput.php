<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read string $mode
 * @property-read ReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnPreviewDataEligibilityInput extends Model {
    /** @param array{'eligibility': ReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass, 'mode': string, 'resolution'?: ReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewDataEligibilityInput')); }
    /** The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.
     * @return ReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Value enum: "eligibility".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
     * @return ReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
