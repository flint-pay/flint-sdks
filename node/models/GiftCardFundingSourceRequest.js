import { d872 as c0 } from '../descriptors/data/48.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9014 as c1, d9015 as c2, d9016 as c3, d9017 as c4, d9018 as c5, d9019 as c6, d9020 as c7, d9021 as c8, d9022 as c9, d9023 as c10, d9024 as c11, d9025 as c12, d9026 as c13, d9027 as c14, d9028 as c15, d9029 as c16 } from '../descriptors/data/404.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9030 as c17 } from '../descriptors/data/405.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d872 as d872 } from '../descriptors/data/48.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec423"]:c1(),["SharedCodec424"]:c2(),["SharedCodec425"]:c3(),["SharedCodec426"]:c4(),["SharedCodec427"]:c5(),["SharedCodec428"]:c6(),["SharedCodec429"]:c7(),["SharedCodec430"]:c8(),["SharedCodec431"]:c9(),["SharedCodec432"]:c10(),["SharedCodec433"]:c11(),["SharedCodec434"]:c12(),["SharedCodec435"]:c13(),["SharedCodec436"]:c14(),["SharedCodec437"]:c15(),["SharedCodec438"]:c16(),["SharedCodec439"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
