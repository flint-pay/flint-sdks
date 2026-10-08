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
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return list<ErrorDetailInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When details is omitted; use hasDetails() or valueOrDefault().
     */
    public function getDetails(): array { return $this->get('details'); }
    public function hasDetails(): bool { return $this->has('details'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
}
