import { d550 as c0, d590 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d590 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressResource"]:c0(),["DeliveryLocationSummaryResource"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryLocationSummaryResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
