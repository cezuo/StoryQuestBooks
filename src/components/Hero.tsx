export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      
      <h1 className="text-5xl font-serif text-[#2d3b55] mb-4">
        Create a Beautiful Children's Book
      </h1>

      <p className="italic text-xl text-[#4a5d73] mb-10">
        story · illustrations · printed book in hand
      </p>

      <img
        src="/hero-image.jpg"
        alt="Story illustration"
        className="mx-auto rounded-xl shadow-lg max-w-4xl w-full"
      />
    </section>
  )
}