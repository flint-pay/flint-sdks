import { d2277 as c0 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2277 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2277;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeOrganizationMembershipResult"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeOrganizationMembershipResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
