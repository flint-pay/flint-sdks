<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionTermsRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'quantity'?: int, 'subscription_plan_id': string, 'type': string}|object|array{'billing_interval': string, 'billing_interval_count': int, 'line_items': list<SubscriptionOfferLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTermsRequestInput')); }
}
