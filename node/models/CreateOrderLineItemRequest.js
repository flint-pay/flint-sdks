import { d6556 as c0, d6550 as c1, d6557 as c2, d6558 as c3, d6559 as c4, d6560 as c9, d6561 as c10, d6562 as c11, d6563 as c12, d6551 as c35 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6577 as c5, d6578 as c6, d6564 as c13, d6565 as c19, d6566 as c20, d6567 as c21, d6568 as c22, d6569 as c23, d6570 as c24, d6571 as c25, d6572 as c26, d6573 as c30, d6574 as c31, d6575 as c32, d6576 as c33 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c7 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c8 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6579 as c14, d6580 as c15, d6581 as c16, d6582 as c17, d6583 as c18, d6584 as c27, d6585 as c28, d6586 as c29 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5842 as c34 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6556 as d6556 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6556;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec327"]:c14(),["SharedCodec328"]:c15(),["SharedCodec329"]:c16(),["SharedCodec330"]:c17(),["SharedCodec331"]:c18(),["SharedCodec333"]:c19(),["SharedCodec334"]:c20(),["SharedCodec335"]:c21(),["SharedCodec336"]:c22(),["SharedCodec338"]:c23(),["SharedCodec339"]:c24(),["SharedCodec341"]:c25(),["SharedCodec342"]:c26(),["SharedCodec343"]:c27(),["SharedCodec344"]:c28(),["SharedCodec345"]:c29(),["SharedCodec346"]:c30(),["SharedCodec347"]:c31(),["SharedCodec348"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
