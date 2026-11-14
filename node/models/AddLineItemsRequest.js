import { d8 as c0 } from '../descriptors/data/0.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6553 as c1, d6547 as c2, d6554 as c3, d6555 as c4, d6556 as c5, d6557 as c10, d6558 as c11, d6559 as c12, d6560 as c13, d6561 as c14, d6562 as c20, d6563 as c21, d6564 as c22, d6565 as c23, d6566 as c24, d6548 as c36 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c6, d6575 as c7, d6576 as c15, d6577 as c16, d6578 as c17, d6579 as c18, d6580 as c19, d6567 as c25, d6568 as c26, d6569 as c27, d6581 as c28, d6570 as c31, d6571 as c32, d6572 as c33, d6573 as c34 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c8 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c9 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c29, d6583 as c30 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c35 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec335"]:c15(),["SharedCodec336"]:c16(),["SharedCodec337"]:c17(),["SharedCodec338"]:c18(),["SharedCodec339"]:c19(),["SharedCodec341"]:c20(),["SharedCodec342"]:c21(),["SharedCodec343"]:c22(),["SharedCodec344"]:c23(),["SharedCodec346"]:c24(),["SharedCodec347"]:c25(),["SharedCodec349"]:c26(),["SharedCodec350"]:c27(),["SharedCodec351"]:c28(),["SharedCodec352"]:c29(),["SharedCodec353"]:c30(),["SharedCodec354"]:c31(),["SharedCodec355"]:c32(),["SharedCodec356"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
