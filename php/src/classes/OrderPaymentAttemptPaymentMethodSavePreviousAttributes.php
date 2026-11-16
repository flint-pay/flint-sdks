<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaymentAttemptPaymentMethodSavePreviousAttributes extends Model {
    /** @param array{'reason'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPaymentMethodSavePreviousAttributes')); }
    /** payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Value enum: "payment_method_not_saveable", "other". anyOf[1] (Value): string. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Value enum: "payment_method_not_saveable", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** not_saved: the payment went ahead without saving the payment method. The values can grow. Value enum: "not_saved". anyOf[1] (Value): string. not_saved: the payment went ahead without saving the payment method. The values can grow. Value enum: "not_saved". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
