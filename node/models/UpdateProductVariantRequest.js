import { d9999 as c0, d10000 as c1, d10001 as c5, d9996 as c9 } from '../descriptors/data/465.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7777 as c2, d7778 as c3, d7767 as c6, d7769 as c10, d7770 as c11, d7768 as c12 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7784 as c4, d7789 as c13 } from '../descriptors/data/337.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c7 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10009 as c8 } from '../descriptors/data/466.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9692 as c14, d9693 as c15, d9694 as c16, d9695 as c17 } from '../descriptors/data/446.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7532 as c18 } from '../descriptors/data/318.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7532 as d7532 } from '../descriptors/data/318.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequest"]:c0(),["GiftCardProductConfigurationRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["InventoryItemCreateRequest"]:c5(),["MetadataRequest"]:c6(),["MoneyValue"]:c7(),["ProductVariantSelectedOptionRequest"]:c8(),["QuantityPriceBreakRequest"]:c9(),["SharedCodec2975"]:c10(),["SharedCodec2976"]:c11(),["SharedCodec2977"]:c12(),["SharedCodec2979"]:c13(),["SharedCodec3040"]:c14(),["SharedCodec3041"]:c15(),["SharedCodec3042"]:c16(),["SharedCodec3043"]:c17(),["UpdateProductVariantRequest"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
