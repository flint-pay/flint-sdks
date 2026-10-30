<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_schedule'?: mixed, 'cancel_at_period_end'?: bool, 'delivery'?: array{'delivery_method_id': string, 'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'recipient'?: mixed, 'type': string}|object, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_method_id'?: string, 'quantity'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsUpdateInput extends Model {
    /** @param array{'subscription_id': string, 'body': array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_schedule'?: mixed, 'cancel_at_period_end'?: bool, 'delivery'?: array{'delivery_method_id': string, 'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'recipient'?: mixed, 'type': string}|object, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_method_id'?: string, 'quantity'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsUpdateInput')); }
    /** Flint subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The request body for: Update subscription. Example: {"billing_schedule":{"next_billing_at":"2026-05-17T14:30:00Z","owner":"external"}}.
     * @return array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_schedule'?: mixed, 'cancel_at_period_end'?: bool, 'delivery'?: array{'delivery_method_id': string, 'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': mixed, 'type': string}|object, 'recipient'?: mixed, 'type': string}|object, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_method_id'?: string, 'quantity'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
