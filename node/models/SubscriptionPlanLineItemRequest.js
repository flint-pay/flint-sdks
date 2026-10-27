import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3632 as c1, d3633 as c7, d3634 as c8, d3635 as c9, d3636 as c10 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c2, d3240 as c11, d3236 as c12 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5107 as c3, d5108 as c4, d5109 as c5, d5110 as c6 } from '../descriptors/data/233.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5117 as c13 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c14 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5117 as d5117 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5117;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec1139"]:c3(),["SharedCodec1140"]:c4(),["SharedCodec1141"]:c5(),["SharedCodec1142"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec33"]:c11(),["SharedCodec34"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
