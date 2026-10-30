<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read string $corrects_return_resolution_id
 * @property-read int $expected_return_version
 * @property-read string $resolution_type
 * @property-read string $return_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnResolutionPreviewRequestCorrectionInput extends Model {
    /** @param array{'adjustments': list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>, 'corrects_return_resolution_id': string, 'expected_return_version'?: int, 'resolution_type': string, 'return_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnResolutionPreviewRequestCorrectionInput')); }
    /** minItems: 1. [] (Value): {@see ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution, with the assessed and applied amounts and whether it is applied or waived.
     * @return list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_return_version is omitted; use hasExpectedReturnVersion() or valueOrDefault().
     */
    public function getExpectedReturnVersion(): int { return $this->get('expected_return_version'); }
    public function hasExpectedReturnVersion(): bool { return $this->has('expected_return_version'); }
    /** Value enum: "correction".
     * @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
}
