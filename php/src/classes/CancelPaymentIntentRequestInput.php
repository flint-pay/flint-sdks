<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cancellation_reason
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelPaymentIntentRequestInput extends Model {
    /** @param array{'cancellation_reason'?: string, 'expected_version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelPaymentIntentRequestInput')); }
    /** Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Shape $ (Value): integer string. Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
