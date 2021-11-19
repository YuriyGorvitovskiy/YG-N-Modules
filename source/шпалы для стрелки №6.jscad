const JSCAD = require('@jscad/modeling')
const { polygon } = JSCAD.primitives
const { extrudeLinear } = JSCAD.extrusions
const { rotateX, translateY } = JSCAD.transforms
const { union } = JSCAD.booleans

// sizes in mm
const main = () => {
  const height = 1.5;
  const step = 3.0;

  var sleeper1 = translateY(-step * 0, rotateX(Math.PI / 2, sleeper(height)));
  var sleeper2 = translateY(-step * 1, rotateX(Math.PI / 2, sleeper(height)));
  var sleeper3 = translateY(-step * 2, rotateX(Math.PI / 2, sleeper(height)));
  var sleeper4 = translateY(-step * 3, rotateX(Math.PI / 2, sleeper(height)));
  var sleeper5 = translateY(-step * 4, rotateX(Math.PI / 2, sleeper(height)));

  var support1 = rotateX(Math.PI / 2, support(step * 4 + height));
  return union(sleeper1, sleeper2, sleeper3, sleeper4, sleeper5, support1);
}

/**
                           B     E                                           H     K
▷ Y2                   ┌───○     ○───┐                                   ┌───○     ○───┐
│               ┌──────┘   │     │   └──────┐                     ┌──────┘   │     │   └──────┐
▷ Y1      A ○───┘          ○─────○          └───○─────────────○───┘          ○─────○          └───○ L
│           │              C     D              F             G              I     J              │
│           │                                                                                     │
│           │                                                                                     │
▷ Y0      N ○─────────────────────────────────────────────────────────────────────────────────────○ M

            △──────────────△─────△──────────────△──────▲──────△──────────────△─────△──────────────△
            X8             X6    X4             X2     X0     X1             X3    X5             X7
**/

const Y2 = 1.9;
const Y1 = 1.5;
const Y0 = 0.0;

const X0 = 0.0;
const X3 = 8.22 / 2;
const X1 = X3 - 3.0;
const X5 = 11.32 / 2;
const X7 = X5 + 3.0;
const X2 = -X1;
const X4 = -X3;
const X6 = -X5;
const X8 = -X7;

const sleeper = () => {
    const A = [X8, Y1];
    const B = [X6, Y2];
    const C = [X6, Y1];
    const D = [X4, Y1];
    const E = [X4, Y2];
    const F = [X2, Y1];
    const G = [X1, Y1];
    const H = [X3, Y2];
    const I = [X3, Y1];
    const J = [X5, Y1];
    const K = [X5, Y2];
    const L = [X7, Y1];
    const M = [X7, Y0];
    const N = [X8, Y0];

    const poly = polygon({ points: [N, M, L, K, J, I, H, G, F, E, D, C, B, A] });
    return extrudeLinear({ height: 1.5 }, poly);
}


const Y3 = 0.5;

/**
▷ Y3                     A ○─────○ B                                       E ○─────○ F
│                          │     │                                           │     │
▷ Y0                     D ○─────○ C                                       H ○─────○ G

            △──────────────△─────△──────────────△──────▲──────△──────────────△─────△──────────────△
                           X6    X4                    X0                    X3    X5
**/
const support = (height) => {
    const A = [X6, Y3];
    const B = [X4, Y3];
    const C = [X4, Y0];
    const D = [X6, Y0];
    const E = [X3, Y3];
    const F = [X5, Y3];
    const G = [X5, Y0];
    const H = [X3, Y0];

    const poly1 = polygon({ points: [D, C, B, A] });
    const poly2 = polygon({ points: [H, G, F, E] });
    return extrudeLinear({ height: height }, union(poly1, poly2))
}

module.exports = {main};
