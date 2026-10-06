import { d1769 as c0, d1772 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d14 as c7, d1821 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1772 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1772;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationInventory"]:c0(),["LocationInventoryResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationInventoryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
