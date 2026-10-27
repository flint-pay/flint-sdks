import { d3542 as c0, d3554 as c1 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3588 as c2, d3589 as c3, d3590 as c4, d3591 as c5, d3592 as c6, d3593 as c7 } from '../descriptors/data/147.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3542 as d3542 } from '../descriptors/data/145.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3542;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorRequest"]:c0(),["SharedCodec100"]:c1(),["SharedCodec94"]:c2(),["SharedCodec95"]:c3(),["SharedCodec96"]:c4(),["SharedCodec97"]:c5(),["SharedCodec98"]:c6(),["SharedCodec99"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
