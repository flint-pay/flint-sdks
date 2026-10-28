<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_id
 * @property-read array{'adjustments'?: list<mixed>, 'corrects_return_resolution_id'?: string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateResolutionInput extends Model {
    /** @param array{'return_id': string, 'Idempotency-Key'?: string, 'body': array{'adjustments'?: list<mixed>, 'corrects_return_resolution_id'?: string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateResolutionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create return resolution.
     * @return array{'adjustments'?: list<mixed>, 'corrects_return_resolution_id'?: string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: string, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items'?: list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
