import { d8799 as c0, d8800 as c5 } from '../descriptors/data/393.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d11102 as c1, d11103 as c2, d11104 as c3 } from '../descriptors/data/529.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7818 as c4 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7818 as d7818 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3088"]:c0(),["SharedCodec3216"]:c1(),["SharedCodec3217"]:c2(),["SharedCodec3218"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
