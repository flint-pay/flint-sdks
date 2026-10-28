import { d209 as c0 } from '../descriptors/data/12.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3153 as c1 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3831 as c2, d3832 as c3, d3833 as c4, d3834 as c5, d3835 as c6, d3836 as c9, d3837 as c10, d3838 as c11, d3839 as c12, d3840 as c13 } from '../descriptors/data/163.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c7 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c8 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c14, d3854 as c15, d3855 as c16, d3856 as c17, d3857 as c18, d3842 as c22, d3843 as c23, d3845 as c24, d3846 as c25, d3852 as c27 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c19, d3859 as c20, d3860 as c21 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c26 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c28, d3211 as c29 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d209 as d209 } from '../descriptors/data/12.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputBundle"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["OrderLineItemModifierRequest"]:c14(),["SharedCodec188"]:c15(),["SharedCodec189"]:c16(),["SharedCodec190"]:c17(),["SharedCodec191"]:c18(),["SharedCodec192"]:c19(),["SharedCodec193"]:c20(),["SharedCodec194"]:c21(),["SharedCodec197"]:c22(),["SharedCodec198"]:c23(),["SharedCodec201"]:c24(),["SharedCodec202"]:c25(),["SharedCodec409"]:c26(),["SubscribedLineRequest"]:c27(),["TextModifierRequest"]:c28(),["Weight"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
