<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payout_destination_id
 * @property-read array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutDestinationsUpdateInput extends Model {
    /** @param array{'payout_destination_id': string, 'body': array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationsUpdateInput')); }
    /** Flint payout destination ID. Example: "pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** The request body for: Update payout destination metadata.
     * @return array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
