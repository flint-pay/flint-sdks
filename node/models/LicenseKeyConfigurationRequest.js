import { d1176 as c0 } from '../descriptors/data/59.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10370 as c1, d10371 as c2 } from '../descriptors/data/487.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1176 as d1176 } from '../descriptors/data/59.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyConfigurationRequest"]:c0(),["SharedCodec1745"]:c1(),["SharedCodec1746"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
