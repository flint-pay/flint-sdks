<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $label
 * @property-read string $resource_id
 * @property-read string $resource_type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentActivityActorInput extends Model {
    /** @param array{'label': string, 'resource_id': string, 'resource_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentActivityActorInput')); }
    /** Recorded teammate name (or email), API key name, or app name. Empty when a display label was unavailable; use resource_id as a fallback.
     * @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Flint ID of the identity that initiated the action. Key creators and app installers are not the actor. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** The acting resource type: a teammate, API key, partner app installation, or partner app. Example: "user". Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Value enum: "user", "api_key", "partner_app_install", "partner_app".
     * @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
}
