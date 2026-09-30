<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_id
 * @property-read array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: array<array-key, string>|\stdClass, 'payment_method_types': list<string>, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'submit_to': string, ...}|object $elements
 * @property-read string $publishable_key
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentCollectionStripeInput extends Model {
    /** @param array{'account_id'?: string, 'elements'?: array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: array<array-key, string>|\stdClass, 'payment_method_types': list<string>, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'submit_to': string, ...}|object, 'publishable_key'?: string, 'return_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripeInput')); }
    /** @return string
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** @return array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'digital_wallets'?: list<string>, 'mode': string, 'next_step': string, 'payment_method_creation': string, 'payment_method_options'?: array<array-key, string>|\stdClass, 'payment_method_types': list<string>, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'submit_to': string, ...}|object
     * @throws SdkError When elements is omitted; use hasElements() or valueOrDefault().
     */
    public function getElements(): array|object { return $this->get('elements'); }
    public function hasElements(): bool { return $this->has('elements'); }
    /** @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
