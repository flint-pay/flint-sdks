<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read string $subscription_line_item_id
 * @property-read array{'expected_version'?: int, 'variant_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateSubscriptionLineItemInput extends Model {
    /** @param array{'subscription_id': string, 'subscription_line_item_id': string, 'body': array{'expected_version'?: int, 'variant_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateSubscriptionLineItemInput')); }
    /** Subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Subscription line item ID. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     * @return string
     * @throws SdkError When subscription_line_item_id is omitted; use hasSubscriptionLineItemId() or valueOrDefault().
     */
    public function getSubscriptionLineItemId(): string { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** The request body for: Swap subscription variant. Example: {"expected_version":1,"variant_id":"var_01KEZF7C00RRMRMT530BRR5T71"}.
     * @return array{'expected_version'?: int, 'variant_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
