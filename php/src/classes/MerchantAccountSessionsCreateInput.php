<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'targeted_requirements'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionsCreateInput extends Model {
    /** @param array{'body': array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'targeted_requirements'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionsCreateInput')); }
    /** Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. Example: {"collection_strategy":"upfront","components":["account_onboarding"],"future_requirements":"include"}.
     * @return array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'targeted_requirements'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
