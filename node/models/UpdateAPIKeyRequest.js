import { d7983 as c0, d7984 as c1, d7997 as c2, d7998 as c4, d7999 as c5 } from '../descriptors/data/347.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7973 as c3 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7735 as c6 } from '../descriptors/data/324.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7735 as d7735 } from '../descriptors/data/324.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3067"]:c0(),["SharedCodec3068"]:c1(),["SharedCodec339"]:c2(),["SharedCodec5"]:c3(),["SharedCodec574"]:c4(),["SharedCodec575"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
