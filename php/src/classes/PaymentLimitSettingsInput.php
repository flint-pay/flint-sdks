<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $effective_max_amounts
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $effective_min_amounts
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $max_amounts
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $min_amounts
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLimitSettingsInput extends Model {
    /** @param array{'effective_max_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'effective_min_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'max_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'min_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettingsInput')); }
    /** Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint support approvals; the approval map is private. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When effective_max_amounts is omitted; use hasEffectiveMaxAmounts() or valueOrDefault().
     */
    public function getEffectiveMaxAmounts(): array|object { return $this->get('effective_max_amounts'); }
    public function hasEffectiveMaxAmounts(): bool { return $this->has('effective_max_amounts'); }
    /** Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option floors. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When effective_min_amounts is omitted; use hasEffectiveMinAmounts() or valueOrDefault().
     */
    public function getEffectiveMinAmounts(): array|object { return $this->get('effective_min_amounts'); }
    public function hasEffectiveMinAmounts(): bool { return $this->has('effective_min_amounts'); }
    /** Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When max_amounts is omitted; use hasMaxAmounts() or valueOrDefault().
     */
    public function getMaxAmounts(): array|object { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When min_amounts is omitted; use hasMinAmounts() or valueOrDefault().
     */
    public function getMinAmounts(): array|object { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
