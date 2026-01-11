export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-32">

      {/* Heading */}
      <h2 className="text-3xl font-light mb-10">
        Contact Us
      </h2>

      {/* Instagram */}
      <div className="mb-12">
        <p className="text-sm text-gray-600 mb-2">
          Instagram
        </p>
        <a
          href="https://instagram.com/9to5_edit"
          target="_blank"
          rel="noreferrer"
          className="text-base underline hover:opacity-70 transition"
        >
          @9to5_edit
        </a>
      </div>

      {/* Review Block */}
      <div className="max-w-xl">
        <p className="text-sm text-gray-600 mb-3">
          Share your feedback
        </p>

        <textarea
          placeholder="Write your review here..."
          className="
            w-full
            border
            border-gray-300
            p-4
            text-sm
            focus:outline-none
            focus:border-black
            mb-6
            resize-none
            h-40
          "
        />

        <button
          className="
            border
            border-black
            px-10
            py-3
            text-sm
            uppercase
            tracking-widest
            hover:bg-black
            hover:text-white
            transition
          "
        >
          Submit
        </button>
      </div>

    </section>
  );
}