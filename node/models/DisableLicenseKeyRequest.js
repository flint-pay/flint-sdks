import { d739 as c0 } from '../descriptors/data/41.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d739 as d739 } from '../descriptors/data/41.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DisableLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDisableLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
