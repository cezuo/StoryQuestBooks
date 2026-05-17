import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

type BackgroundGradientAnimationProps = {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(8, 20, 48)",
  gradientBackgroundEnd = "rgb(23, 10, 56)",
  firstColor = "91, 83, 255",
  secondColor = "244, 114, 182",
  thirdColor = "56, 189, 248",
  fourthColor = "245, 158, 11",
  fifthColor = "34, 197, 94",
  pointerColor = "168, 85, 247",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = useRef<HTMLDivElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--gradient-background-start", gradientBackgroundStart)
    root.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
    root.style.setProperty("--first-color", firstColor)
    root.style.setProperty("--second-color", secondColor)
    root.style.setProperty("--third-color", thirdColor)
    root.style.setProperty("--fourth-color", fourthColor)
    root.style.setProperty("--fifth-color", fifthColor)
    root.style.setProperty("--pointer-color", pointerColor)
    root.style.setProperty("--size", size)
    root.style.setProperty("--blending-value", blendingValue)
  }, [
    blendingValue,
    fifthColor,
    firstColor,
    fourthColor,
    gradientBackgroundEnd,
    gradientBackgroundStart,
    pointerColor,
    secondColor,
    size,
    thirdColor,
  ])

  useEffect(() => {
    if (!interactive) return

    let frameId = 0

    const tick = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) / 20
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) / 20

      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(currentRef.current.x)}px, ${Math.round(currentRef.current.y)}px)`
      }

      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [interactive])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return

    const rect = interactiveRef.current.getBoundingClientRect()
    mouseRef.current.x = event.clientX - rect.left
    mouseRef.current.y = event.clientY - rect.top
  }

  return (
    <div
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn(
        "relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("relative z-10", className)}>{children}</div>

      <div className="gradients-container absolute inset-0 h-full w-full blur-lg filter-[url(#blurMe)_blur(40px)]">
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)] h-[var(--size)] w-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            "[transform-origin:center_center] animate-first opacity-100",
          )}
        />
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)] h-[var(--size)] w-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            "[transform-origin:calc(50%-400px)] animate-second opacity-100",
          )}
        />
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)] h-[var(--size)] w-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            "[transform-origin:calc(50%+400px)] animate-third opacity-100",
          )}
        />
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)] h-[var(--size)] w-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            "[transform-origin:calc(50%-200px)] animate-fourth opacity-70",
          )}
        />
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
            "[mix-blend-mode:var(--blending-value)] h-[var(--size)] w-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            "[transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100",
          )}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] -left-1/2 -top-1/2 h-full w-full opacity-70",
            )}
          />
        )}
      </div>
    </div>
  )
}
