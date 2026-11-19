import { d354 as c0 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10038 as c2, d10039 as c3, d10045 as c4, d10050 as c5 } from '../descriptors/data/468.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d354 as d354 } from '../descriptors/data/20.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppRequest"]:c0(),["MoneyValue"]:c1(),["PartnerAppPaymentSplitsRequest"]:c2(),["PartnerAppPermissionManifestEntryRequest"]:c3(),["PartnerAppPlatformProfileRequest"]:c4(),["PlatformFeeCapRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
