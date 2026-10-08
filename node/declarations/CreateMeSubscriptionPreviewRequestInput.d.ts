
import type { SubscriptionDeliveryDestinationRequestInput } from './SubscriptionDeliveryDestinationRequestInput.js';

export type CreateMeSubscriptionPreviewRequestInput = { "destination": SubscriptionDeliveryDestinationRequestInput; "mode": "delivery_options"; /** pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */ "subscription_id": string; };
