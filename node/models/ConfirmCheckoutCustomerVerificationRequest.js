import { d246 as c0 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d246 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmCheckoutCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmCheckoutCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
