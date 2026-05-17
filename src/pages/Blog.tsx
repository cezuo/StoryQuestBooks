import { useEffect, useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "../lib/supabase"
import { 
  Calendar, 
  Clock, 
  User, 
  MessageCircle, 
  Heart,
  Share2,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronDown,
  Send
} from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: 1,
    slug: "complete-guide-ai-childrens-book-illustration",
    title: "The Complete Guide to AI Children's Book Illustration",
    excerpt: "Discover how AI tools allow self-publishing children's book authors and all content creators to produce high-quality, beautiful picture book illustrations.",
    author: "Jo Ann Kairys",
    date: "March 15, 2026",
    readTime: "15 min read",
    category: "AI & Illustration",
    featured: true,
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avYco703tDrxQRNHCMxnu69iBmZXse.png",
    content: {
      intro: `Story Quest was created from my deep love of storytelling and the picture books that fascinated me as a young child. I always wished I could draw well enough to replicate the vibrant colors, textures, characters, and scenes that captured my imagination so powerfully. Many years later I eagerly learned Photoshop and other digital tools to create children's book illustrations from photographs. As I began work on a tenth book, AI image-generation technology came along with a revolutionary approach to creating art. I dove right in.`,
      sections: [
        {
          title: "At the Crossroads of Art and Technology",
          content: `AI amazed me from the first moment I watched it transform my simple text instruction into a dynamic, coherent image in minutes. Its speed far exceeds Photoshop's slow, repetitive, deliberate process of layer-based illustration-building. I'm in awe of AI's expansive artistic capabilities and easy-to-learn tools for creating high-quality storytelling art. I've come to rely on AI's time-saving technical efficiency, which frees up hours for more creative illustration work.

At the same time, I'm conflicted by AI's current drawbacks and limitations — copyright concerns, the production of superficial content, environmental cost, misuse for deception, and growing discomfort from the general public and traditional artists that AI will replace human art. Is AI inherently harmful, or is it how humans use it that invites skepticism and fear?`,
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CMJmD5inaNSCsDphDMB6TPM183gwnL.png",
          imageCaption: "Original photograph used as source reference.",
          secondaryImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-grof30hcUfN2Sap4wERgi0pS9Vz5Gn.png",
          secondaryImageCaption: "Whimsical AI-generated scene demonstrating the creative possibilities of modern tools."
        },
        {
          title: "Wonder and Worry About AI",
          content: `I wonder and worry about AI. Is it art? Is it fundamentally a passive recipient of our prompts — a lightning fast, mechanistic tool that turns patterns of data into coherent visual imagery? Is data-driven art fake because it's fundamentally synthetic? Many argue that AI by its nature lacks human conscience and feeling and therefore cannot produce art with emotional depth. But AI is activated by human input. It learns a person's stylistic preferences and incorporates them into subsequent, co-created images.`,
          quote: "AI-generated illustrations are more than a finished image. They embody the prompter's lived experience, struggle, intuition, imagination, memory, and choice — the ingredients of human art.",
          quoteAuthor: "Jo Ann Kairys, Story Quest Books 2026"
        },
        {
          title: "How AI Is Transforming Children's Book Illustration",
          content: `AI's rapid evolution and ongoing technical advances have opened significant new opportunities and creative possibilities for both experienced illustrators and first-time authors entering the children's publishing world. Traditional children's book illustration has always required a combination of artistic skill, time, and financial investment. Children's book authors typically had three choices:

• Hire a professional illustrator
• Learn complex digital art tools such as Photoshop
• Draw and paint illustrations themselves

Each option can be both rewarding and challenging. Professional illustration is expensive, and mastering digital art software often requires intensive training and years of practice.

AI tools dramatically reduce the time and cost involved in creating and editing illustrations. By using simple text prompts, authors can generate multiple versions of scenes and story characters for review and comparison in minutes.`,
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wI6g0eQHUYsEbtwHLsk127BYCPOefH.png",
          imageCaption: "AI-generated winter scene showcasing the artistic capabilities of modern AI tools."
        },
        {
          title: "Advantages of AI Illustration for Authors",
          content: `AI illustration is especially appealing to self-publishing children's book authors who value direct involvement in content creation. The hands-on ability to explore and try different image styles easily is a clear advantage over traditional canvas and digital art systems that involve time-consuming, step-by-step image-building.`,
          advantages: [
            {
              title: "Affordability",
              description: "Hiring a professional illustrator can cost thousands of dollars, making AI illustration tools a viable, budget-friendly, workflow alternative for creating professional-quality artwork."
            },
            {
              title: "Faster Creative Workflows",
              description: "AI is known for speed and efficiency. Because AI handles technical image-building steps and produces multiple scene and character variations in minutes, more time is free to focus on aesthetics."
            },
            {
              title: "Flexible Artistic Styles",
              description: "AI illustration tools allow authors to explore many different visual styles, including watercolor, oil-paint storybook art, colored pencil illustrations, whimsical cartoons, and semi-realistic digital art."
            },
            {
              title: "Built-In Color Intelligence",
              description: "AI systems are trained on large collections of visual art and photography, enabling them to generate harmonious color palettes and lighting that enhance storytelling and visual impact."
            }
          ]
        },
        {
          title: "Best AI Tools for Children's Book Illustration",
          content: `As an early adopter of AI tools, I've followed and used every new AI technological and creative innovation since the beginning. I experimented with AI's emerging image generation capabilities when illustrating my first AI-inspired, award-winning children's book in 2025. These four programs proved the most effective:`,
          tools: [
            {
              name: "Midjourney",
              description: "Excels at producing illustrations with soft cinematic lighting, rich painterly textures and color palettes. Its ability to convey mood, atmosphere, and stylistic consistency makes it especially powerful for children's picture books."
            },
            {
              name: "Freepik AI",
              description: "Provides numerous options for creating new images and videos from text or existing images, a design environment that encourages trial and error for refining characters and scenes."
            },
            {
              name: "OpenArt",
              description: "Provides specific design applications for story-building, image and video production, character training, and native audio effects. Excels at character training and refining facial expressions with precision."
            },
            {
              name: "Adobe Firefly",
              description: "Integrates AI image generation with Adobe's creative ecosystem, making it a natural choice for authors already using tools such as Photoshop or Adobe Express."
            }
          ],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PImfmr9AP66916nCRe5wEGgEMK5MSl.png",
          imageCaption: "AI Illustration Platforms vs. Photoshop pricing comparison."
        },
        {
          title: "Step-by-Step Workflow for AI Illustration",
          content: `Most AI illustration projects follow a simple linear creative process:`,
          steps: [
            {
              step: 1,
              title: "Describe the Scene",
              description: "Begin by writing a short description of the scene you want to illustrate. Include characters, settings, lighting, and mood."
            },
            {
              step: 2,
              title: "Convert to an AI Prompt",
              description: "The more detailed your prompt, the better AI will follow your instructions. Include style references, color palettes, and artistic influences."
            },
            {
              step: 3,
              title: "Generate Image Variations",
              description: "Select the number of image variations you'd like to see, so you can compare results and select the one that best fits your story."
            },
            {
              step: 4,
              title: "Refine Details",
              description: "Prompts can be expanded and enhanced to improve character expressions, lighting, composition, and background elements."
            },
            {
              step: 5,
              title: "Prepare for Publishing",
              description: "Export final illustrations to a page-layout and formatting program designed for print-on-demand publishing."
            }
          ],
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CNqHdykE5MhVHzdL6MLtw7F4QPle4j.png",
          imageCaption: "AI-generated illustration showing the warmth and charm possible with modern tools."
        },
        {
          title: "Creating Consistent Characters",
          content: `Maintaining consistent characters across multiple scenes can be one of the most frustrating challenges of AI illustration. Fortunately, both Freepik AI and OpenArt introduced character modeling applications that make this possible. Achieving consistency of human facial features, expressions, clothing, active poses, and camera angles that change on every story page is now faster and more reliable than ever.`,
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-86z36YFA2baXBjwyASOKGeD8amEj1G.png",
          imageCaption: "Example of consistent character design across a children's book spread."
        },
        {
          title: "The Future of AI in Children's Book Publishing",
          content: `The question for children's book authors and illustrators is no longer whether AI is cheaper than traditional digital art software. The better question is this: which tool gives you the most finished beauty and quality, the fastest, for the kind of book you want to create?

Photoshop may still be the master of precision, but AI platforms have rewritten the economics of imagination.`,
        }
      ]
    }
  }
]

