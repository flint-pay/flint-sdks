<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read int $expected_version
 * @property-read list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateMeSubscriptionPreviewRequestQuantityChangeInput extends Model {
    /** @param array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMeSubscriptionPreviewRequestQuantityChangeInput')); }
    /** When the quantity change is billed. Previews price only prorated_now; period_end changes are billed at the next renewal. Value enum: "prorated_now".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Reject the preview if the subscription version has changed. Send the same value to change-quantity. Format: uint64. minimum: 1.
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
    /** The subscription change to preview. Value enum: "quantity_change".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The buyer's subscription to preview a quantity change for. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
