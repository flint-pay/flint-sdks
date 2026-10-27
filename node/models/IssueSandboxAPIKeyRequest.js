import { d761 as c0 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3047 as c1, d3054 as c3, d3055 as c4 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3031 as c2 } from '../descriptors/data/117.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d761 as d761 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueSandboxAPIKeyRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec57"]:c3(),["SharedCodec58"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
