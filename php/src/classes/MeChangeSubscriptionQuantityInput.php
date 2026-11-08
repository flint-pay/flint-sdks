<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeChangeSubscriptionQuantityInput extends Model {
    /** @param array{'subscription_id': string, 'body': array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeChangeSubscriptionQuantityInput')); }
    /** Subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The request body for: Change subscription quantity. Example: {"billing_starts":"period_end","expected_version":1,"line_items":[{"quantity":2,"subscription_line_item_id":"sli_01KEZF7C00VQ081BX7W2T96R71"}]}.
     * @return array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
