import { d5 as c0 } from '../descriptors/data/0.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3830 as c1, d3831 as c3, d3832 as c4, d3833 as c5, d3834 as c6, d3835 as c7, d3836 as c10, d3837 as c11, d3838 as c12, d3839 as c13, d3840 as c14, d3841 as c23 } from '../descriptors/data/163.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3153 as c2 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c8 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c9 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c15, d3854 as c16, d3855 as c17, d3856 as c18, d3857 as c19, d3842 as c24, d3843 as c25, d3844 as c26, d3845 as c27, d3846 as c28, d3847 as c29, d3848 as c30, d3849 as c31, d3850 as c32, d3851 as c33, d3852 as c35 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c20, d3859 as c21, d3860 as c22 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c34 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c36, d3211 as c37 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5 as d5 } from '../descriptors/data/0.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["Dimensions"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequest"]:c6(),["LineItemFulfillmentRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequest"]:c11(),["OrderDraftLineItemTaxRequest"]:c12(),["OrderDraftTaxComponentRequest"]:c13(),["OrderDraftTaxJurisdictionRequest"]:c14(),["OrderLineItemModifierRequest"]:c15(),["SharedCodec188"]:c16(),["SharedCodec189"]:c17(),["SharedCodec190"]:c18(),["SharedCodec191"]:c19(),["SharedCodec192"]:c20(),["SharedCodec193"]:c21(),["SharedCodec194"]:c22(),["SharedCodec196"]:c23(),["SharedCodec197"]:c24(),["SharedCodec198"]:c25(),["SharedCodec199"]:c26(),["SharedCodec201"]:c27(),["SharedCodec202"]:c28(),["SharedCodec204"]:c29(),["SharedCodec205"]:c30(),["SharedCodec206"]:c31(),["SharedCodec207"]:c32(),["SharedCodec208"]:c33(),["SharedCodec409"]:c34(),["SubscribedLineRequest"]:c35(),["TextModifierRequest"]:c36(),["Weight"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
