import { d53 as c0, d45 as c1, d46 as c2, d47 as c3, d48 as c4, d49 as c5, d44 as c6 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d53 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d53;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransactionRelatedResource"]:c0(),["SharedCodec10"]:c1(),["SharedCodec11"]:c2(),["SharedCodec12"]:c3(),["SharedCodec13"]:c4(),["SharedCodec14"]:c5(),["SharedCodec9"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
