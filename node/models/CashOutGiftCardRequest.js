import { d153 as c0 } from '../descriptors/data/7.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d153 as d153 } from '../descriptors/data/7.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CashOutGiftCardRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCashOutGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
