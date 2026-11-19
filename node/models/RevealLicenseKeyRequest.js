import { d1864 as c0 } from '../descriptors/data/93.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1864 as d1864 } from '../descriptors/data/93.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1864;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevealLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevealLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
