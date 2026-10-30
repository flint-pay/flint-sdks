<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payout_destination_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutDestinationsDeleteInput extends Model {
    /** @param array{'payout_destination_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationsDeleteInput')); }
    /** Flint payout destination ID. Example: "pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
