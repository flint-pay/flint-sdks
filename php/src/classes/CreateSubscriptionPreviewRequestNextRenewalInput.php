<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read int $expected_version
 * @property-read list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestNextRenewalInput extends Model {
    /** @param array{'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'line_items'?: list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestNextRenewalInput')); }
    /** Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Reject the quantity estimate if the subscription version has changed. Requires line_items. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Proposed quantities at the next renewal. Send line_items as in change-quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value): {@see SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     * @return list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Selects the next renewal preview. Value enum: "next_renewal".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the subscription to preview the next renewal for. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
