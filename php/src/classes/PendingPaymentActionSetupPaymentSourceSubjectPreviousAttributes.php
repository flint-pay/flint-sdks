<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $payment_method_id
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes extends Model {
    /** @param array{'payment_method_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes')); }
    /** ID of the payment method being saved, which needs the buyer's authentication first. anyOf[1] (Value): string. ID of the payment method being saved, which needs the buyer's authentication first. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
