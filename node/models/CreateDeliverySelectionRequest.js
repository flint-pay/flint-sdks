import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3096 as c1 } from '../descriptors/data/121.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d140 as c2 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3285 as c3 } from '../descriptors/data/131.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3279 as c4 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d140 as d140 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliverySelectionChoiceRequest"]:c1(),["CreateDeliverySelectionRequest"]:c2(),["DeliverySelectionInstructionsRequest"]:c3(),["DeliverySelectionRecipientRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
