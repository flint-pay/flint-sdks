<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionRelatedResourceInput extends Model {
    /** @param array{'payment_intent_id': string, 'type': string}|object|array{'refund_id': string, 'type': string}|object|array{'dispute_id': string, 'type': string}|object|array{'payout_id': string, 'type': string}|object|array{'payout_destination_id': string, 'type': string}|object|array{'merchant_subscription_invoice_id': string, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionRelatedResourceInput')); }
}
