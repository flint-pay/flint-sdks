<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_verification_id
 * Presence-aware input; omitted fields throw when accessed. */
final class LinkCustomerGuestPurchasesRequestInput extends Model {
    /** @param array{'customer_verification_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LinkCustomerGuestPurchasesRequestInput')); }
    /** ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it up. minLength: 1. Example: "cver_01KEZF7C00E7S01991S7457CVK".
     * @return string
     * @throws SdkError When customer_verification_id is omitted; use hasCustomerVerificationId() or valueOrDefault().
     */
    public function getCustomerVerificationId(): string { return $this->get('customer_verification_id'); }
    public function hasCustomerVerificationId(): bool { return $this->has('customer_verification_id'); }
}
