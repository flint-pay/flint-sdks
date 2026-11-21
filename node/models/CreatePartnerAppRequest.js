import { d356 as c0 } from '../descriptors/data/20.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10074 as c2, d10075 as c3, d10081 as c4, d10086 as c5 } from '../descriptors/data/468.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d356 as d356 } from '../descriptors/data/20.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppRequest"]:c0(),["MoneyValue"]:c1(),["PartnerAppPaymentSplitsRequest"]:c2(),["PartnerAppPermissionManifestEntryRequest"]:c3(),["PartnerAppPlatformProfileRequest"]:c4(),["PlatformFeeCapRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
