import { d250 as c0, d74 as c1, d1786 as c2, d1785 as c3, d1960 as c4, d1961 as c5, d1962 as c6, d2121 as c7, d2122 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1962 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountMetric"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentVolumeBucket"]:c4(),["PaymentVolumeTimeseries"]:c5(),["PaymentVolumeTimeseriesResponse"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentVolumeTimeseriesResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
