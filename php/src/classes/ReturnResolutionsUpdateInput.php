<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_resolution_id
 * @property-read array{'adjustments'?: list<mixed>, 'expected_version'?: string, 'external_reference_id'?: string|null, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionsUpdateInput extends Model {
    /** @param array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'body': array{'adjustments'?: list<mixed>, 'expected_version'?: string, 'external_reference_id'?: string|null, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update return resolution.
     * @return array{'adjustments'?: list<mixed>, 'expected_version'?: string, 'external_reference_id'?: string|null, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