type BlogPost = (typeof blogPosts)[number]

type CommentRecord = {
  id: number
  post_id: number
  parent_id: number | null
  author: string
  content: string
  likes: number | null
  created_at: string
}

type CommentSectionProps = {
  postId: number
}

type BlogPostDetailProps = {
  post: BlogPost
  onBack: () => void
}

type BlogCardProps = {
  post: BlogPost
  onClick: () => void
}

// Floating background shapes
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-32 h-32 rounded-full bg-linear-to-br from-[#96ACE8]/30 to-[#546DB2]/30 blur-2xl"
    />
    <motion.div
      animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-40 right-20 w-40 h-40 rounded-full bg-linear-to-br from-[#ADBFF2]/30 to-[#8A98C1]/30 blur-2xl"
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-40 left-1/4 w-36 h-36 rounded-full bg-linear-to-br from-[#C5D2F5]/30 to-[#EEF2FC]/30 blur-2xl"
    />
  </div>
)

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<CommentRecord[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [showAllComments, setShowAllComments] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submittingComment, setSubmittingComment] = useState(false)
  const [submittingReplyId, setSubmittingReplyId] = useState<number | null>(null)
  const [activeReplyCommentId, setActiveReplyCommentId] = useState<number | null>(null)
  const [replyAuthorName, setReplyAuthorName] = useState<Record<number, string>>({})
  const [replyContent, setReplyContent] = useState<Record<number, string>>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [realtimeEnabled, setRealtimeEnabled] = useState(true)

  const fetchComments = async () => {
    setLoading(true)

    const { data, error } = await supabase
      .from("blog_comments")
      .select("id, post_id, parent_id, author, content, likes, created_at")
      .eq("post_id", postId)
      .order("created_at", { ascending: false })

    if (error) {
      const isNetworkResolutionError =
        error.message.includes("Failed to fetch") ||
        error.message.includes("ERR_NAME_NOT_RESOLVED")

      if (isNetworkResolutionError) {
        setErrorMessage(
          "Unable to reach Supabase. Check VITE_SUPABASE_URL in your .env file and confirm the project URL from Supabase settings."
        )
        setRealtimeEnabled(false)
      } else {
        setErrorMessage(error.message)
      }

      setComments([])
      setLoading(false)
      return
    }

    setErrorMessage(null)
    setRealtimeEnabled(true)
    setComments(data ?? [])
    setLoading(false)
  }

  useEffect(() => {
    fetchComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId])

  useEffect(() => {
    if (!realtimeEnabled) return

    const channel = supabase
      .channel(`blog-comments-${postId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "blog_comments",
          filter: `post_id=eq.${postId}`,
        },
        () => {
          fetchComments()
        }
      )
      .subscribe()

    return () => {
      void supabase.removeChannel(channel)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, realtimeEnabled])

  const handleSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newComment.trim() || !authorName.trim()) return

    setSubmittingComment(true)
    const { error } = await supabase.from("blog_comments").insert({
      post_id: postId,
      parent_id: null,
      author: authorName.trim(),
      content: newComment.trim(),
      likes: 0,
    })

    if (error) {
      setErrorMessage(error.message)
      setSubmittingComment(false)
      return
    }

    setNewComment("")
    setAuthorName("")
    setErrorMessage(null)
    await fetchComments()
    setSubmittingComment(false)
  }

  const handleSubmitReply = async (e: FormEvent<HTMLFormElement>, parentCommentId: number) => {
    e.preventDefault()

    const author = replyAuthorName[parentCommentId]?.trim() ?? ""
    const content = replyContent[parentCommentId]?.trim() ?? ""
    if (!author || !content) return

    setSubmittingReplyId(parentCommentId)
    const { error } = await supabase.from("blog_comments").insert({
      post_id: postId,
      parent_id: parentCommentId,
      author,
      content,
      likes: 0,
    })

    if (error) {
      setErrorMessage(error.message)
      setSubmittingReplyId(null)
      return
    }

    setReplyAuthorName(prev => ({ ...prev, [parentCommentId]: "" }))
    setReplyContent(prev => ({ ...prev, [parentCommentId]: "" }))
    setActiveReplyCommentId(null)
    setErrorMessage(null)
    await fetchComments()
    setSubmittingReplyId(null)
  }

  const handleLike = async (commentId: number) => {
    const target = comments.find((comment) => comment.id === commentId)
    if (!target) return

    const nextLikes = (target.likes ?? 0) + 1
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId ? { ...comment, likes: nextLikes } : comment
      )
    )

    const { error } = await supabase
      .from("blog_comments")
      .update({ likes: nextLikes })
      .eq("id", commentId)

    if (error) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId ? { ...comment, likes: target.likes ?? 0 } : comment
        )
      )
      setErrorMessage(error.message)
    }
  }

  const topLevelComments = comments.filter((comment) => comment.parent_id === null)
  const displayedComments = showAllComments ? topLevelComments : topLevelComments.slice(0, 3)

  const repliesByCommentId = comments.reduce<Record<number, CommentRecord[]>>((acc, comment) => {
    if (comment.parent_id === null) return acc
    if (!acc[comment.parent_id]) acc[comment.parent_id] = []
    acc[comment.parent_id].push(comment)
    return acc
  }, {})

  const formatCommentDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })

  return (
    <div className="mt-16 pt-12 border-t border-[#C5D2F5]">
      <h3 className="text-2xl font-bold text-[#1F2942] mb-8 flex items-center gap-3">
        <MessageCircle className="w-6 h-6 text-[#546DB2]" />
        Comments ({topLevelComments.length})
      </h3>

      {errorMessage && (
        <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      {/* Comment form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmitComment}
        className="mb-10 p-6 bg-linear-to-br from-[#EEF2FC] to-[#F6F5FC] rounded-2xl border border-[#C5D2F5]"
      >
        <h4 className="text-lg font-semibold text-[#1F2942] mb-4">Leave a Comment</h4>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#C5D2F5] focus:border-[#546DB2] focus:ring-2 focus:ring-[#96ACE8]/30 outline-none transition-all bg-white"
          />
          <textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-[#C5D2F5] focus:border-[#546DB2] focus:ring-2 focus:ring-[#96ACE8]/30 outline-none transition-all resize-none bg-white"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submittingComment}
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#546DB2] to-[#2A3659] text-white font-semibold rounded-xl shadow-lg shadow-[#546DB2]/30 hover:shadow-xl transition-all"
          >
            <Send className="w-4 h-4" />
            {submittingComment ? "Posting..." : "Post Comment"}
          </motion.button>
        </div>
      </motion.form>

      {/* Comments list */}
      <div className="space-y-6">
        {loading && <p className="text-[#8A98C1]">Loading comments...</p>}

        {!loading && displayedComments.length === 0 && (
          <p className="text-[#8A98C1]">No comments yet. Be the first to start the conversation.</p>
        )}

        <AnimatePresence>
          {!loading && displayedComments.map((comment, index) => {
            const replies = repliesByCommentId[comment.id] ?? []
            const isReplying = activeReplyCommentId === comment.id

            return (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-[#C5D2F5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#96ACE8] to-[#546DB2] flex items-center justify-center text-white font-semibold">
                      {comment.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2942]">{comment.author}</p>
                      <p className="text-sm text-[#8A98C1]">{formatCommentDate(comment.created_at)}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 text-[#8A98C1] hover:text-[#546DB2] transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{comment.likes ?? 0}</span>
                  </motion.button>
                </div>

                <p className="text-[#8A98C1] leading-relaxed">{comment.content}</p>

                <div className="mt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveReplyCommentId(isReplying ? null : comment.id)}
                    className="text-sm font-medium text-[#546DB2] hover:text-[#2A3659] transition-colors"
                  >
                    {isReplying ? "Cancel Reply" : "Reply"}
                  </button>
                  {replies.length > 0 && (
                    <span className="text-sm text-[#8A98C1]">
                      {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
                    </span>
                  )}
                </div>

                {isReplying && (
                  <form
                    onSubmit={(e) => handleSubmitReply(e, comment.id)}
                    className="mt-4 space-y-3 rounded-xl border border-[#C5D2F5] bg-[#F6F8FD] p-4"
                  >
                    <input
                      type="text"
                      placeholder="Your name"
                      value={replyAuthorName[comment.id] ?? ""}
                      onChange={(e) =>
                        setReplyAuthorName((prev) => ({
                          ...prev,
                          [comment.id]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 rounded-lg border border-[#C5D2F5] focus:border-[#546DB2] focus:ring-2 focus:ring-[#96ACE8]/30 outline-none bg-white"
                    />
                    <textarea
                      placeholder="Write a reply..."
                      rows={3}
                      value={replyContent[comment.id] ?? ""}
                      onChange={(e) =>
                        setReplyContent((prev) => ({
                          ...prev,
                          [comment.id]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 rounded-lg border border-[#C5D2F5] focus:border-[#546DB2] focus:ring-2 focus:ring-[#96ACE8]/30 outline-none bg-white resize-none"
                    />
                    <button
                      type="submit"
                      disabled={submittingReplyId === comment.id}
                      className="rounded-lg bg-[#546DB2] px-4 py-2 text-white text-sm font-medium hover:bg-[#2A3659] transition-colors"
                    >
                      {submittingReplyId === comment.id ? "Posting..." : "Post Reply"}
                    </button>
                  </form>
                )}

                {replies.length > 0 && (
                  <div className="mt-5 space-y-4 border-l-2 border-[#C5D2F5] pl-4">
                    {replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="rounded-xl bg-[#F6F8FD] border border-[#C5D2F5] p-4"
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium text-[#1F2942]">{reply.author}</p>
                            <p className="text-xs text-[#8A98C1]">{formatCommentDate(reply.created_at)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleLike(reply.id)}
                            className="flex items-center gap-1 text-[#8A98C1] hover:text-[#546DB2] transition-colors"
                          >
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{reply.likes ?? 0}</span>
                          </button>
                        </div>
                        <p className="text-sm text-[#8A98C1] leading-relaxed">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {topLevelComments.length > 3 && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowAllComments(!showAllComments)}
          className="mt-6 flex items-center gap-2 text-[#546DB2] font-medium hover:text-[#2A3659] transition-colors mx-auto"
        >
          {showAllComments ? "Show Less" : `View All ${topLevelComments.length} Comments`}
          <ChevronDown className={`w-4 h-4 transition-transform ${showAllComments ? "rotate-180" : ""}`} />
        </motion.button>
      )}
    </div>
  )
}

// Blog post detail view
const BlogPostDetail = ({ post, onBack }: BlogPostDetailProps) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={onBack}
        className="flex items-center gap-2 text-[#8A98C1] hover:text-[#546DB2] mb-8 transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Blog
      </motion.button>

      {/* Header */}
      <header className="mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-linear-to-r from-[#EEF2FC] to-[#C5D2F5] text-[#546DB2] text-sm font-medium rounded-full mb-4"
        >
          {post.category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#1F2942] mb-6 leading-tight"
        >
          {post.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 text-[#8A98C1]"
        >
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </motion.div>
      </header>

      {/* Cover image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full aspect-video object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-[#8A98C1] leading-relaxed mb-12"
        >
          {post.content.intro}
        </motion.p>

        {/* Sections */}
        {post.content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2942] mb-6">
              {section.title}
            </h2>
            
            <p className="text-[#8A98C1] leading-relaxed whitespace-pre-line mb-6">
              {section.content}
            </p>

            {/* Quote */}
            {section.quote && (
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative my-10 pl-8 border-l-4 border-[#546DB2] bg-linear-to-r from-[#EEF2FC] to-transparent py-6 pr-6 rounded-r-2xl"
              >
                <Sparkles className="absolute -left-3 -top-3 w-6 h-6 text-[#546DB2]" />
                <p className="text-xl italic text-[#2A3659] mb-3">{section.quote}</p>
                <cite className="text-sm text-[#546DB2] font-medium not-italic">— {section.quoteAuthor}</cite>
              </motion.blockquote>
            )}

            {/* Image */}
            {section.image && section.secondaryImage ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="my-10 space-y-8"
              >
                <figure className="max-w-md mx-auto">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={section.image}
                      alt={section.imageCaption}
                      className="w-full"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="mt-4 text-center text-sm text-[#8A98C1] italic">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>

                <figure className="max-w-md mx-auto">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={section.secondaryImage}
                      alt={section.secondaryImageCaption ?? "Transformed artwork"}
                      className="w-full"
                    />
                  </div>
                  {section.secondaryImageCaption && (
                    <figcaption className="mt-4 text-center text-sm text-[#8A98C1] italic">
                      {section.secondaryImageCaption}
                    </figcaption>
                  )}
                </figure>
              </motion.div>
            ) : section.image ? (
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="my-10"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={section.image}
                    alt={section.imageCaption}
                    className="w-full"
                  />
                </div>
                {section.imageCaption && (
                  <figcaption className="mt-4 text-center text-sm text-[#8A98C1] italic">
                    {section.imageCaption}
                  </figcaption>
                )}
              </motion.figure>
            ) : null}

            {/* Advantages */}
            {section.advantages && (
              <div className="grid md:grid-cols-2 gap-6 my-10">
                {section.advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-linear-to-br from-white to-[#F6F5FC] rounded-2xl border border-[#C5D2F5] shadow-sm hover:shadow-md transition-all"
                  >
                    <h4 className="text-lg font-bold text-[#1F2942] mb-2">{adv.title}</h4>
                    <p className="text-[#8A98C1] text-sm leading-relaxed">{adv.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tools */}
            {section.tools && (
              <div className="grid md:grid-cols-2 gap-6 my-10">
                {section.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-linear-to-br from-[#EEF2FC] to-[#C5D2F5]/30 rounded-2xl border border-[#ADBFF2]"
                  >
                    <h4 className="text-lg font-bold text-[#2A3659] mb-2">{tool.name}</h4>
                    <p className="text-[#8A98C1] text-sm leading-relaxed">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Steps */}
            {section.steps && (
              <div className="my-10 space-y-4">
                {section.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-[#C5D2F5] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-[#96ACE8] to-[#546DB2] flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2942] mb-1">{step.title}</h4>
                      <p className="text-[#8A98C1] text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {/* Share */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 py-8 border-t border-b border-[#C5D2F5] my-12"
      >
        <span className="text-[#8A98C1]">Share this article:</span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[#EEF2FC] hover:bg-[#C5D2F5] text-[#8A98C1] hover:text-[#546DB2] transition-colors"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Comments */}
      <CommentSection postId={post.id} />
    </motion.article>
  )
}

// Blog card
const BlogCard = ({ post, onClick }: BlogCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    <div className="relative rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
      <motion.img
        src={post.coverImage}
        alt={post.title}
        className="w-full aspect-video object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div className="absolute top-4 left-4">
        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#546DB2] text-sm font-medium rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex items-center gap-4 text-sm text-[#8A98C1]">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-[#1F2942] group-hover:text-[#546DB2] transition-colors">
        {post.title}
      </h3>
      <p className="text-[#8A98C1] leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2 text-[#546DB2] font-medium pt-2">
        Read More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </motion.article>
)

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F6F5FC] via-[#F6F8FD] to-[#F6F5FC]">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <BlogPostDetail 
              key="detail"
              post={selectedPost} 
              onBack={() => setSelectedPost(null)} 
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <header className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-[#546DB2] mb-4"
                >
                  <BookOpen className="w-4 h-4" />
                  Story Quest Blog
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2942] mb-6"
                >
                  Insights & <span className="italic font-light text-[#546DB2]">Inspiration</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-[#8A98C1] max-w-2xl mx-auto"
                >
                  Explore articles about children&apos;s book illustration, AI creativity, and the art of storytelling.
                </motion.p>
              </header>

              {/* Blog posts grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    onClick={() => setSelectedPost(post)}
                  />
                ))}
              </div>

              {/* Empty state for more posts */}
              {blogPosts.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center mt-16 p-12 bg-linear-to-br from-[#EEF2FC] to-[#F6F5FC] rounded-3xl border border-[#C5D2F5]"
                >
                  <Sparkles className="w-12 h-12 text-[#96ACE8] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#1F2942] mb-2">More Articles Coming Soon</h3>
                  <p className="text-[#8A98C1]">Stay tuned for more insights about children&apos;s book illustration and creativity.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default Blog