import { d6553 as c0, d6547 as c1, d6554 as c2, d6555 as c3, d6556 as c4, d6557 as c9, d6558 as c10, d6559 as c11, d6560 as c12, d6561 as c13, d6562 as c23, d6563 as c24, d6564 as c25, d6565 as c26, d6566 as c27, d6548 as c39 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c5, d6575 as c6, d6576 as c18, d6577 as c19, d6578 as c20, d6579 as c21, d6580 as c22, d6567 as c28, d6568 as c29, d6569 as c30, d6581 as c31, d6570 as c34, d6571 as c35, d6572 as c36, d6573 as c37 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c7 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c8 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1027 as c14 } from '../descriptors/data/51.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7698 as c15, d7699 as c16, d7700 as c17 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c32, d6583 as c33 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c38 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1027 as d1027 } from '../descriptors/data/51.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec335"]:c18(),["SharedCodec336"]:c19(),["SharedCodec337"]:c20(),["SharedCodec338"]:c21(),["SharedCodec339"]:c22(),["SharedCodec341"]:c23(),["SharedCodec342"]:c24(),["SharedCodec343"]:c25(),["SharedCodec344"]:c26(),["SharedCodec346"]:c27(),["SharedCodec347"]:c28(),["SharedCodec349"]:c29(),["SharedCodec350"]:c30(),["SharedCodec351"]:c31(),["SharedCodec352"]:c32(),["SharedCodec353"]:c33(),["SharedCodec354"]:c34(),["SharedCodec355"]:c35(),["SharedCodec356"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
