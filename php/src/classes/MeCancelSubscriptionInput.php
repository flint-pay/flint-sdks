<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCancelSubscriptionInput extends Model {
    /** @param array{'subscription_id': string, 'body'?: array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCancelSubscriptionInput')); }
    /** Flint subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Cancellation timing and the optional reason and comment recorded with the request. Example: {"cancel_immediately":false,"cancellation_reason_code":"too_expensive"}.
     * @return array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
