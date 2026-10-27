import { d3069 as c0 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4070 as c1, d4071 as c17, d4072 as c18, d4073 as c19 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c2 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3632 as c3, d3633 as c11, d3634 as c12, d3635 as c13, d3636 as c14 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c4, d3240 as c15, d3236 as c16 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5107 as c5, d5108 as c6, d5109 as c7, d5110 as c8 } from '../descriptors/data/233.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3081 as c9 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3396 as c10 } from '../descriptors/data/137.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3202 as c20 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c21 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5118 as c22 } from '../descriptors/data/234.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2486 as c23 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2486 as d2486 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["InventoryRoutingSourceRequest"]:c1(),["MoneyValue"]:c2(),["OrderLineItemModifierRequest"]:c3(),["OrderLineItemTax"]:c4(),["SharedCodec1139"]:c5(),["SharedCodec1140"]:c6(),["SharedCodec1141"]:c7(),["SharedCodec1142"]:c8(),["SharedCodec1162"]:c9(),["SharedCodec1163"]:c10(),["SharedCodec163"]:c11(),["SharedCodec164"]:c12(),["SharedCodec165"]:c13(),["SharedCodec166"]:c14(),["SharedCodec33"]:c15(),["SharedCodec34"]:c16(),["SharedCodec854"]:c17(),["SharedCodec855"]:c18(),["SharedCodec856"]:c19(),["SubscriptionIntervalOption"]:c20(),["TextModifierRequest"]:c21(),["UpdateSubscriptionPlanLineItemRequest"]:c22(),["UpdateSubscriptionPlanRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
