import { d8056 as c0 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8279 as c2 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10949 as c3, d10950 as c4 } from '../descriptors/data/520.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8736 as c5, d8728 as c6, d8737 as c7, d8729 as c8, d8730 as c9, d8738 as c10, d8739 as c11, d8740 as c12 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7986 as c13 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7823 as c14 } from '../descriptors/data/331.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7823 as d7823 } from '../descriptors/data/331.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7823;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec2966"]:c3(),["SharedCodec2967"]:c4(),["SharedCodec485"]:c5(),["SharedCodec486"]:c6(),["SharedCodec487"]:c7(),["SharedCodec488"]:c8(),["SharedCodec489"]:c9(),["SharedCodec501"]:c10(),["SharedCodec502"]:c11(),["SharedCodec503"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputVariant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
