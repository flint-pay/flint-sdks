import { d2212 as c0 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2212 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2212;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineItemDecisionProposal"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineItemDecisionProposal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
