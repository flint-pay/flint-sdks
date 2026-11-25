import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10162 as c1 } from '../descriptors/data/472.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10186 as c2, d10187 as c3, d10188 as c4, d10189 as c5, d10190 as c6, d10191 as c7, d10192 as c8, d10193 as c9, d10194 as c10, d10195 as c11, d10196 as c12, d10197 as c13 } from '../descriptors/data/474.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7860 as c14 } from '../descriptors/data/332.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7860 as d7860 } from '../descriptors/data/332.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7860;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3202"]:c2(),["SharedCodec3203"]:c3(),["SharedCodec3204"]:c4(),["SharedCodec3205"]:c5(),["SharedCodec3206"]:c6(),["SharedCodec3207"]:c7(),["SharedCodec3208"]:c8(),["SharedCodec3209"]:c9(),["SharedCodec3210"]:c10(),["SharedCodec3211"]:c11(),["SharedCodec3212"]:c12(),["SharedCodec3213"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
