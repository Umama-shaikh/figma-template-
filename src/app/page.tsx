import HeroSection from "@/components/hero"
import FeaturedPosts from "@/components/feature-post"
import CoupleDiv from "@/components/couplediv"
import GreenDiv from "@/components/greendiv"
import BestProducts from "@/components/best-products"
import EditorsPick from "@/components/editors"

export default function Home() {
  return (
    <>
    <HeroSection/>
    <EditorsPick/>
    <BestProducts/>
    <GreenDiv/>
    <CoupleDiv/>
    <FeaturedPosts/>
    
    </>
    
  )
}

