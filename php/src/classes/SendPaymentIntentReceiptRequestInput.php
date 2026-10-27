<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * Presence-aware input; omitted fields throw when accessed. */
final class SendPaymentIntentReceiptRequestInput extends Model {
    /** @param array{'email'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SendPaymentIntentReceiptRequestInput')); }
    /** Shape $ (Value): string. Email address that receives the receipt. Omit to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. Format: email. minLength: 1. maxLength: 254.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
}
