<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_deletion_request_id
 * @property-read array{'cancel_subscriptions'?: bool, 'decision': string, 'decision_reason'?: string, 'remove_payment_methods'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestsResolveInput extends Model {
    /** @param array{'customer_deletion_request_id': string, 'body': array{'cancel_subscriptions'?: bool, 'decision': string, 'decision_reason'?: string, 'remove_payment_methods'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestsResolveInput')); }
    /** Flint customer deletion request ID. Example: "cdel_01KEZF7C009P94WEXW5RMRFXAY".
     * @return string
     * @throws SdkError When customer_deletion_request_id is omitted; use hasCustomerDeletionRequestId() or valueOrDefault().
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** The request body for: Resolve a customer deletion request. Example: {"decision":"approve"}.
     * @return array{'cancel_subscriptions'?: bool, 'decision': string, 'decision_reason'?: string, 'remove_payment_methods'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
