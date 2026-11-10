import { useEffect, useRef, useState } from 'react'
import './SustainXLoader.css'

const LEFT_LOOP_PATH =
  'M 382 194 C 355 158 328 122 292 91 C 260 65 222 49 184 49 C 140 49 101 68 69 102 C 40 133 24 170 24 204 C 24 249 47 289 83 318 C 120 347 165 360 207 354 C 258 348 300 319 331 285 C 353 261 370 229 382 194 Z'

const RIGHT_LOOP_PATH =
  'M 382 194 C 402 166 429 124 452 94 L 511 94 C 539 128 565 164 588 198 C 611 156 631 111 663 78 C 689 55 726 48 761 51 C 761 96 746 137 718 169 C 696 195 669 215 643 231 L 747 358 C 705 359 666 352 638 338 C 616 313 596 284 577 263 C 560 284 545 307 523 321 C 499 326 477 317 457 298 C 432 271 408 235 382 194 Z'

const MINIMUM_DISPLAY_TIME = 2500

function SustainXLoader({ isLoading }) {
  const [isVisible, setIsVisible] = useState(isLoading)
  const startedAt = useRef(null)
  const visibilityTimer = useRef(null)

  useEffect(() => {
    window.clearTimeout(visibilityTimer.current)

    if (isLoading) {
      if (startedAt.current === null) {
        startedAt.current = Date.now()
      }

      visibilityTimer.current = window.setTimeout(() => setIsVisible(true), 0)
    } else if (startedAt.current !== null) {
      const elapsed = Date.now() - startedAt.current
      const remaining = Math.max(0, MINIMUM_DISPLAY_TIME - elapsed)

      visibilityTimer.current = window.setTimeout(() => {
        setIsVisible(false)
        startedAt.current = null
      }, remaining)
    }

    return () => window.clearTimeout(visibilityTimer.current)
  }, [isLoading])

  return isVisible ? (
    <div className="sustainx-loader" role="status" aria-label="Loading">
      <div className="sustainx-loader__art">
        <img
          className="sustainx-loader__logo"
          src="/sustainx-infinity.jpg"
          alt=""
          aria-hidden="true"
        />
        <svg
          className="sustainx-loader__animation"
          viewBox="0 0 782 388"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="sustainx-loader-purple-image"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                type="matrix"
                values="0.194 0.652 0.066 0 0
                        0.177 0.590 0.068 0 0
                        0.213 0.715 0.072 0 0
                        0     0     0     1 0"
              />
            </filter>
            <filter
              id="sustainx-loader-soft-glow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="3" />
            </filter>
            <filter
              id="sustainx-loader-wide-glow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path
            className="sustainx-loader__travel sustainx-loader__travel--left sustainx-loader__travel--wide"
            d={LEFT_LOOP_PATH}
            pathLength="100"
          />
          <path
            className="sustainx-loader__travel sustainx-loader__travel--left sustainx-loader__travel--soft"
            d={LEFT_LOOP_PATH}
            pathLength="100"
          />
          <path
            className="sustainx-loader__travel sustainx-loader__travel--left sustainx-loader__travel--core"
            d={LEFT_LOOP_PATH}
            pathLength="100"
          />
          <path
            className="sustainx-loader__travel sustainx-loader__travel--right sustainx-loader__travel--wide"
            d={RIGHT_LOOP_PATH}
            pathLength="100"
          />
          <path
            className="sustainx-loader__travel sustainx-loader__travel--right sustainx-loader__travel--soft"
            d={RIGHT_LOOP_PATH}
            pathLength="100"
          />
          <path
            className="sustainx-loader__travel sustainx-loader__travel--right sustainx-loader__travel--core"
            d={RIGHT_LOOP_PATH}
            pathLength="100"
          />
        </svg>
      </div>
    </div>
  ) : null
}

export default SustainXLoader
