import { d1941 as c0 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1941 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppSecretRotationResult"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppSecretRotationResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
