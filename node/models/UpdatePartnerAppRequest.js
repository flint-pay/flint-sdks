import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10018 as c1 } from '../descriptors/data/462.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10042 as c2, d10043 as c3, d10044 as c4, d10045 as c5, d10046 as c6, d10047 as c7, d10048 as c8, d10049 as c9, d10050 as c10, d10051 as c11, d10052 as c12, d10053 as c13 } from '../descriptors/data/463.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7765 as c14 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7765 as d7765 } from '../descriptors/data/327.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3139"]:c2(),["SharedCodec3140"]:c3(),["SharedCodec3141"]:c4(),["SharedCodec3142"]:c5(),["SharedCodec3143"]:c6(),["SharedCodec3144"]:c7(),["SharedCodec3145"]:c8(),["SharedCodec3146"]:c9(),["SharedCodec3147"]:c10(),["SharedCodec3148"]:c11(),["SharedCodec3149"]:c12(),["SharedCodec3150"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
