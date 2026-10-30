<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read string $subscription_line_item_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsDeleteLineItemInput extends Model {
    /** @param array{'subscription_id': string, 'subscription_line_item_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsDeleteLineItemInput')); }
    /** Subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Subscription line item ID. Example: "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_line_item_id is omitted; use hasSubscriptionLineItemId() or valueOrDefault().
     */
    public function getSubscriptionLineItemId(): string { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** Reject the deletion if the subscription version has changed. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
