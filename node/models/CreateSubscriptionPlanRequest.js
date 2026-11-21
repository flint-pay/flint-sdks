import { d418 as c0 } from '../descriptors/data/25.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8066 as c1, d8067 as c2, d8073 as c3 } from '../descriptors/data/353.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8709 as c4, d8706 as c8, d8707 as c9, d8708 as c10 } from '../descriptors/data/388.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c5 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c6 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8279 as c7 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8847 as c11, d8843 as c12 } from '../descriptors/data/396.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10947 as c13, d10948 as c14, d10949 as c15, d10950 as c16, d10951 as c17, d10952 as c18, d10953 as c19, d10946 as c33 } from '../descriptors/data/520.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8736 as c20, d8728 as c21, d8737 as c22, d8729 as c23, d8730 as c24, d8738 as c25, d8739 as c26, d8740 as c27 } from '../descriptors/data/390.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10962 as c28, d10963 as c29, d10964 as c30, d10965 as c31, d10967 as c32 } from '../descriptors/data/521.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10970 as c34, d10971 as c35 } from '../descriptors/data/522.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7986 as c36 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d418 as d418 } from '../descriptors/data/25.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1460"]:c8(),["SharedCodec1461"]:c9(),["SharedCodec1462"]:c10(),["SharedCodec190"]:c11(),["SharedCodec191"]:c12(),["SharedCodec2964"]:c13(),["SharedCodec2965"]:c14(),["SharedCodec2966"]:c15(),["SharedCodec2967"]:c16(),["SharedCodec2969"]:c17(),["SharedCodec2970"]:c18(),["SharedCodec2971"]:c19(),["SharedCodec485"]:c20(),["SharedCodec486"]:c21(),["SharedCodec487"]:c22(),["SharedCodec488"]:c23(),["SharedCodec489"]:c24(),["SharedCodec501"]:c25(),["SharedCodec502"]:c26(),["SharedCodec503"]:c27(),["SharedCodec586"]:c28(),["SharedCodec587"]:c29(),["SharedCodec588"]:c30(),["SharedCodec589"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
