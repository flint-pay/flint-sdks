import { d6013 as c0, d6011 as c8, d6012 as c9 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d378 as c1 } from '../descriptors/data/24.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8718 as c2 } from '../descriptors/data/429.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6703 as c3 } from '../descriptors/data/311.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c4 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6114 as c5, d6115 as c6, d6116 as c7, d6122 as c10, d6123 as c11 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8737 as c12, d8738 as c13, d8739 as c16, d8740 as c17, d8741 as c18, d8742 as c19, d8743 as c20, d8744 as c21, d8745 as c24, d8746 as c25, d8747 as c26, d8748 as c27, d8749 as c28, d8750 as c29, d8751 as c31, d8752 as c32, d8753 as c35, d8754 as c37, d8755 as c38, d8756 as c39, d8757 as c40 } from '../descriptors/data/431.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7460 as c14 } from '../descriptors/data/356.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7461 as c15, d7462 as c33 } from '../descriptors/data/357.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6132 as c22, d6133 as c23, d6134 as c36 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7540 as c30, d7542 as c34 } from '../descriptors/data/360.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d378 as d378 } from '../descriptors/data/24.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec145"]:c10(),["SharedCodec146"]:c11(),["SharedCodec1555"]:c12(),["SharedCodec1556"]:c13(),["SharedCodec1570"]:c14(),["SharedCodec1571"]:c15(),["SharedCodec1628"]:c16(),["SharedCodec1629"]:c17(),["SharedCodec1630"]:c18(),["SharedCodec1631"]:c19(),["SharedCodec1632"]:c20(),["SharedCodec1633"]:c21(),["SharedCodec169"]:c22(),["SharedCodec170"]:c23(),["SharedCodec437"]:c24(),["SharedCodec438"]:c25(),["SharedCodec439"]:c26(),["SharedCodec440"]:c27(),["SharedCodec441"]:c28(),["SharedCodec442"]:c29(),["SharedCodec97"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
