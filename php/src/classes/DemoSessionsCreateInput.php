<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'template'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionsCreateInput extends Model {
    /** @param array{'Flint-Challenge-Token': string, 'body': array{'template'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionsCreateInput')); }
    /** Challenge token from Flint's hosted bot check on the page that offers the demo. Flint identifies the demo client by its IP address.
     * @return string
     * @throws SdkError When Flint-Challenge-Token is omitted; use hasFlintChallengeToken() or valueOrDefault().
     */
    public function getFlintChallengeToken(): string { return $this->get('Flint-Challenge-Token'); }
    public function hasFlintChallengeToken(): bool { return $this->has('Flint-Challenge-Token'); }
    /** The request body for: Create demo session. Example: {"template":"quickstart"}.
     * @return array{'template'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
