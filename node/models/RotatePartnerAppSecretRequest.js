import { d1287 as c0 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1289 as c1 } from '../descriptors/data/61.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1287 as d1287 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotatePartnerAppSecretRequest"]:c0(),["RotateWebhookSecretRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
