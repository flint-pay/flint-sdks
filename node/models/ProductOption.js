import { d2005 as c0, d2008 as c1 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2005 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2005;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ProductOption"]:c0(),["ProductOptionValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductOption(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
