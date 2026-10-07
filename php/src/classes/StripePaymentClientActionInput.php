<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_id
 * @property-read StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass $payment_intent
 * @property-read string $publishable_key
 * @property-read StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass $setup_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class StripePaymentClientActionInput extends Model {
    /** @param array{'account_id': string, 'payment_intent'?: StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass, 'publishable_key': string, 'setup_intent'?: StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentClientActionInput')); }
    /** @return string
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** @return StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** @return StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_intent is omitted; use hasSetupIntent() or valueOrDefault().
     */
    public function getSetupIntent(): mixed { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
}
