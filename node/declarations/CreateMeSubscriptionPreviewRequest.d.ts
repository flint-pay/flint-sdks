
import type { SubscriptionDeliveryDestinationRequest } from './SubscriptionDeliveryDestinationRequest.js';

export type CreateMeSubscriptionPreviewRequest = { "destination": SubscriptionDeliveryDestinationRequest; "mode": "delivery_options" | (string & {}); /** pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */ "subscription_id": string; };
