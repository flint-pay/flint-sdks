import { d3259 as c0, d3251 as c4, d3250 as c5, d3252 as c13, d3253 as c14 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3260 as c1, d3261 as c2 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4331 as c3, d4332 as c29, d4333 as c30, d4334 as c31 } from '../descriptors/data/190.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c6 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3853 as c7, d3854 as c20, d3855 as c21, d3856 as c22, d3857 as c23 } from '../descriptors/data/164.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3436 as c8, d3439 as c27, d3435 as c28 } from '../descriptors/data/142.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5431 as c9, d5432 as c10, d5433 as c11, d5434 as c12 } from '../descriptors/data/255.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3273 as c15 } from '../descriptors/data/133.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3600 as c16 } from '../descriptors/data/151.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5438 as c17, d5439 as c18, d5440 as c19 } from '../descriptors/data/256.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3858 as c24, d3859 as c25, d3860 as c26 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3402 as c32 } from '../descriptors/data/140.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3210 as c33 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5448 as c34 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2649 as c35 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2649 as d2649 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2649;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataPatchRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemModifierRequest"]:c7(),["OrderLineItemTax"]:c8(),["SharedCodec1224"]:c9(),["SharedCodec1225"]:c10(),["SharedCodec1226"]:c11(),["SharedCodec1227"]:c12(),["SharedCodec1252"]:c13(),["SharedCodec1253"]:c14(),["SharedCodec1255"]:c15(),["SharedCodec1257"]:c16(),["SharedCodec1331"]:c17(),["SharedCodec1332"]:c18(),["SharedCodec1333"]:c19(),["SharedCodec188"]:c20(),["SharedCodec189"]:c21(),["SharedCodec190"]:c22(),["SharedCodec191"]:c23(),["SharedCodec192"]:c24(),["SharedCodec193"]:c25(),["SharedCodec194"]:c26(),["SharedCodec51"]:c27(),["SharedCodec52"]:c28(),["SharedCodec897"]:c29(),["SharedCodec898"]:c30(),["SharedCodec899"]:c31(),["SubscriptionIntervalOption"]:c32(),["TextModifierRequest"]:c33(),["UpdateSubscriptionPlanLineItemRequest"]:c34(),["UpdateSubscriptionPlanRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
