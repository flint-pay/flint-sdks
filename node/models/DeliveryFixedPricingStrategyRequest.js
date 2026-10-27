import { d3540 as c0 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3540 as d3540 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryFixedPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryFixedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
