<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read array{'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeSkipSubscriptionCycleInput extends Model {
    /** @param array{'subscription_id': string, 'body': array{'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeSkipSubscriptionCycleInput')); }
    /** Subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The request body for: Skip subscription cycle.
     * @return array{'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
