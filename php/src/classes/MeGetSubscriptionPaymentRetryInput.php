<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read string $subscription_payment_retry_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetSubscriptionPaymentRetryInput extends Model {
    /** @param array{'subscription_id': string, 'subscription_payment_retry_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetSubscriptionPaymentRetryInput')); }
    /** Flint subscription ID. Must be a valid ID with prefix sub_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Flint subscription payment retry ID. Must be a valid ID with prefix spr_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * @return string
     * @throws SdkError When subscription_payment_retry_id is omitted; use hasSubscriptionPaymentRetryId() or valueOrDefault().
     */
    public function getSubscriptionPaymentRetryId(): string { return $this->get('subscription_payment_retry_id'); }
    public function hasSubscriptionPaymentRetryId(): bool { return $this->has('subscription_payment_retry_id'); }
}
