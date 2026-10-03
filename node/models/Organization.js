import { d778 as c0, d1867 as c1, d1746 as c2 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1867 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1867;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrganizationSummary"]:c0(),["Organization"]:c1(),["SharedCodec475"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrganization(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
