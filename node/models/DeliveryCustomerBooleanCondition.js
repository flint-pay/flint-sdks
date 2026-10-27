import { d3536 as c0 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3536 as d3536 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCustomerBooleanCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCustomerBooleanCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
