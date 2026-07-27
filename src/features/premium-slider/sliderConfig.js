import { sliderSlides } from './sliderAssets'

export { sliderSlides }

export const sliderTrackCopies = 7
export const sliderMiddleCopy = Math.floor(sliderTrackCopies / 2)
export const sliderTrack = Array.from({ length: sliderTrackCopies }, () => sliderSlides).flat()
export const sliderStep = 980
export const sliderProgressDuration = 5000
export const sliderSnapDuration = 560
export const sliderCycleWidth = sliderSlides.length * sliderStep
export const sliderMiddleStart = sliderSlides.length * sliderMiddleCopy

export const sliderPaginationStates = [
  {
    left: 27,
    width: 40,
    dots: [
      { x: 0, y: 0, size: 6 },
      { x: 10, y: 0, size: 6 },
      { x: 20, y: 0, size: 6 },
      { x: 30, y: 1, size: 4 },
      { x: 38, y: 2, size: 2 },
    ],
  },
  {
    left: 27,
    width: 40,
    dots: [
      { x: 0, y: 0, size: 6 },
      { x: 10, y: 0, size: 6 },
      { x: 20, y: 0, size: 6 },
      { x: 30, y: 1, size: 4 },
      { x: 38, y: 2, size: 2 },
    ],
  },
  {
    left: 26,
    width: 42,
    dots: [
      { x: 0, y: 1, size: 4 },
      { x: 8, y: 0, size: 6 },
      { x: 18, y: 0, size: 6 },
      { x: 28, y: 0, size: 6 },
      { x: 38, y: 1, size: 4 },
    ],
  },
  {
    left: 27,
    width: 40,
    dots: [
      { x: 0, y: 2, size: 2 },
      { x: 6, y: 1, size: 4 },
      { x: 14, y: 0, size: 6 },
      { x: 24, y: 0, size: 6 },
      { x: 34, y: 0, size: 6 },
    ],
  },
  {
    left: 27,
    width: 40,
    dots: [
      { x: 0, y: 2, size: 2 },
      { x: 6, y: 1, size: 4 },
      { x: 14, y: 0, size: 6 },
      { x: 24, y: 0, size: 6 },
      { x: 34, y: 0, size: 6 },
    ],
  },
]

export const sliderPaginationProgressStates = [
  {
    left: 20,
    width: 54,
    dots: [
      { x: 0, y: 0, width: 20, height: 6 },
      { x: 24, y: 0, width: 6, height: 6 },
      { x: 34, y: 0, width: 6, height: 6 },
      { x: 44, y: 1, width: 4, height: 4 },
      { x: 52, y: 2, width: 2, height: 2 },
    ],
  },
  {
    left: 20,
    width: 54,
    dots: [
      { x: 0, y: 0, width: 6, height: 6 },
      { x: 10, y: 0, width: 20, height: 6 },
      { x: 34, y: 0, width: 6, height: 6 },
      { x: 44, y: 1, width: 4, height: 4 },
      { x: 52, y: 2, width: 2, height: 2 },
    ],
  },
  {
    left: 19,
    width: 56,
    dots: [
      { x: 0, y: 1, width: 4, height: 4 },
      { x: 8, y: 0, width: 6, height: 6 },
      { x: 18, y: 0, width: 20, height: 6 },
      { x: 42, y: 0, width: 6, height: 6 },
      { x: 52, y: 1, width: 4, height: 4 },
    ],
  },
  {
    left: 20,
    width: 54,
    dots: [
      { x: 0, y: 2, width: 2, height: 2 },
      { x: 6, y: 1, width: 4, height: 4 },
      { x: 14, y: 0, width: 6, height: 6 },
      { x: 24, y: 0, width: 20, height: 6 },
      { x: 48, y: 0, width: 6, height: 6 },
    ],
  },
  {
    left: 20,
    width: 54,
    dots: [
      { x: 0, y: 2, width: 2, height: 2 },
      { x: 6, y: 1, width: 4, height: 4 },
      { x: 14, y: 0, width: 6, height: 6 },
      { x: 24, y: 0, width: 6, height: 6 },
      { x: 34, y: 0, width: 20, height: 6 },
    ],
  },
]
