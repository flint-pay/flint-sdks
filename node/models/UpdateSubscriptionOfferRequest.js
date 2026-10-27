import { d3202 as c0 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2485 as c1 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2485 as d2485 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2485;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionIntervalOption"]:c0(),["UpdateSubscriptionOfferRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
