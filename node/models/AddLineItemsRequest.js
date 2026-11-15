import { d8 as c0 } from '../descriptors/data/0.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6556 as c1, d6550 as c2, d6557 as c3, d6558 as c4, d6559 as c5, d6560 as c10, d6561 as c11, d6562 as c12, d6563 as c13, d6551 as c36 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6577 as c6, d6578 as c7, d6564 as c14, d6565 as c20, d6566 as c21, d6567 as c22, d6568 as c23, d6569 as c24, d6570 as c25, d6571 as c26, d6572 as c27, d6573 as c31, d6574 as c32, d6575 as c33, d6576 as c34 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c8 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c9 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6579 as c15, d6580 as c16, d6581 as c17, d6582 as c18, d6583 as c19, d6584 as c28, d6585 as c29, d6586 as c30 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5842 as c35 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec327"]:c15(),["SharedCodec328"]:c16(),["SharedCodec329"]:c17(),["SharedCodec330"]:c18(),["SharedCodec331"]:c19(),["SharedCodec333"]:c20(),["SharedCodec334"]:c21(),["SharedCodec335"]:c22(),["SharedCodec336"]:c23(),["SharedCodec338"]:c24(),["SharedCodec339"]:c25(),["SharedCodec341"]:c26(),["SharedCodec342"]:c27(),["SharedCodec343"]:c28(),["SharedCodec344"]:c29(),["SharedCodec345"]:c30(),["SharedCodec346"]:c31(),["SharedCodec347"]:c32(),["SharedCodec348"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
