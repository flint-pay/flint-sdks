import { d354 as c0 } from '../descriptors/data/20.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10015 as c2, d10016 as c3, d10022 as c4, d10027 as c5 } from '../descriptors/data/460.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d354 as d354 } from '../descriptors/data/20.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppRequest"]:c0(),["MoneyValue"]:c1(),["PartnerAppPaymentSplitsRequest"]:c2(),["PartnerAppPermissionManifestEntryRequest"]:c3(),["PartnerAppPlatformProfileRequest"]:c4(),["PlatformFeeCapRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
