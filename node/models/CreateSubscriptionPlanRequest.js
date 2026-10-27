import { d233 as c0 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3069 as c1 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4070 as c2, d4071 as c16, d4072 as c17, d4073 as c18 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c3 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3632 as c4, d3633 as c10, d3634 as c11, d3635 as c12, d3636 as c13 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c5, d3240 as c14, d3236 as c15 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5107 as c6, d5108 as c7, d5109 as c8, d5110 as c9 } from '../descriptors/data/233.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3202 as c19 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5117 as c20 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c21 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d233 as d233 } from '../descriptors/data/13.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["InventoryRoutingSourceRequest"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifierRequest"]:c4(),["OrderLineItemTax"]:c5(),["SharedCodec1139"]:c6(),["SharedCodec1140"]:c7(),["SharedCodec1141"]:c8(),["SharedCodec1142"]:c9(),["SharedCodec163"]:c10(),["SharedCodec164"]:c11(),["SharedCodec165"]:c12(),["SharedCodec166"]:c13(),["SharedCodec33"]:c14(),["SharedCodec34"]:c15(),["SharedCodec854"]:c16(),["SharedCodec855"]:c17(),["SharedCodec856"]:c18(),["SubscriptionIntervalOption"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
