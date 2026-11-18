import { d873 as c0 } from '../descriptors/data/48.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9013 as c1, d9014 as c2, d9015 as c3, d9016 as c4, d9017 as c5, d9018 as c6, d9019 as c7, d9020 as c8, d9021 as c9, d9022 as c10, d9023 as c11, d9024 as c12, d9025 as c13, d9026 as c14, d9027 as c15, d9028 as c16 } from '../descriptors/data/403.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9029 as c17 } from '../descriptors/data/404.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d873 as d873 } from '../descriptors/data/48.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d873;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec422"]:c1(),["SharedCodec423"]:c2(),["SharedCodec424"]:c3(),["SharedCodec425"]:c4(),["SharedCodec426"]:c5(),["SharedCodec427"]:c6(),["SharedCodec428"]:c7(),["SharedCodec429"]:c8(),["SharedCodec430"]:c9(),["SharedCodec431"]:c10(),["SharedCodec432"]:c11(),["SharedCodec433"]:c12(),["SharedCodec434"]:c13(),["SharedCodec435"]:c14(),["SharedCodec436"]:c15(),["SharedCodec437"]:c16(),["SharedCodec438"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
