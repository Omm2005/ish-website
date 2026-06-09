import type { MouseEvent } from "react"

export function handleHashScroll(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  afterScroll?: () => void,
) {
  if (typeof window === "undefined") {
    return
  }

  const targetUrl = new URL(href, window.location.href)

  if (
    targetUrl.origin !== window.location.origin ||
    targetUrl.pathname !== window.location.pathname ||
    !targetUrl.hash
  ) {
    return
  }

  const target = document.getElementById(decodeURIComponent(targetUrl.hash.slice(1)))

  if (!target) {
    return
  }

  event.preventDefault()
  afterScroll?.()

  window.history.pushState(null, "", `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`)
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  })
}
