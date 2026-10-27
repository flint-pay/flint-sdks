<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentAttemptPaymentMethodSaveInput extends Model {
    /** @param array{'reason': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPaymentMethodSaveInput')); }
    /** Shape $ (Value): string. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Value enum: "payment_method_not_saveable", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. not_saved: the payment went ahead without saving the payment method. The values can grow. Value enum: "not_saved".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
