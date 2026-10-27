import { d4729 as c0, d4730 as c1 } from '../descriptors/data/211.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d193 as c2 } from '../descriptors/data/10.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2999 as c3 } from '../descriptors/data/114.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3256 as c4, d3257 as c5 } from '../descriptors/data/130.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3082 as c6 } from '../descriptors/data/120.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4731 as c7, d4738 as c9, d4739 as c10 } from '../descriptors/data/212.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c8 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4751 as c11, d4752 as c12, d4753 as c13 } from '../descriptors/data/213.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3198 as c14 } from '../descriptors/data/127.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3044 as c15 } from '../descriptors/data/118.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d193 as d193 } from '../descriptors/data/10.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionRequest"]:c0(),["CreateProductOptionValueRequest"]:c1(),["CreateProductRequest"]:c2(),["Dimensions"]:c3(),["GiftCardCustomAmountBounds"]:c4(),["GiftCardProductConfiguration"]:c5(),["ImageRequest"]:c6(),["InventoryItemCreateRequest"]:c7(),["MoneyValue"]:c8(),["ProductVariantRequest"]:c9(),["ProductVariantSelectedOptionRequest"]:c10(),["SharedCodec188"]:c11(),["SharedCodec189"]:c12(),["SharedCodec190"]:c13(),["SharedCodec369"]:c14(),["Weight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
