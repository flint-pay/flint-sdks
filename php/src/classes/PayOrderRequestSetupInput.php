<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read array{'token': string}|object $setup_payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestSetupInput extends Model {
    /** @param array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'setup_payment_source': array{'token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestSetupInput')); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return array{'email'?: string, 'phone'?: string}|object
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): array|object { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return array{'token': string}|object
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): array|object { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
