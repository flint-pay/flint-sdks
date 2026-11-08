<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkResolvePrefillRequestInput extends Model {
    /** @param array{'email'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkResolvePrefillRequestInput')); }
    /** Email to fill in for the buyer, who can change it. It is not verified, so it never links the purchase to an existing customer. Format: email. minLength: 1. maxLength: 320. Example: "buyer@example.com".
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
}
