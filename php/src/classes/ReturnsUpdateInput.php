<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_id
 * @property-read array{'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsUpdateInput extends Model {
    /** @param array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsUpdateInput')); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
