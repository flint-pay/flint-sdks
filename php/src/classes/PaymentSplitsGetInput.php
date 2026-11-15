<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_split_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitsGetInput extends Model {
    /** @param array{'payment_split_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitsGetInput')); }
    /** Flint payment split ID. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     * @return string
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
}
