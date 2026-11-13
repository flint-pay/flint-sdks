<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $partner_app_install_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitRequestInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'description'?: string, 'external_reference_id'?: string, 'partner_app_install_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitRequestInput')); }
    /** Seller's share above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Description shown to the seller, 1 to 500 characters. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Seller install of the collecting merchant's partner app. At most one split per install. minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
}
