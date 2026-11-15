import { d6013 as c0, d6011 as c7, d6012 as c8 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8718 as c1 } from '../descriptors/data/429.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6703 as c2 } from '../descriptors/data/311.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c3 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6114 as c4, d6115 as c5, d6116 as c6, d6122 as c9, d6123 as c10 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8737 as c11, d8738 as c12, d8739 as c15, d8740 as c16, d8741 as c17, d8742 as c18, d8743 as c19, d8744 as c20, d8745 as c23, d8746 as c24, d8747 as c25, d8748 as c26, d8749 as c27, d8750 as c28, d8751 as c30, d8752 as c31, d8753 as c34, d8754 as c36, d8755 as c37, d8756 as c38, d8757 as c39 } from '../descriptors/data/431.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7460 as c13 } from '../descriptors/data/356.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7461 as c14, d7462 as c32 } from '../descriptors/data/357.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6132 as c21, d6133 as c22, d6134 as c35 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7540 as c29, d7542 as c33 } from '../descriptors/data/360.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8718 as d8718 } from '../descriptors/data/429.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8718;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec145"]:c9(),["SharedCodec146"]:c10(),["SharedCodec1555"]:c11(),["SharedCodec1556"]:c12(),["SharedCodec1570"]:c13(),["SharedCodec1571"]:c14(),["SharedCodec1628"]:c15(),["SharedCodec1629"]:c16(),["SharedCodec1630"]:c17(),["SharedCodec1631"]:c18(),["SharedCodec1632"]:c19(),["SharedCodec1633"]:c20(),["SharedCodec169"]:c21(),["SharedCodec170"]:c22(),["SharedCodec437"]:c23(),["SharedCodec438"]:c24(),["SharedCodec439"]:c25(),["SharedCodec440"]:c26(),["SharedCodec441"]:c27(),["SharedCodec442"]:c28(),["SharedCodec97"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
