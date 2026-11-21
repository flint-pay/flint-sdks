import { d296 as c0 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c2 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9057 as c3, d9058 as c4, d9059 as c5, d9060 as c6, d9061 as c7, d9062 as c8, d9063 as c9, d9064 as c10, d9065 as c11, d9066 as c12, d9067 as c13, d9068 as c14, d9069 as c15, d9070 as c16, d9071 as c17, d9072 as c18, d9073 as c19, d9074 as c20, d9075 as c21, d9076 as c22 } from '../descriptors/data/410.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9077 as c23, d9078 as c24, d9079 as c25, d9080 as c26 } from '../descriptors/data/411.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d296 as d296 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec217"]:c2(),["SharedCodec423"]:c3(),["SharedCodec424"]:c4(),["SharedCodec425"]:c5(),["SharedCodec426"]:c6(),["SharedCodec427"]:c7(),["SharedCodec428"]:c8(),["SharedCodec429"]:c9(),["SharedCodec430"]:c10(),["SharedCodec431"]:c11(),["SharedCodec432"]:c12(),["SharedCodec433"]:c13(),["SharedCodec434"]:c14(),["SharedCodec435"]:c15(),["SharedCodec436"]:c16(),["SharedCodec437"]:c17(),["SharedCodec438"]:c18(),["SharedCodec439"]:c19(),["SharedCodec440"]:c20(),["SharedCodec441"]:c21(),["SharedCodec442"]:c22(),["SharedCodec443"]:c23(),["SharedCodec444"]:c24(),["SharedCodec445"]:c25(),["SharedCodec446"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
