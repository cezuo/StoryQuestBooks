export default function Footer() {
  return (
    <footer className="bg-[#2d3b55] text-white px-8 py-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold mb-2">StoryQuest</h2>
          <p className="text-sm text-gray-300 max-w-sm">
            Helping authors and creatives bring their stories to life through illustration and publishing.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Author Coaching</li>
              <li>Creative Coaching</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-300">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} StoryQuest. All rights reserved.
      </div>
    </footer>
  )
}