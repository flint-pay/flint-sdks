<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'token': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailPreferenceLinksUnsubscribeInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'token': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLinksUnsubscribeInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Look up an email preference link; Unsubscribe an email preference link.
     * @return array{'token': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
