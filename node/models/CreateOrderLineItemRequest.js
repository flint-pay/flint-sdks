import { d3830 as c0, d3831 as c2, d3832 as c3, d3833 as c4, d3834 as c5, d3835 as c6, d3836 as c9, d3837 as c10, d3838 as c11, d3839 as c12, d3840 as c13, d3841 as c22 } from '../descriptors/data/163.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3153 as c1 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c7 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c8 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c14, d3854 as c15, d3855 as c16, d3856 as c17, d3857 as c18, d3842 as c23, d3843 as c24, d3844 as c25, d3845 as c26, d3846 as c27, d3847 as c28, d3848 as c29, d3849 as c30, d3850 as c31, d3851 as c32, d3852 as c34 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c19, d3859 as c20, d3860 as c21 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c33 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c35, d3211 as c36 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3830 as d3830 } from '../descriptors/data/163.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3830;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["OrderLineItemModifierRequest"]:c14(),["SharedCodec188"]:c15(),["SharedCodec189"]:c16(),["SharedCodec190"]:c17(),["SharedCodec191"]:c18(),["SharedCodec192"]:c19(),["SharedCodec193"]:c20(),["SharedCodec194"]:c21(),["SharedCodec196"]:c22(),["SharedCodec197"]:c23(),["SharedCodec198"]:c24(),["SharedCodec199"]:c25(),["SharedCodec201"]:c26(),["SharedCodec202"]:c27(),["SharedCodec204"]:c28(),["SharedCodec205"]:c29(),["SharedCodec206"]:c30(),["SharedCodec207"]:c31(),["SharedCodec208"]:c32(),["SharedCodec409"]:c33(),["SubscribedLineRequest"]:c34(),["TextModifierRequest"]:c35(),["Weight"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
