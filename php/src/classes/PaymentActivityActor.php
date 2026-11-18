<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $label
 * @property-read string $resource_id
 * @property-read string $resource_type
 * Presence-aware response; omitted optional fields return null. */
final class PaymentActivityActor extends Model {
    /** @param array{'label': string, 'resource_id': string, 'resource_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentActivityActor')); }
    /** Recorded teammate name (or email), API key name, or app name. Empty when a display label was unavailable; use resource_id as a fallback.
     * @return string
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Flint ID of the identity that initiated the action. Key creators and app installers are not the actor.
     * @return string
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** The acting resource type: a teammate, API key, partner app installation, or partner app. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Value enum: "user", "api_key", "partner_app_install", "partner_app".
     * @return string
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
}
