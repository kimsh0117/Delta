export const baseSizes = {
  desktop: 1440,
  tablet: 744,
  mobile: 320,
  desktopUp: 1330,
  noteUp: 1199.98,
  ipadBigUp: 991.98,
  ipadUp: 919.98,
  mobileLgUp: 743.98,
  mobileMdUp: 575.98,
  mobileSmUp: 479.98,
  mobileXsUp: 374.98,
  mobileXxs: 319.98,
}

export const baseDevice = {
  desktopUp: `(min-width: ${baseSizes.desktopUp}px)`,
  noteUp: `(min-width: ${baseSizes.noteUp}px)`,
  ipadBigUp: `(min-width: ${baseSizes.ipadBigUp}px)`,
  ipadUp: `(min-width: ${baseSizes.ipadUp}px)`,
  mobileLgUp: `(min-width: ${baseSizes.mobileLgUp}px)`,
  mobileMdUp: `(min-width: ${baseSizes.mobileMdUp}px)`,
  mobileSmUp: `(min-width: ${baseSizes.mobileSmUp}px)`,
  mobileXsUp: `(min-width: ${baseSizes.mobileXsUp}px)`,
  mobileXxs: `(min-width: ${baseSizes.mobileXxs}px)`,
}

export const sizes = {
  ...baseSizes,
}

export const devices = {
  ...baseDevice,
}
