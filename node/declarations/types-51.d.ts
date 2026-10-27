import type { DeliveryProfile } from './types-13.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope, PartnerEnvironmentGrant } from './types-35.js';
import type { DeliveryRateCallback, DeliveryRevocation, DeliverySelection } from './types-14.js';
import type { DeliveryZone } from './types-15.js';
import type { Dispute } from './types-16.js';
import type { FraudWarning, Fulfillment, FulfillmentEvent } from './types-17.js';
import type { GiftCard, GiftCardLoad } from './types-18.js';
import type { GiftCardNotification, GiftCardRedemption, GiftCardTransaction } from './types-19.js';
import type { InventoryCount, InventoryLevel } from './types-24.js';
import type { InventoryReceipt, InventoryReservation, InventoryTransfer } from './types-25.js';
import type { Invoice, InvoiceDeliveryAttempt } from './types-26.js';
export type WebhookEventDeliveryProfileCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_profile.created";
});
export type WebhookEventDeliveryProfileDeactivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.deactivated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.deactivated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_profile.deactivated";
});
export type WebhookEventDeliveryProfileUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_profile.updated";
});
export type WebhookEventDeliveryRateCallbackActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.activated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_rate_callback.activated";
});
export type WebhookEventDeliveryRateCallbackArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_rate_callback.archived";
});
export type WebhookEventDeliveryRateCallbackCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_rate_callback.created";
});
export type WebhookEventDeliveryRateCallbackDeactivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.deactivated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.deactivated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_rate_callback.deactivated";
});
export type WebhookEventDeliveryRateCallbackUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRateCallback;
    };
    "event_type"?: "delivery_rate_callback.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_rate_callback.updated";
});
export type WebhookEventDeliveryRevocationCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRevocation;
    };
    "event_type"?: "delivery_revocation.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryRevocation;
    };
    "event_type"?: "delivery_revocation.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_revocation.created";
});
export type WebhookEventDeliverySelectionCommitted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliverySelection;
    };
    "event_type"?: "delivery_selection.committed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliverySelection;
    };
    "event_type"?: "delivery_selection.committed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_selection.committed";
});
export type WebhookEventDeliveryZoneActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.activated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_zone.activated";
});
export type WebhookEventDeliveryZoneArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_zone.archived";
});
export type WebhookEventDeliveryZoneCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_zone.created";
});
export type WebhookEventDeliveryZoneDeactivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.deactivated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.deactivated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_zone.deactivated";
});
export type WebhookEventDeliveryZoneUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryZone;
    };
    "event_type"?: "delivery_zone.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_zone.updated";
});
export type WebhookEventDisputeCreated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.created" | (string & {});
})
    & {
    "event_type": "dispute.created";
});
export type WebhookEventDisputeInquiryClosed = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.inquiry_closed" | (string & {});
})
    & {
    "event_type": "dispute.inquiry_closed";
});
export type WebhookEventDisputeLost = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.lost" | (string & {});
})
    & {
    "event_type": "dispute.lost";
});
export type WebhookEventDisputeNeedsResponse = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.needs_response" | (string & {});
})
    & {
    "event_type": "dispute.needs_response";
});
export type WebhookEventDisputePrevented = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.prevented" | (string & {});
})
    & {
    "event_type": "dispute.prevented";
});
export type WebhookEventDisputeUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.updated" | (string & {});
})
    & {
    "event_type": "dispute.updated";
});
export type WebhookEventDisputeWon = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Dispute;
    };
    "event_type"?: "dispute.won" | (string & {});
})
    & {
    "event_type": "dispute.won";
});
export type WebhookEventEnvironmentGrantCreated = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerEnvironmentGrant;
    };
    "event_type"?: "environment_grant.created" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "environment_grant.created";
});
export type WebhookEventEnvironmentGrantRevoked = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerEnvironmentGrant;
    };
    "event_type"?: "environment_grant.revoked" | (string & {});
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "environment_grant.revoked";
});
export type WebhookEventFraudWarningCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fraud_warning.created";
});
export type WebhookEventFraudWarningUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fraud_warning.updated";
});
export type WebhookEventFulfillmentCanceled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment.canceled";
});
export type WebhookEventFulfillmentCompleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.completed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.completed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment.completed";
});
export type WebhookEventFulfillmentCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment.created";
});
export type WebhookEventFulfillmentEventCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FulfillmentEvent;
    };
    "event_type"?: "fulfillment_event.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FulfillmentEvent;
    };
    "event_type"?: "fulfillment_event.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment_event.created";
});
export type WebhookEventFulfillmentFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.failed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment.failed";
});
export type WebhookEventFulfillmentUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "fulfillment.updated";
});
export type WebhookEventGiftCardCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card.created";
});
export type WebhookEventGiftCardLoadCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_load.created";
});
export type WebhookEventGiftCardLoadUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_load.updated";
});
export type WebhookEventGiftCardNotificationCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_notification.created";
});
export type WebhookEventGiftCardNotificationUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_notification.updated";
});
export type WebhookEventGiftCardRedemptionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_redemption.created";
});
export type WebhookEventGiftCardRedemptionUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_redemption.updated";
});
export type WebhookEventGiftCardTransactionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardTransaction;
    };
    "event_type"?: "gift_card_transaction.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardTransaction;
    };
    "event_type"?: "gift_card_transaction.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_transaction.created";
});
export type WebhookEventGiftCardUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card.updated";
});
export type WebhookEventInventoryCountApplied = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryCount;
    };
    "event_type"?: "inventory_count.applied" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryCount;
    };
    "event_type"?: "inventory_count.applied" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_count.applied";
});
export type WebhookEventInventoryLevelShortageDetected = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.shortage_detected" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.shortage_detected" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_level.shortage_detected";
});
export type WebhookEventInventoryLevelUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_level.updated";
});
export type WebhookEventInventoryReceiptCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReceipt;
    };
    "event_type"?: "inventory_receipt.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReceipt;
    };
    "event_type"?: "inventory_receipt.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_receipt.created";
});
export type WebhookEventInventoryReservationActionRequired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.action_required" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.action_required" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.action_required";
});
export type WebhookEventInventoryReservationAtRisk = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.at_risk" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.at_risk" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.at_risk";
});
export type WebhookEventInventoryReservationClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.closed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.closed";
});
export type WebhookEventInventoryReservationCommitted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.committed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.committed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.committed";
});
export type WebhookEventInventoryReservationConsumed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.consumed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.consumed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.consumed";
});
export type WebhookEventInventoryReservationCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.created";
});
export type WebhookEventInventoryReservationHoldExpired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.hold_expired" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.hold_expired" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.hold_expired";
});
export type WebhookEventInventoryReservationReleased = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.released" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.released" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_reservation.released";
});
export type WebhookEventInventoryTransferClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.closed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_transfer.closed";
});
export type WebhookEventInventoryTransferDeparted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.departed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.departed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_transfer.departed";
});
export type WebhookEventInventoryTransferLost = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.lost" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.lost" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_transfer.lost";
});
export type WebhookEventInventoryTransferReceived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.received" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.received" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_transfer.received";
});
export type WebhookEventInventoryTransferReturned = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.returned" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.returned" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "inventory_transfer.returned";
});
export type WebhookEventInvoiceCollectionBlockResolved = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_block_resolved" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_block_resolved" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.collection_block_resolved";
});
export type WebhookEventInvoiceCollectionBlocked = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_blocked" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_blocked" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.collection_blocked";
});
export type WebhookEventInvoiceCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.created";
});
export type WebhookEventInvoiceCredited = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.credited" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.credited" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice.credited";
});
export type WebhookEventInvoiceDeliveryAttemptFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.failed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.failed";
});
export type WebhookEventInvoiceDeliveryAttemptSent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InvoiceDeliveryAttempt;
    };
    "event_type"?: "invoice_delivery_attempt.sent" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "invoice_delivery_attempt.sent";
});
