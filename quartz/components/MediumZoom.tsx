import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/mediumZoom.inline"

const MediumZoom: QuartzComponent = () => null
MediumZoom.afterDOMLoaded = script

export default (() => MediumZoom) satisfies QuartzComponentConstructor
