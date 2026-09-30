import { d634 as c0, d635 as c1, d69 as c2, d1646 as c3, d1645 as c4, d1959 as c5, d1960 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d635 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d635;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackTestDelivery"]:c0(),["DeliveryRateCallbackTestDeliveryResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackTestDeliveryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
