import React from 'react';
import { PuzzlePiece } from './PuzzlePiece';
import styles from './Puzzle.module.css';

const awaiting = () => <></>;

const Wrap = ({ d, className = '', ...props }) => {
  const [, setText] = React.useState({ x: 0, y: 0, visible: false });

  const pathRef = React.useCallback((pathNode) => {
    if (!pathNode) {
      return;
    }
    const { x, y, width, height } = pathNode.getBBox();

    setText({
      x: x + width / 2,
      y: y + height / 2,
      visible: true,
    });
  }, []);
  return (
    <g>
      <path ref={pathRef} className={className} d={d} />
    </g>
  );
};

export const Puzzle = ({
  hideText = true,
  a = <PuzzlePiece name={'Home'} page={<div />} />,
  b = awaiting,
  c = awaiting,
  d = awaiting,
  e = awaiting,
  f = awaiting,
  g = awaiting,
  h = awaiting,
  i = awaiting,
  j = awaiting,
  k = awaiting,
  l = awaiting,
  m = awaiting,
  n = awaiting,
  o = awaiting,
  p = awaiting,
  q = awaiting,
  r = awaiting,
  s = awaiting,
  t = awaiting,
  u = awaiting,
  v = awaiting,
  w = awaiting,
  x = awaiting,
  y = awaiting,
  z = awaiting,
  _ = awaiting,
  className = '',
  ...props
}) => {
  return (
    <svg
      className={`${styles.theSVG} ${className}`}
      viewBox="0 0 1275.129 1257.125"
      {...props}
    >
      <g className={styles.svgContents}>
        <g className={styles.shapes}>
          <path
            className={styles.cube}
            d="M650.429,1104.491l-13.761,8.359L244.849,874.861v-438.33 l391.819-237.97l391.82,237.97v438.33l-5.53,3.37L650.429,1104.491z"
          />

          <g className={styles.top}>
            <g className={styles.first}>
              <Wrap
                className={styles.a}
                d="M428.572,440.43 356.677,395.522 278.651,442.913 352.227,486.811z"
              />
              <Wrap
                className={styles.b}
                d="M522.385,383.436 449.539,339.122 378.689,382.153 450.581,427.059z"
              />
              <Wrap
                className={styles.c}
                d="M616.595,326.201 544.215,281.62 471.684,325.672 544.527,369.984z"
              />
              <Wrap
                className={styles.d}
                d="M709.548,269.729 636.671,225.466 566.296,268.208 638.674,312.788z"
              />
            </g>

            <g className={styles.second}>
              <Wrap
                className={styles.e}
                d="M374.576,500.147 448.114,544.024 522.668,499.204 450.414,454.073z"
              />
              <Wrap
                className={styles.f}
                d="M472.424,440.702 544.791,485.905 618.242,441.748 544.52,396.901z"
              />
              <Wrap
                className={styles.g}
                d="M712.345,385.176 638.593,339.75 566.662,383.45 640.5,428.367z"
              />
              <Wrap
                className={styles.h}
                d="M734.539,371.833 806.467,328.593 731.7,283.184 660.671,326.336z"
              />
            </g>

            <g className={styles.third}>
              <Wrap
                className={styles.i}
                d="M544.611,512.911 470.583,557.43 546.61,602.792 617.948,558.718z"
              />
              <Wrap
                className={styles.j}
                d="M713.492,499.69 640.466,455.266 566.731,499.608 639.775,545.234z"
              />
              <Wrap
                className={styles.k}
                d="M827.632,429.172 899.233,384.936 828.673,342.081 756.602,385.422z"
              />
            </g>

            <g className={styles.fourth}>
              <Wrap
                className={styles.l}
                d="M901.312,501.565 827.652,456.196 757.497,499.539 830.632,544.028z"
              />
              <Wrap
                className={styles.m}
                d="M923.513,488.227 996.803,444.196 921.301,398.338 849.546,442.669z"
              />
              <Wrap
                className={styles.n}
                d="M639.708,572.311 568.872,616.075 640.035,658.536 710.233,616.362z"
              />
              <Wrap
                className={styles.o}
                d="M808.367,557.405 735.542,513.104 661.535,558.826 732.363,603.067z"
              />
            </g>
          </g>

          <g className={styles.left}>
            <g className={styles.alpha}>
              <Wrap
                className={styles.w}
                d="M344.373,509.135c0.075,0.123,0.132,0.207,0.166,0.258l0.306-0.202l-76.989-45.938V652.39l118.311-71.125 C361.651,538.857,345.618,511.167,344.373,509.135z"
              />
            </g>
            <g className={styles.beta}>
              <Wrap
                className={styles.x}
                d="M397.676,601.182l-129.821,78.045v182.699l106.733,64.828c31.03-60.01,68.535-132.69,99.593-193.108 C445.974,684.792,419.372,638.729,397.676,601.182z"
              />
              <Wrap
                className={styles.y}
                d="M531.817,620.75l-83.659-49.917l-30.769,18.498c20.06,34.71,44.121,76.369,69.295,119.97 C507.671,668.415,524.344,635.754,531.817,620.75z"
              />
            </g>
            <g className={styles.gamma}>
              <Wrap
                className={styles.z}
                d="M627.656,677.932l-76.083-45.396c-6.726,13.541-20.933,41.594-51.185,100.497 c46.251,80.112,94.447,163.631,127.325,220.609L627.656,677.932z"
              />
              <Wrap
                className={styles._}
                d="M487.878,757.373c-22.854,44.429-53.223,103.302-93.586,181.349l233.446,141.789l-0.016-80.83 C589.014,932.592,536.88,842.252,487.878,757.373z"
              />
            </g>
          </g>

          <g className={styles.right}>
            <g className={styles.mind}>
              <Wrap
                className={styles.p}
                d="M729.372,809.651c-7.053-61.916-7.121-118.756-7.071-173.707l-71.645,43.042l0.061,294.479 c35.503-21.029,66.769-45.467,94.152-72.283C738.062,871.198,732.921,840.793,729.372,809.651z"
              />
              <Wrap
                className={styles.q}
                d="M650.722,999.987l0.016,77.403l123.892-75.248c-9.063-24.948-16.875-49.938-23.464-75.163 C720.689,955.247,687.027,979.713,650.722,999.987z"
              />
            </g>
            <g className={styles.body}>
              <Wrap
                className={styles.r}
                d="M872.722,701.024c-31.021-29.699-51.181-75.93-53.488-123.315l-73.925,44.412 c-0.001,3.659-0.003,7.319-0.007,10.996c-0.072,77.851-0.14,157.546,18.708,248.278
    C813.893,826.874,849.259,764.207,872.722,701.024z"
              />
              <Wrap
                className={styles.s}
                d="M892.068,716.433c-8.202,21.22-17.545,41.889-28.011,61.868c-24.471,46.722-54.729,89.131-89.938,126.053 c-1.317,1.382-2.659,2.738-3.991,4.105c6.396,26.154,14.442,53.256,24.55,81.506l84.583-51.373 c1.951-79.834,17.708-149.059,47.046-207.104C914.346,728.459,902.891,723.44,892.068,716.433z"
              />
            </g>
            <g className={styles.spirit}>
              <Wrap
                className={styles.t}
                d="M951.104,734.883c-0.188-0.005-0.372-0.018-0.559-0.022c-28.27,52.889-44.256,116.205-47.756,189.44 l102.696-62.375V724.108c-17.479,7.175-34.74,10.811-51.514,10.811C953.013,734.918,952.06,734.907,951.104,734.883z"
              />
              <Wrap
                className={styles.u}
                d="M909.727,523.342l-67.658,40.647c-1.156,41.367,14.194,84.039,39.138,112.597 C898.319,623.676,907.319,571.106,909.727,523.342z"
              />
              <Wrap
                className={styles.v}
                d="M916.473,638.139c-4.56,18.979-9.998,37.659-16.271,55.975c1.438,1.043,2.886,2.057,4.36,3.011 c10.462,6.773,21.607,11.205,33.277,13.311c18.312-30.952,40.87-58.383,67.645-82.18V465.811L933.267,509.2 C932.378,552.045,926.75,595.356,916.473,638.139z"
              />
            </g>
          </g>
        </g>
        {!hideText && (
          <g className={styles.text}>
            <g className={styles.top}>
              <g className={styles.first}>
                <text
                  x="353.6114959716797"
                  y="441.16650390625"
                  className={styles.a}
                >{`Text for a`}</text>
                <text
                  x="450.53700256347656"
                  y="383.0904998779297"
                  className={styles.b}
                >{`Text for b`}</text>
                <text
                  x="544.1394805908203"
                  y="325.802001953125"
                  className={styles.c}
                >{`Text for c`}</text>
                <text
                  x="637.9219970703125"
                  y="269.1269989013672"
                  className={styles.d}
                >{`Text for d`}</text>
              </g>
              <g className={styles.second}>
                <text
                  x="448.62200927734375"
                  y="499.0484924316406"
                  className={styles.e}
                >{`Text for e`}</text>
                <text
                  x="545.3330078125"
                  y="441.4029998779297"
                  className={styles.f}
                >{`Text for f`}</text>
                <text
                  x="639.5034790039062"
                  y="384.0585021972656"
                  className={styles.g}
                >{`Text for g`}</text>
                <text
                  x="733.5690002441406"
                  y="327.5084991455078"
                  className={styles.h}
                >{`Text for h`}</text>
              </g>
              <g className={styles.third}>
                <text
                  x="544.2655029296875"
                  y="557.8515014648438"
                  className={styles.i}
                >{`Text for i`}</text>
                <text
                  x="640.1115112304688"
                  y="500.25"
                  className={styles.j}
                >{`Text for j`}</text>
                <text
                  x="827.91748046875"
                  y="385.6264953613281"
                  className={styles.k}
                >{`Text for k`}</text>
              </g>
              <g className={styles.fourth}>
                <text
                  x="829.4045104980469"
                  y="500.1120147705078"
                  className={styles.l}
                >{`Text for l`}</text>
                <text
                  x="923.1744995117188"
                  y="443.2825012207031"
                  className={styles.m}
                >{`Text for m`}</text>
                <text
                  x="639.552490234375"
                  y="615.4234924316406"
                  className={styles.n}
                >{`Text for n`}</text>
                <text
                  x="734.9509887695312"
                  y="558.0855102539062"
                  className={styles.o}
                >{`Text for o`}</text>
              </g>
            </g>

            <g className={styles.left}>
              <g className={styles.alpha}>
                <text
                  x="327.01145935058594"
                  y="557.8215179443359"
                  className={styles.w}
                >{`Text for w`}</text>
              </g>
              <g className={styles.beta}>
                <text
                  x="361.0179748535156"
                  y="763.968017578125"
                  className={styles.x}
                >{`Text for x`}</text>
                <text
                  x="474.60301208496094"
                  y="640.0670166015625"
                  className={styles.y}
                >{`Text for y`}</text>
              </g>
              <g className={styles.gamma}>
                <text
                  x="564.0505065917969"
                  y="748.0890197753906"
                  className={styles.z}
                >{`Text for z`}</text>
                <text
                  x="511.0149841308594"
                  y="918.9419860839844"
                  className={styles._}
                >{`Text for _`}</text>
              </g>
            </g>

            <g className={styles.right}>
              <g className={styles.mind}>
                <text
                  x="690.7624816894531"
                  y="814.7044677734375"
                  className={styles.p}
                >{`Text for p`}</text>
                <text
                  x="712.6759948730469"
                  y="1002.1845092773438"
                  className={styles.q}
                >{`Text for q`}</text>
              </g>
              <g className={styles.body}>
                <text
                  x="809.007568359375"
                  y="729.5519714355469"
                  className={styles.r}
                >{`Text for r`}</text>
                <text
                  x="832.2174987792969"
                  y="893.1989440917969"
                  className={styles.s}
                >{`Text for s`}</text>
              </g>
              <g className={styles.spirit}>
                <text
                  x="954.1369934082031"
                  y="824.2044982910156"
                  className={styles.t}
                >{`Text for t`}</text>
                <text
                  x="875.8674621582031"
                  y="599.9639587402344"
                  className={styles.u}
                >{`Text for u`}</text>
                <text
                  x="952.843017578125"
                  y="588.1234588623047"
                  className={styles.v}
                >{`Text for v`}</text>
              </g>
            </g>
          </g>
        )}
      </g>
    </svg>
  );
};
