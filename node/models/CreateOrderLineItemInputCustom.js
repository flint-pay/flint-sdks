import { d300 as c0 } from '../descriptors/data/17.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6510 as c1, d6517 as c2, d6518 as c3, d6519 as c4, d6520 as c9, d6521 as c10, d6522 as c11, d6523 as c12, d6524 as c13, d6511 as c26 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6537 as c5, d6538 as c6, d6539 as c14, d6540 as c15, d6531 as c19, d6532 as c20, d6536 as c24 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c7 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c8 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c16, d6542 as c17, d6543 as c18, d6544 as c21, d6545 as c22, d6546 as c23 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c25 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d300 as d300 } from '../descriptors/data/17.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputCustom"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec333"]:c14(),["SharedCodec334"]:c15(),["SharedCodec335"]:c16(),["SharedCodec336"]:c17(),["SharedCodec337"]:c18(),["SharedCodec347"]:c19(),["SharedCodec348"]:c20(),["SharedCodec349"]:c21(),["SharedCodec350"]:c22(),["SharedCodec351"]:c23(),["SubscribedLineRequestModel"]:c24(),["TextModifierRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
