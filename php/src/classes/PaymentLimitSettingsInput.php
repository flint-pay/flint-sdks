<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $max_amounts
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $min_amounts
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLimitSettingsInput extends Model {
    /** @param array{'max_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'min_amounts'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettingsInput')); }
    /** Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When max_amounts is omitted; use hasMaxAmounts() or valueOrDefault().
     */
    public function getMaxAmounts(): array|object { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When min_amounts is omitted; use hasMinAmounts() or valueOrDefault().
     */
    public function getMinAmounts(): array|object { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
