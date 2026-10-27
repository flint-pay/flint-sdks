import { d5059 as c0 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5059 as d5059 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BrandingSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBrandingSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
