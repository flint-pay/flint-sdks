import { d1729 as c0 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1729 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentSizeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLineItemFulfillmentSizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
