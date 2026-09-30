<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnEligibilityCheck $eligibility
 * @property-read string $mode
 * @property-read ReturnResolutionPreview $resolution
 * Presence-aware response; omitted fields throw when accessed. */
final class MeCreateReturnPreviewResponse200DataResolution extends Model {
    /** @param array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolution')); }
    /** @return ReturnEligibilityCheck
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): ReturnEligibilityCheck { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return ReturnResolutionPreview
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): ReturnResolutionPreview { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
