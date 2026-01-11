export default function About() {
  return (
    <div className="bg-white">

      

      {/* ===== ABOUT CONTENT ===== */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-24">

        <h2 className="text-4xl font-light mb-8">


          About Us
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          9•5 EDIT creates refined workwear designed for everyday confidence.
We focus on timeless pieces that feel effortless, polished, and practical.
Built on quality and consistency, our clothing is made to last beyond trends
        </p>

        <h3 className="text-sm tracking-widest uppercase mt-10 mb-4">
          9•5 EDIT
        </h3>

        <p className="text-gray-700 leading-relaxed mb-10">
          WORKWEAR REWRITTEN
        </p>

        <h3 className="text-lg font-medium mb-4">
          Our Inspiration
        </h3>

        <p className="text-gray-700 leading-relaxed">
          9•5 EDIT is a modern workwear label inspired by European simplicity and refined tailoring.
           We create timeless officewear for women and men—defined by clean silhouettes, elevated fabrics, and effortless elegance. Designed to balance comfort and structure,
           our pieces help professionals feel confident, polished, and at ease throughout the day.
        </p>

      </section>

      {/* ===== COMMITMENTS SECTION ===== */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-light mb-14">
            Our Commitments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-medium mb-4">
                Timeless Workwear
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We design pieces that go beyond trends.
                Every 9•5 EDIT garment is created to feel
                relevant season after seasson.
                Refined silhouettes , neutral tones , and effortless
                styling you can rely on everyday work life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-medium mb-4">
                Thoughtful Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From fabric selection to fit, every detail is intentional. 
                Our designs balance comfort and structure, making it easy to
                move through long workdays while still looking polished and put together.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8">
              <h3 className="text-lg font-medium mb-4">
                Consistency & Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in quality over quantity. We source eco-friendly
                materials and prioritise sustainable practices in our
                manufacturing processes, so you can feel good about your
                fashion choices.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
