<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read SubscriptionBillingScheduleUpdateRequestInput|array<array-key, mixed>|\stdClass $billing_schedule
 * @property-read bool $cancel_at_period_end
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null $end_after
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null $gift_recipient
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $payment_method_id
 * @property-read int $quantity
 * @property-read null $scheduled_plan_change
 * @property-read array{'calculation'?: array{'components_source'?: string, 'mode': string}|object|null, 'enabled': bool}|object|null $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateSubscriptionRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_schedule'?: SubscriptionBillingScheduleUpdateRequestInput|array<array-key, mixed>|\stdClass, 'cancel_at_period_end'?: bool, 'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'end_after'?: array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_method_id'?: string, 'quantity'?: int, 'scheduled_plan_change'?: null, 'tax'?: array{'calculation'?: array{'components_source'?: string, 'mode': string}|object|null, 'enabled': bool}|object|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSubscriptionRequestInput')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** A closed owner-specific billing schedule update.
     * @return SubscriptionBillingScheduleUpdateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_schedule is omitted; use hasBillingSchedule() or valueOrDefault().
     */
    public function getBillingSchedule(): mixed { return $this->get('billing_schedule'); }
    public function hasBillingSchedule(): bool { return $this->has('billing_schedule'); }
    /** Value enum: false.
     * @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Replace the complete automatic end condition, or send null to clear it. Requires expected_version. Buyers cannot change this field. anyOf[1] (Value): {@see SubscriptionEndAfterRequestInput}. An automatic end condition to assign to a subscription, measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     * @return array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null
     * @throws SdkError When end_after is omitted; use hasEndAfter() or valueOrDefault().
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** The current subscription version. Required when end_after is present. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Replace the whole gift recipient, or send null to clear it. There are no partial changes. Send expected_version to guard against concurrent changes. Buyers cannot change this field. anyOf[1] (Value): {@see SubscriptionGiftRecipientRequestInput}. Who receives a gift subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     * @return array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null
     * @throws SdkError When gift_recipient is omitted; use hasGiftRecipient() or valueOrDefault().
     */
    public function getGiftRecipient(): mixed { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Legacy subscription multiplier. Only 1 is accepted. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan.
     * @return null
     * @throws SdkError When scheduled_plan_change is omitted; use hasScheduledPlanChange() or valueOrDefault().
     */
    public function getScheduledPlanChange(): null { return $this->get('scheduled_plan_change'); }
    public function hasScheduledPlanChange(): bool { return $this->has('scheduled_plan_change'); }
    /** Replace the subscription's tax as a whole, or send null to clear it, so its orders follow your settings again. Orders Flint creates after the change use it; an open renewal order keeps the tax it was created with. Buyers cannot change this field. anyOf[1] (Value): {@see SubscriptionTaxRequestInput}. Replaced as a whole: send every field you want to keep. anyOf[2] (Value): null.
     * @return array{'calculation'?: array{'components_source'?: string, 'mode': string}|object|null, 'enabled': bool}|object|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
}
