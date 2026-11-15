<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read list<ErrorDetailInput|array<array-key, mixed>|\stdClass> $details
 * @property-read string $message
 * @property-read string $param
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPreviewErrorInput extends Model {
    /** @param array{'code': string, 'details'?: list<ErrorDetailInput|array<array-key, mixed>|\stdClass>, 'message': string, 'param'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewErrorInput')); }
    /** Stable code for this failure, as an error response would carry it.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Individual failures behind this error, as an error response would list them. Omitted when there are none. [] (Value): {@see ErrorDetailInput}. One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.
     * @return list<ErrorDetailInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When details is omitted; use hasDetails() or valueOrDefault().
     */
    public function getDetails(): array { return $this->get('details'); }
    public function hasDetails(): bool { return $this->has('details'); }
    /** What is wrong with the proposed subscription.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Request field the failure applies to, as a path in the preview request, such as `subscription.terms.billing_interval`. Omitted when the failure isn't tied to one field.
     * @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
}
