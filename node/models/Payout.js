import { d780 as c0, d781 as c1, d74 as c2, d1979 as c3, d38 as c4, d1974 as c5, d1975 as c6, d1976 as c7, d1977 as c8, d1978 as c9, d1806 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1979 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1979;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec5"]:c4(),["SharedCodec511"]:c5(),["SharedCodec512"]:c6(),["SharedCodec513"]:c7(),["SharedCodec514"]:c8(),["SharedCodec515"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
