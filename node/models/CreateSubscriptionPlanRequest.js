import { d276 as c0 } from '../descriptors/data/17.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3259 as c1, d3250 as c5 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3260 as c2, d3261 as c3 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4331 as c4, d4332 as c25, d4333 as c26, d4334 as c27 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c6 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c7, d3854 as c16, d3855 as c17, d3856 as c18, d3857 as c19 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c8, d3439 as c23, d3435 as c24 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5431 as c9, d5432 as c10, d5433 as c11, d5434 as c12 } from '../descriptors/data/255.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5435 as c13, d5436 as c14, d5437 as c15 } from '../descriptors/data/256.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c20, d3859 as c21, d3860 as c22 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3402 as c28 } from '../descriptors/data/140.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5447 as c29 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c30 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d276 as d276 } from '../descriptors/data/17.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemModifierRequest"]:c7(),["OrderLineItemTax"]:c8(),["SharedCodec1224"]:c9(),["SharedCodec1225"]:c10(),["SharedCodec1226"]:c11(),["SharedCodec1227"]:c12(),["SharedCodec1228"]:c13(),["SharedCodec1229"]:c14(),["SharedCodec1230"]:c15(),["SharedCodec188"]:c16(),["SharedCodec189"]:c17(),["SharedCodec190"]:c18(),["SharedCodec191"]:c19(),["SharedCodec192"]:c20(),["SharedCodec193"]:c21(),["SharedCodec194"]:c22(),["SharedCodec51"]:c23(),["SharedCodec52"]:c24(),["SharedCodec897"]:c25(),["SharedCodec898"]:c26(),["SharedCodec899"]:c27(),["SubscriptionIntervalOption"]:c28(),["SubscriptionPlanLineItemRequest"]:c29(),["TextModifierRequest"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
