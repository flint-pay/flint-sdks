import { d3250 as c0 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c1 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c2, d3854 as c11, d3855 as c12, d3856 as c13, d3857 as c14 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c3, d3439 as c18, d3435 as c19 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5431 as c4, d5432 as c5, d5433 as c6, d5434 as c7 } from '../descriptors/data/255.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5438 as c8, d5439 as c9, d5440 as c10 } from '../descriptors/data/256.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c15, d3859 as c16, d3860 as c17 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c20 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5448 as c21 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5448 as d5448 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5448;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemModifierRequest"]:c2(),["OrderLineItemTax"]:c3(),["SharedCodec1224"]:c4(),["SharedCodec1225"]:c5(),["SharedCodec1226"]:c6(),["SharedCodec1227"]:c7(),["SharedCodec1331"]:c8(),["SharedCodec1332"]:c9(),["SharedCodec1333"]:c10(),["SharedCodec188"]:c11(),["SharedCodec189"]:c12(),["SharedCodec190"]:c13(),["SharedCodec191"]:c14(),["SharedCodec192"]:c15(),["SharedCodec193"]:c16(),["SharedCodec194"]:c17(),["SharedCodec51"]:c18(),["SharedCodec52"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
