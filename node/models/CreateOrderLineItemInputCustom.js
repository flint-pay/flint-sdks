import { d304 as c0 } from '../descriptors/data/17.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6547 as c1, d6554 as c2, d6555 as c3, d6556 as c4, d6557 as c9, d6558 as c10, d6559 as c11, d6560 as c12, d6561 as c13, d6548 as c26 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c5, d6575 as c6, d6576 as c14, d6577 as c15, d6578 as c16, d6579 as c17, d6580 as c18, d6568 as c19, d6569 as c20, d6581 as c21, d6573 as c24 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c7 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c8 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c22, d6583 as c23 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c25 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d304 as d304 } from '../descriptors/data/17.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputCustom"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec335"]:c14(),["SharedCodec336"]:c15(),["SharedCodec337"]:c16(),["SharedCodec338"]:c17(),["SharedCodec339"]:c18(),["SharedCodec349"]:c19(),["SharedCodec350"]:c20(),["SharedCodec351"]:c21(),["SharedCodec352"]:c22(),["SharedCodec353"]:c23(),["SubscribedLineRequestModel"]:c24(),["TextModifierRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
