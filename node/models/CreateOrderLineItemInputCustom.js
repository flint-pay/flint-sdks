import { d304 as c0 } from '../descriptors/data/17.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6548 as c1, d6555 as c2, d6556 as c3, d6557 as c4, d6558 as c9, d6559 as c10, d6560 as c11, d6561 as c12, d6562 as c13, d6549 as c26 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6575 as c5, d6576 as c6, d6577 as c14, d6578 as c15, d6579 as c16, d6580 as c17, d6581 as c18, d6569 as c19, d6570 as c20, d6582 as c21, d6574 as c24 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c7 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c8 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6583 as c22, d6584 as c23 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c25 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d304 as d304 } from '../descriptors/data/17.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputCustom"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec333"]:c14(),["SharedCodec334"]:c15(),["SharedCodec335"]:c16(),["SharedCodec336"]:c17(),["SharedCodec337"]:c18(),["SharedCodec347"]:c19(),["SharedCodec348"]:c20(),["SharedCodec349"]:c21(),["SharedCodec350"]:c22(),["SharedCodec351"]:c23(),["SubscribedLineRequestModel"]:c24(),["TextModifierRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
