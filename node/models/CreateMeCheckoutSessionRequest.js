import { d8267 as c0, d8264 as c2, d8265 as c3, d8266 as c4 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d326 as c1 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9626 as c5, d9627 as c6, d9628 as c7, d9629 as c8, d9630 as c9 } from '../descriptors/data/443.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d326 as d326 } from '../descriptors/data/17.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d326;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec350"]:c2(),["SharedCodec351"]:c3(),["SharedCodec352"]:c4(),["SharedCodec468"]:c5(),["SharedCodec469"]:c6(),["SharedCodec470"]:c7(),["SharedCodec471"]:c8(),["SharedCodec472"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
