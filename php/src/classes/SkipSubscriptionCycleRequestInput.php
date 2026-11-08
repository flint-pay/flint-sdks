<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string $initiated_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SkipSubscriptionCycleRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'initiated_by'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SkipSubscriptionCycleRequestInput')); }
    /** Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution only; this does not apply the store's buyer limits. To enforce them, use a customer session on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
}
