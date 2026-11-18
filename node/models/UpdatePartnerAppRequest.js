import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10016 as c1 } from '../descriptors/data/460.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10040 as c2, d10041 as c3, d10042 as c4, d10043 as c5, d10044 as c6, d10045 as c7, d10046 as c8, d10047 as c9, d10048 as c10, d10049 as c11, d10050 as c12, d10051 as c13 } from '../descriptors/data/461.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7765 as c14 } from '../descriptors/data/326.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7765 as d7765 } from '../descriptors/data/326.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3139"]:c2(),["SharedCodec3140"]:c3(),["SharedCodec3141"]:c4(),["SharedCodec3142"]:c5(),["SharedCodec3143"]:c6(),["SharedCodec3144"]:c7(),["SharedCodec3145"]:c8(),["SharedCodec3146"]:c9(),["SharedCodec3147"]:c10(),["SharedCodec3148"]:c11(),["SharedCodec3149"]:c12(),["SharedCodec3150"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
