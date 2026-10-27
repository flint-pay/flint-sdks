import { d5085 as c0 } from '../descriptors/data/233.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5085 as d5085 } from '../descriptors/data/233.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
