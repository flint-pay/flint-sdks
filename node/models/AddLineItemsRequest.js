import { d8 as c0 } from '../descriptors/data/0.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6516 as c1, d6510 as c2, d6517 as c3, d6518 as c4, d6519 as c5, d6520 as c10, d6521 as c11, d6522 as c12, d6523 as c13, d6524 as c14, d6511 as c36 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6537 as c6, d6538 as c7, d6539 as c15, d6540 as c16, d6525 as c20, d6526 as c21, d6527 as c22, d6528 as c23, d6529 as c24, d6530 as c25, d6531 as c26, d6532 as c27, d6533 as c31, d6534 as c32, d6535 as c33, d6536 as c34 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c8 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c9 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c17, d6542 as c18, d6543 as c19, d6544 as c28, d6545 as c29, d6546 as c30 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c35 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8 as d8 } from '../descriptors/data/0.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec333"]:c15(),["SharedCodec334"]:c16(),["SharedCodec335"]:c17(),["SharedCodec336"]:c18(),["SharedCodec337"]:c19(),["SharedCodec339"]:c20(),["SharedCodec340"]:c21(),["SharedCodec341"]:c22(),["SharedCodec342"]:c23(),["SharedCodec344"]:c24(),["SharedCodec345"]:c25(),["SharedCodec347"]:c26(),["SharedCodec348"]:c27(),["SharedCodec349"]:c28(),["SharedCodec350"]:c29(),["SharedCodec351"]:c30(),["SharedCodec352"]:c31(),["SharedCodec353"]:c32(),["SharedCodec354"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
