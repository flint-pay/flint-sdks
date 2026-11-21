import { d356 as c0 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10074 as c2, d10075 as c3, d10081 as c4, d10086 as c5 } from '../descriptors/data/468.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d356 as d356 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppRequest"]:c0(),["MoneyValue"]:c1(),["PartnerAppPaymentSplitsRequest"]:c2(),["PartnerAppPermissionManifestEntryRequest"]:c3(),["PartnerAppPlatformProfileRequest"]:c4(),["PlatformFeeCapRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
