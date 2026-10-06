import { d2068 as c0, d2253 as c1, d2256 as c2 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2256 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskListItemResult"]:c0(),["RiskListItem"]:c1(),["RiskListItemResultsData"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskListItemResultsData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
