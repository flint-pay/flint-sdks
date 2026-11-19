import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10039 as c1 } from '../descriptors/data/468.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10063 as c2, d10064 as c3, d10065 as c4, d10066 as c5, d10067 as c6, d10068 as c7, d10069 as c8, d10070 as c9, d10071 as c10, d10072 as c11, d10073 as c12, d10074 as c13 } from '../descriptors/data/469.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7766 as c14 } from '../descriptors/data/328.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7766 as d7766 } from '../descriptors/data/328.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3132"]:c2(),["SharedCodec3133"]:c3(),["SharedCodec3134"]:c4(),["SharedCodec3135"]:c5(),["SharedCodec3136"]:c6(),["SharedCodec3137"]:c7(),["SharedCodec3138"]:c8(),["SharedCodec3139"]:c9(),["SharedCodec3140"]:c10(),["SharedCodec3141"]:c11(),["SharedCodec3142"]:c12(),["SharedCodec3143"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
