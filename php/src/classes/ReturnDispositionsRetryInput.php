<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_disposition_id
 * @property-read array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnDispositionsRetryInput extends Model {
    /** @param array{'return_disposition_id': string, 'body': array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionsRetryInput')); }
    /** Flint return disposition id. Example: "retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** The request body for: Retry return disposition.
     * @return array{'expected_version'?: int, 'reason': string, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
