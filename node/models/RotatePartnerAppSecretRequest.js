import { d1428 as c0, d1430 as c1 } from '../descriptors/data/68.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1428 as d1428 } from '../descriptors/data/68.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotatePartnerAppSecretRequest"]:c0(),["RotateWebhookSecretRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
