import { d3153 as c0 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5014 as c1, d5015 as c2, d5016 as c6 } from '../descriptors/data/231.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3259 as c3, d3251 as c7, d3250 as c8, d3252 as c11, d3253 as c12 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3260 as c4, d3261 as c5 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c9 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5023 as c10 } from '../descriptors/data/232.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3273 as c13 } from '../descriptors/data/133.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4878 as c14, d4879 as c15 } from '../descriptors/data/222.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c16 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2623 as c17 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3211 as c18 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2623 as d2623 } from '../descriptors/data/110.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2623;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0(),["GiftCardCustomAmountBoundsRequestRequest"]:c1(),["GiftCardProductConfigurationRequestRequest"]:c2(),["ImageInputFile"]:c3(),["ImageInputSourceURL"]:c4(),["ImageRequest"]:c5(),["InventoryItemCreateRequest"]:c6(),["MetadataPatchRequest"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["ProductVariantSelectedOptionRequest"]:c10(),["SharedCodec1252"]:c11(),["SharedCodec1253"]:c12(),["SharedCodec1255"]:c13(),["SharedCodec1293"]:c14(),["SharedCodec1294"]:c15(),["SharedCodec409"]:c16(),["UpdateProductVariantRequest"]:c17(),["Weight"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
