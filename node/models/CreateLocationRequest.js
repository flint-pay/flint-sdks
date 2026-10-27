import { d178 as c0 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4217 as c1, d4218 as c2, d4225 as c3 } from '../descriptors/data/179.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d178 as d178 } from '../descriptors/data/9.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateLocationRequest"]:c0(),["LocationAddressRequest"]:c1(),["LocationCoordinate"]:c2(),["SharedCodec156"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
