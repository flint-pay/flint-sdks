import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { PaymentMethod, PaymentReview, Payout, PayoutDestination } from './types-36.js';
import type { PayoutSettings, Product, ProductVariant, Promotion } from './types-37.js';
import type { PromotionCode } from './types-38.js';
import type { Refund, Report } from './types-39.js';
import type { ResponseMeta, ReturnDisposition, ReturnInspection } from './types-40.js';
import type { WebhookEvent } from './types-50.js';
import type { ReturnResource } from './types-42.js';
import type { ReturnReceipt, ReturnResolution } from './types-41.js';
import type { Shipment, Subscription } from './types-44.js';
import type { SubscriptionDeliveryMigration } from './types-45.js';
export type WebhookEventPaymentMethodArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived" | (string & {});
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
    "event_type": "payment_method.archived";
});
export type WebhookEventPaymentMethodFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed" | (string & {});
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
    "event_type": "payment_method.failed";
});
export type WebhookEventPaymentReviewClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed" | (string & {});
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
    "event_type": "payment_review.closed";
});
export type WebhookEventPaymentReviewOpened = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened" | (string & {});
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
    "event_type": "payment_review.opened";
});
export type WebhookEventPaymentReviewReopened = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.reopened" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.reopened" | (string & {});
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
    "event_type": "payment_review.reopened";
});
export type WebhookEventPayoutCanceled = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.canceled" | (string & {});
})
    & {
    "event_type": "payout.canceled";
});
export type WebhookEventPayoutCreated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.created" | (string & {});
})
    & {
    "event_type": "payout.created";
});
export type WebhookEventPayoutDestinationArchived = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.archived" | (string & {});
})
    & {
    "event_type": "payout_destination.archived";
});
export type WebhookEventPayoutDestinationCreated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.created" | (string & {});
})
    & {
    "event_type": "payout_destination.created";
});
export type WebhookEventPayoutDestinationDisabled = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.disabled" | (string & {});
})
    & {
    "event_type": "payout_destination.disabled";
});
export type WebhookEventPayoutDestinationUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.updated" | (string & {});
})
    & {
    "event_type": "payout_destination.updated";
});
export type WebhookEventPayoutFailed = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.failed" | (string & {});
})
    & {
    "event_type": "payout.failed";
});
export type WebhookEventPayoutPaid = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.paid" | (string & {});
})
    & {
    "event_type": "payout.paid";
});
export type WebhookEventPayoutReversed = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.reversed" | (string & {});
})
    & {
    "event_type": "payout.reversed";
});
export type WebhookEventPayoutSettingsUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutSettings;
    };
    "event_type"?: "payout_settings.updated" | (string & {});
})
    & {
    "event_type": "payout_settings.updated";
});
export type WebhookEventPayoutUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.updated" | (string & {});
})
    & {
    "event_type": "payout.updated";
});
export type WebhookEventProductArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.archived" | (string & {});
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
    "event_type": "product.archived";
});
export type WebhookEventProductCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.created" | (string & {});
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
    "event_type": "product.created";
});
export type WebhookEventProductUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Product;
    };
    "event_type"?: "product.updated" | (string & {});
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
    "event_type": "product.updated";
});
export type WebhookEventProductVariantArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.archived" | (string & {});
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
    "event_type": "product_variant.archived";
});
export type WebhookEventProductVariantCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.created" | (string & {});
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
    "event_type": "product_variant.created";
});
export type WebhookEventProductVariantUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated" | (string & {});
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
    "event_type": "product_variant.updated";
});
export type WebhookEventPromotionArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.archived" | (string & {});
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
    "event_type": "promotion.archived";
});
export type WebhookEventPromotionCodeArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.archived" | (string & {});
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
    "event_type": "promotion_code.archived";
});
export type WebhookEventPromotionCodeCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.created" | (string & {});
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
    "event_type": "promotion_code.created";
});
export type WebhookEventPromotionCodeUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.updated" | (string & {});
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
    "event_type": "promotion_code.updated";
});
export type WebhookEventPromotionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.created" | (string & {});
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
    "event_type": "promotion.created";
});
export type WebhookEventPromotionUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.updated" | (string & {});
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
    "event_type": "promotion.updated";
});
export type WebhookEventRefundCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.created" | (string & {});
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
    "event_type": "refund.created";
});
export type WebhookEventRefundFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.failed" | (string & {});
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
    "event_type": "refund.failed";
});
export type WebhookEventRefundPartiallySucceeded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.partially_succeeded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.partially_succeeded" | (string & {});
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
    "event_type": "refund.partially_succeeded";
});
export type WebhookEventRefundSucceeded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.succeeded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.succeeded" | (string & {});
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
    "event_type": "refund.succeeded";
});
export type WebhookEventRefundUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated" | (string & {});
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
    "event_type": "refund.updated";
});
export type WebhookEventReportFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed" | (string & {});
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
    "event_type": "report.failed";
});
export type WebhookEventReportSucceeded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.succeeded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.succeeded" | (string & {});
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
    "event_type": "report.succeeded";
});
/** Shape $ (Value): {@link WebhookEventResponse}. A response containing `WebhookEvent` data. */
export type WebhookEventResponse = {
    /**
     * Shape $ (Value): {@link WebhookEvent}. An event prepared for delivery to webhook endpoints.
     */
    "data": WebhookEvent;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type WebhookEventReturnCanceled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.canceled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.canceled" | (string & {});
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
    "event_type": "return.canceled";
});
export type WebhookEventReturnCompleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.completed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.completed" | (string & {});
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
    "event_type": "return.completed";
});
export type WebhookEventReturnCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.created" | (string & {});
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
    "event_type": "return.created";
});
export type WebhookEventReturnDecisionRecorded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.decision_recorded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.decision_recorded" | (string & {});
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
    "event_type": "return.decision_recorded";
});
export type WebhookEventReturnDispositionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.created" | (string & {});
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
    "event_type": "return_disposition.created";
});
export type WebhookEventReturnDispositionUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.updated" | (string & {});
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
    "event_type": "return_disposition.updated";
});
export type WebhookEventReturnInspectionAcceptanceDecided = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.acceptance_decided" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.acceptance_decided" | (string & {});
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
    "event_type": "return_inspection.acceptance_decided";
});
export type WebhookEventReturnInspectionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.created" | (string & {});
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
    "event_type": "return_inspection.created";
});
export type WebhookEventReturnInspectionSuperseded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.superseded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.superseded" | (string & {});
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
    "event_type": "return_inspection.superseded";
});
export type WebhookEventReturnReceiptCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.created" | (string & {});
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
    "event_type": "return_receipt.created";
});
export type WebhookEventReturnReceiptSuperseded = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded" | (string & {});
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
    "event_type": "return_receipt.superseded";
});
export type WebhookEventReturnReceiptVerified = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified" | (string & {});
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
    "event_type": "return_receipt.verified";
});
export type WebhookEventReturnReopened = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened" | (string & {});
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
    "event_type": "return.reopened";
});
export type WebhookEventReturnResolutionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created" | (string & {});
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
    "event_type": "return_resolution.created";
});
export type WebhookEventReturnResolutionUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated" | (string & {});
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
    "event_type": "return_resolution.updated";
});
export type WebhookEventReturnUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.updated" | (string & {});
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
    "event_type": "return.updated";
});
export type WebhookEventShipmentCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created" | (string & {});
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
    "event_type": "shipment.created";
});
export type WebhookEventShipmentUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated" | (string & {});
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
    "event_type": "shipment.updated";
});
export type WebhookEventSubscriptionActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated" | (string & {});
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
    "event_type": "subscription.activated";
});
export type WebhookEventSubscriptionCanceled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled" | (string & {});
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
    "event_type": "subscription.canceled";
});
export type WebhookEventSubscriptionCancellationScheduled = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled" | (string & {});
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
    "event_type": "subscription.cancellation_scheduled";
});
export type WebhookEventSubscriptionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created" | (string & {});
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
    "event_type": "subscription.created";
});
export type WebhookEventSubscriptionCycleSkipped = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped" | (string & {});
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
    "event_type": "subscription.cycle_skipped";
});
export type WebhookEventSubscriptionDeliveryActionRequired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required" | (string & {});
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
    "event_type": "subscription.delivery_action_required";
});
export type WebhookEventSubscriptionDeliveryMigrationCompleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionDeliveryMigration;
    };
    "event_type"?: "subscription_delivery_migration.completed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionDeliveryMigration;
    };
    "event_type"?: "subscription_delivery_migration.completed" | (string & {});
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
    "event_type": "subscription_delivery_migration.completed";
});
export type WebhookEventSubscriptionDeliveryPauseUpcoming = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_pause_upcoming" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_pause_upcoming" | (string & {});
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
    "event_type": "subscription.delivery_pause_upcoming";
});
export type WebhookEventSubscriptionDeliveryUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_updated" | (string & {});
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
    "event_type": "subscription.delivery_updated";
});
export type WebhookEventSubscriptionDunningExhausted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.dunning_exhausted" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.dunning_exhausted" | (string & {});
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
    "event_type": "subscription.dunning_exhausted";
});
