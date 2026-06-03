import { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/mediumZoom.inline"

const MediumZoom: QuartzComponent = () => null
MediumZoom.afterDOMLoaded = script

export default (() => MediumZoom) satisfies QuartzComponentConstructor
