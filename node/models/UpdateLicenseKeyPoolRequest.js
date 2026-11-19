import { d8047 as c0 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c1 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7761 as c2 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7761 as d7761 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3071"]:c0(),["SharedCodec3074"]:c1(),["UpdateLicenseKeyPoolRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLicenseKeyPoolRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
