import { d6556 as c0, d6550 as c1, d6557 as c2, d6558 as c3, d6559 as c4, d6560 as c9, d6561 as c10, d6562 as c11, d6563 as c12, d6551 as c39 } from '../descriptors/data/302.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6577 as c5, d6578 as c6, d6564 as c13, d6565 as c23, d6566 as c24, d6567 as c25, d6568 as c26, d6569 as c27, d6570 as c28, d6571 as c29, d6572 as c30, d6573 as c34, d6574 as c35, d6575 as c36, d6576 as c37 } from '../descriptors/data/303.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c7 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c8 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1025 as c14 } from '../descriptors/data/51.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7696 as c15, d7697 as c16, d7698 as c17 } from '../descriptors/data/369.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6579 as c18, d6580 as c19, d6581 as c20, d6582 as c21, d6583 as c22, d6584 as c31, d6585 as c32, d6586 as c33 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5842 as c38 } from '../descriptors/data/262.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1025 as d1025 } from '../descriptors/data/51.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1025;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec327"]:c18(),["SharedCodec328"]:c19(),["SharedCodec329"]:c20(),["SharedCodec330"]:c21(),["SharedCodec331"]:c22(),["SharedCodec333"]:c23(),["SharedCodec334"]:c24(),["SharedCodec335"]:c25(),["SharedCodec336"]:c26(),["SharedCodec338"]:c27(),["SharedCodec339"]:c28(),["SharedCodec341"]:c29(),["SharedCodec342"]:c30(),["SharedCodec343"]:c31(),["SharedCodec344"]:c32(),["SharedCodec345"]:c33(),["SharedCodec346"]:c34(),["SharedCodec347"]:c35(),["SharedCodec348"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
