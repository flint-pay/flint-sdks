<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $expected_version
 * @property-read string $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateSubscriptionRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'quantity'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSubscriptionRequestInput')); }
    /** @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
