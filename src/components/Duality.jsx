export default function Duality() {
  return (
    <section className="section duality" aria-labelledby="duality-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="label" data-reveal>
            <span className="label-line" /> What drives us <span className="label-line" />
          </p>
          <h2 className="section-title" id="duality-title" data-reveal>
            Two sides. One obsession.
          </h2>
        </div>

        <div className="split" data-reveal>
          <div className="split-panel split-panel--blue">
            <span className="split-letter" aria-hidden="true">A</span>
            <div className="split-content">
              <span className="split-tag">The cool head</span>
              <h3>Precision</h3>
              <p>
                Compatibility checked. Specs understood. Every recommendation grounded
                in how hardware really behaves — not how a box describes it.
              </p>
            </div>
          </div>
          <div className="split-seam" aria-hidden="true" />
          <div className="split-panel split-panel--red">
            <span className="split-letter" aria-hidden="true">H</span>
            <div className="split-content">
              <span className="split-tag">The hot blood</span>
              <h3>Passion</h3>
              <p>
                We overclock. We tinker. We chase the cleanest cable run and the quietest
                fan curve. We build because we genuinely love it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
