<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'audience'?: string, 'claim_conditions'?: list<mixed>, 'issuer': string, 'name': string, 'scopes': list<string>, 'subject': string, 'subject_match'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentitiesCreateInput extends Model {
    /** @param array{'body': array{'audience'?: string, 'claim_conditions'?: list<mixed>, 'issuer': string, 'name': string, 'scopes': list<string>, 'subject': string, 'subject_match'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentitiesCreateInput')); }
    /** The request body for: Create a workload identity. Example: {"claim_conditions":[{"claim":"repository_owner_id","match":"exact","value":"123456"}],"issuer":"https://token.actions.githubusercontent.com","name":"Production deploy","scopes":["commerce.orders.read"],"subject":"repo:acme/shop:ref:refs/heads/main"}.
     * @return array{'audience'?: string, 'claim_conditions'?: list<mixed>, 'issuer': string, 'name': string, 'scopes': list<string>, 'subject': string, 'subject_match'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
