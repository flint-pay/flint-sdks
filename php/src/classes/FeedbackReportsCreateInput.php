<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment': string, 'summary'?: string, 'surface': string, 'surface_route'?: string}|object|array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment'?: string, 'summary': string, 'surface': string, 'surface_route'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FeedbackReportsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment': string, 'summary'?: string, 'surface': string, 'surface_route'?: string}|object|array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment'?: string, 'summary': string, 'surface': string, 'surface_route'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FeedbackReportsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create a feedback report.
     * @return array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment': string, 'summary'?: string, 'surface': string, 'surface_route'?: string}|object|array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'description'?: string, 'expected_behavior'?: string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment'?: string, 'summary': string, 'surface': string, 'surface_route'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
