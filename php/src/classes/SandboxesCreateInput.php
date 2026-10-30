<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SandboxesCreateInput extends Model {
    /** @param array{'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SandboxesCreateInput')); }
    /** The request body for: Create sandbox. Example: {"access":"restricted","issue_test_key":true,"name":"QA","scopes":["commerce.orders.read","commerce.orders.write"],"test_key_name":"QA integration key"}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
