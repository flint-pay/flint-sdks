<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $template
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionsResetParams extends Model {
    /** @param array{'template'?: string, 'Flint-Challenge-Token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionsResetParams')); }
    /** Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: "quickstart". Value enum: "quickstart".
     * @return string
     * @throws SdkError When template is omitted; use hasTemplate() or valueOrDefault().
     */
    public function getTemplate(): string { return $this->get('template'); }
    public function hasTemplate(): bool { return $this->has('template'); }
    /** Challenge token from Flint's hosted bot check on the page that offers the demo. Flint identifies the demo client by its IP address.
     * @return string
     * @throws SdkError When Flint-Challenge-Token is omitted; use hasFlintChallengeToken() or valueOrDefault().
     */
    public function getFlintChallengeToken(): string { return $this->get('Flint-Challenge-Token'); }
    public function hasFlintChallengeToken(): bool { return $this->has('Flint-Challenge-Token'); }
}
