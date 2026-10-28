import { d4772 as c0 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c1, d3250 as c2 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c3 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3453 as c4 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c5, d3856 as c13, d3857 as c14, d3852 as c19 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3348 as c6, d3341 as c20, d3342 as c21, d3343 as c22 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4808 as c7, d4809 as c8, d4810 as c9, d4811 as c10, d4812 as c12 } from '../descriptors/data/218.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4731 as c11 } from '../descriptors/data/214.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c15, d3859 as c16, d3860 as c17 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c18 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c23 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2603 as c24 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2603 as d2603 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2603;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipientPatchRequest"]:c0(),["MetadataPatchRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderCalculatedLineItemTax"]:c4(),["OrderLineItemModifierRequest"]:c5(),["SharedCodec1256"]:c6(),["SharedCodec1279"]:c7(),["SharedCodec1280"]:c8(),["SharedCodec1281"]:c9(),["SharedCodec1282"]:c10(),["SharedCodec1283"]:c11(),["SharedCodec1284"]:c12(),["SharedCodec190"]:c13(),["SharedCodec191"]:c14(),["SharedCodec192"]:c15(),["SharedCodec193"]:c16(),["SharedCodec194"]:c17(),["SharedCodec409"]:c18(),["SubscribedLineRequest"]:c19(),["TaxCalculationRequest"]:c20(),["TaxComponentRequest"]:c21(),["TaxJurisdiction"]:c22(),["TextModifierRequest"]:c23(),["UpdateLineItemRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
