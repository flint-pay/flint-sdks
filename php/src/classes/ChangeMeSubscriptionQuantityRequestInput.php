<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read int $expected_version
 * @property-read list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class ChangeMeSubscriptionQuantityRequestInput extends Model {
    /** @param array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ChangeMeSubscriptionQuantityRequestInput')); }
    /** period_end schedules the new quantities for the next billing boundary; prorated_now charges the difference now for an eligible digital line. Value enum: "period_end", "prorated_now".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value): {@see SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     * @return list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
}
