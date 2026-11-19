import { d433 as c0 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10544 as c1 } from '../descriptors/data/497.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d433 as d433 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d433;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookTestEventRequest"]:c0(),["SharedCodec44"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
