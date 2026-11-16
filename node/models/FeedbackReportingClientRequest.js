import { d8740 as c0 } from '../descriptors/data/389.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8740 as d8740 } from '../descriptors/data/389.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReportingClientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportingClientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
