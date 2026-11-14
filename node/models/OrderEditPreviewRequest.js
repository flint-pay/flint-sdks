import { d6554 as c0, d6548 as c1, d6555 as c2, d6556 as c3, d6557 as c4, d6558 as c9, d6559 as c10, d6560 as c11, d6561 as c12, d6562 as c13, d6563 as c23, d6564 as c24, d6565 as c25, d6566 as c26, d6567 as c27, d6549 as c39 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6575 as c5, d6576 as c6, d6577 as c18, d6578 as c19, d6579 as c20, d6580 as c21, d6581 as c22, d6568 as c28, d6569 as c29, d6570 as c30, d6582 as c31, d6571 as c34, d6572 as c35, d6573 as c36, d6574 as c37 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c7 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c8 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1026 as c14 } from '../descriptors/data/51.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7699 as c15, d7700 as c16, d7701 as c17 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6583 as c32, d6584 as c33 } from '../descriptors/data/305.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c38 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1026 as d1026 } from '../descriptors/data/51.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1026;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["OrderEditPreviewRequest"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec333"]:c18(),["SharedCodec334"]:c19(),["SharedCodec335"]:c20(),["SharedCodec336"]:c21(),["SharedCodec337"]:c22(),["SharedCodec339"]:c23(),["SharedCodec340"]:c24(),["SharedCodec341"]:c25(),["SharedCodec342"]:c26(),["SharedCodec344"]:c27(),["SharedCodec345"]:c28(),["SharedCodec347"]:c29(),["SharedCodec348"]:c30(),["SharedCodec349"]:c31(),["SharedCodec350"]:c32(),["SharedCodec351"]:c33(),["SharedCodec352"]:c34(),["SharedCodec353"]:c35(),["SharedCodec354"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
