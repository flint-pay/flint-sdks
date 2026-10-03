import { d39 as c0, d40 as c1, d1783 as c2, d1784 as c3, d74 as c4, d1786 as c5, d1785 as c6, d2122 as c7, d37 as c8, d38 as c9, d1806 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d40 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d40;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["BalanceListResponse"]:c1(),["MoneyMovementHistoryMeta"]:c2(),["MoneyMovementListMeta"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseWarning"]:c7(),["SharedCodec4"]:c8(),["SharedCodec5"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
