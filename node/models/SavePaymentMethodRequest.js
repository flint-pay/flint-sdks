import { d956 as c0 } from '../descriptors/data/43.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d956 as d956 } from '../descriptors/data/43.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d956;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SavePaymentMethodRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
