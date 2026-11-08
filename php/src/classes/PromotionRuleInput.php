<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $attribute
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read string $operator
 * @property-read list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRuleInput extends Model {
    /** @param array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRuleInput')); }
    /** Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts.
     * @return string
     * @throws SdkError When attribute is omitted; use hasAttribute() or valueOrDefault().
     */
    public function getAttribute(): string { return $this->get('attribute'); }
    public function hasAttribute(): bool { return $this->has('attribute'); }
    /** Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Comparison to apply to the attribute. The attribute determines which operators are allowed. Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in", "contains", "is_defined".
     * @return string
     * @throws SdkError When operator is omitted; use hasOperator() or valueOrDefault().
     */
    public function getOperator(): string { return $this->get('operator'); }
    public function hasOperator(): bool { return $this->has('operator'); }
    /** Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. [] (Value): {@see PromotionRuleValueInput}. Rule comparison value. Use a primitive string, number, boolean, or a money object.
     * @return list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
