import { d295 as c0 } from '../descriptors/data/16.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6516 as c1, d6510 as c2, d6517 as c3, d6518 as c4, d6519 as c5, d6520 as c10, d6521 as c11, d6522 as c12, d6523 as c13, d6524 as c14, d6511 as c39 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6537 as c6, d6538 as c7, d6539 as c18, d6540 as c19, d6525 as c23, d6526 as c24, d6527 as c25, d6528 as c26, d6529 as c27, d6530 as c28, d6531 as c29, d6532 as c30, d6533 as c34, d6534 as c35, d6535 as c36, d6536 as c37 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c8 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c9 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7660 as c15, d7661 as c16, d7662 as c17 } from '../descriptors/data/365.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c20, d6542 as c21, d6543 as c22, d6544 as c31, d6545 as c32, d6546 as c33 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c38 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d295 as d295 } from '../descriptors/data/16.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderEditRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["OrderEditRemovalRequest"]:c15(),["RefundCharge"]:c16(),["RefundDestinations"]:c17(),["SharedCodec333"]:c18(),["SharedCodec334"]:c19(),["SharedCodec335"]:c20(),["SharedCodec336"]:c21(),["SharedCodec337"]:c22(),["SharedCodec339"]:c23(),["SharedCodec340"]:c24(),["SharedCodec341"]:c25(),["SharedCodec342"]:c26(),["SharedCodec344"]:c27(),["SharedCodec345"]:c28(),["SharedCodec347"]:c29(),["SharedCodec348"]:c30(),["SharedCodec349"]:c31(),["SharedCodec350"]:c32(),["SharedCodec351"]:c33(),["SharedCodec352"]:c34(),["SharedCodec353"]:c35(),["SharedCodec354"]:c36(),["SubscribedLineRequestModel"]:c37(),["TextModifierRequest"]:c38(),["WeightRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
