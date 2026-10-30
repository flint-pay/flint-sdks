<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $dispute_id
 * @property-read array{'outcome': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputesSimulateInput extends Model {
    /** @param array{'dispute_id': string, 'body': array{'outcome': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputesSimulateInput')); }
    /** Flint dispute ID. Example: "du_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** The request body for: Simulate a dispute outcome.
     * @return array{'outcome': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
