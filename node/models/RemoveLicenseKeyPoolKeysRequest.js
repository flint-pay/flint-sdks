import { d1747 as c0 } from '../descriptors/data/86.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9418 as c1, d9419 as c2, d9420 as c3 } from '../descriptors/data/427.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1747 as d1747 } from '../descriptors/data/86.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveLicenseKeyPoolKeysRequest"]:c0(),["SharedCodec2580"]:c1(),["SharedCodec2581"]:c2(),["SharedCodec2582"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveLicenseKeyPoolKeysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
