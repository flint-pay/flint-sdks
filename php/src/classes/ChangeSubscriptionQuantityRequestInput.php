<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read int $expected_version
 * @property-read list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class ChangeSubscriptionQuantityRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ChangeSubscriptionQuantityRequestInput')); }
    /** prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Value enum: "prorated_now", "next_renewal", "period_end".
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
    /** Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@see SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     * @return list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: 1. maximum: 100.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
